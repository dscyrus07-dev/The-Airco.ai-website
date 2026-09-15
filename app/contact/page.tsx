"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import SiteShell from "@/components/site/SiteShell";
import { products } from "@/lib/data/products";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        product: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const parts = [
            `Hello! I'm ${formData.name}`,
            formData.company && `from ${formData.company}`,
            formData.product && `inquiring about ${formData.product}`,
            formData.message,
        ].filter(Boolean);
        const whatsappUrl = `https://wa.me/917021320783?text=${encodeURIComponent(parts.join(" ") + ".")}`;
        window.open(whatsappUrl, "_blank");
    };

    const inputClass =
        "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500";

    return (
        <SiteShell>
            <section className="relative overflow-hidden pb-24 pt-40">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-[24rem] w-[50rem] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[140px]" />
                    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
                </div>

                <div className="container relative z-10 mx-auto max-w-5xl px-4 md:px-6">
                    <div className="mb-14 text-center">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                            Contact
                        </p>
                        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                            Let&apos;s Talk About Your Data.
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                            Whether you&apos;re exploring a single solution or looking to bring multiple
                            data streams into one intelligence layer, we&apos;d like to hear about what
                            you&apos;re working on.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl lg:col-span-3"
                        >
                            <h2 className="mb-6 text-2xl font-bold text-white">
                                Let&apos;s build something useful.
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className={inputClass}
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Work Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={inputClass}
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Company</label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className={inputClass}
                                        placeholder="Company name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Inquire about</label>
                                    <select
                                        value={formData.product}
                                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                                        className={inputClass}
                                    >
                                        <option value="" className="bg-gray-900">Select a product</option>
                                        {products.map((p) => (
                                            <option key={p.slug} value={p.name} className="bg-gray-900">
                                                {p.name}
                                            </option>
                                        ))}
                                        <option value="General" className="bg-gray-900">General Enquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Message</label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className={`${inputClass} resize-none`}
                                        placeholder="Tell us a little about what you're working on..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
                                >
                                    <Send className="h-4 w-4" />
                                    Send Message
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </form>
                            <p className="mt-4 text-center text-xs text-gray-500">
                                We&apos;ll only use your information to respond to your enquiry.
                            </p>
                        </motion.div>

                        {/* Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="space-y-5 lg:col-span-2"
                        >
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                                <h3 className="mb-4 text-lg font-bold text-white">Email Us</h3>
                                <div className="space-y-3">
                                    <a
                                        href="mailto:info@the-airco.com"
                                        className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition-colors hover:border-purple-500/40 hover:text-purple-300"
                                    >
                                        info@the-airco.com
                                    </a>
                                    <a
                                        href="mailto:sales@the-airco.com"
                                        className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-300 transition-colors hover:border-purple-500/40 hover:text-purple-300"
                                    >
                                        sales@the-airco.com
                                    </a>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                                <h3 className="mb-4 text-lg font-bold text-white">Quick Actions</h3>
                                <div className="space-y-2">
                                    {[
                                        { label: "Schedule a Demo", msg: "Hi! I'd like to schedule a demo." },
                                        { label: "Get Pricing", msg: "Hi! I'd like to learn more about AiRCO pricing." },
                                        { label: "Technical Support", msg: "Hi! I have a technical question about AiRCO." },
                                    ].map((action) => (
                                        <a
                                            key={action.label}
                                            href={`https://wa.me/917021320783?text=${encodeURIComponent(action.msg)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                                        >
                                            {action.label}
                                            <ArrowRight className="h-4 w-4 opacity-50" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/[0.08] to-blue-500/[0.04] p-8">
                                <p className="text-sm leading-relaxed text-gray-400">
                                    📍 Mumbai, India — we&apos;ll only use your information to respond to
                                    your enquiry.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </SiteShell>
    );
}
