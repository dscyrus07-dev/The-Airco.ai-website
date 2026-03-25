"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThreeViewer from "@/components/ui/3DViewer";
import HeroScene from "@/components/scenes/HeroScene";
import Drone from "@/components/scenes/Drone";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    {/* Using one of the provided videos - assuming path is correct relative to public */}
                    <source src="/images/grok-video-9d38adc0-5fa1-4a5e-a826-151d5f6aa284 (1).mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/80 to-gray-950" />
            </div>

            {/* 3D Scene Background Layer */}
            {/* Note: Removed pointer-events-none to allow clicking on the Drone */}
            <div className="absolute inset-0 z-0 opacity-80">
                <ThreeViewer className="w-full h-full" enableZoom={false}>
                    <HeroScene />
                    <Drone />
                </ThreeViewer>
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8 pointer-events-none"
                >
                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-sm text-purple-300 mb-4 animate-pulse">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        AI-Powered Business Intelligence
                    </div>

                    {/* Big Animated Text */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
                        Data Lies. <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            The AiR Co Exposes
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Turn complex business data into clear, actionable intelligence with our AI-powered analytics platform.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 pointer-events-auto">
                        <Link href="#contact">
                            <Button size="lg" className="h-12 px-8 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 shadow-lg shadow-purple-500/25">
                                <Sparkles className="mr-2 h-5 w-5" />
                                Request a Demo
                            </Button>
                        </Link>
                        <Link href="#products">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-lg border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white backdrop-blur-sm">
                                Explore Products
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
