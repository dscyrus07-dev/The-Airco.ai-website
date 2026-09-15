import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PrimaryButton({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="group inline-flex h-12 items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700"
        >
            {children}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
    );
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-purple-500/30 px-8 font-semibold text-purple-400 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/10"
        >
            {children}
        </Link>
    );
}
