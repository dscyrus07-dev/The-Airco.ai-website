"use client";

import { motion } from "framer-motion";
import {
    FileText,
    Video,
    FileCheck,
    BellRing,
    Clock,
    ScanSearch,
    Zap,
    CircleDot,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Marquee } from "@/components/ui/marquee";

type Client = {
    name: string;
    logo: string;
    tag: string;
    kind: "insights" | "video";
    input: string;
    output: string;
    doLine: string;
    easier: string;
    metric: string;
};

const clients: Client[] = [
    {
        name: "Angel One",
        logo: "/clients/angel-one.png",
        tag: "Airco Insights",
        kind: "insights",
        input: "Bank statements",
        output: "Credit profile",
        doLine: "Reads every transaction in uploaded bank statements, categorises them, and builds a decision-ready credit profile.",
        easier: "Credit reviews that took days of manual reading now finish in hours — consistent and auditable every time.",
        metric: "Days → Hours",
    },
    {
        name: "myPaisaa",
        logo: "/clients/mypaisaa.png",
        tag: "Airco Insights",
        kind: "insights",
        input: "Bank statements",
        output: "Lending decision",
        doLine: "Automates bank-statement reading and categorisation so lending teams see a clean financial picture instantly.",
        easier: "Analysts skip the paperwork entirely and go straight to the decision.",
        metric: "Every transaction read",
    },
    {
        name: "Zostel",
        logo: "/clients/zostel.png",
        tag: "Video Analytics",
        kind: "video",
        input: "CCTV · 3 properties",
        output: "Live alerts",
        doLine: "Watches camera feeds across three hostel properties, flagging safety and operational events as they happen.",
        easier: "One team covers three properties — nobody stares at screens all day.",
        metric: "3 sites · 24×7",
    },
    {
        name: "Yaar",
        logo: "/clients/yaar.png",
        tag: "Video Analytics",
        kind: "video",
        input: "Bar-floor cameras",
        output: "Incident alerts",
        doLine: "Monitors Friendly Bar's floor cameras for incidents and service patterns in real time.",
        easier: "Staff get alerted to what matters instead of reviewing footage after the fact.",
        metric: "Real-time alerts",
    },
    {
        name: "Tosi Benne Dosa",
        logo: "/clients/tosi.png",
        tag: "Video Analytics",
        kind: "video",
        input: "Restaurant cameras",
        output: "Ops insights",
        doLine: "Runs video analytics on restaurant cameras for safety, hygiene and operational checks.",
        easier: "Issues surface on their own — no manual footage review needed.",
        metric: "Automated ops checks",
    },
];

const pilots = [
    { name: "Flipkart", logo: "/clients/flipkart.webp", detail: "E-commerce" },
    { name: "OYO", logo: "/clients/oyo.webp", detail: "Hospitality" },
    { name: "StayVista", logo: "/clients/stayvista.webp", detail: "Luxury villa stays" },
    { name: "Bakingo", logo: "/clients/bakingo.webp", detail: "D2C food & gifting" },
    { name: "AB Living Group", logo: "/clients/ab-living-group.webp", detail: "Real estate & lifestyle" },
];

const allLogos = [...clients, ...pilots];

function FlowConnector() {
    return (
        <div className="relative h-px min-w-4 flex-1 bg-white/15">
            <motion.span
                className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-purple-400"
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}

function MiniFlow({ client }: { client: Client }) {
    const InputIcon = client.kind === "insights" ? FileText : Video;
    const OutputIcon = client.kind === "insights" ? FileCheck : BellRing;

    return (
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5">
            <div className="flex shrink-0 flex-col items-center gap-1 text-gray-400">
                <InputIcon className="h-4 w-4" />
                <span className="max-w-16 text-center text-[10px] leading-tight">
                    {client.input}
                </span>
            </div>
            <FlowConnector />
            <motion.div
                className="relative flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-2.5 py-1.5"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ScanSearch className="h-3.5 w-3.5 text-white" />
                <span className="text-[10px] font-bold tracking-wide text-white">AiRCO</span>
            </motion.div>
            <FlowConnector />
            <div className="flex shrink-0 flex-col items-center gap-1 text-emerald-400">
                <OutputIcon className="h-4 w-4" />
                <span className="max-w-16 text-center text-[10px] leading-tight">
                    {client.output}
                </span>
            </div>
        </div>
    );
}

export function Traction() {
    return (
        <section className="bg-black py-24">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-12 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                        Traction
                    </p>
                    <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                        Trusted by leading Indian brands
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Every engagement follows the same pattern — their raw data goes in,
                        decision-ready intelligence comes out.
                    </p>
                </div>

                {/* Logo marquee */}
                <Marquee duration="35s" className="mb-16 [--gap:1.5rem]">
                    {allLogos.map((c) => (
                        <div
                            key={c.name}
                            className="flex h-20 w-40 items-center justify-center rounded-xl bg-white p-3"
                        >
                            <img
                                src={c.logo}
                                alt={c.name}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </Marquee>

                {/* Client story cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {clients.map((client, i) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 32, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 16,
                                delay: (i % 3) * 0.1,
                            }}
                            className="h-full"
                        >
                            <SpotlightCard className="flex h-full flex-col p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-24 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{client.name}</p>
                                        <p className="text-xs uppercase tracking-wider text-purple-400">
                                            {client.tag}
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                                    {client.doLine}
                                </p>

                                <MiniFlow client={client} />

                                <div className="mt-4 flex items-start gap-3">
                                    <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                                        <Zap className="h-3 w-3" />
                                        {client.metric}
                                    </span>
                                    <p className="text-sm leading-relaxed text-gray-300">
                                        {client.easier}
                                    </p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}

                    {/* Summary tile to fill the 6th grid cell */}
                    <motion.div
                        initial={{ opacity: 0, y: 32, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.2 }}
                        className="h-full"
                    >
                        <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-purple-500/30 bg-gradient-to-br from-purple-500/[0.08] to-blue-500/[0.04] p-8 text-center">
                            <Clock className="h-8 w-8 text-purple-400" />
                            <p className="mt-4 text-2xl font-bold text-white">
                                Weeks of work, done in hours
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                Same unified intelligence layer — applied to statements, camera
                                feeds, and everything in between.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Ongoing pilots */}
                <div className="mt-16">
                    <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
                        <CircleDot className="h-3.5 w-3.5 animate-pulse text-emerald-400" />
                        Ongoing Pilots
                    </p>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                        {pilots.map((pilot, i) => (
                            <motion.div
                                key={pilot.name}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 140,
                                    damping: 16,
                                    delay: i * 0.07,
                                }}
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition-colors hover:border-purple-500/30"
                            >
                                <div className="flex h-20 items-center justify-center rounded-xl bg-white p-3">
                                    <img
                                        src={pilot.logo}
                                        alt={pilot.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <p className="mt-3 text-sm font-semibold text-white">
                                    {pilot.name}
                                </p>
                                <p className="mt-1 text-[11px] uppercase tracking-wider text-gray-500">
                                    {pilot.detail}
                                </p>
                                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    </span>
                                    Pilot in progress
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
