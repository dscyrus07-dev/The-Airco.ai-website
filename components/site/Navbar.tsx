"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";
import { cn } from "@/lib/utils";

const solutionLinks = products.map((p) => ({
    name: p.name,
    href: `/products/${p.slug}`,
    category: p.category,
}));

const industryLinks = industries.map((i) => ({
    name: i.name,
    href: `/industries/${i.slug}`,
}));

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLink = (href: string, name: string) => (
        <Link
            href={href}
            className={cn(
                "relative text-sm font-medium transition-colors duration-200",
                pathname === href ? "text-white" : "text-gray-300 hover:text-white"
            )}
        >
            {name}
            {pathname === href && (
                <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-purple-400 to-blue-400"
                />
            )}
        </Link>
    );

    const dropdown = (
        id: string,
        label: string,
        items: { name: string; href: string; category?: string }[],
        viewAll: { name: string; href: string }
    ) => (
        <div key={id} className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {label}
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-3 group-hover:block">
                <div className="w-72 overflow-hidden rounded-2xl border border-white/10 bg-gray-950/95 shadow-2xl shadow-purple-500/10 backdrop-blur-xl">
                    <div className="max-h-80 overflow-y-auto p-2">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-xl px-4 py-2.5 transition-colors hover:bg-purple-500/10"
                            >
                                <span className="block text-sm font-medium text-gray-200 group-hover:text-white">
                                    {item.name}
                                </span>
                                {item.category && (
                                    <span className="block text-xs text-gray-500">{item.category}</span>
                                )}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href={viewAll.href}
                        className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-sm font-semibold text-purple-400 hover:bg-purple-500/10"
                    >
                        {viewAll.name}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );

    const mobileAccordion = (
        id: string,
        label: string,
        items: { name: string; href: string }[],
        viewAll: { name: string; href: string }
    ) => (
        <div key={id} className="border-b border-white/5">
            <button
                onClick={() => setOpenSection(openSection === id ? null : id)}
                className="flex w-full items-center justify-between py-3 text-base font-medium text-gray-200"
            >
                {label}
                <ChevronDown
                    className={cn(
                        "w-4 h-4 transition-transform",
                        openSection === id && "rotate-180"
                    )}
                />
            </button>
            <AnimatePresence>
                {openSection === id && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-1 pb-3 pl-3">
                            {items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-1.5 text-sm text-gray-400 hover:text-purple-400"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href={viewAll.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-1.5 text-sm font-semibold text-purple-400"
                            >
                                {viewAll.name} →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={cn(
                    "fixed top-0 z-50 w-full transition-all duration-300",
                    isScrolled
                        ? "border-b border-purple-500/20 bg-black/90 shadow-2xl backdrop-blur-xl"
                        : "bg-black/20 backdrop-blur-sm"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/logo-white.png"
                                alt="AiRCO — From Data to Intelligence"
                                className="h-11 w-auto"
                            />
                        </Link>

                        <nav className="hidden items-center gap-8 md:flex">
                            {navLink("/", "Home")}
                            {navLink("/about", "About")}
                            {dropdown(
                                "solutions",
                                "Solutions",
                                solutionLinks,
                                { name: "All Solutions", href: "/solutions" }
                            )}
                            {dropdown(
                                "industries",
                                "Industries",
                                industryLinks,
                                { name: "All Industries", href: "/why-airco" }
                            )}
                            {navLink("/why-airco", "Why AiRCO")}
                            {navLink("/contact", "Contact")}

                            <Link
                                href="/contact"
                                className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-full p-[1px]"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a78bfa_0%,#3b82f6_50%,#a78bfa_100%)]" />
                                <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-5 text-sm font-semibold text-white backdrop-blur-3xl transition-colors group-hover:bg-gray-900">
                                    Talk to Us
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </span>
                            </Link>
                        </nav>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20 md:hidden"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-0 top-[72px] z-40 max-h-[80vh] overflow-y-auto border-b border-purple-500/20 bg-black/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="px-4 py-4 sm:px-6">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "/about" },
                            ].map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block border-b border-white/5 py-3 text-base font-medium text-gray-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {mobileAccordion(
                                "solutions",
                                "Solutions",
                                solutionLinks,
                                { name: "All Solutions", href: "/solutions" }
                            )}
                            {mobileAccordion(
                                "industries",
                                "Industries",
                                industryLinks,
                                { name: "Why AiRCO", href: "/why-airco" }
                            )}
                            <Link
                                href="/why-airco"
                                onClick={() => setMobileOpen(false)}
                                className="block border-b border-white/5 py-3 text-base font-medium text-gray-200"
                            >
                                Why AiRCO
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="block border-b border-white/5 py-3 text-base font-medium text-gray-200"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-white"
                            >
                                Talk to Us
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
