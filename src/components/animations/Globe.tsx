import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { a, useSpring } from "@react-spring/three";
import * as THREE from "three";
import { useGlobe } from "@/contexts/GlobeContext";
import { SpringValue } from "@react-spring/three";

export default function Globe() {
  const { position, rotationSpeed, scale, updateGlobe } = useGlobe();

  useEffect(() => {
    if (rotationSpeed !== 0.001) {
      const timer = setTimeout(() => {
        updateGlobe(0.001, position, scale);
      }, 200);
      console.log(scale);
      return () => clearTimeout(timer);
    }
  }, [rotationSpeed, position, scale, updateGlobe]);

  const { smoothSpeed } = useSpring({
    smoothSpeed: rotationSpeed,
    config: { mass: 1, tension: 100, friction: 30 },
  });

  const [phase, setPhase] = useState<
    "big" | "shrinking" | "waiting" | "down" | "pages"
  >("big");

  useEffect(() => {
    if (phase === "big") setTimeout(() => setPhase("shrinking"), 100);
    if (phase === "shrinking") setTimeout(() => setPhase("waiting"), 500);
    if (phase === "waiting") setTimeout(() => setPhase("down"), 500);
    if (phase === "down")
      setTimeout(() => {
        updateGlobe(0.003, [0, -1.5, 0], scale);
        setPhase("pages");
      }, 1000);
  }, [phase]);

  const { animatedScale, animatedPosition } = useSpring({
    animatedScale: phase === "big" ? 8 : phase === "down" ? 0.7 : scale,
    animatedPosition:
      phase === "big" ? [0, 0, 0] : phase === "down" ? [0, -1.5, 0] : position,
    config: { mass: 1, tension: 260, friction: 40 },
  });

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} />

        {/* Atmospheric Glow - positioned behind the globe */}
        <AtmosphericGlow position={animatedPosition} scale={animatedScale} />

        <SpringEarth
          scale={animatedScale}
          position={animatedPosition}
          rotationSpeed={smoothSpeed}
        />
      </Canvas>
    </div>
  );
}

// Simple Atmospheric Glow Component
interface AtmosphericGlowProps {
  position: SpringValue<number[]> | [number, number, number];
  scale: SpringValue<number> | number;
}

function AtmosphericGlow({ position, scale }: AtmosphericGlowProps) {
  const glowRef = useRef<THREE.Mesh>(null);

  // Create simple atmospheric glow material
  const atmosphereMaterial = new THREE.ShaderMaterial({
    uniforms: {
      c: { value: 0.9 },
      p: { value: 1.0 },
      glowColor: { value: new THREE.Color(0x00aaff) },
      viewVector: { value: new THREE.Vector3() },
    },
    vertexShader: `
      uniform vec3 viewVector;
      uniform float c;
      uniform float p;
      varying float intensity;
      
      void main() {
        vec3 vNormal = normalize(normalMatrix * normal);
        vec3 vNormel = normalize(normalMatrix * viewVector);
        intensity = pow(c - dot(vNormal, vNormel), p);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.75);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      varying float intensity;
      
      void main() {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4(glow, intensity * 0.01);
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  useFrame(({ camera }) => {
    if (glowRef.current) {
      (glowRef.current.material as any).uniforms.viewVector.value =
        camera.position;
    }
  });

  // Handle both SpringValue and number types for scale
  const animatedGlowScale =
    typeof scale === "number" ? scale * 1.15 : scale.to((s) => s * 1.15);

  return (
    <a.group position={position as any}>
      <a.mesh ref={glowRef} scale={animatedGlowScale}>
        <sphereGeometry args={[2, 32, 32]} />
        <primitive object={atmosphereMaterial} />
      </a.mesh>
    </a.group>
  );
}

interface SpringEarthProps {
  scale: SpringValue<number> | [number, number, number];
  position: SpringValue<number[]> | [number, number, number];
  rotationSpeed: SpringValue<number>;
}

function SpringEarth({ scale, position, rotationSpeed }: SpringEarthProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [colorMap, bumpMap, specMap] = useLoader(THREE.TextureLoader, [
    `${basePath}/images/earth/earthmap.jpg`,
    `${basePath}/images/earth/earthbump.jpg`,
    `${basePath}/images/earth/earthspec.jpg`,
  ]);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += rotationSpeed.get();
  });

  return (
    <a.mesh ref={meshRef} scale={scale} position={position as any}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.05}
        specularMap={specMap}
        specular={new THREE.Color("black")}
      />
    </a.mesh>
  );
}
