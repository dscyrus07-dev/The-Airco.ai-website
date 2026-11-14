"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    Video,
    FileBarChart2,
    UserCheck,
    Brain,
    Ticket,
    Users,
    ChevronLeft,
    ChevronRight,
    Circle,
} from "lucide-react";

const screens = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        image: "/dashboard/airco-secure/01_dashboard.png",
        headline: "Your entire office, summarised in one screen",
        color: "text-blue-400",
        badge: "Live",
        badgeColor: "bg-green-500",
        explain: [
            {
                stat: "14 Present Today",
                what: "Know exactly who showed up — no register, no calls to HR. The camera did the roll call.",
            },
            {
                stat: "76% Avg Productivity",
                what: "AI watches working patterns across the floor and gives you a real productivity score — not self-reported.",
            },
            {
                stat: "8/9 Cameras Active",
                what: "See your camera health at a glance. If one goes offline, you know instantly.",
            },
            {
                stat: "17 Footfall Today",
                what: "Track everyone who walked in — employees, visitors, vendors — without any check-in process.",
            },
        ],
    },
    {
        id: "live-feed",
        label: "Live Feed",
        icon: Video,
        image: "/dashboard/airco-secure/02_live_feed.png",
        headline: "All your cameras. One screen. Right now.",
        color: "text-green-400",
        badge: "9 Cameras Live",
        badgeColor: "bg-green-500",
        explain: [
            {
                stat: "Entrance · Common · Restricted · Office",
                what: "Cameras are grouped by zone so you're not scrolling through chaos — just tap the zone you want to check.",
            },
            {
                stat: "Fullscreen Wall mode",
                what: "One click turns your screen into a full security wall. Perfect for a dedicated security monitor.",
            },
            {
                stat: "Start / Stop per camera",
                what: "Start or stop AI processing on any camera individually. Save compute when a zone is closed.",
            },
            {
                stat: "Live labels on every feed",
                what: "Each camera shows its zone name and location — no guessing which camera is which corner.",
            },
        ],
    },
    {
        id: "reports",
        label: "Reports",
        icon: FileBarChart2,
        image: "/dashboard/airco-secure/03_todays_report.png",
        headline: "Today's full story, ready to download",
        color: "text-yellow-400",
        badge: "Export PDF",
        badgeColor: "bg-yellow-600",
        explain: [
            {
                stat: "Who was Late Today?",
                what: "Instead of chasing timesheets, the camera tells you who walked in late — with the exact timestamp.",
            },
            {
                stat: "Phone Usage Today",
                what: "AI flags employees who used their personal phone during work hours — automatically, no supervisor needed.",
            },
            {
                stat: "Today's Violations",
                what: "Any policy breach — restricted zone entry, long phone use, extended idle — gets flagged here with who and when.",
            },
            {
                stat: "Complete Attendance Log",
                what: "Every employee's first entry, last seen, total hours, and status — in one scrollable, searchable table.",
            },
        ],
    },
    {
        id: "employee-analysis",
        label: "Employee Analysis",
        icon: UserCheck,
        image: "/dashboard/airco-secure/04_employee_analysis.png",
        headline: "Performance rankings without any self-reporting",
        color: "text-purple-400",
        badge: "AI Ranked",
        badgeColor: "bg-purple-600",
        explain: [
            {
                stat: "Top 5 Performers",
                what: "The system ranks employees by actual behaviour — attendance + activity + hours — not manager gut-feel.",
            },
            {
                stat: "Top 5 Best Attendance",
                what: "Who shows up, every day, on time. 100% attendance highlighted automatically.",
            },
            {
                stat: "Top 5 Late Behaviour",
                what: "Spot patterns before they become problems. Know who's regularly late before the month-end review.",
            },
            {
                stat: "Top 5 Low Work Hours",
                what: "Flag employees who consistently leave early or clock fewer hours — with camera-verified data, not estimates.",
            },
        ],
    },
    {
        id: "ai-insights",
        label: "AI Insights",
        icon: Brain,
        image: "/dashboard/airco-secure/05_ai_insights.png",
        headline: "Six AI models running silently in the background",
        color: "text-cyan-400",
        badge: "6 Models Active",
        badgeColor: "bg-cyan-700",
        explain: [
            {
                stat: "Face Recognition — 98% accuracy",
                what: "The camera recognises each registered employee the moment they walk in. No ID card, no pin, no sign-in sheet.",
            },
            {
                stat: "Activity Detection — 94% accuracy",
                what: "Knows if someone is working, idle, or on the move — from camera footage alone. No wearables, no trackers.",
            },
            {
                stat: "Phone Usage Detection — 91% accuracy",
                what: "Automatically spots if someone picks up their personal phone during work hours. Flags it as a ticket.",
            },
            {
                stat: "Access Control",
                what: "Assign specific employees access to specific zones. If anyone else enters, you get an instant alert.",
            },
        ],
    },
    {
        id: "tickets",
        label: "Tickets",
        icon: Ticket,
        image: "/dashboard/airco-secure/06_tickets.png",
        headline: "Alerts that explain themselves — no footage review needed",
        color: "text-red-400",
        badge: "3 Open",
        badgeColor: "bg-red-600",
        explain: [
            {
                stat: "Critical: Restricted Zone Entry",
                what: "Someone walked into the server room who shouldn't have. The ticket tells you: who, which camera, what time. One click to resolve.",
            },
            {
                stat: "Medium: Extended Phone Usage",
                what: "An employee used their phone for over 5 minutes during work. Flagged automatically — no manager had to watch.",
            },
            {
                stat: "Low: Idle Alert",
                what: "An employee was idle for 45+ minutes with no activity. Soft flag — useful for productivity reviews.",
            },
            {
                stat: "Resolve or Ignore",
                what: "Every ticket is actionable. Mark it resolved when handled, or ignore if it was a false positive. Full audit trail kept.",
            },
        ],
    },
    {
        id: "employees",
        label: "Employees",
        icon: Users,
        image: "/dashboard/airco-secure/07_employees.png",
        headline: "Register once. The camera remembers forever.",
        color: "text-orange-400",
        badge: "16 Registered",
        badgeColor: "bg-orange-600",
        explain: [
            {
                stat: "Add Employee",
                what: "Fill in name, department, role, and upload a few face photos. That's it. The AI trains itself in minutes.",
            },
            {
                stat: "Face Trained status",
                what: "Each employee shows whether the system has learned their face. Once trained, every camera on-site recognises them.",
            },
            {
                stat: "Live presence status",
                what: "The employee list shows who is Present or Absent right now — updated live from camera feeds.",
            },
            {
                stat: "No hardware changes needed",
                what: "Works with your existing CCTV. No new cameras, no access cards, no biometric terminals to install.",
            },
        ],
    },
];

export function AircoSecureDashboard() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const advance = useCallback(() => {
        setActive((p) => (p + 1) % screens.length);
    }, []);

    useEffect(() => {
        if (paused) return;
        const t = setInterval(advance, 5000);
        return () => clearInterval(t);
    }, [paused, advance]);

    const screen = screens[active];
    const Icon = screen.icon;

    return (
        <section className="py-20">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                {/* Section header */}
                <div className="mb-10 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                        Inside the product
                    </p>
                    <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                        See how it actually looks
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Every screen you see below is the real Airco Secure dashboard — no mockups,
                        no stock UI. This is what your security team sees every day.
                    </p>
                </div>

                {/* Tab nav */}
                <div className="mb-6 flex flex-wrap justify-center gap-2">
                    {screens.map((s, i) => {
                        const SIcon = s.icon;
                        return (
                            <button
                                key={s.id}
                                onClick={() => { setActive(i); setPaused(true); }}
                                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                    active === i
                                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                                        : "border border-white/10 bg-white/5 text-gray-400 hover:border-purple-500/40 hover:text-white"
                                }`}
                            >
                                <SIcon className="h-3.5 w-3.5" />
                                {s.label}
                            </button>
                        );
                    })}
                </div>

                {/* Browser chrome + screenshot */}
                <div
                    className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {/* Browser top bar */}
                    <div className="flex items-center gap-3 border-b border-white/10 bg-gray-900 px-4 py-3">
                        <div className="flex gap-1.5">
                            <span className="h-3 w-3 rounded-full bg-red-500/70" />
                            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                            <span className="h-3 w-3 rounded-full bg-green-500/70" />
                        </div>
                        <div className="flex flex-1 items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5">
                            <Circle className="h-3 w-3 fill-green-400 text-green-400" />
                            <span className="text-xs text-gray-400">app.aircosecure.com / {screen.id}</span>
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white ${screen.badgeColor}`}>
                            {screen.badge}
                        </span>
                    </div>

                    {/* Screenshot */}
                    <div className="relative aspect-[16/8] w-full overflow-hidden bg-gray-100">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={screen.id}
                                src={screen.image}
                                alt={screen.label}
                                initial={{ opacity: 0, scale: 1.03 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="h-full w-full object-contain object-top"
                            />
                        </AnimatePresence>

                        {/* Prev / Next */}
                        <button
                            onClick={() => { setActive((active - 1 + screens.length) % screens.length); setPaused(true); }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition hover:bg-black/80"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => { setActive((active + 1) % screens.length); setPaused(true); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition hover:bg-black/80"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                        {/* Progress dots */}
                        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                            {screens.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setActive(i); setPaused(true); }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        i === active ? "w-6 bg-purple-400" : "w-1.5 bg-white/30"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Auto-play progress bar */}
                    {!paused && (
                        <motion.div
                            key={`${screen.id}-bar`}
                            className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                        />
                    )}
                </div>

                {/* Feature explanation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={screen.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="mt-8"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <div className={`rounded-xl border border-white/10 bg-white/5 p-3 ${screen.color}`}>
                                <Icon className="h-6 w-6" />
                            </div>
                            <div>
                                <p className={`text-xs font-bold uppercase tracking-widest ${screen.color}`}>
                                    {screen.label}
                                </p>
                                <h3 className="text-xl font-bold text-white md:text-2xl">
                                    {screen.headline}
                                </h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {screen.explain.map((item, i) => (
                                <motion.div
                                    key={item.stat}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-purple-500/30 transition-colors"
                                >
                                    <p className={`mb-2 text-sm font-bold ${screen.color}`}>
                                        {item.stat}
                                    </p>
                                    <p className="text-sm leading-relaxed text-gray-400">
                                        {item.what}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
