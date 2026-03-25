"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Globe,
    Instagram,
    Linkedin,
    Heart,
    Shield,
    Zap,
    Brain,
    Workflow,
    MessageSquare,
    Rocket,
    Sparkles,
    MapPin,
    Phone,
    BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden border-t border-gray-800/50">
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
                                <img src="/logo.png" alt="The Air Co Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                The Air Co.
                            </span>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-300 mb-8 leading-relaxed text-base max-w-lg"
                        >
                            Data Speaks. AiRCo Listens. Transform complex business data into
                            clear, actionable intelligence with our AI-powered analytics
                            platform.
                        </motion.p>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex space-x-4 mb-6"
                        >
                            <motion.a
                                href="https://www.instagram.com/the_airco"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="bg-gray-800 p-3 rounded-full hover:bg-purple-500/20 transition-colors"
                            >
                                <Instagram className="w-5 h-5 text-purple-400" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/company/theairco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="bg-gray-800 p-3 rounded-full hover:bg-blue-500/20 transition-colors"
                            >
                                <Linkedin className="w-5 h-5 text-blue-400" />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Products */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-lg font-semibold mb-6 flex items-center gap-2 text-purple-300"
                        >
                            <Zap className="w-5 h-5 text-purple-400" />
                            Products
                        </motion.h3>
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            {[
                                { name: "AiRCo Insights", icon: Brain, href: "#products" },
                                { name: "AiRCo Secure", icon: Shield, href: "#products" },
                                { name: "AiRCo PMS", icon: Workflow, href: "#products" },
                                { name: "AiRCo Bot", icon: MessageSquare, href: "#products" },
                                { name: "AiRCo ARS", icon: Sparkles, href: "#products" },
                                { name: "AiRCo Services", icon: Rocket, href: "#products" },
                            ].map((product) => (
                                <motion.li
                                    key={product.name}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        href={product.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-3 text-sm group"
                                    >
                                        <product.icon className="w-4 h-4 text-purple-500/50 group-hover:text-purple-400 transition-colors" />
                                        {product.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Company */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-lg font-semibold mb-6 flex items-center gap-2 text-blue-300"
                        >
                            <Globe className="w-5 h-5 text-blue-400" />
                            Company
                        </motion.h3>
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            {[
                                { name: "About Us", href: "https://www.the-airco.com/", target: "_blank" },
                                { name: "Use Cases", href: "#use-cases" },
                                { name: "Security", href: "#security" },
                                { name: "Contact", href: "#contact" },
                            ].map((item) => (
                                <motion.li
                                    key={item.name}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        href={item.href}
                                        target={item.target || "_self"}
                                        rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-lg font-semibold mb-6 flex items-center gap-2 text-green-300"
                        >
                            <Mail className="w-5 h-5 text-green-400" />
                            Contact
                        </motion.h3>
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="w-4 h-4 text-green-500/50" />
                                <a
                                    href="https://wa.me/917021320783"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-400 transition-colors"
                                >
                                    +91 70213 20783
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-4 h-4 text-green-500/50" />
                                <span>info@the-airco.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-4 h-4 text-green-500/50 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">
                                    Mumbai, Maharashtra, India
                                </span>
                            </li>
                        </motion.ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800/50 mt-12 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <span>Made with</span>
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Heart className="w-5 h-5 text-red-400 fill-red-400" />
                            </motion.span>
                            <span>by TheAiRCo. © {currentYear}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Globe className="w-4 h-4" />
                            <a
                                href="https://theAirCo.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-400 transition-colors"
                            >
                                insights.theairco.ai
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
