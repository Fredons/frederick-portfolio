/**
 * Single source of truth for the CV. The .docx and .pdf builders both read
 * this, so the two files cannot drift apart. Edit here, rebuild both.
 */

module.exports = {
  name: "Frederick Akam",
  title: "AI & Automation Engineer  |  Full-Stack Software Engineer",
  location: "Lagos, Nigeria (UTC+1)  |  Available for remote work worldwide",
  contact: "akamfrederick@gmail.com  |  +234 706 632 7741",
  links: "frederickakam.vercel.app  |  github.com/Fredons",

  summary:
    "Software engineer with ten years of professional experience, now building AI-backed products end to end. " +
    "I work daily with the Claude API and agentic developer tooling: designing prompts, defining tools, wiring " +
    "large language model calls into production systems, and evaluating output quality. Eight live production " +
    "systems shipped, most as sole developer, spanning multi-tenant SaaS, voice AI, workflow automation and " +
    "data-heavy web platforms. Every project listed below is publicly live and can be opened and inspected.",

  skills: [
    ["AI and LLM", "Claude API, prompt design and iteration, tool and function definitions, agentic workflows, model output evaluation, Claude Code, voice AI integration"],
    ["Automation", "n8n workflow automation, webhook pipelines, scheduled jobs, document extraction, data enrichment, third-party API integration"],
    ["Languages", "TypeScript, JavaScript, Python, SQL, C++"],
    ["Web", "Next.js (App Router), React, Tailwind CSS, REST API design, responsive and accessible interfaces"],
    ["Data", "PostgreSQL, Supabase, PostGIS, Sanity CMS, multi-tenant architecture, role-based access control"],
    ["Infrastructure", "Vercel, self-hosted Hetzner, Docker, CI/CD pipelines, observability and analytics instrumentation"],
    ["Quality", "Playwright, axe-core, WCAG 2.2 AA, Core Web Vitals, code review, automated testing"],
  ],

  experience: [
    {
      title: "Developer",
      org: "ProForge, Melbourne, Australia (Remote)",
      dates: "2024 – Present",
      bullets: [
        "Built ProForge, an AI receptionist for Australian trade businesses: voice AI answers calls around the clock, books jobs directly into calendars, sends SMS confirmations, follows up quotes, requests reviews and routes genuine emergencies to the operator. Sole developer across voice, telephony, backend and interface.",
        "Built PropInfo, a multi-tenant SaaS platform for Australian buyer's agents. Uses the Claude API to generate pre-purchase property assessments against comparable sales, and computes state-specific stamp duty and lenders mortgage insurance, thirty-year investment projections, rental yield and depreciation.",
        "Designed the PropInfo data model and access layer: CRM pipeline from enquiry to settlement, live portfolio valuation, and role-based access control across shared multi-agent workspaces.",
        "Delivered client web platforms end to end, including a six-language law firm site and a CMS-driven sponsorship platform where the client edits all content without a developer.",
        "Engineered a six-scene scroll-scrubbed film homepage with frame-locked scene transitions, separate mobile encodes and server-rendered markup, so all content is present before JavaScript executes.",
      ],
    },
    {
      title: "Software Engineer",
      org: "Seamate Maritime Integrated Services Limited, Lagos, Nigeria",
      dates: "2021 – Present",
      bullets: [
        "Design, development and ongoing maintenance of the company web application.",
        "Conduct code reviews, diagnose and resolve defects, and improve application stability.",
        "Develop features in collaboration with company executives and provide direct technical support to end users.",
      ],
    },
    {
      title: "Software Engineer",
      org: "Efficacy Technology Limited, Kaduna, Nigeria",
      dates: "2016 – 2021",
      bullets: [
        "Developed a cloud-based SaaS product within a team of ten engineers.",
        "Implemented microservices architecture and designed scalable RESTful APIs.",
        "Integrated machine learning models to improve data analysis capability.",
        "Built automated test suites and resolved critical production incidents.",
        "Collaborated with UX designers to improve interface usability.",
      ],
    },
  ],

  projects: [
    ["PropInfo", "propinfo.com.au", "Multi-tenant SaaS for Australian buyer's agents. AI property assessments, census data, financial modelling, CRM and RBAC. Next.js, TypeScript, Supabase, Claude API."],
    ["ProForge", "proforge.com.au", "AI receptionist for trade businesses. Voice AI, telephony, calendar booking, SMS. Next.js, Supabase, n8n."],
    ["iventicks", "eventicket-psi.vercel.app", "Event ticketing platform with payments, fraud detection, refunds, bulk cancellation and PWA install."],
    ["Strategic Buys", "strategicbuys.com.au", "Property advisory brand site built as a six-scene scroll-scrubbed film, server-rendered."],
    ["Asprey Lawyers", "aspreylawyers.com", "Melbourne law firm site shipped in six languages. Next.js 15, React 19, Tailwind v4."],
    ["Nikunj", "nikunj.com.au", "Sponsorship platform for a professional racing driver. Sanity CMS, Supabase, GA4."],
    ["NVRGVP", "nvrgvp.org", "Content-led site with country-resolved provider logic, structured for search."],
  ],

  internal: [
    ["ChargeCore", "Charge point management platform for off-grid solar EV charging, built on a CitrineOS fork with OCPP. Metering, session billing and tariff logic against solar supply."],
    ["access-audit", "Headless WCAG 2.1 and 2.2 AA conformance scanner on Playwright and axe-core. Produces dated, hash-verified evidence records and fingerprints accessibility overlay vendors by script signature."],
  ],

  education: [
    ["BSc, Computer Science Education", "Enugu State University of Science and Technology, Enugu, Nigeria", "2011 – 2014"],
    ["National Diploma, Telecommunication Technology", "Innovation Institute of Technology, Kaduna, Nigeria", "2008 – 2010"],
  ],

  certifications: "Python (Udemy, 60 Days)  |  Intermediate Python (Codecademy)",
  languages: "English: full professional proficiency",
};
