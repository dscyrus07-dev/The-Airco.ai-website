import type { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";

const BASE_URL = "https://theairco.ai";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ["", "/about", "/solutions", "/why-airco", "/contact"].map((path) => ({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
    }));

    const productRoutes = products.map((p) => ({
        url: `${BASE_URL}/products/${p.slug}`,
        lastModified: new Date(),
    }));

    const industryRoutes = industries.map((i) => ({
        url: `${BASE_URL}/industries/${i.slug}`,
        lastModified: new Date(),
    }));

    return [...staticRoutes, ...productRoutes, ...industryRoutes];
}
