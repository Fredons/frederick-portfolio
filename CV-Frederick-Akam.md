# Frederick Akam

**Full-Stack Product Engineer  |  AI and Automation**

Kaduna, Nigeria (UTC+1)  |  Remote, worldwide

akamfrederick@gmail.com  |  +234 706 632 7741

frederickakam.vercel.app  |  github.com/Fredons

---

## Professional Summary

Software engineer with ten years of professional experience, the last four building 0-to-1 production platforms end to end as the sole developer: schema, backend, AI layer, interface, deployment and the operational tooling around them. Eight systems are live and publicly checkable. I put large language models inside production systems rather than beside them. PropInfo generates pre-purchase property assessments with the Claude API and reconciles them against deterministic financial modelling; ProForge answers a trade business's phone with voice AI, qualifies the caller and books the job. All of it delivered asynchronously from UTC+1 for Australian businesses across property, legal, motorsport and trades.

---

## Core Skills

**AI and automation** Anthropic Claude API, Claude Agent SDK, Claude Code, agentic workflows, tool and function definitions, prompt design and iteration, model output evaluation, voice AI integration (Vapi, Twilio), n8n workflow automation

**Frontend** TypeScript, JavaScript, React, Next.js (App Router), Tailwind CSS, Framer Motion, state management, input validation, error and loading states, responsive and accessible interfaces

**Backend** Node.js, Next.js route handlers, REST API design, authentication and sessions (NextAuth), role-based access control, request validation, error handling, webhooks

**Data** PostgreSQL, Supabase, SQL schema design and migrations, PostGIS, geospatial and ETL pipelines at multi-million-record scale, SQLite, Sanity CMS, multi-tenant architecture

**Python** Data processing, ETL pipelines, API clients, scraping and automation scripts (httpx, Playwright, openpyxl, PyYAML)

**Infrastructure** Vercel, self-hosted Hetzner, Docker, Git, CI/CD pipelines, observability and analytics instrumentation

**Quality** Playwright, axe-core, automated testing, code review, debugging across frontend, backend and database, WCAG 2.2 AA, Core Web Vitals

---

## Professional Experience

**Independent Software Engineer** · Kaduna, Nigeria (Remote) · 2024 – Present

- Build and ship production web platforms end to end for Australian businesses: database schema, backend, API, AI layer, interface, deployment and the operational tooling around them.
- Built PropInfo, a multi-tenant SaaS platform that collapses a buyer's agent's twenty-tab research workflow into one system. The Claude API generates pre-purchase property assessments against comparable sales, reconciled against deterministic modelling: state-specific stamp duty and lenders mortgage insurance, thirty-year yield, cash flow and depreciation projections.
- Designed the PropInfo data model and access layer: CRM pipeline from first enquiry to settlement, live portfolio valuation, and role-based access control across shared multi-agent workspaces.
- Built PropInfo's data layer for an investor-focused direction of the product: a Python ETL pipeline into PostGIS loading 5.88 million records. 5.1 million geocoded G-NAF addresses, 239,895 NSW property sales, 447,794 VIC crime records, 63,673 Census 2021 records by postcode, postal boundaries for map overlays, and RBA cash rate history feeding the investment calculator.
- Built ProForge, an AI receptionist that recovers revenue trade businesses lose to unanswered calls. Voice AI answers around the clock, qualifies the caller, books the job into the calendar, sends SMS confirmation, follows up quotes and escalates genuine emergencies to the operator. Twilio carries the numbers and telephony, Vapi handles the speech layer. Sole developer across voice, automation, backend, marketing site and a separate operator dashboard with its own billing and provisioning.
- Built iventicks, an event ticketing platform, across 95 server-side API endpoints: authentication and sessions, guest account claiming, role-based admin, payments, refunds, fraud detection on purchase patterns, bulk event cancellation returning money to hundreds of holders at once, organiser payouts, analytics, data export, and a live check-in stream with offline sync.
- Wrote standalone Python tooling for data processing and third-party API clients, including a lead pipeline on httpx and openpyxl, and a headless accessibility scanner on Playwright.
- Delivered client web platforms end to end, including a six-language law firm site and a CMS-driven sponsorship platform where the client edits every career fact without a developer.
- Engineered a six-scene scroll-scrubbed film homepage with frame-locked scene transitions, separate mobile encodes and server-rendered markup, so all content is present before JavaScript executes.

**Software Engineer** · Seamate Maritime Integrated Services Limited, Lagos, Nigeria · 2021 – 2026

- Design, development and ongoing maintenance of the company web application.
- Conducted code reviews, diagnosed and resolved defects, and improved application stability.
- Developed features in collaboration with company executives and provided direct technical support to end users.
- Independent client work ran alongside this role from 2024.

**Software Engineer** · Efficacy Technology Limited, Kaduna, Nigeria · 2016 – 2021

- Built and maintained websites for the company and its clients, including a school website.
- Provided technical research and consultation to support client projects.

---

## Selected Projects (all publicly live)

**PropInfo** · propinfo.com.au
Multi-tenant SaaS for Australian buyer's agents. Claude API property assessments reconciled against deterministic financial modelling, CRM, RBAC, and a PostGIS data layer of 5.88M records loaded by a Python ETL pipeline. Next.js, TypeScript, Supabase, Postgres, PostGIS.

**ProForge** · proforge.com.au
AI phone receptionist for trade businesses. Twilio telephony, Vapi voice layer, calendar booking, SMS, quote follow-up. Next.js, TypeScript, Supabase, n8n.

**iventicks** · eventicket-psi.vercel.app
Event ticketing across 95 endpoints. Payments, fraud detection, refunds, bulk cancellation, payouts, offline-sync check-in, PWA.

**Strategic Buys** · strategicbuys.com.au
Property advisory site built as a six-scene scroll-scrubbed film, frame-locked seams, server-rendered.

**Asprey Lawyers** · aspreylawyers.com
Melbourne law firm site in six languages. Next.js 15, React 19, Tailwind v4.

**Nikunj** · nikunj.com.au
Sponsorship platform for a racing driver. Client-editable record via embedded studio. Sanity CMS, Supabase, GA4.

**NVRGVP** · nvrgvp.org
Content-led site with country-resolved provider logic, structured for search.

**plan-gate  (github.com/Fredons/plan-gate)**
A deterministic gate over AI-generated training plans. The model owns judgement, tested code owns the numbers, and only the code can publish. The README documents where the first version broke: the repair agent was handed a diagnosis instead of the arithmetic, so it trimmed 20% when the maths needed 58%.

**access-audit  (github.com/Fredons/access-audit)**
Headless WCAG 2.1 and 2.2 AA scanner on Playwright and axe-core. Dated, hash-verified evidence records, overlay vendor fingerprinting by script signature, and a re-scan with the overlay blocked to report the delta.

**JARVIS**
A local-first AI operating layer for Windows, in development. Tauri 2 in Rust owns the window, tray, global hotkey and sidecar lifecycle; a Node sidecar runs the Claude Agent SDK with tools into the real OS; memory persists in SQLite with FTS5 and mirrors one-way to a markdown vault. Every run carries a hard cost ceiling. A milestone counts as done when it survives a week of daily use, not when the code merges.

**ChargeCore**
Charge point management for off-grid solar EV charging on a CitrineOS fork with OCPP. Metering, session billing, tariff logic against solar supply.

---

## Education

**BSc, Computer Science Education** · Enugu State University of Science and Technology, Enugu, Nigeria · 2011 – 2014

**National Diploma, Telecommunication Technology** · Innovation Institute of Technology, Kaduna, Nigeria · 2008 – 2010

---

## Languages

English: full professional proficiency
