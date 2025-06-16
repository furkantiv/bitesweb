import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { a, SpringValue, useSpring } from "@react-spring/three";
import * as THREE from "three";
import { useGlobe } from "@/contexts/GlobeContext";
import { Line } from "@react-three/drei";
import { motion, useMotionValue } from "framer-motion";

export default function Globe() {
  const { position, rotationSpeed, updateGlobe } = useGlobe();

  useEffect(() => {
    if (rotationSpeed !== 0.003) {
      const timer = setTimeout(() => {
        updateGlobe(0.003, position);
      }, 200); // Duration before reverting back
      return () => clearTimeout(timer);
    }
  }, [rotationSpeed]);

  const { smoothSpeed } = useSpring({
    smoothSpeed: rotationSpeed,
    config: { mass: 1, tension: 100, friction: 30 }, // Adjust for smoother or quicker transitions
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
        updateGlobe(0.003, [0, -1.5, 0]);
        setPhase("pages");
      }, 1000);
  }, [phase]);

  const { scale, animatedPosition } = useSpring({
    scale: phase === "big" ? 8 : 0.5,
    animatedPosition:
      phase === "big" ? [0, 0, 0] : phase === "down" ? [0, -1.5, 0] : position,
    config: { mass: 1, tension: 260, friction: 40 },
  });

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <SpringEarth
          scale={scale}
          position={animatedPosition}
          rotationSpeed={smoothSpeed}
        />
        {/* <SpringLine scale={2} position={position} rotationSpeed={smoothSpeed} /> */}
      </Canvas>
    </div>
  );
}

export function SpringLine({ scale, position }: any) {
  // Animate position when it changes
  const { animatedPos } = useSpring({
    animatedPos: position,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <a.group position={animatedPos as any}>
      <Line
        points={Array.from({ length: 128 }, (_, i) => {
          const angle = (i / 64) * Math.PI * 2;
          return [
            Math.cos(angle),
            Math.sin(angle),
            scale, // z stays constant, you can animate this too if needed
          ];
        })}
        color="white"
        lineWidth={0.2}
      />
    </a.group>
  );
}

function SpringEarth({
  scale,
  position,
  rotationSpeed,
}: {
  scale: any;
  position: any;
  rotationSpeed: any;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [colorMap, bumpMap, specMap] = useLoader(THREE.TextureLoader, [
    "/images/earth/earthmap.jpg",
    "/images/earth/earthbump.jpg",
    "/images/earth/earthspec.jpg",
  ]);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += rotationSpeed.get();
  });

  return (
    <a.mesh ref={meshRef} scale={scale} position={position}>
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
