"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type FlowStep = { title: string; description: string };
export type FlowDecision = {
    label: string;
    yes: { title: string; description: string };
    no: { title: string; description: string };
};

/**
 * Type 1 (Process flow) + Type 2 (Workflow) diagram.
 * Renders a step-by-step flow with an animated connector and an optional
 * decision diamond branching into two outcomes.
 */
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
        <div className="relative mx-auto max-w-3xl">
            {/* Start node */}
            <Node>
                <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-6 py-2 text-sm font-semibold tracking-wider text-purple-300">
                    {startLabel}
                </span>
            </Node>
            <Connector />

            {steps.map((step, i) => (
                <div key={step.title}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="flex items-stretch gap-4"
                    >
                        <div className="flex flex-col items-center">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/10 text-sm font-bold text-purple-300">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </div>
                        <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-purple-500/30">
                            <h4 className="font-bold text-white">{step.title}</h4>
                            <p className="mt-1 text-sm leading-relaxed text-gray-400">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                    {i < steps.length - 1 && <Connector />}
                </div>
            ))}

            {decision && (
                <>
                    <Connector />
                    {/* Decision diamond */}
                    <Node>
                        <div className="relative flex items-center justify-center">
                            <div className="flex h-24 w-24 rotate-45 items-center justify-center rounded-xl border border-amber-400/50 bg-amber-500/10 shadow-lg shadow-amber-500/10">
                                <span className="-rotate-45 px-2 text-center text-[11px] font-bold leading-tight text-amber-300">
                                    {decision.label}
                                </span>
                            </div>
                        </div>
                    </Node>

                    {/* Branches */}
                    <div className="relative mx-auto max-w-2xl">
                        <svg
                            viewBox="0 0 400 48"
                            className="mx-auto h-10 w-full max-w-md"
                            fill="none"
                            aria-hidden
                        >
                            <path d="M200 0 V12 M200 12 C200 24, 80 20, 80 32 M200 12 C200 24, 320 20, 320 24" stroke="rgba(168,85,247,0.5)" strokeWidth="2" />
                            <path d="M80 24 L74 16 M80 24 L88 22" stroke="rgba(168,85,247,0.5)" strokeWidth="2" />
                            <path d="M320 24 L312 22 M320 24 L326 16" stroke="rgba(168,85,247,0.5)" strokeWidth="2" />
                        </svg>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <BranchCard tag="YES" tone="emerald" title={decision.yes.title} description={decision.yes.description} />
                            <BranchCard tag="NO" tone="slate" title={decision.no.title} description={decision.no.description} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

function Node({ children }: { children: React.ReactNode }) {
    return <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex justify-center">{children}</motion.div>;
}

function Connector() {
    return (
        <div className="mx-auto flex h-10 w-10 items-end justify-center">
            <div className="relative h-full w-px bg-gradient-to-b from-purple-500/50 to-purple-500/20">
                <motion.span
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]"
                />
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "rounded-2xl border p-5",
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
