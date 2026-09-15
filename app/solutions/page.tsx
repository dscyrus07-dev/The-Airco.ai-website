import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import FinalCTA from "@/components/site/FinalCTA";
import { FadeIn } from "@/components/ui/section";
import { solutionCategories } from "@/lib/data/solutions";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
    title: "Solutions | Intelligence for Every Kind of Data — AiRCO",
    description:
        "AiRCO's solutions are organised around the type of data they work with — video, audio, documents and text, conversational AI, autonomous agents, and data centre infrastructure.",
};

export default function SolutionsPage() {
    return (
        <SiteShell>
            <PageHero
                eyebrow="Solutions"
                title="Intelligence for Every Kind of Data"
                description="AiRCO's solutions are organised around the type of data they work with — video, audio, documents and text, conversations, autonomous agents, and the infrastructure that supports it all."
            />

            <section className="pb-24">
                <div className="container mx-auto max-w-6xl space-y-6 px-4 md:px-6">
                    {solutionCategories.map((category, i) => (
                        <FadeIn key={category.name} delay={i * 0.06}>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-purple-500/30">
                                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                                    <div className="md:w-2/5">
                                        <span className="text-xs font-bold tracking-widest text-purple-500">
                                            {String(category.id).padStart(2, "0")}
                                        </span>
                                        <h2 className="mt-2 text-2xl font-bold text-white">
                                            {category.name}
                                        </h2>
                                        <p className="mt-3 leading-relaxed text-gray-400">
                                            {category.description}
                                        </p>
                                    </div>
                                    <div className="md:w-1/2">
                                        <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                                            Includes
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {category.productSlugs.map((slug) => {
                                                const product = products.find((p) => p.slug === slug);
                                                if (!product) return null;
                                                return (
                                                    <Link
                                                        key={slug}
                                                        href={`/products/${slug}`}
                                                        className="group inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-300 transition-all hover:border-purple-400 hover:bg-purple-500/15"
                                                    >
                                                        {product.name}
                                                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                    </div>
            </section>

            <FinalCTA
                title="Not sure where to start?"
                subtitle="Tell us about your data challenge and we'll point you to the right solution."
                ctaLabel="Talk to Us"
            />
        </SiteShell>
    );
}
