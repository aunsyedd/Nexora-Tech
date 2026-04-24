import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL = "https://nexoratech.io";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
 {
  id: "fullstack",
  icon: "Code2",
  title: "Full Stack Development",
  tagline: "End-to-end web solutions",
  description:
    "We architect and build high-performance web applications using Next.js, React, Node.js, and modern cloud infrastructure. Scalable, secure, and built to grow with your business.",
  features: [
    "Angular & React development",
    "Next.js applications",
    "JavaScript & TypeScript",
    "Supabase backend integration",
    "Full-stack web architecture",
    "Responsive UI development",
  ],
  color: "cyan",
  gradient: "from-cyan-500/10 to-blue-500/10",
  border: "border-cyan-500/20",
  glow: "rgba(0,212,255,0.15)",
},
{
  id: "ai-apps",
  icon: "Brain",
  title: "AI-Powered Applications",
  tagline: "Intelligence baked in",
  description:
    "Build next-generation applications powered by large language models, computer vision, and ML pipelines. We integrate GPT-4, Claude, Gemini, and custom models into production-grade systems.",
  features: [
    "AI chatbot integration",
    "LLM-based applications",
    "Prompt engineering",
    "AI-powered workflows",
    "Custom AI features",
    "Automation with AI",
  ],
  color: "purple",
  gradient: "from-purple-500/10 to-violet-500/10",
  border: "border-purple-500/20",
  glow: "rgba(168,85,247,0.15)",
},
{
  id: "chatbot",
  icon: "MessageSquare",
  title: "AI Chatbot Integration",
  tagline: "Conversational AI at scale",
  description:
    "Deploy intelligent chatbots that understand context, handle complex queries, and integrate seamlessly with your existing tools.",
  features: [
    "Custom AI chatbot development",
    "Website chatbot integration",
    "Supabase-powered chat systems",
    "Multi-language chatbots",
    "Conversation handling logic",
    "Real-time chat features",
  ],
  color: "cyan",
  gradient: "from-cyan-500/10 to-teal-500/10",
  border: "border-cyan-500/20",
  glow: "rgba(0,212,255,0.15)",
},
{
  id: "saas",
  icon: "Layers",
  title: "SaaS Product Development",
  tagline: "From concept to recurring revenue",
  description:
    "We build complete SaaS platforms — from architecture to deployment with scalable solutions.",
  features: [
    "Next.js SaaS applications",
    "Authentication systems",
    "Supabase database setup",
    "Dashboard development",
    "User management systems",
    "Scalable frontend architecture",
  ],
  color: "violet",
  gradient: "from-violet-500/10 to-purple-500/10",
  border: "border-violet-500/20",
  glow: "rgba(124,58,237,0.15)",
},
{
  id: "api",
  icon: "Zap",
  title: "API Development & Integration",
  tagline: "Connect everything",
  description:
    "Design and build robust APIs, or integrate third-party services into your workflow.",
  features: [
    "REST API development",
    "API integration",
    "Supabase APIs",
    "Authentication (JWT)",
    "Frontend-backend integration",
    "Data handling & state management",
  ],
  color: "yellow",
  gradient: "from-yellow-500/10 to-orange-500/10",
  border: "border-yellow-500/20",
  glow: "rgba(234,179,8,0.15)",
},
{
  id: "uiux",
  icon: "Palette",
  title: "UI/UX Design Services",
  tagline: "Design that converts",
  description:
    "We craft clean and modern interfaces focused on usability and performance.",
  features: [
    "Responsive UI design",
    "Modern web layouts",
    "Component-based design",
    "Frontend optimization",
    "User-friendly interfaces",
    "Interactive UI elements",
  ],
  color: "pink",
  gradient: "from-pink-500/10 to-rose-500/10",
  border: "border-pink-500/20",
  glow: "rgba(236,72,153,0.15)",
},
];

export const PROJECTS = [
  {
    id: 1,
    title: "Chef Station",
    category: "Kitchen Website With AI ChatBot",
    description:
      "Chef Station is an AI-powered kitchen website that helps users discover recipes, cooking tips, and culinary guidance through an intelligent chatbot assistant.",
    tech: ["Next.js", "Gemini API", "Supabase", "Python"],
    // stats: { users: "12K+", mrr: "$48K", rating: "4.9" },
    color: "cyan",
    gradient: "from-cyan-500 to-blue-600",
    featured: true,
      image: "/assets/chef station main.jpg", // ✅ MUST BE EXACT

  },
  // {
  //   id: 2,
  //   title: "FlowDesk",
  //   category: "SaaS — Customer Support",
  //   description:
  //     "Multi-channel customer support SaaS with AI triage, sentiment analysis, and automated response suggestions. Reduces ticket resolution time by 60%.",
  //   tech: ["React", "Node.js", "PostgreSQL", "Redis"],
  //   stats: { users: "3.2K", mrr: "$22K", rating: "4.8" },
  //   color: "purple",
  //   gradient: "from-purple-500 to-violet-600",
  //   featured: true,
  // },
  // {
  //   id: 3,
  //   title: "NovaPay",
  //   category: "Fintech Application",
  //   description:
  //     "A payment processing dashboard with real-time fraud detection powered by ML models. Handles $2M+ in monthly transaction volume.",
  //   tech: ["Next.js", "Python/FastAPI", "MongoDB", "TensorFlow"],
  //   stats: { users: "850+", mrr: "$35K", rating: "4.7" },
  //   color: "green",
  //   gradient: "from-emerald-500 to-teal-600",
  //   featured: false,
  // },
  // {
  //   id: 4,
  //   title: "DocuMind",
  //   category: "AI Productivity Tool",
  //   description:
  //     "RAG-powered document intelligence tool. Upload PDFs, contracts, or knowledge bases and query them with natural language. Used by 400+ law firms.",
  //   tech: ["Next.js", "LangChain", "Pinecone", "Claude API"],
  //   stats: { users: "6K+", mrr: "$18K", rating: "4.9" },
  //   color: "violet",
  //   gradient: "from-violet-500 to-purple-600",
  //   featured: true,
  // },
  // {
  //   id: 5,
  //   title: "ShopOS",
  //   category: "E-commerce Platform",
  //   description:
  //     "Headless e-commerce platform with AI product recommendations, dynamic pricing engine, and real-time inventory management.",
  //   tech: ["Next.js", "Shopify API", "OpenAI", "PostgreSQL"],
  //   stats: { users: "2.1K", mrr: "$29K", rating: "4.6" },
  //   color: "orange",
  //   gradient: "from-orange-500 to-red-500",
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: "Synapse CRM",
  //   category: "AI-Powered CRM",
  //   description:
  //     "Intelligent CRM with automated lead scoring, meeting summaries via Whisper API, and AI-drafted follow-up emails. Integrates with 50+ tools.",
  //   tech: ["React", "Node.js", "OpenAI", "HubSpot API"],
  //   stats: { users: "1.5K", mrr: "$41K", rating: "4.8" },
  //   color: "cyan",
  //   gradient: "from-cyan-500 to-sky-600",
  //   featured: false,
  // },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO, Prism Analytics",
    avatar: "SC",
    content:
      "Nexora Tech transformed our vision into a production-ready AI platform in under 3 months. The code quality and architecture decisions were exceptional — it's been running without issues for 14 months.",
    rating: 5,
    color: "cyan",
  },
  {
    name: "Marcus Webb",
    role: "Founder, FlowStack",
    avatar: "MW",
    content:
      "We hired Nexora to rebuild our SaaS from scratch. They delivered a system that handles 10x our original traffic with half the infrastructure cost. Truly impressive engineering.",
    rating: 5,
    color: "purple",
  },
  {
    name: "Priya Nair",
    role: "Head of Product, TechVault",
    avatar: "PN",
    content:
      "The AI chatbot they built for our platform reduced our support tickets by 68% in the first month. The integration was seamless and the quality was beyond what we expected.",
    rating: 5,
    color: "violet",
  },
  {
    name: "James Okafor",
    role: "CEO, NorthStar Digital",
    avatar: "JO",
    content:
      "Syed and the Nexora team have a rare combination of technical depth and product thinking. They don't just build what you ask — they build what you need.",
    rating: 5,
    color: "pink",
  },
];

export const STATS = [
  { label: "Projects Delivered", value: "120+", suffix: "" },
  { label: "Client Satisfaction", value: "98", suffix: "%" },
  { label: "Years of Experience", value: "6", suffix: "+" },
  { label: "Countries Served", value: "24", suffix: "+" },
];
