"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Play, X } from "lucide-react";

const brochures = [
    { label: "Banking & Finance", file: "banking", what: "Branch security, queue management, and staff monitoring across banking floors and ATMs." },
    { label: "Retail", file: "retail", what: "Footfall counting, heat maps, and theft detection for stores and malls." },
    { label: "Logistics", file: "logistics", what: "Vehicle tracking, dock monitoring, and yard operations for logistics hubs." },
    { label: "Manufacturing", file: "manufacturing", what: "PPE compliance, worker safety, and production floor monitoring." },
    { label: "Public Safety", file: "public-safety", what: "City-wide surveillance, crowd control, and incident response for government." },
    { label: "Hospitality", file: "hospitality", what: "Guest experience, staff efficiency, and property-wide security for hotels." },
    { label: "Aviation", file: "aviation", what: "Terminal monitoring, passenger flow, and perimeter security for airports." },
    { label: "Energy", file: "energy", what: "Critical infrastructure, plant monitoring, and remote asset protection." },
    { label: "Education", file: "education", what: "Campus security, attendance automation, and student safety monitoring." },
    { label: "Smart City", file: "smart-city", what: "Traffic management, public space monitoring, and integrated command centers." },
    { label: "Data Centre", file: "data-centre", what: "Perimeter security, access control, and server room monitoring." },
    { label: "Warehouse", file: "warehouse", what: "Inventory zones, dock activity, and worker movement tracking." },
    { label: "Construction", file: "construction", what: "Site safety, equipment tracking, and progress monitoring." },
    { label: "Highway & Tunnel", file: "highway-tunnel", what: "Traffic flow, incident detection, and road safety monitoring." },
    { label: "AI Infographics", file: "ai-infographics", what: "Full visual overview of AiRCO's AI capabilities, models, and technology." },
];

const demos = [
    {
        id: "guest-welcome",
        label: "Guest Welcome Detection",
        file: "/videos/airco-secure/guest-welcome.mp4",
        tag: "Hospitality",
        tagColor: "bg-rose-600",
        what: "The moment a guest walks in, the AI detects and welcomes them. No button press, no staff needed — the camera does it on its own.",
    },
    {
        id: "activity-detection",
        label: "Activity Detection",
        file: "/videos/airco-secure/activity-detection.mp4",
        tag: "AI Model",
        tagColor: "bg-blue-600",
        what: "Watch the AI classify what each person is doing in real time — working, walking, standing. No manual review, just live understanding of the floor.",
    },
    {
        id: "occupancy-monitoring",
        label: "Occupancy Monitoring",
        file: "/videos/airco-secure/occupancy-monitoring.mp4",
        tag: "AI Model",
        tagColor: "bg-teal-600",
        what: "Know exactly how many people are in any zone at any moment — useful for capacity limits, staffing decisions, and space planning.",
    },
    {
        id: "staff-tracking",
        label: "Staff Movement Tracking",
        file: "/videos/airco-secure/staff-tracking.mp4",
        tag: "AI Model",
        tagColor: "bg-purple-600",
        what: "Track where staff move throughout their shift — who's covering which zone, response times, and coverage gaps. No wearables, no tags.",
    },
    {
        id: "crowd-density",
        label: "Crowd Density Detection",
        file: "/videos/airco-secure/crowd-density.mp4",
        tag: "Hospitality",
        tagColor: "bg-orange-600",
        what: "See density build up in real time — the AI marks each person so you know exactly how crowded an area is before it becomes a problem.",
    },
    {
        id: "density-model-testing",
        label: "Density Detection — Model Testing",
        file: "/videos/airco-secure/density-model-testing.mp4",
        tag: "Model Testing",
        tagColor: "bg-indigo-600",
        what: "Raw model validation footage — every person in frame is counted and tracked to measure the model's real-world accuracy before deployment.",
    },
    {
        id: "box-heatmap",
        label: "Box Counting & Heat Map",
        file: "/videos/airco-secure/box-heatmap.mp4",
        tag: "Warehouse",
        tagColor: "bg-green-700",
        what: "Track object movement and generate heat maps showing which areas get the most traffic — invaluable for retail layout and warehouse ops.",
    },
];

export function AircoSecureExtras() {
    const [playing, setPlaying] = useState<string | null>(null);

    return (
        <>
            {/* ── Demo Videos ── */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="mb-10">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">See it in action</p>
                        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Real demos. Real footage.</h2>
                        <p className="mt-3 max-w-2xl text-gray-400">
                            These are actual recordings from the Airco Secure AI — no animations, no renders. Just the product doing its job.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {demos.map((demo, i) => {
                            const poster = demo.file.replace(".mp4", ".jpg");
                            return (
                                <motion.div
                                    key={demo.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 120, damping: 16, delay: (i % 3) * 0.08 }}
                                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                                >
                                    {/* Video */}
                                    <div className="relative aspect-video w-full overflow-hidden bg-gray-950">
                                        {playing === demo.id ? (
                                            <>
                                                <video
                                                    src={demo.file}
                                                    poster={poster}
                                                    autoPlay
                                                    controls
                                                    playsInline
                                                    preload="metadata"
                                                    className="h-full w-full object-contain"
                                                    onEnded={() => setPlaying(null)}
                                                />
                                                <button
                                                    onClick={() => setPlaying(null)}
                                                    className="absolute right-2 top-2 rounded-full bg-black/70 p-1.5 text-white hover:bg-black"
                                                >
                                                    <X className="h-4 w-4" />
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() => setPlaying(demo.id)}
                                                className="group relative block h-full w-full"
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={poster}
                                                    alt={`${demo.label} preview`}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 ring-2 ring-white/30 backdrop-blur-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-purple-600/90 group-hover:ring-purple-400">
                                                        <Play className="h-7 w-7 translate-x-0.5 text-white" />
                                                    </span>
                                                </div>
                                                <span className="absolute bottom-3 left-3 rounded-md bg-black/70 px-2 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
                                                    {demo.tag}
                                                </span>
                                            </button>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="p-5">
                                        <h3 className="font-bold text-white">{demo.label}</h3>
                                        <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{demo.what}</p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* CTA tile — completes the grid */}
                        <motion.a
                            href="/contact"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.16 }}
                            className="group flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-600/15 to-blue-600/10 p-8 text-center transition hover:border-purple-400/50"
                        >
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/20 ring-2 ring-purple-500/40 transition-transform group-hover:scale-110">
                                <Play className="h-7 w-7 text-purple-300" />
                            </span>
                            <h3 className="text-xl font-bold text-white">
                                Want to see this on your own cameras?
                            </h3>
                            <p className="text-sm text-gray-400">
                                We&apos;ll run a live pilot on your existing CCTV — no new hardware needed.
                            </p>
                            <span className="mt-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-bold text-white transition group-hover:bg-purple-500">
                                Schedule a Demo
                            </span>
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* ── Brochures Download ── */}
            <section className="py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">Resources</p>
                            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                                Industry brochures
                            </h2>
                            <p className="mt-3 max-w-xl text-gray-400">
                                Detailed solution briefs tailored to your industry. Download, share with your team, or send to leadership.
                            </p>
                        </div>
                        <a
                            href="/brochures/airco-secure/ai-infographics.pdf"
                            download
                            className="flex shrink-0 items-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-5 py-3 text-sm font-semibold text-purple-300 transition hover:bg-purple-500/20"
                        >
                            <FileText className="h-4 w-4" />
                            AI Infographics Overview
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {brochures.map((b, i) => (
                            <motion.div
                                key={b.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 140, damping: 16, delay: (i % 4) * 0.06 }}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10"
                            >
                                {/* Preview */}
                                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-950">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`/brochures/airco-secure/previews/${b.file}.jpg`}
                                        alt={`${b.label} brochure preview`}
                                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
                                        loading="lazy"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-black/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                                        <FileText className="h-3 w-3" />
                                        PDF
                                    </span>
                                    <span className="absolute right-3 top-3 rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold text-white/80 backdrop-blur-sm">
                                        {(i + 1).toString().padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="flex flex-1 flex-col p-5">
                                    <h3 className="font-bold text-white">{b.label}</h3>
                                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-400">{b.what}</p>
                                    <a
                                        href={`/brochures/airco-secure/${b.file}.pdf`}
                                        download
                                        className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-2.5 text-sm font-semibold text-purple-300 transition hover:bg-purple-500 hover:text-white"
                                    >
                                        <Download className="h-4 w-4" />
                                        Download PDF
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
