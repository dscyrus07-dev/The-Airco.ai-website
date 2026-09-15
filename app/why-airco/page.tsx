import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";
import { PrimaryButton, SecondaryButton } from "@/components/site/Buttons";
import { SectionHeading, ShimmerText, FadeIn } from "@/components/ui/section";
import { SwimlaneDiagram } from "@/components/visuals/diagrams";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
    title: "Why AiRCO | One Intelligence Layer, Across Every Kind of Data",
    description:
        "Enterprises don't have a data shortage. They have an intelligence problem. AiRCO brings video, audio, documents, conversations, text, and operational systems into a unified intelligence layer.",
};

const approachSteps = [
    {
        title: "Connect",
        description: "Bring information together from different environments, systems, and data sources.",
    },
    {
        title: "Understand",
        description: "Use AI to interpret, classify, extract, correlate, and contextualize information.",
    },
    {
        title: "Intelligence",
        description: "Transform raw information into structured, searchable, and decision-ready knowledge.",
    },
    {
        title: "Act",
        description: "Turn intelligence into alerts, recommendations, workflows, and actions.",
    },
];

const modalities = [
    {
        title: "Video",
        description: "Understand people, objects, events, movement, activity, and behavior within visual environments.",
    },
    {
        title: "Audio",
        description: "Extract relevant information, events, patterns, and meaning from audio data.",
    },
    {
        title: "Documents",
        description: "Read, extract, structure, compare, and reason over complex business documents.",
    },
    {
        title: "Text",
        description: "Transform unstructured text into structured information, knowledge, and insights.",
    },
    {
        title: "Conversations",
        description: "Understand customer, employee, sales, and operational conversations at scale.",
    },
    {
        title: "Operations",
        description: "Connect intelligence with the processes and systems where business decisions actually happen.",
    },
];

const cycle = [
    { title: "Ingest", description: "Bring information from multiple sources and environments into the intelligence layer." },
    { title: "Understand", description: "Extract meaning, entities, events, relationships, patterns, and context." },
    { title: "Structure", description: "Transform unstructured information into consistent, searchable, and queryable intelligence." },
    { title: "Decide", description: "Surface the information that matters so teams can make faster, better-informed decisions." },
];

const pillars = [
    { title: "Multimodal by Design", description: "Video, audio, documents, text, conversations, and operational information can all become part of the same intelligence ecosystem." },
    { title: "Intelligence Over Automation", description: "AiRCO focuses on interpreting information, identifying context, connecting relationships, and helping teams make decisions." },
    { title: "Built Around Real Workflows", description: "Solutions built around real workflows across security, customer interactions, document processing, tenders, sales, infrastructure, and operations." },
    { title: "From Information to Action", description: "AiRCO turns information into alerts, insights, recommendations, workflows, and actions that can be used by decision-makers." },
    { title: "One Foundation. Multiple Applications.", description: "Organizations can build multiple applications around a common intelligence foundation instead of disconnected AI systems." },
];

const benefits = [
    { title: "See More", description: "Understand large volumes of information without requiring teams to manually review every piece of data." },
    { title: "Respond Faster", description: "Surface important events and information when they matter." },
    { title: "Reduce Manual Work", description: "Automate repetitive, information-heavy processes so teams can focus on decisions." },
    { title: "Improve Consistency", description: "Apply consistent intelligence and analysis across large volumes of information." },
    { title: "Scale Intelligence", description: "Extend AI capabilities across teams and workflows without building a separate intelligence system for every use case." },
];

const realtimeUses = ["Security events", "Operational anomalies", "Critical alerts", "Real-time monitoring"];
const deepUses = ["Documents", "Tenders", "Customer conversations", "Research", "Business information", "Historical data"];

export default function WhyAircoPage() {
    return (
        <SiteShell>
            <PageHero
                eyebrow="Why AiRCO"
                title="One Layer of Intelligence, Across Every Kind of Data."
                description="Enterprises don't have a data shortage. They have an intelligence problem. AiRCO brings video, audio, documents, conversations, text, and operational systems into a unified intelligence layer that helps organizations understand what is happening, identify what matters, and act on it."
            >
                <PrimaryButton href="/contact">Start a Conversation</PrimaryButton>
                <SecondaryButton href="/solutions">Explore Solutions</SecondaryButton>
            </PageHero>

            {/* The problem */}
            <section className="py-16">
                <div className="container mx-auto max-w-4xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="The problem"
                        title="Enterprise Data Is Everywhere. Intelligence Is Fragmented."
                        align="left"
                    />
                    <FadeIn>
                        <div className="space-y-5 text-lg leading-relaxed text-gray-300">
                            <p>Modern organizations operate across dozens of systems, platforms, departments, and data environments.</p>
                            <ul className="space-y-2 pl-5">
                                <li className="list-disc text-gray-400">Security teams work with video.</li>
                                <li className="list-disc text-gray-400">Sales teams work with conversations.</li>
                                <li className="list-disc text-gray-400">Finance teams work with documents.</li>
                                <li className="list-disc text-gray-400">Operations teams work with dashboards and systems.</li>
                                <li className="list-disc text-gray-400">Management works across all of them.</li>
                            </ul>
                            <p>
                                Yet these environments rarely work as one. Information remains fragmented
                                across applications, formats, teams, and workflows. People spend valuable
                                time searching, reviewing, interpreting, comparing, and connecting
                                information before they can make a decision.
                            </p>
                            <p className="font-semibold text-white">
                                The problem is no longer access to data. The problem is turning that data
                                into usable intelligence.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Approach */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="The AiRCO approach"
                        title="Intelligence Shouldn't Live in Silos."
                        description="Instead of building isolated AI tools around individual data types or individual business problems, AiRCO creates an intelligence layer capable of working across multiple forms of enterprise information."
                    />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {approachSteps.map((step, i) => (
                            <FadeIn key={step.title} delay={i * 0.08}>
                                <SpotlightCard className="h-full p-6">
                                    <span className="text-xs font-bold tracking-widest text-purple-500">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="mt-2 mb-2 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
                                </SpotlightCard>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modalities */}
            <section className="py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="One intelligence layer"
                        title="One Layer. Multiple Modalities. One Context."
                        description="Different data types tell different parts of the story. AiRCO brings them together."
                    />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {modalities.map((modality, i) => (
                            <FadeIn key={modality.title} delay={(i % 3) * 0.08}>
                                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <h3 className="text-lg font-bold text-white">{modality.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{modality.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data to decisions */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="From data to decisions"
                        title="We Don't Stop at Processing Data."
                        description="The objective isn't more information. It is better decisions, made faster."
                    />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {cycle.map((step, i) => (
                            <FadeIn key={step.title} delay={i * 0.08}>
                                <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/[0.06] to-blue-500/[0.03] p-6">
                                    <span className="text-xs font-bold tracking-widest text-purple-400">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="mt-2 mb-2 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pillars */}
            <section className="py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Why AiRCO"
                        title="Built Around Intelligence, Not Just Applications."
                    />
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {pillars.map((pillar, i) => (
                            <FadeIn key={pillar.title} delay={(i % 3) * 0.08}>
                                <SpotlightCard className="h-full p-8">
                                    <h3 className="mb-3 text-lg font-bold text-white">{pillar.title}</h3>
                                    <p className="leading-relaxed text-gray-400">{pillar.description}</p>
                                </SpotlightCard>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="What this means for enterprises"
                        title="Less Searching. Less Reviewing. More Deciding."
                    />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {benefits.map((benefit, i) => (
                            <FadeIn key={benefit.title} delay={i * 0.06}>
                                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <h3 className="mb-2 font-bold text-white">{benefit.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-400">{benefit.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Swimlane example */}
            <section className="py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Cross-functional workflows"
                        title="AI and your team, in one flow."
                        description="AiRCO handles the information-heavy early stages; your people step in exactly where judgment matters. Example: Airco LeadGen."
                    />
                    <FadeIn>
                        <SwimlaneDiagram />
                    </FadeIn>
                </div>
            </section>

            {/* Real-time vs deep */}
            <section className="py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Intelligence at every speed"
                        title="Real-Time When Seconds Matter. Deep Analysis When Context Matters."
                    />
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <FadeIn>
                            <SpotlightCard className="h-full p-8">
                                <h3 className="mb-2 text-xl font-bold text-purple-300">Real-Time Intelligence</h3>
                                <p className="mb-4 leading-relaxed text-gray-400">
                                    For environments where immediate detection and response matter — security
                                    events, operational anomalies, critical alerts, and real-time monitoring
                                    cannot wait for manual analysis.
                                </p>
                                <ul className="space-y-2">
                                    {realtimeUses.map((use) => (
                                        <li key={use} className="flex items-center gap-2 text-sm text-gray-300">
                                            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                                            {use}
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <SpotlightCard className="h-full p-8">
                                <h3 className="mb-2 text-xl font-bold text-blue-300">Deep Intelligence</h3>
                                <p className="mb-4 leading-relaxed text-gray-400">
                                    For environments where information needs to be analyzed, compared, and
                                    reasoned over.
                                </p>
                                <ul className="space-y-2">
                                    {deepUses.map((use) => (
                                        <li key={use} className="flex items-center gap-2 text-sm text-gray-300">
                                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                            {use}
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Ecosystem */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="One foundation. Many applications."
                        title="Intelligence That Extends Across the Enterprise."
                        description="The AiRCO ecosystem is built on the same intelligence layer, applied to different enterprise problems."
                    />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, i) => (
                            <FadeIn key={product.slug} delay={(i % 3) * 0.06}>
                                <Link href={`/products/${product.slug}`} className="block h-full">
                                    <SpotlightCard className="h-full p-6">
                                        <h3 className="mb-2 font-bold text-white">{product.name}</h3>
                                        <p className="text-sm leading-relaxed text-gray-400">
                                            {product.description}
                                        </p>
                                    </SpotlightCard>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="Designed for organizations that operate at scale"
                        title="Wherever Information Drives Decisions."
                        description="Every industry has different workflows. The underlying challenge is often the same — large amounts of information must be understood, interpreted, and acted upon quickly."
                    />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {industries.map((industry, i) => (
                            <FadeIn key={industry.slug} delay={(i % 2) * 0.08}>
                                <Link
                                    href={`/industries/${industry.slug}`}
                                    className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-purple-500/30"
                                >
                                    <h3 className="font-bold text-white">{industry.name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{industry.intro}</p>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bigger idea */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
                    <SectionHeading eyebrow="The bigger idea" title="The Future of Enterprise Software Is Intelligent." />
                    <FadeIn>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Traditional software was designed to store information, move information, and
                            execute predefined processes. The next generation of enterprise systems will
                            increasingly understand information — identify what matters, connect it across
                            systems, recognize patterns, surface context, and help people act.
                        </p>
                        <p className="mt-6 text-2xl font-semibold text-white">
                            An enterprise where information doesn&apos;t simply exist.{" "}
                            <ShimmerText>It becomes intelligence.</ShimmerText>
                        </p>
                    </FadeIn>
                </div>
            </section>

            <FinalCTA
                title="One Intelligence Layer. Every Kind of Data."
                subtitle="Whether you're solving one operational problem or connecting intelligence across your organization, AiRCO is built to help you move from fragmented information to coordinated intelligence."
                ctaLabel="Start a Conversation"
            />
        </SiteShell>
    );
}
