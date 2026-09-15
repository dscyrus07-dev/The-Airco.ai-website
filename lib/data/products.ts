import type { ProductVisualKind } from "@/components/visuals/ProductVisual";

export type ProcessStep = { title: string; description: string };

export type FlowDecision = {
    label: string;
    yes: { title: string; description: string };
    no: { title: string; description: string };
};

export type Product = {
    slug: string;
    name: string;
    category: string;
    tagline: string;
    description: string;
    problem: string;
    solution: string;
    process: ProcessStep[];
    capabilities: string[];
    useCases: string[];
    businessValue: string;
    industries: string[];
    cta: string;
    visual: ProductVisualKind;
    decision: FlowDecision;
};

export const products: Product[] = [
    {
        slug: "airco-secure",
        name: "Airco Secure",
        category: "Video Intelligence",
        tagline: "See Everything. Miss Nothing.",
        description:
            "AI-powered video surveillance that turns your cameras into an active layer of protection — not just a place to store footage.",
        problem:
            "Traditional CCTV depends on someone actively watching a screen. Threats get missed, response is delayed, and reviewing footage after an incident takes hours a security team doesn't have.",
        solution:
            "Airco Secure uses computer vision to continuously analyse live camera feeds and automatically flag intrusions, unauthorised access, restricted-zone violations, and loitering the moment they happen — so your security team is alerted, not left searching.",
        process: [
            { title: "Connect", description: "Airco Secure works with your existing CCTV infrastructure; no camera replacement required." },
            { title: "Analyse continuously", description: "Every frame is analysed in real time against defined risk patterns." },
            { title: "Detect", description: "Intrusions, restricted-zone breaches, and unusual activity are identified automatically." },
            { title: "Alert", description: "Security teams are notified the moment a risk is detected." },
            { title: "Review", description: "Flagged footage is available for fast, targeted post-incident investigation." },
        ],
        capabilities: [
            "Real-time intrusion detection",
            "Restricted-zone monitoring",
            "Unauthorised-access alerts",
            "Loitering detection",
            "Automated real-time alerting",
            "Fast post-incident video review",
            "Works with existing CCTV infrastructure",
            "Scales across multiple sites",
        ],
        useCases: [
            "Perimeter intrusion detection for factories, warehouses, and campuses",
            "Restricted-zone and unauthorised-access monitoring",
            "Real-time alerting for security control rooms",
            "Post-incident video review and evidence retrieval",
        ],
        businessValue:
            "Fewer missed incidents, faster response times, reduced dependence on constant manual monitoring, and a clearer audit trail when something does happen.",
        industries: [
            "Retail & E-commerce",
            "Manufacturing & Industrial",
            "Government & Public Sector",
            "Real Estate & Infrastructure",
            "Logistics & Transportation",
            "Healthcare",
        ],
        cta: "Talk to Us About Securing Your Site",
        visual: "camera",
        decision: {"label":"Risk detected?","yes":{"title":"Instant alert","description":"Security team notified with flagged footage for immediate response."},"no":{"title":"Keep monitoring","description":"Feeds continue to be analysed against defined risk patterns."}},
    },
    {
        slug: "airco-vms",
        name: "Airco VMS",
        category: "Video Intelligence",
        tagline: "One Dashboard for Every Camera, Every Site.",
        description:
            "Centralised video management built to scale — from a single facility to a distributed, multi-site camera network.",
        problem:
            "As camera networks grow, they become hard to manage — footage scattered across systems, no single view of storage or camera health, and slow retrieval when something needs reviewing.",
        solution:
            "Airco VMS centralises recording, live viewing, playback, and storage management into a single platform — with integration support for analytics modules like Airco Secure.",
        process: [
            { title: "Centralise", description: "Bring camera feeds across sites into a single system." },
            { title: "Monitor live", description: "View any camera, anywhere, from one dashboard." },
            { title: "Store & archive", description: "Manage long-term video storage in one place." },
            { title: "Track health", description: "Get visibility into camera uptime and device status." },
            { title: "Integrate", description: "Connect analytics modules on top of your video infrastructure." },
        ],
        capabilities: [
            "Centralised live monitoring",
            "Multi-site camera management",
            "Historical playback and retrieval",
            "Long-term storage management",
            "Camera health and uptime monitoring",
            "Integration with analytics modules",
            "Scales from a single site to an enterprise network",
        ],
        useCases: [
            "Centralised monitoring across multiple sites and locations",
            "Long-term video storage, archival, and retrieval",
            "Camera health and uptime monitoring",
            "Integration layer for video analytics and third-party security tools",
        ],
        businessValue:
            "Simpler day-to-day operations, faster footage retrieval, and better oversight of large or growing camera networks.",
        industries: ["Manufacturing & Industrial", "Government & Public Sector", "Real Estate & Infrastructure", "Logistics & Transportation"],
        cta: "See How Airco VMS Fits Your Camera Network",
        visual: "vms",
        decision: {"label":"Camera unhealthy?","yes":{"title":"Health alert raised","description":"Downtime risk flagged — maintenance notified before footage is lost."},"no":{"title":"Continue recording","description":"Feeds stay centralised, archived, and retrievable."}},
    },
    {
        slug: "airco-geetika",
        name: "Airco Geetika",
        category: "Audio Intelligence",
        tagline: "Turn Conversations Into Insight.",
        description:
            "Speech and sound intelligence that converts audio into structured, actionable data — automatically.",
        problem:
            "Calls, meetings, and monitored audio contain valuable information, but reviewing it manually is slow and inconsistent — most of it goes unused.",
        solution:
            "Airco Geetika transcribes speech, detects keywords and events, analyses sentiment and tone, and flags anomalies within audio — turning conversations into data your teams can act on.",
        process: [
            { title: "Capture", description: "Audio from calls, meetings, or monitored environments." },
            { title: "Transcribe", description: "Speech is converted to accurate text." },
            { title: "Analyse", description: "Keywords, events, sentiment, and tone are detected." },
            { title: "Flag", description: "Unusual patterns are surfaced automatically." },
            { title: "Deliver", description: "Structured output ready for review or reporting." },
        ],
        capabilities: [
            "High-accuracy speech transcription",
            "Keyword and event detection",
            "Sentiment and tone analysis",
            "Anomaly detection in audio streams",
            "Meeting transcription and summarisation",
            "Call-centre quality monitoring support",
        ],
        useCases: [
            "Call centre quality monitoring and compliance checks",
            "Sentiment and tone analysis on customer interactions",
            "Automated meeting transcription and summarisation",
            "Keyword and event detection in monitored audio streams",
        ],
        businessValue:
            "Consistent review at scale, faster access to what was actually said, and insight from conversations that would otherwise go unreviewed.",
        industries: ["Healthcare", "BFSI", "Retail & E-commerce", "Government & Public Sector"],
        cta: "Explore Airco Geetika for Your Team",
        visual: "audio",
        decision: {"label":"Anomaly found?","yes":{"title":"Flag for review","description":"Unusual pattern surfaced with the exact moment highlighted."},"no":{"title":"Deliver transcript","description":"Structured, searchable output ready for reporting."}},
    },
    {
        slug: "airco-insights",
        name: "Airco Insights",
        category: "Document Intelligence",
        tagline: "Bank Statements, Understood in Minutes.",
        description:
            "Automated bank statement analysis that replaces manual review with a structured, decision-ready financial profile.",
        problem:
            "Reviewing bank statements manually is slow, inconsistent across formats and institutions, and prone to human error — slowing down credit and lending decisions.",
        solution:
            "Airco Insights reads bank statements across varied formats and banking institutions, automatically extracts and categorises transactions, and builds a structured financial profile — identifying income and expense patterns, irregularities, and key financial indicators.",
        process: [
            { title: "Upload", description: "Statements in any format, from any banking institution." },
            { title: "Extract", description: "Transactions are read and extracted without manual data entry." },
            { title: "Categorise", description: "Income, expenses, and recurring patterns are identified." },
            { title: "Flag", description: "Bounced cheques, penal charges, and unusual cash movements are detected." },
            { title: "Structure", description: "Average balances, cash-flow trends, and debt obligations are calculated and delivered." },
        ],
        capabilities: [
            "Multi-format, multi-bank statement reading",
            "Automated transaction extraction and categorisation",
            "Income and expense pattern identification",
            "Irregularity and anomaly flagging",
            "Cash-flow trend calculation",
            "Debt obligation assessment",
            "Structured, audit-ready financial output",
        ],
        useCases: [
            "Automated bank statement reading for loan and credit underwriting",
            "Cash-flow and repayment-capacity assessment for lending decisions",
            "Fraud and anomaly detection in transaction histories",
            "Due-diligence support for credit appraisal and financial audits",
        ],
        businessValue:
            "Faster credit decisions, more consistent financial review, reduced manual data entry, and a clearer audit trail.",
        industries: ["BFSI", "NBFCs & Lending Institutions", "Fintech Platforms", "Credit Rating & Advisory Firms"],
        cta: "See Airco Insights in Action",
        visual: "statement",
        decision: {"label":"Irregularity found?","yes":{"title":"Flag transaction","description":"Bounced cheques, penal charges and unusual cash movements highlighted."},"no":{"title":"Build financial profile","description":"Income patterns, balances and cash-flow trends calculated."}},
    },
    {
        slug: "airco-chatbot",
        name: "Airco Chatbot",
        category: "Conversational Intelligence",
        tagline: "Always-On Conversations With Your Customers.",
        description:
            "A conversational AI assistant that handles queries, support, and lead capture across your digital channels — around the clock.",
        problem:
            "Customers expect instant answers, but support teams can't be everywhere at once — response times slip, and simple, repetitive queries take up time better spent elsewhere.",
        solution:
            "Airco Chatbot understands and responds to customer queries in real time across web, app, and messaging channels, escalating to a human agent whenever a conversation needs one.",
        process: [
            { title: "Deploy", description: "Across your website, app, or messaging platforms." },
            { title: "Understand", description: "Natural language understanding interprets each query." },
            { title: "Respond", description: "Accurate, context-aware answers, 24x7." },
            { title: "Escalate", description: "Complex queries are handed to a human agent." },
            { title: "Improve", description: "Response quality improves continuously from ongoing interactions." },
        ],
        capabilities: [
            "24x7 automated query resolution",
            "Natural language understanding",
            "Multilingual engagement",
            "Lead capture and qualification",
            "FAQ automation / self-service support",
            "Human escalation for complex queries",
        ],
        useCases: [
            "24x7 customer support and query resolution",
            "Lead capture and qualification on websites and apps",
            "FAQ automation and self-service support",
            "Multilingual customer engagement at scale",
        ],
        businessValue:
            "Faster response times, more consistent support quality, and a support team freed from repetitive queries.",
        industries: ["Retail & E-commerce", "BFSI", "Healthcare", "Real Estate"],
        cta: "Bring Airco Chatbot to Your Channels",
        visual: "chat",
        decision: {"label":"Needs a human?","yes":{"title":"Escalate to human agent","description":"Complex conversations handed over with full context."},"no":{"title":"Resolve instantly","description":"Accurate, context-aware answer delivered 24x7."}},
    },
    {
        slug: "airco-tendermate",
        name: "Airco Tendermate",
        category: "Document Intelligence",
        tagline: "Win Tenders Without the Paperwork Burden.",
        description:
            "An intelligent assistant that reads tender documents, checks compliance, and helps you draft a stronger, faster bid.",
        problem:
            "Tender documents are dense and detailed — missing a single eligibility or compliance requirement can mean disqualification, and reviewing everything manually takes time your team doesn't have.",
        solution:
            "Airco Tendermate reviews tender documents to extract eligibility criteria and compliance requirements, checks them against your submission checklist, and assists in drafting a responsive, well-structured proposal.",
        process: [
            { title: "Upload", description: "The tender's technical and commercial documents." },
            { title: "Extract", description: "Eligibility criteria, specifications, and compliance requirements are pulled out automatically." },
            { title: "Check", description: "Requirements are compared against your submission checklist to identify gaps." },
            { title: "Draft", description: "AI-assisted support for technical and commercial proposal sections." },
            { title: "Submit", description: "A stronger, more complete bid, prepared in less time." },
        ],
        capabilities: [
            "Automated eligibility and compliance extraction",
            "Gap analysis against submission checklists",
            "AI-assisted proposal drafting",
            "Faster turnaround on bid preparation",
            "Reduced risk of missed requirements",
        ],
        useCases: [
            "Automated extraction of eligibility and compliance criteria from tender documents",
            "Gap analysis against submission checklists",
            "AI-assisted drafting of technical and commercial proposal sections",
            "Faster turnaround on government and enterprise tender submissions",
        ],
        businessValue:
            "Fewer missed requirements, faster bid preparation, and more competitive, compliant submissions.",
        industries: ["Government & Public Sector", "Infrastructure & Construction", "Enterprises Bidding for Large Contracts"],
        cta: "Simplify Your Next Tender Submission",
        visual: "tender",
        decision: {"label":"Compliance gap?","yes":{"title":"Flag before submission","description":"Missing requirements identified while there's still time to fix them."},"no":{"title":"Proceed to draft","description":"AI-assisted drafting of technical and commercial sections."}},
    },
    {
        slug: "airco-leadgen",
        name: "Airco LeadGen",
        category: "AI Agents",
        tagline: "Let AI Find Your Next Customer.",
        description:
            "An autonomous AI agent that identifies, qualifies, and engages prospects — so your sales team spends time only on opportunities worth pursuing.",
        problem:
            "Sales teams spend significant time on prospecting and outreach, much of it directed at leads that were never going to convert.",
        solution:
            "Airco LeadGen continuously scans relevant data sources to surface high-intent prospects, initiates personalised outreach, and nurtures leads through the early stages of the funnel — before handing off qualified opportunities to your sales team.",
        process: [
            { title: "Identify", description: "Relevant data sources are continuously scanned for prospects." },
            { title: "Score", description: "Leads are evaluated for intent and fit." },
            { title: "Engage", description: "Personalised outreach is initiated automatically." },
            { title: "Nurture", description: "Leads are followed up through the early funnel." },
            { title: "Hand off", description: "Qualified opportunities are passed to your sales team." },
        ],
        capabilities: [
            "Automated prospect identification",
            "Lead scoring and qualification",
            "Personalised outreach at scale",
            "Follow-up sequencing",
            "Early-funnel nurturing",
        ],
        useCases: [
            "Automated prospecting and lead identification",
            "Personalised outreach and follow-up sequencing",
            "Lead scoring and qualification before handoff to sales",
            "Pipeline nurturing for early-stage prospects",
        ],
        businessValue:
            "More sales time spent on qualified opportunities, and consistent engagement through the early stages of the funnel.",
        industries: ["BFSI", "Retail & E-commerce", "B2B Enterprises", "Real Estate"],
        cta: "Put Lead Generation on Autopilot",
        visual: "leadgen",
        decision: {"label":"Lead qualified?","yes":{"title":"Hand off to sales","description":"Qualified opportunity delivered with full engagement history."},"no":{"title":"Nurture sequence","description":"Automated follow-ups continue until intent rises."}},
    },
    {
        slug: "data-centre-consultation",
        name: "Data Centre Consultation",
        category: "Data Centre Services",
        tagline: "Infrastructure Decisions, Backed by Expertise.",
        description:
            "Expert guidance on planning, designing, and optimising data centre infrastructure — built for long-term reliability.",
        problem:
            "Data centre decisions carry long-term cost and risk — capacity, energy efficiency, redundancy, and compliance all need to be right from the start.",
        solution:
            "Our consultation service assesses your current environment and future requirements, recommending solutions across capacity planning, energy efficiency, redundancy, and regulatory compliance.",
        process: [
            { title: "Assess", description: "Review current infrastructure and future requirements." },
            { title: "Plan", description: "Define capacity and growth requirements." },
            { title: "Design", description: "Recommend architecture for redundancy and efficiency." },
            { title: "Align", description: "Ensure recommendations meet regulatory requirements." },
            { title: "Advise", description: "Deliver a clear plan aligned to business objectives." },
        ],
        capabilities: [
            "Infrastructure design and capacity planning",
            "Energy efficiency and cooling optimisation review",
            "Redundancy and disaster-recovery architecture guidance",
            "Regulatory and compliance advisory for data centre operations",
        ],
        useCases: [
            "Infrastructure design and capacity planning",
            "Energy efficiency and cooling optimisation reviews",
            "Redundancy and disaster-recovery architecture guidance",
            "Regulatory and compliance advisory",
        ],
        businessValue:
            "Infrastructure investment aligned to long-term business objectives, with reduced risk in planning decisions.",
        industries: ["IT, Telecom & Data Centre Operators", "Government & Public Sector", "Large Enterprises"],
        cta: "Talk to Our Data Centre Specialists",
        visual: "dc-consultation",
        decision: {"label":"Requirements met?","yes":{"title":"Detailed design","description":"Architecture for capacity, redundancy and efficiency delivered."},"no":{"title":"Re-plan requirements","description":"Capacity and growth assumptions adjusted before investment."}},
    },
    {
        slug: "data-centre-maintenance",
        name: "Data Centre Maintenance",
        category: "Data Centre Services",
        tagline: "Keep Critical Infrastructure Running.",
        description:
            "Preventive and corrective maintenance that keeps power, cooling, and network systems reliable — with proactive monitoring to reduce downtime.",
        problem:
            "Downtime in a data centre is costly, and reactive maintenance is rarely fast enough to prevent it.",
        solution:
            "We provide preventive and corrective maintenance for critical data centre infrastructure, combined with proactive monitoring designed to minimise downtime and extend the operational life of key assets.",
        process: [
            { title: "Monitor", description: "Proactive tracking of infrastructure health." },
            { title: "Prevent", description: "Scheduled preventive maintenance on power, cooling, and network systems." },
            { title: "Respond", description: "Rapid corrective maintenance when issues arise." },
            { title: "Report", description: "Visibility into asset condition and maintenance history." },
            { title: "Extend", description: "Asset lifecycle management to protect long-term investment." },
        ],
        capabilities: [
            "Preventive maintenance of power, cooling, and network systems",
            "Rapid corrective maintenance and incident response",
            "Proactive infrastructure health monitoring",
            "Asset lifecycle management and reporting",
        ],
        useCases: [
            "Preventive maintenance of power, cooling, and network systems",
            "Rapid corrective maintenance and incident response",
            "Proactive infrastructure health monitoring",
            "Asset lifecycle management and reporting",
        ],
        businessValue:
            "Reduced downtime, extended asset life, and more predictable infrastructure operating costs.",
        industries: ["IT, Telecom & Data Centre Operators", "Manufacturing & Industrial", "Government & Public Sector"],
        cta: "Protect Your Infrastructure Uptime",
        visual: "dc-maintenance",
        decision: {"label":"Fault detected?","yes":{"title":"Rapid response","description":"Corrective maintenance dispatched to prevent downtime."},"no":{"title":"Preventive schedule","description":"Scheduled maintenance keeps power, cooling and network healthy."}},
    },
    {
        slug: "data-centre-feasibility-study",
        name: "Data Centre Feasibility Study",
        category: "Data Centre Services",
        tagline: "Know Before You Build.",
        description:
            "A thorough feasibility study that evaluates the technical, financial, and operational viability of your proposed data centre project.",
        problem:
            "Data centre projects require significant investment — proceeding without a clear feasibility picture increases financial and operational risk.",
        solution:
            "Our feasibility study covers site selection, power and cooling requirements, regulatory considerations, and cost projections — giving stakeholders the insight needed for a sound investment decision.",
        process: [
            { title: "Evaluate", description: "Assess the technical viability of proposed sites." },
            { title: "Assess", description: "Determine power, cooling, and connectivity requirements." },
            { title: "Review", description: "Identify regulatory and compliance considerations." },
            { title: "Project", description: "Build cost projections for the proposed project." },
            { title: "Deliver", description: "A clear feasibility report to support the investment decision." },
        ],
        capabilities: [
            "Site selection and technical viability assessment",
            "Power, cooling, and connectivity requirement analysis",
            "Regulatory and compliance evaluation for proposed sites",
            "Cost projection and investment decision support",
        ],
        useCases: [
            "Site selection and technical viability assessment",
            "Power, cooling, and connectivity requirement analysis",
            "Regulatory and compliance evaluation for proposed sites",
            "Cost projection and investment decision support",
        ],
        businessValue:
            "More informed investment decisions and reduced project risk before capital is committed.",
        industries: ["IT, Telecom & Data Centre Operators", "Real Estate & Infrastructure", "Government & Public Sector"],
        cta: "Assess Your Next Data Centre Project",
        visual: "dc-feasibility",
        decision: {"label":"Site viable?","yes":{"title":"Proceed with confidence","description":"Cost projections and compliance picture support the investment decision."},"no":{"title":"Re-evaluate site","description":"Risks surfaced before capital is committed."}},
    },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
