"use client";

import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState, useMemo } from "react";
import { a, useSpring } from "@react-spring/three";
import * as THREE from "three";
import { useGlobe } from "@/contexts/GlobeContext";
import { SpringValue } from "@react-spring/three";

export default function Globe() {
  const { position, rotationSpeed, scale, updateGlobe } = useGlobe();

  useEffect(() => {
    // Sadece 0.0004’den farklıysa, timer başlat
    if (rotationSpeed !== 0.0004) {
      const timer = setTimeout(() => {
        updateGlobe(0.0004, position, scale);
      }, 200);
      return () => clearTimeout(timer);
    }
    // Eğer rotationSpeed zaten 0.0004 ise, hiçbir şey yapma
  }, [rotationSpeed, position, scale, updateGlobe]);

  const { smoothSpeed } = useSpring({
    smoothSpeed: rotationSpeed,
    config: { mass: 1, tension: 100, friction: 30 },
  });

  const { animatedScale, animatedPosition } = useSpring({
    animatedScale: scale,
    animatedPosition: position,
    config: { mass: 1, tension: 180, friction: 40 },
  });

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
        <ambientLight intensity={10} />
        <directionalLight position={[-7, 7, 10]} intensity={0.1} />

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

interface AtmosphericGlowProps {
  position: SpringValue<[number, number, number]> | [number, number, number];
  scale: SpringValue<number> | number;
  color?: THREE.ColorRepresentation;
  glowStrength?: number; // Optional prop for controlling glow intensity
  radius?: number;
}

const AtmosphericGlow: React.FC<AtmosphericGlowProps> = ({
  position,
  scale,
  color = "rgb(0, 160, 235)",
  glowStrength = 0.3,
  radius = 2.15,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  // Memoize the shader material
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          c: { value: 0.9 },
          p: { value: 2.5 },
          glowColor: { value: new THREE.Color(color) },
          viewVector: { value: new THREE.Vector3() },
          glowStrength: { value: glowStrength }, // add this!
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
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
        fragmentShader: `
        uniform vec3 glowColor;
        uniform float glowStrength;
        varying float intensity;
        void main() {
          float alpha = smoothstep(0.0, 1.0, intensity) * glowStrength;
          vec3 glow = glowColor * alpha;
          gl_FragColor = vec4(glow, alpha);
        }
      `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
      }),
    [color, glowStrength]
  );

  useFrame(() => {
    if (meshRef.current) {
      material.uniforms.viewVector.value = new THREE.Vector3().subVectors(
        camera.position,
        meshRef.current.position
      );
    }
  });

  return (
    <a.mesh
      ref={meshRef}
      position={position as [number, number, number]}
      scale={scale}
    >
      <sphereGeometry args={[radius, 64, 64]} />
      <primitive object={material} attach="material" />
    </a.mesh>
  );
};

interface SpringEarthProps {
  scale: SpringValue<number> | [number, number, number];
  position: SpringValue<[number, number, number]> | [number, number, number];
  rotationSpeed: SpringValue<number>;
}

function SpringEarth({ scale, position, rotationSpeed }: SpringEarthProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [colorMap, emissiveMap, displacementMap, metalnessMap, roughnessMap] =
    useLoader(THREE.TextureLoader, [
      `${basePath}/models/earth/BasecolorNight3_4k.png`,
      `${basePath}/models/earth/Emissive_Orange4k.png`,
      `${basePath}/models/earth/Height_Map.jpeg`,
      `${basePath}/models/earth/Metalness_4k.png`,
      `${basePath}/models/earth/Reflectance.png`,
    ]);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += rotationSpeed.get();
  });

  return (
    <a.mesh ref={meshRef} scale={scale} position={position as any}>
      <sphereGeometry args={[2, 128, 128]} />
      <meshStandardMaterial
        map={colorMap}
        emissiveMap={emissiveMap}
        emissive={new THREE.Color("#ffdebd")}
        emissiveIntensity={0.5}
        displacementMap={displacementMap}
        displacementScale={0.025}
        metalnessMap={metalnessMap}
        metalness={0.5}
        roughnessMap={roughnessMap}
        roughness={0.8}
      />
    </a.mesh>
  );
}
