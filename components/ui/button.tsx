"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "outline" | "ghost";
    size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-105 shadow-lg hover:shadow-purple-500/25":
                            variant === "default",
                        "bg-gray-800 text-white hover:bg-gray-700":
                            variant === "secondary",
                        "border border-purple-500/30 text-purple-400 hover:bg-purple-500/10":
                            variant === "outline",
                        "text-gray-300 hover:text-white hover:bg-white/5":
                            variant === "ghost",
                    },
                    {
                        "h-10 px-4 py-2 text-sm": size === "default",
                        "h-8 px-3 text-xs": size === "sm",
                        "h-12 px-6 text-base": size === "lg",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
