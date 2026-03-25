"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sparkles, BarChart3 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        e.preventDefault();

        if (pathname !== "/") {
            window.location.href = `/#${sectionId}`;
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth",
            });
            setMobileMenuOpen(false);
        }
    };

    const navItems = [
        { name: "Home", href: "/", isPage: true },
        { name: "Products", sectionId: "products" },
        { name: "Features", sectionId: "features" },
        { name: "Use Cases", sectionId: "use-cases" },
        { name: "Security", sectionId: "security" },
        { name: "Contact", sectionId: "contact" },
    ];

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-black/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl"
                    : "bg-black/10 backdrop-blur-sm"
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="text-xl md:text-2xl font-bold text-white relative group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link href="/" className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                                    <img src="/logo.png" alt="The Air Co Logo" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-lg leading-tight">
                                        The Air Co.
                                    </span>
                                    <span className="text-gray-400 text-[10px] tracking-wider uppercase">
                                        Data Intelligence Platform
                                    </span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item, index) =>
                                item.isPage ? (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                                        whileHover={{ y: -2 }}
                                    >
                                        <Link
                                            href={item.href || "/"}
                                            className="relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium group"
                                        >
                                            {item.name}
                                            <motion.span
                                                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                                                initial={{ width: 0 }}
                                                whileHover={{ width: "100%" }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <motion.a
                                        key={item.name}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                                        href={`#${item.sectionId}`}
                                        onClick={(e) => scrollToSection(e, item.sectionId!)}
                                        className="relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium group"
                                        whileHover={{ y: -2 }}
                                    >
                                        {item.name}
                                        <motion.span
                                            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </motion.a>
                                )
                            )}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                            >
                                <Link href="#contact">
                                    <Button className="flex items-center gap-2">
                                        <Sparkles className="h-4 w-4" />
                                        Request Demo
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-purple-500/20 z-40 md:hidden"
                    >
                        <div className="px-4 sm:px-6 py-4 space-y-4">
                            {navItems.map((item, index) =>
                                item.isPage ? (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href || "/"}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-2"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <motion.a
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        href={`#${item.sectionId}`}
                                        onClick={(e) => {
                                            scrollToSection(e, item.sectionId!);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="block text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-2"
                                    >
                                        {item.name}
                                    </motion.a>
                                )
                            )}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                                className="pt-4"
                            >
                                <Link href="#contact">
                                    <Button className="w-full flex items-center justify-center gap-2">
                                        <Sparkles className="h-4 w-4" />
                                        Request Demo
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
