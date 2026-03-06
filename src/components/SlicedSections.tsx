import { useState } from 'react';

// ── Diagonal Divider SVG helper ──
function DiagonalDivider({ fromDark = true }: { fromDark?: boolean }) {
    return (
        <div className="relative h-20 overflow-hidden -mt-1">
            <svg
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
            >
                <polygon
                    points="0,0 1440,0 1440,80 0,0"
                    fill={fromDark ? '#F9FAFB' : '#0a0a0a'}
                />
            </svg>
        </div>
    );
}

// ── Browser Mockup Card ──
function BrowserMockup({ imgUrl, title, tag, className = '' }: { imgUrl: string; title: string; tag: string; className?: string }) {
    return (
        <div className={`rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] ${className}`}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1c1c1c] border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                    <div className="h-5 bg-[#2a2a2a] rounded-full flex items-center px-3">
                        <span className="text-[10px] text-white/25 font-mono truncate">{title}</span>
                    </div>
                </div>
            </div>
            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 px-2 py-1 rounded">
                        {tag}
                    </span>
                    <p className="text-white text-sm font-semibold mt-1">{title}</p>
                </div>
            </div>
        </div>
    );
}

// ── Sliced Section 1: Work Showcase (Dark) ──
function WorkShowcase() {
    const works = [
        {
            title: 'elux.space — Brand Identity',
            tag: 'Branding',
            img: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?auto=format&fit=crop&q=80&w=1200',
        },
        {
            title: 'MVP Dashboard Design',
            tag: 'UI/UX',
            img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
        },
        {
            title: 'E-Commerce Flow Redesign',
            tag: 'Product Design',
            img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
        },
        {
            title: 'Mobile App Prototype',
            tag: 'Prototype',
            img: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1200',
        },
    ];

    return (
        <section className="bg-[#0a0a0a] py-32 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
                    <div>
                        <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.3em] mb-4">
                            Selected Work
                        </p>
                        <h2 className="text-5xl md:text-[72px] font-bold text-white tracking-tighter leading-[0.9] font-display">
                            Crafted with<br />
                            precision<span className="text-[#2563EB]">.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-base max-w-sm leading-relaxed md:text-right">
                        Every project starts with understanding your users. We design
                        interfaces that convert and experiences that retain.
                    </p>
                </div>

                {/* Work Grid — staggered cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Large featured card */}
                    <div className="md:row-span-1 group relative rounded-2xl overflow-hidden border border-white/5 hover:border-[#2563EB]/30 transition-all duration-500">
                        <BrowserMockup
                            imgUrl={works[0].img}
                            title="elux.space — Brand Identity System"
                            tag={works[0].tag}
                        />
                        <div className="absolute inset-0 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/5 transition-all duration-500 pointer-events-none rounded-2xl" />
                    </div>

                    {/* Two stacked cards on right */}
                    <div className="flex flex-col gap-6">
                        <div className="group relative rounded-2xl hover:border-[#2563EB]/30 transition-all duration-500 border border-transparent">
                            <BrowserMockup
                                imgUrl={works[1].img}
                                title="SaaS MVP Dashboard"
                                tag={works[1].tag}
                            />
                        </div>
                        <div className="group relative rounded-2xl hover:border-[#2563EB]/30 transition-all duration-500 border border-transparent">
                            <BrowserMockup
                                imgUrl={works[2].img}
                                title="E-Commerce Flow"
                                tag={works[2].tag}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom wide card */}
                <div className="mt-6 group relative rounded-2xl hover:border-[#2563EB]/30 transition-all duration-500 border border-transparent">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#1c1c1c] border-b border-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="h-5 bg-[#2a2a2a] rounded-full flex items-center px-3">
                                    <span className="text-[10px] text-white/25 font-mono">figma.com/file/elux-mobile-app</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={works[3].img}
                                alt="Mobile App"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent" />
                            <div className="absolute bottom-6 left-6 flex items-center gap-6">
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 px-2 py-1 rounded">
                                        Prototype
                                    </span>
                                    <p className="text-white text-base font-semibold mt-1">Mobile App Prototype · 24 Screens</p>
                                </div>
                                <div className="hidden md:flex items-center gap-8">
                                    {['Fintech', 'Healthcare', 'SaaS', 'E-comm'].map(cat => (
                                        <span key={cat} className="text-xs text-white/40 font-medium uppercase tracking-wider">{cat}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-center mt-16">
                    <a
                        href="#case-studies"
                        onClick={() => { window.location.hash = '#case-studies'; }}
                        className="group flex items-center gap-3 border border-white/15 rounded-full px-8 py-4 text-sm font-semibold text-white hover:border-[#2563EB]/60 hover:bg-[#2563EB]/5 transition-all duration-300"
                    >
                        View all case studies
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

// ── Sliced Section 2: Services Grid (Light) ──
function ServicesGrid() {
    const services = [
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'MVP UX & UI Design',
            desc: 'Core flows and critical screens — designed fast and built to convert. Perfect for seed-stage startups.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                </svg>
            ),
            title: 'Product Design',
            desc: 'End-to-end design of your digital product — from discovery and research through to high-fidelity UI.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: 'Webflow / Framer Dev',
            desc: 'Pixel-perfect no-code development. Fast, SEO-friendly, and ready to launch in days — not months.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            ),
            title: 'Branding Identity',
            desc: 'Logo, color palette, typography, and brand guidelines that make your company instantly recognizable.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                </svg>
            ),
            title: 'UX Audit & Strategy',
            desc: 'We analyze your existing product and identify friction points, conversion killers, and UX debt.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            ),
            title: 'Design Systems',
            desc: 'Component libraries, tokens, and documentation — your team\'s single source of visual truth.',
        },
    ];

    return (
        <section className="bg-[#F9FAFB] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
                    <div>
                        <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.3em] mb-4">
                            What We Do
                        </p>
                        <h2 className="text-5xl md:text-[72px] font-bold text-[#0a0a0a] tracking-tighter leading-[0.9] font-display">
                            Services<span className="text-[#2563EB]">.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-base max-w-sm leading-relaxed">
                        From zero to polished product. We cover every stage of the
                        design process so you can focus on building.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 group hover:bg-[#0a0a0a] transition-all duration-500 cursor-default"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/5 group-hover:bg-[#2563EB]/15 flex items-center justify-center mb-6 transition-all duration-300 text-[#2563EB]">
                                {svc.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0a0a0a] group-hover:text-white mb-3 transition-colors duration-300 font-display">
                                {svc.title}
                            </h3>
                            <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                                {svc.desc}
                            </p>
                            <div className="mt-8 flex items-center gap-2 text-[#2563EB] text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Learn more
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Sliced Section 3: Stats / Numbers (Dark) ──
function StatsSection() {
    const stats = [
        { value: '80+', label: 'Projects Delivered', desc: 'Across 12 countries' },
        { value: '4.9★', label: 'Average Rating', desc: 'On Clutch & Design Rush' },
        { value: '3×', label: 'Faster Than Agencies', desc: 'Typical 2–4 week turnaround' },
        { value: '$0', label: 'Revision Surprises', desc: 'Unlimited rounds included' },
    ];

    return (
        <section className="bg-[#0a0a0a] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Eyebrow */}
                <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.3em] mb-6 text-center">
                    By the numbers
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-[#0a0a0a] p-12 text-center border border-white/5 hover:border-[#2563EB]/30 transition-all duration-300 group"
                        >
                            <div className="text-6xl lg:text-7xl font-bold text-white font-display tracking-tighter group-hover:text-[#2563EB] transition-colors duration-300">
                                {stat.value}
                            </div>
                            <div className="mt-4 text-sm font-semibold text-white/70 uppercase tracking-wider">
                                {stat.label}
                            </div>
                            <div className="mt-2 text-xs text-white/30">
                                {stat.desc}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider line */}
                <div className="mt-24 flex items-center gap-6">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-white/20 text-xs uppercase tracking-[0.3em]">Trusted by founders & operators worldwide</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Client logos placeholder */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
                    {['Alialearn', 'Lightrow', 'Velo Studio', 'CloudScale', 'Wright & Co', 'Aventi Corp'].map(name => (
                        <span key={name} className="text-white/20 text-sm font-bold uppercase tracking-widest hover:text-white/50 transition-colors cursor-default">
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Sliced Section 4: Process Steps (Light) ──
function ProcessSection() {
    const steps = [
        {
            num: '01',
            title: 'Discovery Call',
            desc: 'We align on goals, scope, and timelines. You tell us about your users, your vision, and your constraints.',
        },
        {
            num: '02',
            title: 'Research & Audit',
            desc: 'We study your competitors, map user journeys, and identify every friction point in the current experience.',
        },
        {
            num: '03',
            title: 'Design Sprint',
            desc: 'Wireframes → High-fidelity UI → Interactive prototype. You review at each milestone and we iterate fast.',
        },
        {
            num: '04',
            title: 'Handoff & Launch',
            desc: 'Developer-ready files, component specs, and design tokens. Your engineers can build without guessing.',
        },
    ];

    return (
        <section className="bg-[#F9FAFB] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.3em] mb-4">
                        How We Work
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <h2 className="text-5xl md:text-[64px] font-bold text-[#0a0a0a] tracking-tighter leading-[0.95] font-display">
                            Our Process<span className="text-[#2563EB]">.</span>
                        </h2>
                        <p className="text-gray-500 text-base max-w-sm leading-relaxed">
                            Structured for speed. Transparent at every step.
                            Designed to remove surprises.
                        </p>
                    </div>
                </div>

                {/* Steps — horizontal scroll for desktop */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-gray-200">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`p-10 border-b md:border-b-0 md:border-r border-gray-200 last:border-0 group hover:bg-[#0a0a0a] transition-all duration-500`}
                        >
                            <div className="text-[72px] font-bold text-gray-100 group-hover:text-[#2563EB]/20 font-display leading-none mb-6 transition-colors duration-300">
                                {step.num}
                            </div>
                            <h3 className="text-lg font-bold text-[#0a0a0a] group-hover:text-white mb-3 transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Sliced Section 5: FAQ Accordion (Dark) ──
function FAQSection() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const faqs = [
        {
            q: 'How long does a typical MVP design project take?',
            a: 'Most MVP scopes take 2–4 weeks from kick-off to final handoff. We compress time by working in focused sprints and keeping feedback cycles short. Rush timelines are possible — ask us.',
        },
        {
            q: 'Do you work with early-stage startups?',
            a: 'Yes — this is our sweet spot. We specialize in seed-stage and pre-launch companies where fast, high-quality design is a true competitive advantage. We speak founder.',
        },
        {
            q: "What's included in the developer handoff?",
            a: 'You receive organized Figma files, an annotated design system, component specs, spacing and typography tokens, and an interactive prototype. Your engineers get everything they need to build without back-and-forth.',
        },
        {
            q: 'How many revision rounds are included?',
            a: 'Unlimited. We work iteratively and value trust over scope creep arguments. We\'ll keep refining until the design truly serves your users and business goals.',
        },
        {
            q: 'Can you redesign an existing product?',
            a: 'Absolutely. We start with a UX audit to diagnose root causes, then redesign with a clear strategy. We can phase it so your engineering team adopts changes progressively.',
        },
        {
            q: 'Do you also do Webflow or Framer development?',
            a: 'Yes — we offer full no-code development on Webflow and Framer. Marketing sites, landing pages, and portfolios. Pixel-perfect, SEO-optimized, and editable by your team after launch.',
        },
    ];

    return (
        <section className="bg-[#0a0a0a] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left — sticky header */}
                    <div className="lg:col-span-4">
                        <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.3em] mb-4">
                            FAQ
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight font-display mb-8">
                            Questions<br />
                            answered<span className="text-[#2563EB]">.</span>
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-12">
                            Can't find what you're looking for? Drop us an email at{' '}
                            <a href="mailto:hello@elux.space" className="text-[#2563EB] hover:underline">
                                hello@elux.space
                            </a>
                        </p>
                        <a
                            href="mailto:hello@elux.space"
                            className="inline-flex items-center gap-3 bg-[#2563EB] text-white rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-500 transition-all hover:scale-105"
                        >
                            Book a call
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Right — accordion */}
                    <div className="lg:col-span-8">
                        <div className="space-y-0 border-t border-white/10">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="border-b border-white/10"
                                >
                                    <button
                                        onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                        className="w-full flex items-center justify-between py-7 text-left group"
                                    >
                                        <span className={`text-base font-semibold transition-colors duration-200 pr-8 ${openIdx === i ? 'text-[#2563EB]' : 'text-white group-hover:text-[#2563EB]'}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-300 ${openIdx === i ? 'bg-[#2563EB] border-[#2563EB] rotate-45' : 'border-white/20 group-hover:border-[#2563EB]/50'}`}>
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </div>
                                    </button>
                                    {openIdx === i && (
                                        <div className="pb-7 pr-16">
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Sliced Section 6: Second Work Showcase (Light) ──
function FeaturedCaseStudy() {
    const cases = [
        {
            tag: 'Product Design · SaaS',
            title: 'Redesigning the core dashboard experience for a B2B analytics platform',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400',
            result: '+42% retention',
            duration: '6 weeks',
        },
        {
            tag: 'MVP Design · Fintech',
            title: 'Zero to launch: Payment app MVP for a seed-stage startup',
            img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1400',
            result: '$2.4M raised',
            duration: '3 weeks',
        },
    ];

    return (
        <section className="bg-[#F9FAFB] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
                    <div>
                        <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.3em] mb-4">
                            Case Studies
                        </p>
                        <h2 className="text-5xl md:text-[64px] font-bold text-[#0a0a0a] tracking-tighter leading-[0.95] font-display">
                            Impact in the<br />
                            real world<span className="text-[#2563EB]">.</span>
                        </h2>
                    </div>
                    <a
                        href="#case-studies"
                        onClick={() => { window.location.hash = '#case-studies'; }}
                        className="group flex items-center gap-3 border border-[#0a0a0a]/20 rounded-full px-8 py-4 text-sm font-semibold text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-all duration-300"
                    >
                        All case studies
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                {/* Case Study Cards */}
                <div className="space-y-6">
                    {cases.map((cs, i) => (
                        <div
                            key={i}
                            className="group grid grid-cols-1 md:grid-cols-12 border border-gray-200 rounded-3xl overflow-hidden hover:border-[#2563EB]/30 hover:shadow-xl transition-all duration-500 cursor-pointer"
                        >
                            {/* Image */}
                            <div className={`md:col-span-7 relative aspect-[16/9] md:aspect-auto overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                <img
                                    src={cs.img}
                                    alt={cs.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-[#0a0a0a]/10 transition-all duration-500" />
                            </div>

                            {/* Content */}
                            <div className={`md:col-span-5 p-10 md:p-12 flex flex-col justify-between bg-white group-hover:bg-[#fafafa] transition-colors duration-300 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB]">
                                        {cs.tag}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#0a0a0a] mt-4 leading-snug font-display">
                                        {cs.title}
                                    </h3>
                                </div>

                                <div className="mt-10 flex items-center justify-between">
                                    <div className="flex gap-8">
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Result</p>
                                            <p className="text-2xl font-bold text-[#2563EB] font-display">{cs.result}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Duration</p>
                                            <p className="text-2xl font-bold text-[#0a0a0a] font-display">{cs.duration}</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-gray-200 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] flex items-center justify-center transition-all duration-300">
                                        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Main export ──
export default function SlicedSections() {
    return (
        <>
            <WorkShowcase />
            <DiagonalDivider fromDark={false} />
            <ServicesGrid />
            <DiagonalDivider fromDark={true} />
            <StatsSection />
            <DiagonalDivider fromDark={false} />
            <ProcessSection />
            <DiagonalDivider fromDark={true} />
            <FAQSection />
            <DiagonalDivider fromDark={false} />
            <FeaturedCaseStudy />
        </>
    );
}
