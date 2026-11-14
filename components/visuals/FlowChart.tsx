"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export type FlowStep = { title: string; description: string };
export type FlowDecision = {
    label: string;
    yes: { title: string; description: string };
    no: { title: string; description: string };
};

export function FlowChart({
    steps,
    decision,
    startLabel = "Start",
}: {
    steps: FlowStep[];
    decision?: FlowDecision;
    startLabel?: string;
}) {
    return (
        <div className="relative mx-auto w-full">
            {/* Horizontal process pipeline */}
            <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch lg:gap-0">
                {/* Start badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-center lg:shrink-0"
                >
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/15 px-5 py-2 text-xs font-bold uppercase tracking-widest text-purple-300 shadow-lg shadow-purple-500/10">
                        {startLabel}
                    </span>
                </motion.div>

                <HorizontalConnector />
                <MobileVerticalConnector />

                {/* Steps row */}
                <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:items-stretch lg:gap-0">
                    {steps.map((step, i) => (
                        <div
                            key={step.title}
                            className="flex flex-col items-stretch lg:flex-1 lg:flex-row lg:items-stretch"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.45, delay: i * 0.07 }}
                                className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-purple-500/35 hover:bg-white/[0.05]"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/40 bg-purple-500/10 text-xs font-bold text-purple-300">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400/60" />
                                </div>
                                <h4 className="text-base font-bold text-white">{step.title}</h4>
                                <p className="mt-1.5 text-xs leading-relaxed text-gray-400 xl:text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                            {i < steps.length - 1 && <HorizontalConnector />}
                        </div>
                    ))}
                </div>
            </div>

            {/* Horizontal decision row */}
            {decision && (
                <div className="mt-2">
                    <VerticalBridge />

                    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_auto_auto_1fr] lg:gap-0">
                        {/* YES card (left wing on desktop, first after diamond on mobile) */}
                        <div className="order-2 lg:order-1">
                            <BranchCard
                                tag="YES"
                                tone="emerald"
                                title={decision.yes.title}
                                description={decision.yes.description}
                            />
                        </div>

                        {/* Left branch connector (Diamond -> YES) */}
                        <div className="order-2 hidden lg:flex">
                            <DecisionArm direction="left" label="YES" tone="emerald" />
                        </div>

                        {/* Center decision diamond */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="order-1 flex justify-center py-3 lg:order-3 lg:px-2"
                        >
                            <div className="flex h-24 w-24 rotate-45 items-center justify-center rounded-2xl border border-amber-400/50 bg-amber-500/10 shadow-lg shadow-amber-500/10">
                                <span className="-rotate-45 px-2 text-center text-[11px] font-bold leading-tight text-amber-300">
                                    {decision.label}
                                </span>
                            </div>
                        </motion.div>

                        {/* Right branch connector (Diamond -> NO) */}
                        <div className="order-4 hidden lg:flex">
                            <DecisionArm direction="right" label="NO" tone="slate" />
                        </div>

                        {/* NO card (right wing on desktop) */}
                        <div className="order-3 lg:order-5">
                            <BranchCard
                                tag="NO"
                                tone="slate"
                                title={decision.no.title}
                                description={decision.no.description}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function HorizontalConnector() {
    return (
        <div className="hidden w-7 shrink-0 items-center justify-center lg:flex">
            <div className="relative h-px w-full bg-gradient-to-r from-purple-500/40 via-purple-400/60 to-purple-500/40">
                <motion.span
                    animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]"
                />
            </div>
            <ChevronRight className="-ml-1.5 h-3.5 w-3.5 shrink-0 text-purple-400/70" />
        </div>
    );
}

function MobileVerticalConnector() {
    return (
        <div className="mx-auto flex h-6 w-6 items-center justify-center lg:hidden">
            <div className="h-full w-px bg-gradient-to-b from-purple-500/50 to-purple-500/20" />
        </div>
    );
}

function VerticalBridge() {
    return (
        <div className="mx-auto flex h-10 w-10 items-center justify-center">
            <div className="relative h-full w-px bg-gradient-to-b from-purple-500/50 to-amber-400/50">
                <motion.span
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.9)]"
                />
            </div>
        </div>
    );
}

function DecisionArm({
    direction,
    label,
    tone,
}: {
    direction: "left" | "right";
    label: string;
    tone: "emerald" | "slate";
}) {
    const isEmerald = tone === "emerald";
    return (
        <div className="flex w-20 shrink-0 flex-col items-center justify-center gap-1">
            <span
                className={cn(
                    "text-[10px] font-bold tracking-widest",
                    isEmerald ? "text-emerald-400" : "text-gray-400"
                )}
            >
                {label}
            </span>
            <div className="flex w-full items-center">
                {direction === "left" && (
                    <ChevronLeft
                        className={cn(
                            "-mr-1.5 h-3.5 w-3.5 shrink-0",
                            isEmerald ? "text-emerald-400/80" : "text-gray-400/70"
                        )}
                    />
                )}
                <div
                    className={cn(
                        "relative h-px w-full",
                        isEmerald
                            ? "bg-gradient-to-r from-emerald-400/60 to-amber-400/50"
                            : "bg-gradient-to-r from-amber-400/50 to-white/25"
                    )}
                >
                    <motion.span
                        animate={{
                            left: direction === "left" ? ["100%", "0%"] : ["0%", "100%"],
                            opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                        className={cn(
                            "absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full",
                            isEmerald
                                ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                                : "bg-gray-300 shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                        )}
                    />
                </div>
                {direction === "right" && (
                    <ChevronRight
                        className={cn(
                            "-ml-1.5 h-3.5 w-3.5 shrink-0",
                            isEmerald ? "text-emerald-400/80" : "text-gray-400/70"
                        )}
                    />
                )}
            </div>
        </div>
    );
}

function BranchCard({
    tag,
    title,
    description,
    tone,
}: {
    tag: string;
    title: string;
    description: string;
    tone: "emerald" | "slate";
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={cn(
                "h-full rounded-2xl border p-5",
                tone === "emerald"
                    ? "border-emerald-500/30 bg-emerald-500/[0.06]"
                    : "border-white/10 bg-white/[0.03]"
            )}
        >
            <span
                className={cn(
                    "rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-widest",
                    tone === "emerald"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : "bg-white/10 text-gray-400"
                )}
            >
                {tag}
            </span>
            <h4 className="mt-2 font-bold text-white">{title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-gray-400">{description}</p>
        </motion.div>
    );
}
