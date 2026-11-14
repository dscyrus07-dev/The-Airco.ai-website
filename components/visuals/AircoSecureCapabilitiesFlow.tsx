"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Radio, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type LineSegment = {
    id: string;
    d: string;
    fromIndex: number;
    toIndex: number;
};

// Maps each Airco Secure capability index -> connected use-case indices
const CAPABILITY_TO_USECASES: Record<number, number[]> = {
    0: [0],
    1: [1],
    2: [1, 2],
    3: [0],
    4: [2],
    5: [3],
    6: [0, 2],
    7: [2, 3],
};

function makeCurve(x1: number, y1: number, x2: number, y2: number) {
    const dx = Math.max(Math.abs(x2 - x1) * 0.55, 36);
    return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

export function AircoSecureCapabilitiesFlow({
    capabilities,
    useCases,
}: {
    capabilities: string[];
    useCases: string[];
}) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const camNodeRef = useRef<HTMLDivElement | null>(null);
    const capRefs = useRef<(HTMLLIElement | null)[]>([]);
    const useRefs = useRef<(HTMLLIElement | null)[]>([]);

    const [camLines, setCamLines] = useState<LineSegment[]>([]);
    const [capLines, setCapLines] = useState<LineSegment[]>([]);
    const [hoveredCap, setHoveredCap] = useState<number | null>(null);
    const [hoveredUse, setHoveredUse] = useState<number | null>(null);

    const getTargetsForCap = useCallback(
        (capIdx: number) => {
            const mapped = CAPABILITY_TO_USECASES[capIdx];
            if (mapped) {
                return mapped.filter((u) => u < useCases.length);
            }
            return useCases.length > 0 ? [capIdx % useCases.length] : [];
        },
        [useCases.length]
    );

    const measure = useCallback(() => {
        const container = containerRef.current;
        const cam = camNodeRef.current;
        if (!container || !cam) return;

        const cRect = container.getBoundingClientRect();
        if (cRect.width === 0) return;

        const camRect = cam.getBoundingClientRect();
        const camX = camRect.right - cRect.left;
        const camY = camRect.top + camRect.height / 2 - cRect.top;

        const nextCamLines: LineSegment[] = [];
        const nextCapLines: LineSegment[] = [];

        capabilities.forEach((_, i) => {
            const capEl = capRefs.current[i];
            if (!capEl) return;
            const capRect = capEl.getBoundingClientRect();
            const capLeftX = capRect.left - cRect.left;
            const capRightX = capRect.right - cRect.left;
            const capCenterY = capRect.top + capRect.height / 2 - cRect.top;

            nextCamLines.push({
                id: `cam-cap-${i}`,
                d: makeCurve(camX, camY, capLeftX - 4, capCenterY),
                fromIndex: 0,
                toIndex: i,
            });

            const targets = getTargetsForCap(i);
            targets.forEach((uIdx) => {
                const useEl = useRefs.current[uIdx];
                if (!useEl) return;
                const useRect = useEl.getBoundingClientRect();
                const useLeftX = useRect.left - cRect.left;
                const useCenterY = useRect.top + useRect.height / 2 - cRect.top;

                nextCapLines.push({
                    id: `cap-${i}-use-${uIdx}`,
                    d: makeCurve(capRightX, capCenterY, useLeftX - 4, useCenterY),
                    fromIndex: i,
                    toIndex: uIdx,
                });
            });
        });

        setCamLines(nextCamLines);
        setCapLines(nextCapLines);
    }, [capabilities, getTargetsForCap]);

    useEffect(() => {
        const raf = requestAnimationFrame(measure);
        const ro = new ResizeObserver(() => measure());
        if (containerRef.current) {
            ro.observe(containerRef.current);
        }
        window.addEventListener("resize", measure);
        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, [measure]);

    const isCapHighlighted = (capIdx: number) => {
        if (hoveredCap !== null) return hoveredCap === capIdx;
        if (hoveredUse !== null) return getTargetsForCap(capIdx).includes(hoveredUse);
        return false;
    };

    const isUseHighlighted = (useIdx: number) => {
        if (hoveredUse !== null) return hoveredUse === useIdx;
        if (hoveredCap !== null) return getTargetsForCap(hoveredCap).includes(useIdx);
        return false;
    };

    const hasActiveFilter = hoveredCap !== null || hoveredUse !== null;

    return (
        <section className="py-24">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                {/* Section intro */}
                <div className="mb-14 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                        Camera to Intelligence
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
                        One camera feed. Every responsibility covered.
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-gray-400">
                        Your existing CCTV streams directly into Airco Secure&apos;s AI engine — powering
                        live detection capabilities and real-world security outcomes automatically.
                    </p>
                </div>

                {/* 3-stage connected diagram */}
                <div ref={containerRef} className="relative">
                    {/* Desktop SVG connector layer */}
                    <svg
                        className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
                        aria-hidden
                    >
                        <defs>
                            <marker
                                id="arrow-purple"
                                viewBox="0 0 10 10"
                                refX="7"
                                refY="5"
                                markerWidth="5"
                                markerHeight="5"
                                orient="auto-start-reverse"
                            >
                                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="rgba(168,85,247,0.75)" />
                            </marker>
                            <marker
                                id="arrow-blue"
                                viewBox="0 0 10 10"
                                refX="7"
                                refY="5"
                                markerWidth="5"
                                markerHeight="5"
                                orient="auto-start-reverse"
                            >
                                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="rgba(96,165,250,0.8)" />
                            </marker>
                        </defs>

                        {/* Camera -> Capabilities curves */}
                        {camLines.map((seg, idx) => {
                            const highlighted = isCapHighlighted(seg.toIndex);
                            const dimmed = hasActiveFilter && !highlighted;
                            return (
                                <g key={seg.id}>
                                    <path
                                        d={seg.d}
                                        fill="none"
                                        stroke={
                                            highlighted
                                                ? "rgba(192,132,252,0.85)"
                                                : dimmed
                                                ? "rgba(168,85,247,0.1)"
                                                : "rgba(168,85,247,0.32)"
                                        }
                                        strokeWidth={highlighted ? 2.2 : 1.4}
                                        markerEnd={dimmed ? undefined : "url(#arrow-purple)"}
                                        className="transition-all duration-300"
                                    />
                                    {!dimmed && (
                                        <motion.path
                                            d={seg.d}
                                            fill="none"
                                            stroke="#c084fc"
                                            strokeWidth={highlighted ? 2.6 : 2}
                                            strokeLinecap="round"
                                            strokeDasharray="16 180"
                                            animate={{ strokeDashoffset: [196, 0] }}
                                            transition={{
                                                duration: 2.4,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: (idx * 0.22) % 1.8,
                                            }}
                                        />
                                    )}
                                </g>
                            );
                        })}

                        {/* Capabilities -> Use Cases curves */}
                        {capLines.map((seg, idx) => {
                            const highlighted =
                                (hoveredCap !== null && hoveredCap === seg.fromIndex) ||
                                (hoveredUse !== null && hoveredUse === seg.toIndex);
                            const dimmed = hasActiveFilter && !highlighted;
                            return (
                                <g key={seg.id}>
                                    <path
                                        d={seg.d}
                                        fill="none"
                                        stroke={
                                            highlighted
                                                ? "rgba(96,165,250,0.9)"
                                                : dimmed
                                                ? "rgba(59,130,246,0.08)"
                                                : "rgba(59,130,246,0.3)"
                                        }
                                        strokeWidth={highlighted ? 2.2 : 1.4}
                                        markerEnd={dimmed ? undefined : "url(#arrow-blue)"}
                                        className="transition-all duration-300"
                                    />
                                    {!dimmed && (
                                        <motion.path
                                            d={seg.d}
                                            fill="none"
                                            stroke="#60a5fa"
                                            strokeWidth={highlighted ? 2.6 : 2}
                                            strokeLinecap="round"
                                            strokeDasharray="16 190"
                                            animate={{ strokeDashoffset: [206, 0] }}
                                            transition={{
                                                duration: 2.6,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: 0.4 + ((idx * 0.25) % 2),
                                            }}
                                        />
                                    )}
                                </g>
                            );
                        })}
                    </svg>

                    <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[260px_1fr_1fr] lg:gap-14 xl:grid-cols-[290px_1fr_1fr] xl:gap-16">
                        {/* Column 1 — Camera source */}
                        <div className="flex flex-col items-center">
                            <div className="mb-4 text-center lg:mb-5">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                                    <Radio className="h-3 w-3 animate-pulse" />
                                    Live Feed Input
                                </span>
                            </div>

                            <div
                                ref={camNodeRef}
                                className="group relative flex w-full max-w-[270px] flex-col items-center rounded-3xl border border-purple-500/35 bg-gradient-to-b from-purple-500/[0.12] via-gray-950/90 to-blue-500/[0.08] p-6 shadow-2xl shadow-purple-500/15"
                            >
                                {/* Ambient glow behind camera */}
                                <div className="pointer-events-none absolute inset-6 rounded-full bg-purple-500/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative aspect-[10/7] w-full">
                                    <Image
                                        src="/images/airco-secure/cctv-camera.webp"
                                        alt="Existing dual CCTV surveillance camera"
                                        fill
                                        className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.75)] transition-transform duration-500 group-hover:scale-105"
                                        sizes="270px"
                                    />
                                </div>

                                <div className="relative mt-4 text-center">
                                    <h3 className="text-base font-bold text-white">Your Existing CCTV</h3>
                                    <p className="mt-1 text-xs leading-relaxed text-gray-400">
                                        Plug into any IP / RTSP camera network — zero replacement needed.
                                    </p>
                                </div>

                                {/* Right output port dot on desktop */}
                                <span className="absolute -right-1.5 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-purple-300 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)] lg:block" />
                            </div>

                            <div className="mt-4 flex justify-center lg:hidden">
                                <ArrowDown className="h-5 w-5 text-purple-400" />
                            </div>
                        </div>

                        {/* Column 2 — Capabilities / Responsibilities */}
                        <div>
                            <div className="mb-4 flex items-center gap-2.5">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-300">
                                    <Sparkles className="h-4 w-4" />
                                </span>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                                        AI Responsibilities
                                    </p>
                                    <h3 className="text-xl font-bold text-white">Capabilities</h3>
                                </div>
                            </div>

                            <ul className="space-y-2.5">
                                {capabilities.map((capability, i) => {
                                    const active = isCapHighlighted(i);
                                    const dimmed = hasActiveFilter && !active;
                                    return (
                                        <li
                                            key={capability}
                                            ref={(el) => {
                                                capRefs.current[i] = el;
                                            }}
                                            onMouseEnter={() => setHoveredCap(i)}
                                            onMouseLeave={() => setHoveredCap(null)}
                                            className={cn(
                                                "relative flex cursor-default items-center gap-3.5 rounded-xl border px-4 py-3 transition-all duration-200",
                                                active
                                                    ? "border-purple-400/60 bg-purple-500/[0.14] shadow-lg shadow-purple-500/15"
                                                    : dimmed
                                                    ? "border-white/5 bg-white/[0.015] opacity-45"
                                                    : "border-white/10 bg-gray-950/85 hover:border-purple-500/40"
                                            )}
                                        >
                                            {/* Left input port */}
                                            <span
                                                className={cn(
                                                    "absolute -left-1.5 top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full border lg:block",
                                                    active
                                                        ? "border-purple-200 bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]"
                                                        : "border-purple-500/50 bg-gray-900"
                                                )}
                                            />

                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-purple-500/15 text-[11px] font-bold text-purple-300">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-sm font-medium text-gray-200">
                                                {capability}
                                            </span>

                                            {/* Right output port */}
                                            <span
                                                className={cn(
                                                    "absolute -right-1.5 top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full border lg:block",
                                                    active
                                                        ? "border-blue-200 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]"
                                                        : "border-blue-500/50 bg-gray-900"
                                                )}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="mt-4 flex justify-center lg:hidden">
                                <ArrowDown className="h-5 w-5 text-blue-400" />
                            </div>
                        </div>

                        {/* Column 3 — Use cases */}
                        <div>
                            <div className="mb-4 flex items-center gap-2.5">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-300">
                                    <ShieldCheck className="h-4 w-4" />
                                </span>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                                        On-Ground Impact
                                    </p>
                                    <h3 className="text-xl font-bold text-white">Use cases</h3>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {useCases.map((useCase, i) => {
                                    const active = isUseHighlighted(i);
                                    const dimmed = hasActiveFilter && !active;
                                    return (
                                        <li
                                            key={useCase}
                                            ref={(el) => {
                                                useRefs.current[i] = el;
                                            }}
                                            onMouseEnter={() => setHoveredUse(i)}
                                            onMouseLeave={() => setHoveredUse(null)}
                                            className={cn(
                                                "relative flex cursor-default items-start gap-3.5 rounded-2xl border p-5 transition-all duration-200",
                                                active
                                                    ? "border-blue-400/60 bg-blue-500/[0.13] shadow-lg shadow-blue-500/15"
                                                    : dimmed
                                                    ? "border-white/5 bg-white/[0.015] opacity-45"
                                                    : "border-white/10 bg-gradient-to-br from-blue-500/[0.06] to-purple-500/[0.03] hover:border-blue-500/40"
                                            )}
                                        >
                                            {/* Left input port */}
                                            <span
                                                className={cn(
                                                    "absolute -left-1.5 top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full border lg:block",
                                                    active
                                                        ? "border-blue-200 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]"
                                                        : "border-blue-500/50 bg-gray-900"
                                                )}
                                            />

                                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-xs font-bold text-blue-300">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-sm font-medium leading-relaxed text-gray-200">
                                                {useCase}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
