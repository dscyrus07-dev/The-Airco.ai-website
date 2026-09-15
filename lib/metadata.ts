import { Metadata } from "next";

export const siteConfig = {
    name: "AiRCO",
    description:
        "AiRCO — AI Revolution Company Pvt Ltd — turns your organisation's fragmented data into structured, actionable intelligence across video, audio, documents, text, and conversations.",
    url: "https://theairco.ai",
    ogImage: "https://theairco.ai/images/og-image.png",
    links: {
        twitter: "https://twitter.com/theairco",
        linkedin: "https://www.linkedin.com/company/theairco",
        website: "https://www.the-airco.com",
    },
};

export const keywords = [
    // Primary Keywords
    "AI analytics platform",
    "business intelligence software",
    "AI-powered insights",
    "predictive analytics",
    "data visualization",

    // Secondary Keywords
    "machine learning analytics",
    "KPI dashboard",
    "real-time analytics",
    "automated business intelligence",
    "AI data analysis",

    // Long-tail Keywords
    "AI analytics for business decisions",
    "automated business intelligence platform",
    "real-time data insights dashboard",
    "predictive analytics software",
    "AI-powered data visualization",
    "business intelligence with machine learning",

    // Product-specific
    "AiRCo Insights",
    "AiRCo Secure",
    "AiRCo PMS",
    "AiRCo Bot",
    "AI security surveillance",
    "smart hospitality management",
    "conversational AI assistant",

    // Industry-specific
    "enterprise analytics",
    "financial analytics AI",
    "retail analytics platform",
    "healthcare data insights",
    "manufacturing analytics",
];

export function constructMetadata({
    title = siteConfig.name,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    icons = "/favicon.ico",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        keywords,
        authors: [
            {
                name: "TheAiRCo",
                url: "https://www.the-airco.com",
            },
        ],
        creator: "TheAiRCo",
        publisher: "TheAiRCo",
        openGraph: {
            type: "website",
            locale: "en_US",
            url: siteConfig.url,
            title,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@theairco",
        },
        icons,
        metadataBase: new URL(siteConfig.url),
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: siteConfig.url,
        },
    };
}

// JSON-LD Structured Data
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AiRCO — AI Revolution Company Pvt Ltd",
    alternateName: "AiRCO",
    url: "https://www.the-airco.com",
    logo: "https://theairco.ai/logo.png",
    description:
        "Data analytics company specialising in transforming raw, unstructured data — video, audio, documents, text, and conversations — into structured, actionable intelligence.",
    sameAs: [
        "https://twitter.com/theairco",
        "https://www.linkedin.com/company/theairco",
        "https://theairco.ai",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "info@the-airco.com",
        availableLanguage: ["English"],
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressCountry: "IN",
    },
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AiRCo Insights",
    url: "https://theairco.ai",
    description: siteConfig.description,
    publisher: {
        "@type": "Organization",
        name: "TheAiRCo",
    },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://theairco.ai/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
    },
};

export const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AiRCo Insights",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "127",
    },
    description: siteConfig.description,
    screenshot: "https://theairco.ai/images/og-image.png",
    featureList: [
        "AI-Powered Analytics",
        "Real-time Data Visualization",
        "Predictive Insights",
        "Automated Reporting",
        "KPI Tracking",
        "Multi-source Data Integration",
    ],
};

export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is AiRCo Insights?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "AiRCo Insights is an AI-powered business intelligence platform that transforms complex data into clear, actionable insights. It helps organizations make faster, smarter decisions through predictive analytics, real-time visualization, and automated reporting.",
            },
        },
        {
            "@type": "Question",
            name: "How does AI-powered analytics work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our AI algorithms analyze your business data in real-time, identifying patterns, trends, and anomalies. The system uses machine learning to provide predictive insights and automated recommendations, helping you stay ahead of market changes.",
            },
        },
        {
            "@type": "Question",
            name: "What industries does AiRCo Insights serve?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "AiRCo Insights serves multiple industries including finance, retail, healthcare, manufacturing, and hospitality. Our platform is customizable to meet specific industry requirements and compliance standards.",
            },
        },
        {
            "@type": "Question",
            name: "Is my data secure with AiRCo?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, security is our top priority. We implement enterprise-grade encryption, secure data storage, role-based access control, and comply with international data protection standards including GDPR and SOC 2.",
            },
        },
    ],
};
