import { products } from "./products";


export type Industry = {
    slug: string;
    name: string;
    headline: string;
    intro: string;
    howAiRCoHelps: string;
    productSlugs: string[];
    useCases: string[];
    cta: string;
};

export const industries: Industry[] = [
    {
        slug: "bfsi",
        name: "BFSI",
        headline: "Faster Decisions, Backed by Structured Financial Data",
        intro:
            "Credit and lending decisions depend on financial documents that are slow and inconsistent to review manually.",
        howAiRCoHelps:
            "Airco Insights structures bank statement data automatically, while Airco Chatbot and Airco LeadGen support customer engagement and prospecting.",
        productSlugs: ["airco-insights", "airco-chatbot", "airco-leadgen"],
        useCases: [
            "Automated bank statement review for underwriting",
            "Cash-flow and repayment-capacity assessment for lending",
            "24x7 customer query handling",
            "Automated prospect identification and qualification",
        ],
        cta: "See How AiRCO Supports BFSI Decision-Making",
    },
    {
        slug: "retail-and-e-commerce",
        name: "Retail & E-commerce",
        headline: "Protect Your Stores. Engage Every Customer.",
        intro:
            "Retail environments need both physical security and responsive digital customer engagement — often managed by stretched teams.",
        howAiRCoHelps:
            "Airco Secure monitors stores and facilities in real time, while Airco Chatbot and Airco LeadGen handle customer queries and prospecting.",
        productSlugs: ["airco-secure", "airco-chatbot", "airco-leadgen"],
        useCases: [
            "Real-time store and warehouse monitoring",
            "24x7 customer support across channels",
            "Automated lead capture and qualification",
            "Multilingual customer engagement",
        ],
        cta: "Explore AiRCO for Retail Operations",
    },
    {
        slug: "manufacturing-and-industrial",
        name: "Manufacturing & Industrial",
        headline: "Visibility and Uptime Across Every Facility",
        intro:
            "Manufacturing sites depend on physical security and reliable infrastructure, both hard to monitor manually at scale.",
        howAiRCoHelps:
            "Airco Secure and Airco VMS provide real-time facility monitoring, while Data Centre Maintenance supports critical infrastructure reliability.",
        productSlugs: ["airco-secure", "airco-vms", "data-centre-maintenance"],
        useCases: [
            "Perimeter and restricted-zone monitoring",
            "Centralised multi-site camera management",
            "Preventive maintenance of critical infrastructure",
        ],
        cta: "See How AiRCO Supports Industrial Operations",
    },
    {
        slug: "government-and-public-sector",
        name: "Government & Public Sector",
        headline: "Security, Compliance, and Efficiency for Public Infrastructure",
        intro:
            "Public sector operations demand strong security oversight and rigorous, time-consuming tender and compliance processes.",
        howAiRCoHelps:
            "Airco Secure and Airco VMS support facility security, while Airco Tendermate streamlines tender preparation and compliance review.",
        productSlugs: ["airco-secure", "airco-vms", "airco-tendermate"],
        useCases: [
            "Facility and public-space monitoring",
            "Centralised video management across sites",
            "Automated tender compliance checking",
            "Faster, more competitive bid preparation",
        ],
        cta: "Talk to Us About Public Sector Deployments",
    },
    {
        slug: "real-estate-and-infrastructure",
        name: "Real Estate & Infrastructure",
        headline: "Secure, Well-Planned, and Well-Maintained Properties",
        intro:
            "Managing large properties and infrastructure projects means balancing physical security with sound infrastructure planning.",
        howAiRCoHelps:
            "Airco Secure and Airco VMS provide monitoring, while our Data Centre Feasibility Study and Consultation services support infrastructure planning decisions.",
        productSlugs: ["airco-secure", "airco-vms", "data-centre-feasibility-study", "data-centre-consultation"],
        useCases: [
            "Property-wide video monitoring",
            "Multi-site management",
            "Feasibility assessment for new infrastructure",
            "Infrastructure design consultation",
        ],
        cta: "Discuss Your Property or Infrastructure Project",
    },
    {
        slug: "healthcare",
        name: "Healthcare",
        headline: "Attentive Care, Supported by Intelligent Systems",
        intro:
            "Healthcare facilities need consistent monitoring and responsive patient and customer communication, without overburdening staff.",
        howAiRCoHelps:
            "Airco Geetika supports call and interaction monitoring, Airco Chatbot handles routine queries, and Airco Secure supports facility security.",
        productSlugs: ["airco-geetika", "airco-chatbot", "airco-secure"],
        useCases: [
            "Call monitoring and sentiment analysis",
            "Automated patient and customer query handling",
            "Facility security monitoring",
        ],
        cta: "See How AiRCO Supports Healthcare Facilities",
    },
    {
        slug: "logistics-and-transportation",
        name: "Logistics & Transportation",
        headline: "Visibility Across Every Site and Shipment Point",
        intro:
            "Logistics operations span multiple sites and facilities, making consistent security monitoring difficult.",
        howAiRCoHelps:
            "Airco Secure and Airco VMS provide real-time monitoring and centralised management across distributed locations.",
        productSlugs: ["airco-secure", "airco-vms"],
        useCases: [
            "Multi-site facility monitoring",
            "Centralised camera management",
            "Restricted-zone and intrusion detection",
        ],
        cta: "Talk to Us About Securing Your Logistics Network",
    },
    {
        slug: "it-telecom-and-data-centre-operators",
        name: "IT, Telecom & Data Centre Operators",
        headline: "Infrastructure You Can Depend On",
        intro:
            "Data centre and telecom infrastructure demands careful planning, continuous maintenance, and thorough feasibility assessment before investment.",
        howAiRCoHelps:
            "Our data centre consultation, maintenance, and feasibility services support infrastructure decisions at every stage — from planning to ongoing operations.",
        productSlugs: [
            "data-centre-consultation",
            "data-centre-maintenance",
            "data-centre-feasibility-study",
        ],
        useCases: [
            "Infrastructure design and capacity planning",
            "Preventive and corrective maintenance",
            "Site feasibility and cost projection",
        ],
        cta: "Plan Your Next Infrastructure Project With AiRCO",
    },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

export const productName = (slug: string) =>
    products.find((p) => p.slug === slug)?.name ?? slug;

// Re-export for convenience in pages
export { products };
