"use client";

import { cn } from "@/lib/utils";

/**
 * Infinite CSS marquee (21st.dev Marquee pattern).
 */
export function Marquee({
    children,
    className,
    reverse = false,
    duration = "30s",
}: {
    children: React.ReactNode;
    className?: string;
    reverse?: boolean;
    duration?: string;
}) {
    return (
        <div
            className={cn("group flex overflow-hidden [gap:var(--gap)]", className)}
            style={{ "--gap": "3rem", "--duration": duration } as React.CSSProperties}
        >
            <div
                className={cn(
                    "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]",
                    reverse && "[animation-direction:reverse]"
                )}
            >
                {children}
                {children}
            </div>
        </div>
    );
}
