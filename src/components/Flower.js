import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Flower({ mouse, scale }) {
  const ref = useRef();
  const { scene } = useGLTF("/flower.glb");

  // Rotate flower slightly based on mouse/touch position
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = mouse.current.x * 0.5;
      ref.current.rotation.x = -mouse.current.y * 0.3;
    }
  });

  return <primitive ref={ref} object={scene} scale={scale} />;
}

export default function App() {
  const mouse = useRef({ x: 0, y: 0 });
  const [scale, setScale] = useState(0.5);
  const [cameraPos, setCameraPos] = useState([0, 1, 3]);

  // Adjust scale & camera for mobile vs desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(0.35);
        setCameraPos([0, 1, 4]);
      } else {
        setScale(0.5);
        setCameraPos([0, 1, 3]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      mouse.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;
    }
  };

  return (
    <div
      className="flower"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <Canvas camera={{ position: cameraPos, fov: 50 }} style={{width:'100vw', height:'100vh'}}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <Flower mouse={mouse} scale={scale} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}