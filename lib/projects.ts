export interface Project {
  slug: string;
  category: string;
  title: string;
  shortDesc: string;
  tags: string[];
  coverSeed: string;
  mainImageSeed: string;
  client: string;
  company: string;
  location: string;
  projectType: string;
  gallery1Seed: string;
  gallery2Seed: string;
  gallery3Seed: string;
  gallery4Seed: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "cloud-migration-fintech",
    category: "FINTECH COMPANY",
    title: "Cloud Migration for a Fintech",
    shortDesc:
      "Migrated a legacy financial platform to AWS cloud architecture, reducing operational costs by 40% and improving system reliability to 99.9% uptime.",
    tags: ["Cloud Migration", "AWS", "DevOps"],
    coverSeed: "fintech-cover-2026",
    mainImageSeed: "fintech-main-2026",
    client: "Marcus Reynolds",
    company: "PayEdge Ltd",
    location: "14 Wall Street, New York",
    projectType: "Cloud Infrastructure",
    gallery1Seed: "fintech-g1-2026",
    gallery2Seed: "fintech-g2-2026",
    gallery3Seed: "fintech-g3-2026",
    gallery4Seed: "fintech-g4-2026",
  },
  {
    slug: "brand-identity-platform",
    category: "CLOUD SERVICE",
    title: "Brand Identity Platform",
    shortDesc:
      "Built a multi-tenant SaaS brand management platform with real-time collaboration features and white-label capabilities for design agencies.",
    tags: ["SaaS", "React", "Design System"],
    coverSeed: "brand-cover-2026",
    mainImageSeed: "brand-main-2026",
    client: "Sophia Lane",
    company: "Creatify Studio",
    location: "7 Soho Square, London",
    projectType: "SaaS Platform",
    gallery1Seed: "brand-g1-2026",
    gallery2Seed: "brand-g2-2026",
    gallery3Seed: "brand-g3-2026",
    gallery4Seed: "brand-g4-2026",
  },
  {
    slug: "transforming-ideas-reality",
    category: "IT SOLUTION",
    title: "Transforming Ideas into Reality",
    shortDesc:
      "Developed a comprehensive IT management suite for a mid-size enterprise, integrating ERP, CRM, and HR modules into a unified platform.",
    tags: ["Enterprise", "ERP", "Integration"],
    coverSeed: "ideas-cover-2026",
    mainImageSeed: "ideas-main-2026",
    client: "David Kim",
    company: "NexaCorp",
    location: "22 Tech Park, San Francisco",
    projectType: "Enterprise Software",
    gallery1Seed: "ideas-g1-2026",
    gallery2Seed: "ideas-g2-2026",
    gallery3Seed: "ideas-g3-2026",
    gallery4Seed: "ideas-g4-2026",
  },
  {
    slug: "enterprise-security-overhaul",
    category: "CYBER SECURITY",
    title: "Enterprise Security Overhaul",
    shortDesc:
      "Conducted a comprehensive security audit and implemented zero-trust architecture for a healthcare provider, achieving HIPAA and SOC 2 compliance.",
    tags: ["Security", "Compliance", "Zero-Trust"],
    coverSeed: "security-p-cover-2026",
    mainImageSeed: "security-p-main-2026",
    client: "Priya Sharma",
    company: "MedSafe Health",
    location: "50 Health Blvd, Boston",
    projectType: "Cybersecurity",
    gallery1Seed: "security-p-g1-2026",
    gallery2Seed: "security-p-g2-2026",
    gallery3Seed: "security-p-g3-2026",
    gallery4Seed: "security-p-g4-2026",
  },
  {
    slug: "shopflow-ecommerce",
    category: "E-COMMERCE",
    title: "ShopFlow E-Commerce Platform",
    shortDesc:
      "A high-performance storefront with real-time inventory, Stripe payments, and full CMS integration — engineered to handle 10,000+ concurrent users.",
    tags: ["Next.js", "E-Commerce", "Stripe"],
    coverSeed: "shopflow-cover-2026",
    mainImageSeed: "shopflow-main-2026",
    client: "Alex Turner",
    company: "ShopFlow Inc",
    location: "8 Market Street, Chicago",
    projectType: "E-Commerce",
    gallery1Seed: "shopflow-g1-2026",
    gallery2Seed: "shopflow-g2-2026",
    gallery3Seed: "shopflow-g3-2026",
    gallery4Seed: "shopflow-g4-2026",
  },
  {
    slug: "datapulse-analytics",
    category: "SAAS",
    title: "DataPulse Analytics Dashboard",
    shortDesc:
      "Multi-tenant SaaS analytics platform with real-time data pipelines, role-based access control, and white-label support for B2B clients.",
    tags: ["Analytics", "SaaS", "Docker"],
    coverSeed: "datapulse-cover-2026",
    mainImageSeed: "datapulse-main-2026",
    client: "Jordan Miles",
    company: "InsightHQ",
    location: "3 Digital Hub, Austin",
    projectType: "SaaS / Analytics",
    gallery1Seed: "datapulse-g1-2026",
    gallery2Seed: "datapulse-g2-2026",
    gallery3Seed: "datapulse-g3-2026",
    gallery4Seed: "datapulse-g4-2026",
  },
];
