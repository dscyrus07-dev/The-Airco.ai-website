"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Preload } from "@react-three/drei";

interface SceneProps {
    children: React.ReactNode;
    className?: string;
    cameraPosition?: [number, number, number];
    enableZoom?: boolean;
}

export default function ThreeViewer({
    children,
    className,
    cameraPosition = [0, 0, 5],
    enableZoom = false,
}: SceneProps) {
    return (
        <div className={className}>
            <Canvas
                camera={{ position: cameraPosition, fov: 75 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    {children}
                    <OrbitControls enableZoom={enableZoom} />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
