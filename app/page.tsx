"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowDown,
    FileSearch,
    Server,
    ScanEye,
    FileClock,
    Target,
    Layers,
} from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FinalCTA from "@/components/site/FinalCTA";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeading, ShimmerText, FadeIn } from "@/components/ui/section";
import { DataFlowDiagram } from "@/components/visuals/diagrams";
import IntelligenceOrbit from "@/components/visuals/IntelligenceOrbit";
import { PrimaryButton, SecondaryButton } from "@/components/site/Buttons";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";
import ThreeViewer from "@/components/ui/3DViewer";
import HeroScene from "@/components/scenes/HeroScene";
import Drone from "@/components/scenes/Drone";

const dataTypes = ["VIDEO", "AUDIO", "DOCUMENTS", "TEXT", "CONVERSATIONS", "OPERATIONS"];

const pipeline = [
    { step: "01", label: "RAW DATA" },
    { step: "02", label: "PROCESSING" },
    { step: "03", label: "CONTEXT" },
    { step: "04", label: "INTELLIGENCE" },
    { step: "05", label: "ACTION" },
];

const problems = [
    {
        icon: Layers,
        title: "Too much data. Too little visibility",
        description:
            "Information is scattered across cameras, calls, documents, and systems that don't talk to each other. AiRCO brings it into one intelligence layer, so nothing important gets lost in the noise.",
    },
    {
        icon: FileSearch,
        title: "Manual review doesn't scale",
        description:
            "Reading every bank statement, watching every camera feed, or reviewing every call by hand takes time your teams don't have. AiRCO automates the review, so people focus on judgment, not repetition.",
    },
    {
        icon: ScanEye,
        title: "Security teams can't watch everything, all the time",
        description:
            "Airco Secure and Airco VMS detect and flag risk in real time, so a threat doesn't depend on someone happening to be looking at the right screen at the right moment.",
    },
    {
        icon: FileClock,
        title: "Slow document review slows down decisions",
        description:
            "Whether it's a bank statement or a tender document, manual review adds days to a process that should take hours. Airco Insights and Airco Tendermate structure that information automatically.",
    },
    {
        icon: Target,
        title: "Sales teams spend time on the wrong leads",
        description:
            "Airco LeadGen surfaces and qualifies high-intent prospects first, so outreach goes where it's more likely to convert.",
    },
    {
        icon: Server,
        title: "Infrastructure decisions carry long-term risk",
        description:
            "Our Data Centre Consultation and Feasibility Study services bring structured analysis to decisions that are expensive to get wrong.",
    },
];

const whyPoints = [
    {
        title: "One Intelligence Layer",
        description:
            "We bring data from multiple environments and systems together into a single, unified layer — instead of leaving it scattered.",
    },
    {
        title: "Multiple Data Modalities",
        description:
            "Video, audio, documents, text, conversations, and operational data are all within scope — not just one type of data.",
    },
    {
        title: "From Data to Decisions",
        description:
            "Our focus isn't just collecting data — it's converting it into structured, decision-ready intelligence.",
    },
    {
        title: "Real-Time Where It Matters",
        description:
            "Solutions like Airco Secure and Airco VMS are built to detect and alert in real time, not just record for later review.",
    },
    {
        title: "Built Around Business Workflows",
        description:
            "Every solution is designed around a real workflow — security response, credit assessment, tender submission, customer support, sales prospecting, or infrastructure planning.",
    },
    {
        title: "Less Manual Review",
        description:
            "Automation across video, document, and audio review means your teams spend less time on repetitive work and more time on decisions that need judgment.",
    },
];

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <Navbar />

            {/* ============ HERO ============ */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0 opacity-80">
                    <ThreeViewer className="h-full w-full" enableZoom={false}>
                        <HeroScene />
                        <Drone />
                    </ThreeViewer>
                </div>
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950" />

                <div className="container relative z-10 px-4 text-center md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="pointer-events-none mx-auto max-w-4xl space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
                            </span>
                            Enterprise AI &amp; Data Intelligence
                        </div>

                        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
                            Turn Data Into <ShimmerText>Intelligence.</ShimmerText>
                        </h1>

                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                            Your organisation generates data constantly — through cameras, calls,
                            documents, conversations, and everyday operations. AiRCO brings that data
                            together and converts it into structured, actionable intelligence, so your
                            teams can see clearly and decide faster.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                            <PrimaryButton href="/solutions">Explore Our Solutions</PrimaryButton>
                            <SecondaryButton href="/contact">Talk to Us</SecondaryButton>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
                >
                    <ArrowDown className="h-6 w-6 text-purple-400/70" />
                </motion.div>
            </section>

            {/* ============ DATA TYPES MARQUEE ============ */}
            <section className="border-y border-white/5 bg-black/40 py-10">
                <p className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-gray-500">
                    Your organisation generates data constantly
                </p>
                <Marquee className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                    {dataTypes.map((t) => (
                        <span
                            key={t}
                            className="flex items-center gap-3 text-2xl font-bold tracking-widest text-gray-600 md:text-4xl"
                        >
                            {t}
                            <span className="h-2 w-2 rounded-full bg-purple-500/50" />
                        </span>
                    ))}
                </Marquee>
            </section>

            {/* ============ PIPELINE ============ */}
            <section className="py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="How it works"
                        title="From raw data to action."
                        description="AiRCO structures the chaos. Fragmented inputs become a single intelligence layer your teams can act on."
                    />
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                        {pipeline.map((step, i) => (
                            <motion.div
                                key={step.label}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-purple-500/40"
                            >
                                <span className="text-xs font-bold tracking-widest text-purple-400">
                                    {step.step}
                                </span>
                                <p className="mt-2 text-sm font-semibold tracking-wider text-gray-200">
                                    {step.label}
                                </p>
                                {i < pipeline.length - 1 && (
                                    <ArrowDown className="absolute -bottom-5 left-1/2 hidden h-4 w-4 -translate-x-1/2 text-purple-500/50 lg:block" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ DATA FLOW DIAGRAM ============ */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Data flow"
                        title="How your data becomes intelligence."
                        description="Inputs from every environment are processed, correlated, and turned into decision-ready output — one continuous flow."
                    />
                    <FadeIn>
                        <DataFlowDiagram />
                    </FadeIn>
                </div>
            </section>

            {/* ============ INTELLIGENCE LAYERS (clockwise orbit) ============ */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Capabilities"
                        title="Intelligence Across Every Data Layer"
                        description="Seven layers, one continuous orbit — every data type feeding a single intelligence core."
                    />
                    <FadeIn>
                        <IntelligenceOrbit />
                    </FadeIn>
                </div>
            </section>

            {/* ============ OUR SOLUTIONS ============ */}
            <section className="py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Our Solutions"
                        title={
                            <>
                                Built for every kind of <ShimmerText>data.</ShimmerText>
                            </>
                        }
                        description="Ten solutions across video, audio, documents, conversations, agents, and infrastructure — all built on one intelligence layer."
                    />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {products.map((product, i) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                                className={i === 0 ? "sm:col-span-2 xl:col-span-1" : ""}
                            >
                                <Link href={`/products/${product.slug}`} className="block h-full">
                                    <SpotlightCard className="flex h-full flex-col p-6">
                                        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400/80">
                                            {product.category}
                                        </span>
                                        <h3 className="mt-3 text-xl font-bold text-white">{product.name}</h3>
                                        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                                            {product.description}
                                        </p>
                                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300">
                                            Learn more
                                            <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </SpotlightCard>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ BUSINESS PROBLEMS ============ */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Why AiRCO"
                        title="Built for real business problems."
                    />
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {problems.map((problem, i) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                            >
                                <SpotlightCard className="h-full p-8">
                                    <problem.icon className="mb-4 h-8 w-8 text-purple-400" />
                                    <h3 className="mb-3 text-lg font-bold text-white">{problem.title}</h3>
                                    <p className="leading-relaxed text-gray-400">{problem.description}</p>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ INDUSTRIES ============ */}
            <section className="py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <SectionHeading eyebrow="Industries" title="Wherever information drives decisions." />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={industry.slug}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                            >
                                <Link href={`/industries/${industry.slug}`} className="group block h-full">
                                    <SpotlightCard className="flex h-full flex-col p-6">
                                        <span className="text-xs font-bold tracking-widest text-purple-500/60">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="mt-3 text-lg font-bold text-white">{industry.name}</h3>
                                        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                                            {industry.intro}
                                        </p>
                                    </SpotlightCard>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ WHY POINTS ============ */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="One Intelligence Layer"
                        title="Less searching. Less reviewing. More deciding."
                    />
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {whyPoints.map((point, i) => (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                                className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/[0.06] to-blue-500/[0.03] p-8"
                            >
                                <span className="text-xs font-bold tracking-widest text-purple-400">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mt-3 text-lg font-bold text-white">{point.title}</h3>
                                <p className="mt-2 leading-relaxed text-gray-400">{point.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA
                title="Your data is already telling you something."
                subtitle="We help you understand it."
                ctaLabel="Get in Touch"
            />
            <Footer />
        </main>
    );
}
