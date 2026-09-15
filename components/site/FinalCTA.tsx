"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "./Buttons";

export default function FinalCTA({
    title,
    subtitle,
    ctaLabel = "Get in Touch",
}: {
    title: string;
    subtitle?: string;
    ctaLabel?: string;
}) {
    return (
        <section className="relative overflow-hidden py-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[24rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[140px]" />
                <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="container relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6"
            >
                <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">{title}</h2>
                {subtitle && (
                    <p className="mt-4 text-xl text-gray-400">{subtitle}</p>
                )}
                <div className="mt-10">
                    <PrimaryButton href="/contact">{ctaLabel}</PrimaryButton>
                </div>
            </motion.div>
        </section>
    );
}
