"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Shimmering gradient text (21st.dev "Shining Text" pattern).
 */
export function ShimmerText({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span
            className={cn(
                "bg-[linear-gradient(110deg,#a78bfa,45%,#60a5fa,55%,#a78bfa)] bg-[length:250%_100%] bg-clip-text text-transparent animate-shimmer-text",
                className
            )}
        >
            {children}
        </span>
    );
}

/**
 * Fade-up on scroll wrapper.
 */
export function FadeIn({
    children,
    delay = 0,
    className,
    y = 24,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * Section heading with eyebrow + title + description.
 */
export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
}: {
    eyebrow?: string;
    title: React.ReactNode;
    description?: string;
    align?: "center" | "left";
}) {
    return (
        <div
            className={cn(
                "mb-12",
                align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
            )}
        >
            {eyebrow && (
                <div
                    className={cn(
                        "mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400",
                        align === "center" && "flex items-center justify-center gap-3"
                    )}
                >
                    <span className={cn(align === "center" && "h-px w-8 bg-purple-500/50")} />
                    {eyebrow}
                    <span className={cn(align === "center" && "h-px w-8 bg-purple-500/50")} />
                </div>
            )}
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-lg text-gray-400 leading-relaxed">{description}</p>
            )}
        </div>
    );
}
