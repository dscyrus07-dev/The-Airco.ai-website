import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";
import { PrimaryButton } from "@/components/site/Buttons";
import { SectionHeading, FadeIn } from "@/components/ui/section";
import { ProductVisual } from "@/components/visuals/ProductVisual";
import { FlowChart } from "@/components/visuals/FlowChart";
import { products, getProduct } from "@/lib/data/products";

const productImages: Record<string, string> = {
    "airco-secure": "/images/products/secure-surveillance.png",
    "airco-vms": "/images/products/pms-dashboard.png",
    "airco-insights": "/images/products/insights-analytics.png",
    "airco-chatbot": "/images/products/bot-chatbot.png",
};

export function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = getProduct(slug);
    if (!product) return {};
    return {
        title: `${product.name} | ${product.tagline} — AiRCO`,
        description: product.description,
    };
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProduct(slug);
    if (!product) notFound();

    const index = products.findIndex((p) => p.slug === slug);
    const prev = products[(index - 1 + products.length) % products.length];
    const next = products[(index + 1) % products.length];

    return (
        <SiteShell>
            <PageHero eyebrow={product.category} title={product.tagline} description={product.description}>
                <PrimaryButton href="/contact">{product.cta}</PrimaryButton>
            </PageHero>

            {/* Problem / Solution */}
            <section className="py-16">
                <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6">
                    <FadeIn>
                        <div className="h-full rounded-2xl border border-white/10 bg-black/40 p-8">
                            <p className="text-xs uppercase tracking-widest text-red-400/80">The problem</p>
                            <h2 className="mt-3 mb-3 text-xl font-bold text-white">
                                What slows organisations down
                            </h2>
                            <p className="leading-relaxed text-gray-400">{product.problem}</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div className="h-full rounded-2xl border border-purple-500/25 bg-gradient-to-br from-purple-500/[0.08] to-blue-500/[0.04] p-8">
                            <p className="text-xs uppercase tracking-widest text-purple-400">The solution</p>
                            <h2 className="mt-3 mb-3 text-xl font-bold text-white">How AiRCO changes it</h2>
                            <p className="leading-relaxed text-gray-300">{product.solution}</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Product visual */}
            <section className="pb-8">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <FadeIn>
                        <ProductVisual kind={product.visual} />
                    </FadeIn>
                    {productImages[product.slug] && (
                        <FadeIn delay={0.15}>
                            <div className="relative mt-5 aspect-[21/9] overflow-hidden rounded-2xl border border-white/10">
                                <Image
                                    src={productImages[product.slug]}
                                    alt={`${product.name} platform preview`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 1024px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>
                        </FadeIn>
                    )}
                </div>
            </section>

            {/* Process flowchart */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <SectionHeading
                        eyebrow="How it works"
                        title="The process, end to end."
                        description="Every step, decision, and outcome — mapped."
                    />
                    <FlowChart steps={product.process} decision={product.decision} />
                </div>
            </section>

            {/* Capabilities + Use cases */}
            <section className="py-24">
                <div className="container mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
                    <FadeIn>
                        <h2 className="mb-6 text-2xl font-bold text-white">Capabilities</h2>
                        <ul className="space-y-3">
                            {product.capabilities.map((capability, i) => (
                                <li
                                    key={capability}
                                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5"
                                >
                                    <span className="text-xs font-bold text-purple-500">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-gray-300">{capability}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h2 className="mb-6 text-2xl font-bold text-white">Use cases</h2>
                        <ul className="space-y-3">
                            {product.useCases.map((useCase, i) => (
                                <li
                                    key={useCase}
                                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5"
                                >
                                    <span className="text-xs font-bold text-blue-400">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-gray-300">{useCase}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>
            </section>

            {/* Business value */}
            <section className="bg-black py-16">
                <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
                    <FadeIn>
                        <p className="text-xs uppercase tracking-widest text-purple-400">Business value</p>
                        <p className="mt-4 text-2xl font-medium leading-relaxed text-gray-200">
                            {product.businessValue}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Industries */}
            <section className="py-16">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <SectionHeading eyebrow="Where it fits" title="Industries" />
                    <div className="flex flex-wrap justify-center gap-3">
                        {product.industries.map((industry) => (
                            <span
                                key={industry}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-gray-300"
                            >
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prev / Next */}
            <section className="border-t border-white/5 py-10">
                <div className="container mx-auto flex max-w-5xl items-center justify-between px-4 md:px-6">
                    <Link
                        href={`/products/${prev.slug}`}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors hover:text-purple-400"
                    >
                        <span className="transition-transform group-hover:-translate-x-1">←</span>
                        {prev.name}
                    </Link>
                    <Link
                        href={`/products/${next.slug}`}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors hover:text-purple-400"
                    >
                        {next.name}
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </section>

            <FinalCTA title={product.tagline} ctaLabel={product.cta} />
        </SiteShell>
    );
}
