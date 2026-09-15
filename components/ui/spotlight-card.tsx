"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Spotlight card — mouse-following radial glow (21st.dev / Aceternity pattern).
 */
export function SpotlightCard({
    children,
    className,
    spotlightColor = "rgba(139, 92, 246, 0.15)",
}: {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: -400, y: -400 });

    return (
        <div
            ref={ref}
            onMouseMove={(e) => {
                const rect = ref.current?.getBoundingClientRect();
                if (!rect) return;
                setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseLeave={() => setPos({ x: -400, y: -400 })}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-purple-500/40",
                className
            )}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 65%)`,
                }}
            />
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
}
