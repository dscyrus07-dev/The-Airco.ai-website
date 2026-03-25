"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

export default function Drone() {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle floating is handled by <Float>, we just add some rotation
            groupRef.current.rotation.y += 0.005;
            // Tilt slightly based on mouse position (optional, keeping it simple for now)
        }
    });

    const handleClick = () => {
        const whatsappMessage = "Hi! I'm interested in AiRCo's drone solutions.";
        const whatsappUrl = `https://wa.me/917021320783?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[0, 0.5]}>
            <group
                ref={groupRef}
                onClick={handleClick}
                onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true); }}
                onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false); }}
                scale={hovered ? 1.1 : 1}
            >
                {/* Drone Body (Central Hub) */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 0.3, 0.6]} />
                    <meshStandardMaterial color={hovered ? "#4f46e5" : "#333"} metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Arms */}
                <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
                    <boxGeometry args={[2.5, 0.1, 0.2]} />
                    <meshStandardMaterial color="#444" metalness={0.8} />
                </mesh>
                <mesh position={[0, 0, 0]} rotation={[0, -Math.PI / 4, 0]}>
                    <boxGeometry args={[2.5, 0.1, 0.2]} />
                    <meshStandardMaterial color="#444" metalness={0.8} />
                </mesh>

                {/* Rotors */}
                {[
                    [1, 0, 1],
                    [-1, 0, 1],
                    [1, 0, -1],
                    [-1, 0, -1]
                ].map((pos, i) => (
                    <group key={i} position={[pos[0] * 0.9, 0.2, pos[2] * 0.9]}>
                        {/* Motor housing */}
                        <mesh position={[0, -0.1, 0]}>
                            <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
                            <meshStandardMaterial color="#222" />
                        </mesh>
                        {/* Propeller Blade */}
                        <Propeller speed={i % 2 === 0 ? 15 : -15} />
                    </group>
                ))}

                {/* Camera / Lens */}
                <mesh position={[0, -0.2, 0.3]} rotation={[0.2, 0, 0]}>
                    <sphereGeometry args={[0.15, 32, 32]} />
                    <meshStandardMaterial color="black" metalness={1} roughness={0} />
                </mesh>

                {/* Glow Effect */}
                <pointLight position={[0, -0.2, 0.4]} intensity={2} color="#00ff00" distance={2} />

                {/* Label */}
                <Html position={[0, 1, 0]} center distanceFactor={10} style={{ pointerEvents: 'none' }}>
                    <div className={`px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-green-500/50 text-white text-xs whitespace-nowrap transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                        Click to Connect
                    </div>
                </Html>
            </group>
        </Float>
    );
}

function Propeller({ speed }: { speed: number }) {
    const ref = useRef<THREE.Group>(null);
    useFrame(() => {
        if (ref.current) ref.current.rotation.y += speed * 0.02;
    });

    return (
        <group ref={ref}>
            <mesh>
                <boxGeometry args={[1.2, 0.02, 0.1]} />
                <meshStandardMaterial color="#666" transparent opacity={0.8} />
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[1.2, 0.02, 0.1]} />
                <meshStandardMaterial color="#666" transparent opacity={0.8} />
            </mesh>
        </group>
    );
}
