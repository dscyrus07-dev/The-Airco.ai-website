"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ============================================================
 * Type 3 — Data Flow Diagram (DFD)
 * Sources -> AiRCO intelligence layer -> decision-ready outputs
 * ============================================================ */

const SOURCES = ["Video feeds", "Calls & audio", "Documents", "Text & email", "Conversations", "System data"];
const ENGINE = ["Computer Vision", "Speech & NLP", "Document Extraction", "Correlation & Context"];
const OUTPUTS = ["Real-time alerts", "Structured profiles", "Qualified leads", "Compliance checks", "Health monitoring"];

export function DataFlowDiagram() {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
            <DiagramColumn title="Data Sources">
                {SOURCES.map((s, i) => (
                    <motion.div
                        key={s}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-center text-xs font-medium text-gray-300"
                    >
                        {s}
                    </motion.div>
                ))}
            </DiagramColumn>

            <FlowArrows />

            <div className="flex flex-col justify-center gap-3 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/[0.1] to-blue-500/[0.05] p-5">
                <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-purple-400">
                    AiRCO Intelligence Layer
                </p>
                {ENGINE.map((e, i) => (
                    <motion.div
                        key={e}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                        className="rounded-lg border border-purple-500/25 bg-black/40 px-4 py-2.5 text-center text-xs font-semibold text-purple-200"
                    >
                        {e}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                    className="rounded-full bg-purple-500/15 px-4 py-1 text-center text-[10px] font-bold tracking-widest text-purple-300"
                >
                    ONE CONTEXT
                </motion.div>
            </div>

            <FlowArrows />

            <DiagramColumn title="Decision-Ready Output">
                {OUTPUTS.map((s, i) => (
                    <motion.div
                        key={s}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="rounded-lg border border-blue-500/25 bg-blue-500/[0.06] px-4 py-2.5 text-center text-xs font-medium text-blue-200"
                    >
                        {s}
                    </motion.div>
                ))}
            </DiagramColumn>
        </div>
    );
}

/* ============================================================
 * Type 4 — Swimlane diagram (AI lane vs human lane)
 * ============================================================ */

export function SwimlaneDiagram({
    aiLane = ["Identify prospects", "Score intent & fit", "Personalised outreach", "Nurture early funnel"],
    humanLane = ["Qualified handoff", "Evaluate & decide", "Negotiate & close"],
    aiLabel = "AiRCO AI Agent",
    humanLabel = "Your Team",
}: {
    aiLane?: string[];
    humanLane?: string[];
    aiLabel?: string;
    humanLabel?: string;
}) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="min-w-[620px] space-y-3">
                <Lane label={aiLabel} tone="purple">
                    {aiLane.map((step, i) => (
                        <LaneNode key={step} label={step} arrow={true} tone="purple" last={i === aiLane.length - 1} />
                    ))}
                </Lane>
                <div className="flex items-center gap-3 pl-32">
                    <span className="h-px flex-1 bg-gradient-to-r from-purple-500/60 to-blue-500/60" />
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[10px] font-bold tracking-widest text-blue-300">
                        QUALIFIED HANDOFF ↓
                    </span>
                    <span className="h-px flex-1 bg-white/5" />
                </div>
                <Lane label={humanLabel} tone="blue">
                    {humanLane.map((step, i) => (
                        <LaneNode key={step} label={step} arrow={i < humanLane.length - 1} tone="blue" last={i === humanLane.length - 1} />
                    ))}
                </Lane>
            </div>
        </div>
    );
}

/* ============================================================
 * Type 5 — Decision tree diagram
 * ============================================================ */

export function DecisionTree() {
    return (
        <div className="overflow-x-auto pb-2">
            <div className="mx-auto flex min-w-[680px] flex-col items-center">
                <TreeNode tone="purple" title="New lead detected" desc="Continuously scanned from your data sources" />

                <svg width="360" height="36" viewBox="0 0 360 36" fill="none" className="mx-auto">
                    <path d="M180 0 V10 M180 10 C180 22, 90 18, 90 32 M180 10 C180 22, 270 22, 270 32" stroke="rgba(168,85,247,0.45)" strokeWidth="2" />
                </svg>

                <div className="grid w-full grid-cols-2 gap-6">
                    <div className="flex flex-col items-center">
                        <NodeBadge tone="emerald">HIGH INTENT</NodeBadge>
                        <TreeNode tone="emerald" title="Personalised outreach" desc="Automated, contextual first contact" />
                        <TreeStem />
                        <TreeNode tone="purple" title="Reply received?" />
                        <svg width="280" height="30" viewBox="0 0 280 30" fill="none">
                            <path d="M140 0 V8 M140 8 C140 18, 70 16, 70 26 M140 8 C140 18, 210 16, 210 26" stroke="rgba(168,85,247,0.45)" strokeWidth="2" />
                        </svg>
                        <div className="grid w-full grid-cols-2 gap-3">
                            <div className="flex flex-col items-center gap-2">
                                <NodeBadge tone="emerald">YES</NodeBadge>
                                <TreeNode tone="emerald" title="Hand off to sales" desc="Qualified opportunity + full context" />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <NodeBadge tone="slate">NO</NodeBadge>
                                <TreeNode tone="slate" title="Nurture sequence" desc="Automated follow-ups continue" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <NodeBadge tone="slate">LOW INTENT</NodeBadge>
                        <TreeNode tone="slate" title="Enrich & revisit" desc="Kept in nurture pool, re-scored later" />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- primitives ---------- */

function DiagramColumn({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">{title}</p>
            <div className="space-y-2.5">{children}</div>
        </div>
    );
}

function FlowArrows() {
    return (
        <div className="hidden items-center lg:flex">
            <svg width="42" height="24" viewBox="0 0 44 24" fill="none">
                <motion.line
                    x1="2" y1="12" x2="36" y2="12"
                    stroke="#a78bfa" strokeWidth="2" strokeDasharray="6 6"
                    animate={{ strokeDashoffset: [12, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                />
                <path d="M34 6 L42 12 L34 18" stroke="#a78bfa" strokeWidth="2" fill="none" />
            </svg>
        </div>
    );
}

function Lane({ label, tone, children }: { label: string; tone: "purple" | "blue"; children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <span
                className={cn(
                    "w-28 shrink-0 rounded-xl px-3 py-2 text-center text-xs font-bold",
                    tone === "purple" ? "bg-purple-500/15 text-purple-300" : "bg-blue-500/15 text-blue-300"
                )}
            >
                {label}
            </span>
            <div className="flex flex-1 items-center gap-2">{children}</div>
        </div>
    );
}

function LaneNode({ label, arrow, tone, last }: { label: string; arrow?: boolean; tone: "purple" | "blue"; last?: boolean }) {
    return (
        <div className="flex flex-1 items-center gap-2">
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={cn(
                    "flex-1 rounded-xl border px-3 py-2.5 text-center text-xs font-semibold",
                    tone === "purple"
                        ? "border-purple-500/30 bg-purple-500/[0.08] text-purple-200"
                        : "border-blue-500/30 bg-blue-500/[0.08] text-blue-200"
                )}
            >
                {label}
            </motion.div>
            {arrow && !last && <span className={cn("shrink-0", tone === "purple" ? "text-purple-400/60" : "text-blue-400/60")}>→</span>}
        </div>
    );
}

function TreeNode({ title, desc, tone = "slate" }: { title: string; desc?: string; tone?: "emerald" | "slate" | "purple" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={cn(
                "w-48 rounded-xl border p-3 text-center",
                tone === "emerald" && "border-emerald-500/30 bg-emerald-500/[0.07]",
                tone === "purple" && "border-purple-500/35 bg-purple-500/[0.09]",
                tone === "slate" && "border-white/10 bg-white/[0.03]"
            )}
        >
            <p className="text-xs font-bold text-white">{title}</p>
            {desc && <p className="mt-1 text-[11px] leading-snug text-gray-400">{desc}</p>}
        </motion.div>
    );
}

function NodeBadge({ children, tone }: { children: React.ReactNode; tone: "emerald" | "slate" }) {
    return (
        <span
            className={cn(
                "mb-2 rounded-full px-3 py-0.5 text-[10px] font-bold tracking-widest",
                tone === "emerald" ? "bg-emerald-500/15 text-emerald-300" : "bg-white/10 text-gray-400"
            )}
        >
            {children}
        </span>
    );
}

function TreeStem() {
    return <div className="h-5 w-px bg-purple-500/40" />;
}

export { TreeStem };
