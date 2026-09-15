export type SolutionCategory = {
    id: number;
    name: string;
    description: string;
    productSlugs: string[];
};

export const solutionCategories = [
    {
        id: 1,
        name: "Video Intelligence",
        description:
            "Real-time detection and centralised management for your camera infrastructure — from active threat detection to multi-site video oversight.",
        productSlugs: ["airco-secure", "airco-vms"],
    },
    {
        id: 2,
        name: "Audio Intelligence",
        description:
            "Speech and sound, transcribed and analysed automatically — turning calls, meetings, and monitored audio into structured, reviewable insight.",
        productSlugs: ["airco-geetika"],
    },
    {
        id: 3,
        name: "Document & Text Intelligence",
        description:
            "Documents read, structured, and understood automatically — from financial statements to tender submissions.",
        productSlugs: ["airco-insights", "airco-tendermate"],
    },
    {
        id: 4,
        name: "Conversational Intelligence",
        description:
            "Automated, always-on engagement with customers and prospects across digital channels — answering queries and capturing leads around the clock.",
        productSlugs: ["airco-chatbot"],
    },
    {
        id: 5,
        name: "AI Agents",
        description:
            "Autonomous agents that take on repetitive, high-volume work — starting with prospect identification and outreach.",
        productSlugs: ["airco-leadgen"],
    },
    {
        id: 5,
        name: "Data Centre Services",
        description:
            "Expert consultation, maintenance, and feasibility assessment for the infrastructure that keeps everything else running.",
        productSlugs: [
            "data-centre-consultation",
            "data-centre-maintenance",
            "data-centre-feasibility-study",
        ],
    },
];
