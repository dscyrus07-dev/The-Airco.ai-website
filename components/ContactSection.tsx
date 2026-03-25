"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappMessage = `Hello! I'm ${formData.name} from ${formData.company}. ${formData.message}`;
        const whatsappUrl = `https://wa.me/917021320783?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-black">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-[1]" />
            <div className="absolute top-1/2 left-0 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[128px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-[128px] pointer-events-none translate-x-1/2 translate-y-1/2" />


            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center rotate-3"
                    >
                        <MessageSquare className="w-8 h-8 text-purple-400" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">with AI?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Request a personalized demo or talk to our solutions team today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/0"
                    >
                        <div className="bg-gray-900/90 backdrop-blur-xl p-8 rounded-2xl h-full">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-500"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-500"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Company</label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-500"
                                        placeholder="Company Name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Message</label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all resize-none placeholder:text-gray-500"
                                        placeholder="Tell us about your needs..."
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg shadow-lg shadow-purple-500/25">
                                    <Sparkles className="mr-2 h-5 w-5" />
                                    Request Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <motion.a
                            href="https://wa.me/917021320783"
                            target="_blank"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer"
                        >
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Phone className="w-8 h-8 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">WhatsApp Us</h3>
                                <p className="text-green-400 text-lg font-medium">+91 70213 20783</p>
                                <p className="text-gray-400">Available 24/7</p>
                            </div>
                        </motion.a>

                        <motion.a
                            href="mailto:info@the-airco.com"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer"
                        >
                            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail className="w-8 h-8 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
                                <p className="text-purple-400 text-lg font-medium">info@the-airco.com</p>
                                <p className="text-gray-400">We'll respond within 24 hours</p>
                            </div>
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl"
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
                            <div className="space-y-4">
                                {[
                                    { label: "Schedule a Demo", msg: "Hi! I'd like to schedule a demo for AiRCo Insights." },
                                    { label: "Get Pricing", msg: "Hi! I'd like to learn more about AiRCo pricing." },
                                    { label: "Technical Support", msg: "Hi! I have a technical question about AiRCo." }
                                ].map((action, i) => (
                                    <a
                                        key={i}
                                        href={`https://wa.me/917021320783?text=${encodeURIComponent(action.msg)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between text-gray-300 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                                    >
                                        <span className="font-medium group-hover:text-white transition-colors">{action.label}</span>
                                        <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
