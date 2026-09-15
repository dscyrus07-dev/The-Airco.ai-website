"use client";

import { motion } from "framer-motion";
import { Cpu, HardDrive, Mail, ScanEye } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProductVisualKind =
    | "camera"
    | "vms"
    | "audio"
    | "statement"
    | "chat"
    | "tender"
    | "leadgen"
    | "dc-consultation"
    | "dc-maintenance"
    | "dc-feasibility";

export function ProductVisual({ kind }: { kind: ProductVisualKind }) {
    switch (kind) {
        case "camera":
            return <CameraWall />;
        case "vms":
            return <VmsConsole />;
        case "audio":
            return <AudioConsole />;
        case "statement":
            return <StatementConsole />;
        case "chat":
            return <ChatConsole />;
        case "tender":
            return <TenderConsole />;
        case "leadgen":
            return <LeadPipeline />;
        case "dc-consultation":
            return (
                <RackConsole
                    label="Data Centre Consultation — Capacity Planner"
                    metrics={[
                        ["Power capacity", "2.4 MW"],
                        ["Cooling headroom", "62%"],
                        ["Redundancy", "N+1 verified"],
                        ["Compliance posture", "Aligned"],
                    ]}
                />
            );
        case "dc-maintenance":
            return (
                <RackConsole
                    label="Data Centre Maintenance — Health Monitor"
                    metrics={[
                        ["Power", "98.2%"],
                        ["Cooling", "96.4%"],
                        ["Network", "99.9%"],
                        ["Next PM window", "12 days"],
                    ]}
                />
            );
        case "dc-feasibility":
            return (
                <RackConsole
                    label="Feasibility Study — Site Assessment"
                    metrics={[
                        ["Site viability", "High"],
                        ["Power availability", "2 × 11kV feeds"],
                        ["Connectivity", "Dual fibre paths"],
                        ["Regulatory risk", "Low"],
                    ]}
                />
            );
    }
}

/* ---------------- frame ---------------- */

function VisualFrame({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950/80 shadow-2xl shadow-purple-500/5">
            <div className="flex items-center border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-red-500/70" />
                <span className="mr-1.5 h-2 w-2 rounded-full bg-yellow-500/70" />
                <span className="h-2 w-2 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs font-medium text-gray-400">{label}</span>
                <span className="ml-auto flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-red-400">
                    <motion.span
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                        className="h-1.5 w-1.5 rounded-full bg-red-500"
                    />
                    LIVE
                </span>
            </div>
            <div className="p-4">{children}</div>
        </div>
    );
}

/* ---------------- Airco Secure: camera wall + alerts ---------------- */

function CameraTile({
    name,
    boxes,
    alert,
}: {
    name: string;
    boxes: { x: string; y: string; w: string; h: string; label: string }[];
    alert?: boolean;
}) {
    return (
        <div
            className={cn(
                "relative aspect-video overflow-hidden rounded-lg border bg-gradient-to-br from-gray-800 to-gray-900",
                alert ? "border-red-500/60" : "border-white/10"
            )}
        >
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:14px_14px]" />
            <motion.div
                animate={{ y: ["-100%", "240%"] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-purple-400/15 to-transparent"
            />
            {boxes.map((b) => (
                <motion.div
                    key={b.label + b.x}
                    animate={{ opacity: [0.55, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    className="absolute rounded-sm border-2 border-red-400/80"
                    style={{ left: b.x, top: b.y, width: b.w, height: b.h }}
                >
                    <span className="absolute -top-3.5 left-0 whitespace-nowrap rounded-sm bg-red-500/90 px-1 text-[8px] font-bold text-white">
                        {b.label}
                    </span>
                </motion.div>
            ))}
            <span className="absolute left-1.5 top-1.5 font-mono text-[8px] text-white/70">{name}</span>
            {alert && (
                <motion.span
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="absolute right-1.5 top-1.5 rounded-sm bg-red-500/90 px-1.5 py-0.5 text-[8px] font-bold text-white"
                >
                    ALERT
                </motion.span>
            )}
        </div>
    );
}

function CameraWall() {
    const alerts = [
        { t: "14:02:11", m: "Restricted-zone breach · Gate A", hot: true },
        { t: "14:01:47", m: "Loitering detected · Bay 2", hot: false },
        { t: "14:00:52", m: "Perimeter clear · Sector 4", hot: false },
        { t: "13:55:40", m: "Unauthorised access · Door C2", hot: true },
    ];
    return (
        <VisualFrame label="Airco Secure — Live Detection Console">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_170px]">
                <div className="grid grid-cols-2 gap-2">
                    <CameraTile
                        name="CAM 01 · PERIMETER"
                        boxes={[{ x: "22%", y: "30%", w: "20%", h: "48%", label: "PERSON" }]}
                    />
                    <CameraTile
                        name="CAM 02 · GATE A"
                        alert
                        boxes={[{ x: "55%", y: "24%", w: "24%", h: "52%", label: "INTRUSION" }]}
                    />
                    <CameraTile
                        name="CAM 03 · WAREHOUSE"
                        boxes={[{ x: "50%", y: "34%", w: "22%", h: "44%", label: "VEHICLE" }]}
                    />
                    <CameraTile
                        name="CAM 04 · LOBBY"
                        boxes={[{ x: "36%", y: "34%", w: "18%", h: "42%", label: "PERSON" }]}
                    />
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                    <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-purple-400">
                        <ScanEye className="h-3 w-3" /> LIVE DETECTIONS
                    </p>
                    <div className="space-y-2">
                        {alerts.map((a, i) => (
                            <motion.div
                                key={a.t}
                                initial={{ opacity: 0, x: 12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="flex items-start gap-2 rounded-lg bg-white/[0.04] px-2.5 py-2"
                            >
                                <span
                                    className={cn(
                                        "mt-1 h-1.5 w-1.5 shrink-0 rounded-full",
                                        a.hot ? "bg-red-500" : "bg-emerald-400"
                                    )}
                                />
                                <div>
                                    <p className="font-mono text-[9px] text-gray-500">{a.t}</p>
                                    <p className="text-[11px] leading-snug text-gray-200">{a.m}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </VisualFrame>
    );
}

/* ---------------- Airco VMS ---------------- */

function VmsConsole() {
    const sites = [
        { name: "HQ Campus", ok: true },
        { name: "Warehouse B", ok: true },
        { name: "Retail North", ok: true },
        { name: "Depot East", ok: false },
    ];
    return (
        <VisualFrame label="Airco VMS — Multi-Site Console">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[150px_1fr]">
                <div className="space-y-1.5">
                    <p className="text-[10px] font-bold tracking-widest text-gray-500">SITES</p>
                    {sites.map((site, i) => (
                        <motion.div
                            key={site.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className={cn(
                                "flex items-center justify-between rounded-lg border px-3 py-2 text-[11px]",
                                i === 0
                                    ? "border-purple-500/40 bg-purple-500/10 text-purple-200"
                                    : "border-white/10 bg-white/[0.03] text-gray-300"
                            )}
                        >
                            {site.name}
                            <span className={cn("h-1.5 w-1.5 rounded-full", site.ok ? "bg-emerald-400" : "bg-amber-400")} />
                        </motion.div>
                    ))}
                    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                        <p className="mb-1.5 text-[10px] text-gray-500">Storage</p>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "64%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                            />
                        </div>
                        <p className="mt-1 text-[10px] text-gray-500">64 TB / 100 TB archive</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <CameraTile
                            key={i}
                            name={`CAM ${String(i + 1).padStart(2, "0")}`}
                            boxes={i % 2 === 0 ? [{ x: "40%", y: "30%", w: "22%", h: "46%", label: "PERSON" }] : []}
                            alert={i === 4}
                        />
                    ))}
                </div>
            </div>
        </VisualFrame>
    );
}

/* ---------------- Airco Geetika ---------------- */

function AudioConsole() {
    const lines = [
        { who: "Customer", text: "This is the third time I'm calling about this issue…", tone: "Frustrated", flag: true },
        { who: "Agent", text: "I completely understand. Let me fix this for you now.", tone: "Empathetic", flag: false },
        { who: "Customer", text: "Okay, that works. Thank you.", tone: "Positive", flag: false },
    ];
    return (
        <VisualFrame label="Airco Geetika — Call Intelligence">
            <div className="space-y-3">
                <div className="flex h-16 items-end justify-center gap-1 rounded-xl border border-white/10 bg-black/40 px-4 py-2">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <motion.span
                            key={i}
                            animate={{ scaleY: [0.35, 0.55 + ((i * 37) % 60) / 100, 0.35] }}
                            transition={{ duration: 1.1 + (i % 5) * 0.2, repeat: Infinity, ease: "easeInOut" }}
                            className={cn(
                                "w-1 origin-bottom rounded-full",
                                (i * 13) % 9 === 0 ? "bg-red-400/80" : "bg-gradient-to-t from-purple-600 to-blue-400"
                            )}
                            style={{ height: `${25 + ((i * 29) % 70)}%` }}
                        />
                    ))}
                </div>
                <div className="space-y-2">
                    {lines.map((l, i) => (
                        <motion.div
                            key={l.who + i}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.18 }}
                            className={cn(
                                "flex max-w-[85%] items-start gap-2 rounded-xl border p-2.5",
                                l.flag
                                    ? "border-red-500/25 bg-red-500/[0.06]"
                                    : l.who === "Agent"
                                        ? "ml-auto border-purple-500/25 bg-purple-500/[0.08]"
                                        : "border-white/10 bg-white/[0.04]"
                            )}
                        >
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-bold text-white">{l.who}</span>
                                    <span
                                        className={cn(
                                            "rounded-full px-2 py-0.5 text-[8px] font-bold",
                                            l.flag ? "bg-red-500/15 text-red-300" : "bg-emerald-500/15 text-emerald-300"
                                        )}
                                    >
                                        {l.tone}
                                    </span>
                                </div>
                                <p className="mt-0.5 text-[11px] text-gray-300">{l.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <p className="text-[10px] text-gray-500">
                    Transcribed · keywords detected · sentiment scored · anomalies flagged automatically
                </p>
            </div>
        </VisualFrame>
    );
}

/* ---------------- Airco Insights ---------------- */

function StatementConsole() {
    const txns = [
        { n: "SALARY CREDIT — ACME LTD", a: "+₹1,20,000", c: "Income", flag: false },
        { n: "RENT — SKYLINE PROPERTIES", a: "−₹32,500", c: "Fixed expense", flag: false },
        { n: "UPI / GROCERY MART", a: "−₹4,230", c: "Variable", flag: false },
        { n: "CHEQUE RETURN CHARGE", a: "−₹1,180", c: "Flagged", flag: true },
        { n: "EMI — AUTO LOAN", a: "−₹18,400", c: "Debt obligation", flag: false },
        { n: "PENAL CHARGE — LATE FEE", a: "−₹590", c: "Flagged", flag: true },
    ];
    const profile: [string, string][] = [
        ["Avg. monthly inflow", "₹1.2L"],
        ["Avg. balance", "₹2.4L"],
        ["EMI / income", "18%"],
        ["Cash-flow trend", "↑ Healthy"],
    ];
    return (
        <VisualFrame label="Airco Insights — Statement Analysis">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="mb-3 flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-500">
                        <HardDrive className="h-3 w-3" /> STATEMENT.PDF · ANY BANK · APR–JUN
                    </p>
                    <div className="space-y-1.5">
                        {txns.map((t, i) => (
                            <motion.div
                                key={t.n}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.09 }}
                                className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2"
                            >
                                <div className="min-w-0">
                                    <p className="truncate text-[11px] font-medium text-gray-200">{t.n}</p>
                                    <p className={cn("text-[10px]", t.flag ? "text-red-300" : "text-gray-500")}>{t.c}</p>
                                </div>
                                <span
                                    className={cn(
                                        "ml-3 shrink-0 font-mono text-[11px]",
                                        t.a.startsWith("+") ? "text-emerald-400" : t.flag ? "text-red-300" : "text-gray-300"
                                    )}
                                >
                                    {t.a}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/[0.1] to-blue-500/[0.05] p-4">
                    <p className="mb-2 text-[10px] font-bold tracking-widest text-purple-300">
                        STRUCTURED FINANCIAL PROFILE
                    </p>
                    {profile.map(([k, v], i) => (
                        <motion.div
                            key={k}
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center justify-between border-b border-white/5 py-2 last:border-0"
                        >
                            <span className="text-xs text-gray-400">{k}</span>
                            <span className="text-xs font-bold text-white">{v}</span>
                        </motion.div>
                    ))}
                    <div className="mt-auto flex items-end gap-1.5 pt-3">
                        {[40, 55, 45, 70, 62, 80, 74, 92].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 4 }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.07, duration: 0.5 }}
                                className="w-full rounded-t bg-gradient-to-t from-purple-600/60 to-blue-400/80"
                            />
                        ))}
                    </div>
                    <p className="mt-1 text-[10px] text-gray-500">6-month cash-flow trend</p>
                </div>
            </div>
        </VisualFrame>
    );
}

/* ---------------- Airco Chatbot ---------------- */

function ChatConsole() {
    const bubbles = [
        { from: "user", text: "Do you ship internationally?" },
        { from: "bot", text: "Yes — we ship to 40+ countries. Orders above ₹2,999 ship free." },
        { from: "user", text: "What's the delivery time to Dubai?" },
        { from: "bot", text: "3–5 business days via express courier, with live tracking." },
    ];
    return (
        <VisualFrame label="Airco Chatbot — Website Widget">
            <div className="mx-auto max-w-md space-y-2.5 rounded-xl border border-white/10 bg-black/40 p-4">
                {bubbles.map((b, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.25 }}
                        className={cn(
                            "max-w-[80%] rounded-2xl px-4 py-2 text-xs",
                            b.from === "user"
                                ? "ml-auto w-fit rounded-tr-sm bg-purple-600/80 text-white"
                                : "mr-auto rounded-tl-sm border border-white/10 bg-white/[0.06] text-gray-200"
                        )}
                    >
                        {b.text}
                    </motion.div>
                ))}
                <div className="flex items-center gap-1.5 pl-1">
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            animate={{ opacity: [0.25, 1, 0.3] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                            className="h-1.5 w-1.5 rounded-full bg-gray-400"
                        />
                    ))}
                    <span className="text-[10px] text-gray-500">AiRCO assistant is typing…</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/[0.07] px-3 py-2 text-[11px] text-amber-300">
                    <Mail className="h-3.5 w-3.5 shrink-0" /> Complex query detected → escalating to human agent
                </div>
            </div>
        </VisualFrame>
    );
}

/* ---------------- Airco Tendermate ---------------- */

function TenderConsole() {
    const checks = [
        { item: "Turnover ≥ ₹10 Cr (last 3 yrs)", ok: true },
        { item: "PAN & GST registration", ok: true },
        { item: "3 similar project references", ok: true },
        { item: "EMD deposit attached", ok: false },
        { item: "Annexure-B signed", ok: true },
        { item: "Bid security format", ok: false },
    ];
    return (
        <VisualFrame label="Airco Tendermate — Compliance Check">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="mb-3 text-[10px] font-bold tracking-widest text-gray-500">
                        TENDER — RFP/2026/114
                    </p>
                    <div className="space-y-2">
                        {[
                            { w: "92%", hl: true },
                            { w: "78%", hl: true },
                            { w: "85%", hl: false },
                            { w: "64%", hl: false },
                            { w: "88%", hl: true },
                            { w: "40%", hl: false },
                        ].map((l, i) => (
                            <div key={i} className="h-2 rounded bg-white/[0.07]">
                                <div
                                    className={cn("h-full rounded", l.hl ? "bg-purple-500/70" : "bg-white/10")}
                                    style={{ width: l.w }}
                                />
                            </div>
                        ))}
                        <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-2.5">
                            <p className="text-[10px] font-bold tracking-widest text-purple-300">
                                EXTRACTED CRITERIA
                            </p>
                            <p className="mt-1 text-[11px] text-gray-300">
                                Eligibility: 3 similar projects · ₹50L turnover · ISO 9001
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="mb-2 text-[10px] font-bold tracking-widest text-blue-300">
                        COMPLIANCE CHECKLIST
                    </p>
                    {checks.map((c, i) => (
                        <motion.div
                            key={c.item}
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-center gap-2 py-1"
                        >
                            <span
                                className={cn(
                                    "flex h-4 w-4 shrink-0 items-center justify-center rounded text-[9px] font-bold",
                                    c.ok ? "bg-emerald-500/20 text-emerald-300" : "bg-red-500/15 text-red-300"
                                )}
                            >
                                {c.ok ? "✓" : "!"}
                            </span>
                            <span className={cn("text-[11px]", c.ok ? "text-gray-300" : "text-red-300")}>
                                {c.item}
                            </span>
                        </motion.div>
                    ))}
                    <div className="mt-3 rounded-lg border border-red-500/30 bg-red-500/[0.07] px-3 py-2 text-[11px] text-red-300">
                        1 gap found — attach bid security before submission
                    </div>
                </div>
            </div>
        </VisualFrame>
    );
}

/* ---------------- Airco LeadGen ---------------- */

function LeadPipeline() {
    const stages = [
        { label: "Scanned", n: 1240, w: "100%" },
        { label: "Scored high-intent", n: 386, w: "72%" },
        { label: "Engaged", n: 214, w: "48%" },
        { label: "Qualified", n: 96, w: "28%" },
        { label: "Handed to sales", n: 58, w: "16%", win: true },
    ];
    return (
        <VisualFrame label="Airco LeadGen — Pipeline">
            <div className="space-y-2.5">
                {stages.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                    >
                        <span className="w-32 shrink-0 text-right text-[11px] text-gray-400">{s.label}</span>
                        <div className="h-7 flex-1 overflow-hidden rounded-lg bg-white/[0.04]">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: s.w }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, delay: i * 0.1 }}
                                className={cn(
                                    "flex h-full items-center justify-end rounded-lg pr-2 font-mono text-[10px] font-bold text-white",
                                    s.win
                                        ? "bg-gradient-to-r from-emerald-600 to-emerald-400"
                                        : "bg-gradient-to-r from-purple-600/70 to-blue-600/70"
                                )}
                            >
                                {s.n}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
                <p className="pt-1 text-[11px] text-gray-500">
                    Only qualified opportunities reach your sales team.
                </p>
            </div>
        </VisualFrame>
    );
}

/* ---------------- Data centre ---------------- */

function RackConsole({ label, metrics }: { label: string; metrics: [string, string][] }) {
    return (
        <VisualFrame label={label}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((rack) => (
                        <div key={rack} className="space-y-1 rounded-lg border border-white/10 bg-black/50 p-2">
                            {Array.from({ length: 6 }).map((_, u) => (
                                <div key={u} className="flex items-center gap-1 rounded bg-white/[0.05] px-1.5 py-1">
                                    <motion.span
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1.4, repeat: Infinity, delay: (rack * 3 + u) * 0.18 }}
                                        className={cn("h-1 w-1 rounded-full", (rack + u) % 5 === 0 ? "bg-amber-400" : "bg-emerald-400")}
                                    />
                                    <div className="h-0.5 flex-1 rounded bg-white/10" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="space-y-2.5">
                    {metrics.map(([k, v], i) => (
                        <motion.div
                            key={k}
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5"
                        >
                            <span className="text-xs text-gray-400">{k}</span>
                            <span className="font-mono text-xs font-bold text-emerald-300">{v}</span>
                        </motion.div>
                    ))}
                    <div className="flex items-center gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/[0.06] px-3 py-2 text-[11px] text-emerald-300">
                        <Cpu className="h-3.5 w-3.5 shrink-0" /> Proactive monitoring active · 99.98% uptime
                    </div>
                </div>
            </div>
        </VisualFrame>
    );
}
