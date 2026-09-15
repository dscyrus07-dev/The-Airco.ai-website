import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black">
            <div className="pointer-events-none absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="mb-6 inline-block">
                            <img
                                src="/logo-banner.png"
                                alt="AiRCO — From Data to Intelligence"
                                className="h-20 w-auto rounded-xl"
                            />
                        </Link>
                        <p className="max-w-lg leading-relaxed text-gray-400">
                            Anything that can be automated, will be automated.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-purple-300">
                            Solutions
                        </h3>
                        <ul className="space-y-3">
                            {products.map((p) => (
                                <li key={p.slug}>
                                    <Link
                                        href={`/products/${p.slug}`}
                                        className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                                    >
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-blue-300">
                            Industries
                        </h3>
                        <ul className="space-y-3">
                            {industries.map((i) => (
                                <li key={i.slug}>
                                    <Link
                                        href={`/industries/${i.slug}`}
                                        className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                                    >
                                        {i.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-green-300">
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail className="h-4 w-4 text-green-500/50" />
                                <a href="mailto:info@the-airco.com" className="transition-colors hover:text-green-400">
                                    info@the-airco.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail className="h-4 w-4 text-green-500/50" />
                                <a href="mailto:sales@the-airco.com" className="transition-colors hover:text-green-400">
                                    sales@the-airco.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500/50" />
                                <span className="leading-relaxed">Mumbai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/5 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} AiRCO · Mumbai, India
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span className="cursor-default">Privacy Policy</span>
                            <span className="cursor-default">Terms &amp; Conditions</span>
                            <span className="cursor-default">Cookie Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
