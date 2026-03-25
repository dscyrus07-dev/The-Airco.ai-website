"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import {
    BarChart3,
    Shield,
    Workflow,
    Bot,
    MessageSquare,
    Rocket,
    ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const AnimatedIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
    <div className={`w-full h-40 flex items-center justify-center rounded-xl bg-gradient-to-br ${color} bg-opacity-10 relative overflow-hidden group`}>
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="relative z-10 p-6 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm"
        >
            <Icon className="h-12 w-12 text-white" />
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl"
        />
    </div>
);

const products = [
    {
        title: "AiRCo Insights",
        description: "Business Intelligence Reimagined. Predictive analytics & smart dashboards.",
        iconComponent: <AnimatedIcon icon={BarChart3} color="from-purple-500/20 to-indigo-500/20" />,
        className: "md:col-span-1",
        link: "https://insights.theairco.ai",
        cta: "Visit Insights",
        active: true
    },
    {
        title: "AiRCo Secure",
        description: "Intelligent Security. Zero Compromise. AI facial recognition & threat detection.",
        iconComponent: <AnimatedIcon icon={Shield} color="from-blue-500/20 to-cyan-500/20" />,
        className: "md:col-span-1",
        link: "#",
        cta: "Coming Soon",
        active: false
    },
    {
        title: "AiRCo PMS",
        description: "Smart Hospitality Management. Contactless check-in/out & housekeeping automation.",
        iconComponent: <AnimatedIcon icon={Workflow} color="from-green-500/20 to-emerald-500/20" />,
        className: "md:col-span-1",
        link: "#",
        cta: "Coming Soon",
        active: false
    },
    {
        title: "AiRCo Bot",
        description: "Conversations That Convert. Lead qualification & CRM integrations.",
        iconComponent: <AnimatedIcon icon={Bot} color="from-yellow-500/20 to-orange-500/20" />,
        className: "md:col-span-1",
        link: "#",
        cta: "Coming Soon",
        active: false
    },
    {
        title: "AiRCo ARS",
        description: "Instant Replies. Always On. Context-aware auto-replies.",
        iconComponent: <AnimatedIcon icon={MessageSquare} color="from-pink-500/20 to-rose-500/20" />,
        className: "md:col-span-1",
        link: "#",
        cta: "Coming Soon",
        active: false
    },
    {
        title: "AiRCo Services",
        description: "Your AI Transformation Partner. Custom AI solutions & consulting.",
        iconComponent: <AnimatedIcon icon={Rocket} color="from-red-500/20 to-orange-500/20" />,
        className: "md:col-span-1",
        link: "#",
        cta: "Coming Soon",
        active: false
    }
];

export default function ProductsSection() {
    return (
        <section id="products" className="py-20 relative overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-[1]" />
            <div className="absolute h-full w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-[1]" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI Products</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover our comprehensive suite of AI-powered tools designed to transform your business.
                    </p>
                </motion.div>

                <BentoGrid className="max-w-7xl mx-auto">
                    {products.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.iconComponent}
                            className={item.className}
                            footer={
                                <Link
                                    href={item.link}
                                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${item.active
                                        ? "text-purple-400 hover:text-purple-300"
                                        : "text-gray-500 cursor-default hover:text-gray-500"
                                        }`}
                                    onClick={(e) => !item.active && e.preventDefault()}
                                >
                                    {item.cta}
                                    {item.active && <ArrowUpRight className="w-4 h-4" />}
                                </Link>
                            }
                        />
                    ))}
                </BentoGrid>

                <div className="mt-16 flex justify-center">
                    <Link
                        href="https://www.the-airco.com/"
                        target="_blank"
                        className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 gap-2">
                            Visit Official Website
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
