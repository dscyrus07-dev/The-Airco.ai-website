import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";
import { SectionHeading, FadeIn } from "@/components/ui/section";
import { industries, getIndustry } from "@/lib/data/industries";
import { products } from "@/lib/data/products";

export function generateStaticParams() {
    return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const industry = getIndustry(slug);
    if (!industry) return {};
    return {
        title: `${industry.name} | ${industry.headline} — AiRCO`,
        description: industry.intro,
    };
}

export default async function IndustryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const industry = getIndustry(slug);
    if (!industry) notFound();

    const relevantProducts = industry.productSlugs
        .map((s) => products.find((p) => p.slug === s))
        .filter((p): p is (typeof products)[number] => Boolean(p));

    return (
        <SiteShell>
            <PageHero
                eyebrow={industry.name}
                title={industry.headline}
                description={industry.intro}
            >
                <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700"
                >
                    Get in Touch
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </PageHero>

            {/* How AiRCO helps */}
            <section className="py-16">
                <div className="container mx-auto max-w-4xl px-4 md:px-6">
                    <FadeIn>
                        <div className="rounded-2xl border border-purple-500/25 bg-gradient-to-br from-purple-500/[0.08] to-blue-500/[0.04] p-8">
                            <p className="text-xs uppercase tracking-widest text-purple-400">How AiRCO helps</p>
                            <p className="mt-4 text-lg leading-relaxed text-gray-200">
                                {industry.howAiRCoHelps}
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Relevant solutions */}
            <section className="bg-black py-24">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <SectionHeading eyebrow={industry.name} title="Relevant solutions" />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {relevantProducts.map((product, i) => (
                            <FadeIn key={product.slug} delay={i * 0.07}>
                                <Link href={`/products/${product.slug}`} className="group block h-full">
                                    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-purple-500/30 hover:bg-purple-500/[0.04]">
                                        <h3 className="mb-2 text-xl font-bold text-white">{product.name}</h3>
                                        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                                            {product.description}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400">
                                            Learn more
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use cases */}
            <section className="py-24">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <SectionHeading eyebrow="Use cases" title={`AiRCO for ${industry.name}`} />
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {industry.useCases.map((useCase, i) => (
                            <FadeIn key={useCase} delay={i * 0.06}>
                                <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <span className="text-xs font-bold tracking-widest text-purple-500">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-gray-300">{useCase}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA title={industry.headline} ctaLabel={industry.cta} />
        </SiteShell>
    );
}
