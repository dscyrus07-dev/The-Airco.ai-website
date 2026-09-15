"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useTransform,
    type MotionValue,
} from "framer-motion";
import {
    Video,
    AudioLines,
    Landmark,
    FileSearch,
    MessagesSquare,
    Bot,
    Server,
    type LucideIcon,
} from "lucide-react";

type Layer = { icon: LucideIcon; title: string; description: string };

const layers: Layer[] = [
    {
        icon: Video,
        title: "Video Intelligence",
        description: "Real-time detection from your existing camera infrastructure.",
    },
    {
        icon: AudioLines,
        title: "Audio Intelligence",
        description: "Speech and sound transcribed and analysed automatically.",
    },
    {
        icon: Landmark,
        title: "Bank Statement Analysis",
        description: "Statements read, categorised and structured for credit decisions.",
    },
    {
        icon: FileSearch,
        title: "Document Intelligence",
        description: "Documents structured automatically — decision-ready output.",
    },
    {
        icon: MessagesSquare,
        title: "Conversational Intelligence",
        description: "Always-on engagement across your digital channels.",
    },
    {
        icon: Bot,
        title: "AI Agents",
        description: "Autonomous agents that qualify and engage prospects.",
    },
    {
        icon: Server,
        title: "Data Centre Services",
        description: "Planning, maintenance and feasibility for critical infrastructure.",
    },
];

const DEG_PER_CARD = 360 / layers.length;
const SPEED_DEG_PER_MS = 0.008; // ~41s per clockwise revolution

/**
 * Clockwise-orbiting carousel for the intelligence layers.
 * Cards ride a circular path, stay upright, and fade in/out
 * as they travel from back to front.
 */
export default function IntelligenceOrbit() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(560);
    const [paused, setPaused] = useState(false);
    const rotate = useMotionValue(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const update = () => setSize(el.clientWidth);
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    useAnimationFrame((_, delta) => {
        if (paused) return;
        rotate.set((rotate.get() + delta * SPEED_DEG_PER_MS) % 360);
    });

    const radius = Math.max(140, size / 2 - 108);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative mx-auto aspect-square w-full max-w-[840px] select-none"
        >
            {/* Orbit rings */}
            <div className="absolute inset-0 rounded-full border border-white/[0.07]" />
            <div className="absolute inset-[16%] rounded-full border border-dashed border-white/[0.06]" />
            <div className="pointer-events-none absolute inset-[22%] rounded-full bg-purple-600/10 blur-3xl" />

            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 z-[60] flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-purple-500/30 bg-gray-950/90 text-center shadow-[0_0_60px_rgba(139,92,246,0.25)] backdrop-blur sm:h-40 sm:w-40">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 rounded-full border border-dashed border-purple-500/30"
                />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-base font-bold text-transparent sm:text-lg">
                    AiRCO
                </span>
                <span className="mt-1 px-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400 sm:text-xs">
                    Intelligence
                </span>
            </div>

            {/* Orbiting cards */}
            {layers.map((layer, i) => (
                <OrbitCard
                    key={layer.title}
                    index={i}
                    radius={radius}
                    rotate={rotate}
                    layer={layer}
                />
            ))}
        </div>
    );
}

function OrbitCard({
    index,
    radius,
    rotate,
    layer,
}: {
    index: number;
    radius: number;
    rotate: MotionValue<number>;
    layer: Layer;
}) {
    const angle = useTransform(
        rotate,
        (r) => ((index * DEG_PER_CARD + r - 90) * Math.PI) / 180
    );
    const x = useTransform(angle, (a) => Math.cos(a) * radius);
    const y = useTransform(angle, (a) => Math.sin(a) * radius);
    // sin > 0 => front (bottom of the ring) => fully visible
    const depth = useTransform(angle, (a) => (Math.sin(a) + 1) / 2);
    const opacity = useTransform(depth, [0, 1], [0.15, 1]);
    const scale = useTransform(depth, [0, 1], [0.8, 1.05]);
    const zIndex = useTransform(depth, (d) => Math.round(d * 100));
    const Icon = layer.icon;

    return (
        <motion.div
            style={{ x, y, opacity, scale, zIndex, left: "50%", top: "50%" }}
            className="absolute w-44 -translate-x-1/2 -translate-y-1/2 sm:w-52"
        >
            <div className="rounded-2xl border border-white/10 bg-gray-950/85 p-4 text-center shadow-xl shadow-black/40 backdrop-blur-sm transition-colors hover:border-purple-500/40">
                <div className="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10">
                    <Icon className="h-4 w-4 text-purple-300" />
                </div>
                <h3 className="text-xs font-bold text-white sm:text-sm">{layer.title}</h3>
                <p className="mt-1 hidden text-[11px] leading-snug text-gray-400 sm:block">
                    {layer.description}
                </p>
            </div>
        </motion.div>
    );
}
