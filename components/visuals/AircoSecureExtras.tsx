"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Play, X, Building2, ShoppingBag, Truck, Factory, Landmark, Plane, Zap, GraduationCap, TreePine, Warehouse, BarChart3, Heart } from "lucide-react";

const brochures = [
    { label: "Banking & Finance", file: "/brochures/airco-secure/banking.pdf", icon: Building2, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
    { label: "Retail", file: "/brochures/airco-secure/retail.pdf", icon: ShoppingBag, color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
    { label: "Logistics", file: "/brochures/airco-secure/logistics.pdf", icon: Truck, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
    { label: "Manufacturing", file: "/brochures/airco-secure/manufacturing.pdf", icon: Factory, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
    { label: "Government & Public Safety", file: "/brochures/airco-secure/public-safety.pdf", icon: Landmark, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
    { label: "Hospitality", file: "/brochures/airco-secure/hospitality.pdf", icon: Heart, color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
    { label: "Aviation", file: "/brochures/airco-secure/aviation.pdf", icon: Plane, color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
    { label: "Energy", file: "/brochures/airco-secure/energy.pdf", icon: Zap, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
    { label: "Education", file: "/brochures/airco-secure/education.pdf", icon: GraduationCap, color: "text-teal-400", bg: "bg-teal-500/10 border-teal-500/20" },
    { label: "Smart City", file: "/brochures/airco-secure/smart-city.pdf", icon: TreePine, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
    { label: "Data Centre", file: "/brochures/airco-secure/data-centre.pdf", icon: BarChart3, color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
    { label: "Warehouse", file: "/brochures/airco-secure/warehouse.pdf", icon: Warehouse, color: "text-lime-400", bg: "bg-lime-500/10 border-lime-500/20" },
    { label: "Construction", file: "/brochures/airco-secure/construction.pdf", icon: Building2, color: "text-stone-400", bg: "bg-stone-500/10 border-stone-500/20" },
    { label: "Highway & Tunnel", file: "/brochures/airco-secure/highway-tunnel.pdf", icon: Truck, color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
    { label: "AI Infographics", file: "/brochures/airco-secure/ai-infographics.pdf", icon: FileText, color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
    { label: "Flipkart Case Study", file: "/brochures/airco-secure/flipkart-casestudy.pdf", icon: ShoppingBag, color: "text-orange-300", bg: "bg-orange-500/10 border-orange-500/20" },
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

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {demos.map((demo, i) => (
                            <motion.div
                                key={demo.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 120, damping: 16, delay: i * 0.08 }}
                                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                            >
                                {/* Video */}
                                <div className="relative aspect-video w-full overflow-hidden bg-gray-950">
                                    {playing === demo.id ? (
                                        <>
                                            <video
                                                src={demo.file}
                                                autoPlay
                                                controls
                                                playsInline
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
                                            className="group relative flex h-full w-full items-center justify-center"
                                        >
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/30" />
                                            <div className="relative flex flex-col items-center gap-3">
                                                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 backdrop-blur-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-purple-600/80 group-hover:ring-purple-400">
                                                    <Play className="h-7 w-7 translate-x-0.5 text-white" />
                                                </span>
                                                <span className="text-sm font-semibold text-white/80 group-hover:text-white">
                                                    Play Demo
                                                </span>
                                            </div>
                                        </button>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white ${demo.tagColor}`}>
                                        {demo.tag}
                                    </span>
                                    <h3 className="mt-2 font-bold text-white">{demo.label}</h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{demo.what}</p>
                                </div>
                            </motion.div>
                        ))}
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

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                        {brochures.map((b, i) => {
                            const BIcon = b.icon;
                            return (
                                <motion.a
                                    key={b.label}
                                    href={b.file}
                                    download
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 140, damping: 16, delay: (i % 4) * 0.06 }}
                                    className={`group flex items-center gap-3 rounded-xl border p-4 transition-all hover:scale-[1.02] hover:shadow-lg ${b.bg}`}
                                >
                                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 ${b.color} transition-transform group-hover:scale-110`}>
                                        <BIcon className="h-5 w-5" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-semibold text-white">{b.label}</p>
                                        <p className="text-xs text-gray-500">PDF</p>
                                    </div>
                                    <Download className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-white" />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
