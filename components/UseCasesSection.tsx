"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const useCases = [
    {
        title: "Enterprise Analytics",
        description: "Unify data across departments. Visualize complex workflows and KPIs in real-time.",
        media: "/images/grok-video-9d38adc0-5fa1-4a5e-a826-151d5f6aa284 (1).mp4",
        type: "video",
        tags: ["Business Intelligence", "Real-time Data", "Executive Dashboards"]
    },
    {
        title: "Intelligent Security",
        description: "Next-generation surveillance with facial recognition and anomaly detection.",
        media: "/images/AdobeStock_548085652-1.png",
        type: "image",
        tags: ["Facial Recognition", "Threat Detection", "Zero Latency"]
    },
    {
        title: "Retail Intelligence",
        description: "Optimize store layouts and inventory with object detection and footfall analysis.",
        media: "/images/object-detection.png",
        type: "image",
        tags: ["Heatmaps", "Inventory Management", "Shopper Behavior"]
    },
    {
        title: "Automated Insights",
        description: "Let AI analyze trends and generate reports automatically.",
        media: "/images/grok-video-8f9bceaa-8322-4101-8cea-d42f23ea2a50.mp4",
        type: "video",
        tags: ["Predictive Modeling", "Auto-Reporting", "Trend Analysis"]
    },
    {
        title: "Smart Hospitality",
        description: "Streamline guest experiences from check-in to housekeeping.",
        media: "/images/OCR.png",
        type: "image",
        tags: ["Contactless Ops", "ID Verification", "Guest Flow"]
    },
    {
        title: "Conversational AI",
        description: "Engage customers 24/7 with context-aware AI chatbots.",
        media: "/images/client-story-prev-chatbot2.png",
        type: "image",
        tags: ["Lead Gen", "Support Automation", "Natural Language"]
    },
    {
        title: "Vehicle Tracking",
        description: "Monitor fleet movements and logistics in real-time.",
        media: "/images/multi-object-tracking-examples.avif",
        type: "image",
        tags: ["Logistics", "Fleet Management", "Route Optimization"]
    },
    {
        title: "Instant Communication",
        description: "Seamless WhatsApp integration for instant customer reach.",
        media: "/images/WhatsApp Image 2026-01-08 at 6.04.48 PM.jpeg",
        type: "image",
        tags: ["WhatsApp API", "Auto-Replies", "Customer Engagement"]
    }
];

const UseCaseRow = ({ item, index }: { item: any; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 md:py-24">
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex-1 space-y-6 ${isEven ? "md:order-1" : "md:order-2 text-right"}`}
            >
                <div className={`flex flex-wrap gap-2 ${isEven ? "" : "justify-end"}`}>
                    {item.tags.map((tag: string, i: number) => (
                        <span key={i} className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {item.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed font-light">
                    {item.description}
                </p>
                <div className={`flex ${isEven ? "justify-start" : "justify-end"}`}>
                    <button className="group flex items-center gap-2 text-white font-medium hover:text-purple-400 transition-colors">
                        Explore Solution <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </motion.div>

            {/* Media Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex-1 w-full ${isEven ? "md:order-2" : "md:order-1"}`}
            >
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 group">
                    {/* Glass Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                    {item.type === "video" ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={item.media} type="video/mp4" />
                        </video>
                    ) : (
                        <div className="relative w-full h-full">
                            <Image
                                src={item.media}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default function UseCasesSection() {
    return (
        <section id="use-cases" className="relative bg-black py-24 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Real-World <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Impact</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        See how organizations across industries are transforming their operations with AiRCo.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {useCases.map((useCase, index) => (
                        <UseCaseRow key={index} item={useCase} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
