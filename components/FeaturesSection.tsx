"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    Brain,
    MessageSquare,
    Bell,
    Database,
    Lock,
    Zap,
    TrendingUp
} from "lucide-react";

// --- Live Icon Components ---

const LiveDashboardIcon = () => (
    <div className="relative w-full h-full flex items-end justify-center gap-1 p-2">
        {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
            <motion.div
                key={i}
                className="w-1.5 bg-purple-400 rounded-t-sm"
                animate={{ height: [`${h * 40}%`, `${(h + 0.2) * 80}%`, `${h * 40}%`] }}
                transition={{ duration: 1.5 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
            />
        ))}
    </div>
);

const LiveBrainIcon = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <Brain className="w-8 h-8 text-blue-400 z-10" />
        <motion.div
            className="absolute inset-0 bg-blue-500/30 rounded-full blur-md"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        {[...Array(3)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-300 rounded-full"
                animate={{
                    x: [0, Math.cos(i) * 20, 0],
                    y: [0, Math.sin(i) * 20, 0],
                    opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
            />
        ))}
    </div>
);

const LiveChatIcon = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute top-3 left-3 w-6 h-4 bg-green-500/20 rounded-lg rounded-tl-none border border-green-500/50 flex items-center justify-center gap-0.5">
            {[0, 1, 2].map(i => (
                <motion.div
                    key={i}
                    className="w-1 h-1 bg-green-400 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                />
            ))}
        </div>
        <MessageSquare className="w-8 h-8 text-green-400 absolute bottom-2 right-2" />
    </div>
);

const LiveAlertIcon = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
            <Bell className="w-8 h-8 text-yellow-400" />
        </motion.div>
        <motion.div
            className="absolute top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-black"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        />
    </div>
);

const LiveIntegrationIcon = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <Database className="w-6 h-6 text-pink-400 z-10" />
        {[0, 1].map(i => (
            <motion.div
                key={i}
                className="absolute w-full h-full border border-pink-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10 - i * 4, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-2 h-2 bg-pink-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
        ))}
    </div>
);

const LiveSecurityIcon = () => (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
        <Lock className="w-8 h-8 text-red-400 z-10" />
        <motion.div
            className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
    </div>
);

const features = [
    {
        icon: LiveDashboardIcon,
        title: "Real-Time Interactive Dashboards",
        description: "Visualize your data with drag-and-drop dashboards that update in real-time.",
        color: "from-purple-500/20 to-indigo-500/20",
        delay: 0,
    },
    {
        icon: LiveBrainIcon,
        title: "AI-Powered Forecasting",
        description: "Predict sales, churn, and revenue with machine learning models.",
        color: "from-blue-500/20 to-cyan-500/20",
        delay: 0.2,
    },
    {
        icon: LiveChatIcon,
        title: "Natural Language Insights",
        description: "Ask questions in plain English and get instant AI-generated answers.",
        color: "from-green-500/20 to-emerald-500/20",
        delay: 0.1,
    },
    {
        icon: LiveAlertIcon,
        title: "Smart Alerts & Notifications",
        description: "Get alerts via Email, WhatsApp, and Slack when KPIs change.",
        color: "from-yellow-500/20 to-orange-500/20",
        delay: 0.3,
    },
    {
        icon: LiveIntegrationIcon,
        title: "200+ Data Integrations",
        description: "Connect Excel, APIs, Firebase, SQL, and more data sources seamlessly.",
        color: "from-pink-500/20 to-rose-500/20",
        delay: 0.2,
    },
    {
        icon: LiveSecurityIcon,
        title: "Secure Role-Based Access",
        description: "Enterprise-grade security with role-based permissions and audit logs.",
        color: "from-red-500/20 to-orange-500/20",
        delay: 0.4,
    }
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 relative overflow-hidden bg-gray-950">
            {/* Animated Background Flow Lines */}
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full opacity-10" preserveAspectRatio="none">
                    <motion.path
                        d="M0,50 Q100,100 200,50 T400,50 T600,50 T800,50 T1000,50"
                        fill="none"
                        stroke="url(#grad1)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1, pathOffset: [0, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 0 }} />
                            <stop offset="50%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>


            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AiRCo Insights?</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Transforming raw data into actionable intelligence with state-of-the-art AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => {
                        const LiveIcon = feature.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.6, delay: feature.delay }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl -z-10 group-hover:from-white/10 transition-colors duration-500" />
                                <div className="p-8 h-full backdrop-blur-md bg-black/40 border border-white/10 rounded-3xl transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)] group-hover:-translate-y-2">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg border border-white/5 transition-transform duration-300 group-hover:scale-110`}>
                                        <LiveIcon />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                                        {feature.title}
                                        {feature.title.includes("Forecasting") && <TrendingUp className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
