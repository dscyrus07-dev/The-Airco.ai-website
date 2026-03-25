"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <MeshComponent />
            </Float>
        </group>
    );
}

function MeshComponent() {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.2;
        mesh.current.rotation.y += delta * 0.3;
    });

    return (
        <Sphere args={[1.5, 64, 64]} ref={mesh} scale={[1.8, 1.8, 1.8]}>
            <MeshDistortMaterial
                color="#8b5cf6"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
                emissive="#5b21b6"
                emissiveIntensity={0.5}
            />
        </Sphere>
    );
}
