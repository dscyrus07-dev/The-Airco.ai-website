"use client";

import { motion } from "framer-motion";

export default function PageHero({
    eyebrow,
    title,
    description,
    children,
}: {
    eyebrow: string;
    title: React.ReactNode;
    description?: string;
    children?: React.ReactNode;
}) {
    return (
        <section className="relative overflow-hidden pb-16 pt-40">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[28rem] w-[50rem] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />
                <div className="absolute right-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-blue-600/15 blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                        maskImage:
                            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                    }}
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400"
                >
                    {eyebrow}
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"
                >
                    {title}
                </motion.h1>
                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
                    >
                        {description}
                    </motion.p>
                )}
                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
