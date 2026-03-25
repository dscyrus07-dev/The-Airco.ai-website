"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Server, CheckCircle, FileCheck, Eye } from "lucide-react";

export default function SecuritySection() {
    return (
        <section id="security" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-black/80 z-0"></div>
                <img
                    src="/images/Black Gradient Technology YouTube Banner.png"
                    alt="Security Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-green-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center"
                    >
                        <Shield className="w-10 h-10 text-green-400" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Enterprise-Grade <span className="text-green-400">Security</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Built with security from the ground up. Zero compromise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { icon: Lock, title: "End-to-End Encryption", desc: "AES-256 encryption for data at rest and in transit." },
                        { icon: Shield, title: "Role-Based Access", desc: "Granular permissions with complete audit trails." },
                        { icon: Server, title: "Secure Infrastructure", desc: "99.9% uptime SLA on enterprise cloud." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                        >
                            <item.icon className="w-10 h-10 text-green-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-70"
                >
                    {["GDPR Compliant", "SOC 2 Compliant", "ISO 27001", "CCPA Ready"].map((badge, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-300 font-medium px-4 py-2 bg-white/5 rounded-full border border-white/10">
                            <CheckCircle className="w-4 h-4 text-green-400" /> {badge}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
