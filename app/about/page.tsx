import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";
import { PrimaryButton } from "@/components/site/Buttons";
import { SectionHeading, ShimmerText, FadeIn } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Traction } from "@/components/visuals/Traction";

export const metadata: Metadata = {
    title: "About AiRCO | Data Should Be Understood, Not Just Stored",
    description:
        "AiRCO — AI Revolution Company Pvt Ltd, Mumbai — is a data analytics company specialising in transforming raw, unstructured data into meaningful, structured information.",
};

const beliefs = [
    {
        title: "Data is only valuable once it's understood",
        description: "Collecting data isn't the goal — understanding it, and acting on it, is.",
    },
    {
        title: "Intelligence should be structured, not scattered",
        description: "Fragmented inputs across systems create blind spots. A unified view removes them.",
    },
    {
        title: "Automation should support judgment, not replace it",
        description:
            "Our solutions handle the repetitive review work, so people can focus on decisions that need human judgement.",
    },
    {
        title: "Every data type has something to say",
        description:
            "Video, audio, documents, and conversations all carry information — most organisations only make use of a fraction of it.",
    },
];

const approach = [
    {
        title: "Raw Data",
        description:
            "We start with what already exists — camera feeds, call recordings, documents, conversations, and system data — wherever it's currently fragmented across your environment.",
    },
    {
        title: "Processing",
        description:
            "That raw input is processed using AI and advanced analytical techniques suited to its type — computer vision for video, natural language processing for text and speech, and structured extraction for documents.",
    },
    {
        title: "Context",
        description:
            "Processed data is analysed in context, not in isolation — so patterns, anomalies, and relationships become visible.",
    },
    {
        title: "Intelligence",
        description:
            "The result is structured, meaningful insight — a clear, centralised view instead of fragments spread across systems.",
    },
    {
        title: "Action",
        description:
            "That insight is delivered in a form your teams can act on immediately — an alert, a flagged transaction, a qualified lead, a compliance gap.",
    },
];

const missionSteps = [
    { step: "01", label: "DATA", description: "Fragmented information" },
    { step: "02", label: "UNDERSTAND", description: "Patterns become visible" },
    { step: "03", label: "DISCOVER", description: "Important signals" },
    { step: "04", label: "DECIDE", description: "Decision-ready insight" },
    { step: "05", label: "ACT", description: "Clear action" },
];

const certifications = [
    {
        name: "ISO/IEC 27001:2022",
        subtitle: "Information Security (ISMS)",
        certNo: "305026010959IS",
        issuer: "QRO Certification LLP",
        validity: "Valid to 08 Jan 2029",
        description: "Audited controls protecting client data end to end.",
    },
    {
        name: "GDPR Compliance",
        subtitle: "General Data Protection Regulation",
        certNo: "2026010919",
        issuer: "Eurocert Inspection Ltd",
        validity: "Valid to 08 Jan 2029",
        description: "Personal data handled to EU-grade privacy standards.",
    },
    {
        name: "MSME · Udyam",
        subtitle: "Registered Micro Enterprise (Services)",
        certNo: "UDYAM-MH-18-0510961",
        issuer: "Ministry of MSME, Govt. of India",
        validity: "Classified 07 Jan 2026",
        description: "Eligible for MSE benefits in public procurement.",
    },
    {
        name: "DPIIT Startup India",
        subtitle: "Recognised Startup · AI industry",
        certNo: "DIPP238628",
        issuer: "DPIIT, Govt. of India",
        validity: "Valid to 30 Jan 2035",
        description: "Eligible for startup relaxations in government tenders.",
    },
];

const certifiedScope = ["Collection", "Processing", "Storage", "Analysis"];

export default function AboutPage() {
    return (
        <SiteShell>
            <PageHero
                eyebrow="About AiRCO"
                title="Built Around a Simple Idea: Data Should Be Understood, Not Just Stored."
                description="AiRCO exists to turn the data your organisation already generates into intelligence you can actually use. Data in. Intelligence out."
            >
                <PrimaryButton href="/contact">Get in Touch</PrimaryButton>
            </PageHero>

            {/* Who we are */}
            <section className="py-16">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <FadeIn>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                { label: "Company", value: "AI Revolution Company Pvt Ltd" },
                                { label: "Location", value: "Mumbai, India" },
                                { label: "Focus", value: "Data / AI / Analytics" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
                                >
                                    <p className="text-xs uppercase tracking-widest text-purple-400">
                                        {item.label}
                                    </p>
                                    <p className="mt-2 font-semibold text-white">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.15}>
                        <p className="mt-10 text-lg leading-relaxed text-gray-300">
                            <span className="font-semibold text-white">AiRCO — Ai Revolution Company Pvt Ltd</span>{" "}
                            — is a data analytics company that specialises in transforming raw,
                            unstructured data into meaningful, structured information. We combine
                            artificial intelligence with advanced analytical techniques to convert
                            complex, fragmented data into clear, actionable insight. Our work spans
                            video, audio, documents, text, and conversational data — all brought
                            together into a single intelligence layer that helps organisations
                            understand their data, uncover opportunities, and make better decisions.
                            We are based in Mumbai, India.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* What we believe */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <SectionHeading eyebrow="What we believe" title="Data should be understood, not just stored." />
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {beliefs.map((belief, i) => (
                            <FadeIn key={belief.title} delay={(i % 2) * 0.1}>
                                <SpotlightCard className="h-full p-8">
                                    <span className="text-xs font-bold tracking-widest text-purple-500">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="mt-3 mb-2 text-xl font-bold text-white">{belief.title}</h3>
                                    <p className="leading-relaxed text-gray-400">{belief.description}</p>
                                </SpotlightCard>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our approach */}
            <section className="py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Our approach"
                        title={
                            <>
                                Raw data in. <ShimmerText>Intelligence out.</ShimmerText>
                            </>
                        }
                    />
                    <div className="space-y-4">
                        {approach.map((step, i) => (
                            <FadeIn key={step.title} delay={i * 0.08}>
                                <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-purple-500/30 md:flex-row md:items-center md:gap-8">
                                    <span className="text-3xl font-bold text-purple-500/40">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                        <p className="mt-1 leading-relaxed text-gray-400">{step.description}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Mission"
                        title="Understand. Uncover. Decide faster."
                        description="Our mission is to help organisations understand their data, uncover the opportunities within it, and make faster, better-informed decisions."
                    />
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                        {missionSteps.map((step, i) => (
                            <FadeIn key={step.label} delay={i * 0.1}>
                                <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/[0.06] to-blue-500/[0.03] p-6 text-center">
                                    <span className="text-xs font-bold tracking-widest text-purple-400">
                                        {step.step}
                                    </span>
                                    <p className="mt-2 font-bold tracking-wider text-white">{step.label}</p>
                                    <p className="mt-2 text-sm text-gray-400">{step.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="py-24">
                <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
                    <SectionHeading eyebrow="Vision" title="Every data source, one intelligence layer." />
                    <FadeIn>
                        <p className="text-2xl font-medium leading-relaxed text-gray-300">
                            To make every data source an asset that organisations can{" "}
                            <ShimmerText>understand, trust, and act on.</ShimmerText>
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Traction */}
            <Traction />

            {/* Trust & Compliance */}
            <section className="py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Trust & Compliance"
                        title="Independently certified and recognised"
                    />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {certifications.map((cert, i) => (
                            <FadeIn key={cert.name} delay={i * 0.08}>
                                <SpotlightCard className="h-full p-6">
                                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                                    <p className="mt-1 text-sm text-gray-400">{cert.subtitle}</p>
                                    <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs">
                                        <p className="text-gray-500">
                                            <span className="block uppercase tracking-widest text-purple-400/70">
                                                Certificate no.
                                            </span>
                                            <span className="mt-0.5 block font-mono text-gray-300">
                                                {cert.certNo}
                                            </span>
                                        </p>
                                        <p className="text-gray-500">{cert.issuer}</p>
                                        <p className="font-medium text-emerald-400/90">{cert.validity}</p>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-gray-400">
                                        {cert.description}
                                    </p>
                                </SpotlightCard>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.15}>
                        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:flex md:items-center md:justify-between md:gap-8">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
                                    Certified scope
                                </p>
                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
                                    Video intelligence, video analytics and data analytics services —
                                    ensuring confidentiality, integrity and compliance with data
                                    protection requirements.
                                </p>
                            </div>
                            <div className="mt-5 flex flex-wrap items-center gap-2 md:mt-0 md:shrink-0">
                                {certifiedScope.map((stage, i) => (
                                    <span key={stage} className="flex items-center gap-2">
                                        <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold text-purple-300">
                                            {stage}
                                        </span>
                                        {i < certifiedScope.length - 1 && (
                                            <span className="text-gray-600">→</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <FinalCTA
                title="Turn Data Into Intelligence."
                subtitle="Let's turn the data your organisation already has into something it can act on."
            />
        </SiteShell>
    );
}
