import { useState } from 'react';

// ─────────────────────────────────────────────
// 1. HERO — dark, full-width statement
// ─────────────────────────────────────────────
function Hero() {
    return (
        <section className="bg-[#0a0a0a] pt-44 pb-0 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end gap-16 lg:gap-24 pb-20 border-b border-white/8">
                    {/* Left: headline block */}
                    <div className="flex-1">
                        <p className="text-[10px] font-semibold tracking-[0.25em] text-gray-500 uppercase mb-8">
                            Product Design Across Every Industry
                        </p>
                        <h1 className="text-[56px] md:text-[76px] lg:text-[88px] font-medium tracking-tighter leading-[1.0] text-white font-display mb-10">
                            Designing products that users trust, teams use, and markets embrace.
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg font-medium leading-[1.6] tracking-tight max-w-xl mb-12">
                            15+ industries. 80+ products shipped. We bring deep domain expertise from day one
                            — so your product feels native to its market before a single line of code is written.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="mailto:hello@elux.space"
                                className="inline-flex items-center gap-2 bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-widest px-7 py-4 rounded-full hover:bg-blue-500 transition-all duration-300 group"
                            >
                                Let's Talk
                                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                            <a
                                href="#case-studies"
                                onClick={() => { window.location.hash = '#case-studies'; }}
                                className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white text-[11px] font-bold uppercase tracking-widest px-7 py-4 rounded-full hover:bg-white/15 transition-all duration-300 group"
                            >
                                View Our Cases
                                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}


// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// 1.5. PARTNERSHIP SECTION — dark, inspired by reference image
// ─────────────────────────────────────────────
function PartnershipSection() {
    return (
        <section className="bg-[#0a0a0a] pb-32 px-8 pt-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left Side - Dashboard Visual */}
                <div className="w-full lg:w-[45%]">
                    <div className="sticky top-32 bg-[#a7dbd8] rounded-3xl p-4 md:p-8 h-fit">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                            alt="Product Dashboard Preview"
                            className="rounded-xl shadow-2xl w-full object-cover border border-black/5"
                        />
                    </div>
                </div>

                {/* Right Side - Content & Stats */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-medium tracking-tighter text-white leading-[1.2] mb-20 font-display">
                        Your next growth stage starts with the right product design and development partner — at launch, or at scale
                    </h2>

                    {/* Logos Grid */}
                    <div className="mb-16">
                        <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase mb-5">
                            Designing products for startups backed by
                        </p>
                        <div className="grid grid-cols-4 border-y border-white/10 divide-x divide-white/10">
                            <div className="py-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 px-2 text-center">
                                <span className="text-[11px] sm:text-[13px] font-bold text-white tracking-widest">techstars_</span>
                            </div>
                            <div className="py-8 flex flex-col sm:flex-row items-center justify-center gap-1.5 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 px-2 text-center">
                                <span className="bg-[#ff6600] text-white text-[10px] sm:text-[12px] font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-sm">Y</span>
                                <span className="text-[10px] sm:text-[11px] font-semibold text-white tracking-wide hidden sm:block">Combinator</span>
                            </div>
                            <div className="py-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 px-2 text-center">
                                <span className="text-[9px] sm:text-[11px] font-bold text-white lowercase tracking-tight leading-none">andreessen<br />horowitz</span>
                            </div>
                            <div className="py-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-all px-2 text-center">
                                <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-white uppercase">And More</span>
                            </div>
                        </div>
                    </div>

                    {/* Numbers Grid */}
                    <div className="mb-16">
                        <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase mb-5">
                            Elux in numbers
                        </p>
                        <div className="grid grid-cols-2 border-t border-white/10">
                            <div className="py-12 border-b border-r border-white/10 flex flex-col justify-center items-center text-center px-4">
                                <p className="text-6xl font-bold tracking-tighter text-white mb-2 leading-none">98%</p>
                                <p className="text-sm text-gray-500 font-medium leading-[1.6] tracking-tight">customer satisfaction rate</p>
                            </div>
                            <div className="py-12 border-b border-white/10 flex flex-col justify-center items-center text-center px-4">
                                <p className="text-6xl font-bold tracking-tighter text-white mb-2 leading-none">35%+</p>
                                <p className="text-sm text-gray-500 font-medium leading-[1.6] tracking-tight">boost in conversions after redesign</p>
                            </div>
                            <div className="py-12 border-b border-r border-white/10 flex flex-col justify-center items-center text-center px-4">
                                <p className="text-6xl font-bold tracking-tighter text-white mb-2 leading-none">70+</p>
                                <p className="text-sm text-gray-500 font-medium leading-[1.6] tracking-tight">top-tier designers & developers on board</p>
                            </div>
                            <div className="py-12 border-b border-white/10 flex flex-col justify-center items-center text-center px-4">
                                <p className="text-6xl font-bold tracking-tighter text-white mb-2 leading-none">500M+</p>
                                <p className="text-sm text-gray-500 font-medium leading-[1.6] tracking-tight">investments raised by our clients</p>
                            </div>
                        </div>
                    </div>

                    {/* Proven Expertise */}
                    <div>
                        <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase mb-5">
                            Proven Industry Expertise
                        </p>
                        <div className="grid grid-cols-2 border-t border-white/10">
                            <div className="py-10 border-b border-r border-white/10 flex justify-center items-center">
                                {/* Hexagon / Certification shape badge mockup */}
                                <div className="relative w-24 h-28 flex items-center justify-center">
                                    <svg className="absolute inset-0 w-full h-full text-white" viewBox="0 0 100 115" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="50 5, 95 28, 95 87, 50 110, 5 87, 5 28" fill="white" />
                                        <polygon points="50 8, 92 30, 92 85, 50 107, 8 85, 8 30" fill="transparent" stroke="currentColor" strokeWidth="1" strokeDasharray="2, 2" className="text-gray-300" />
                                    </svg>
                                    <div className="relative z-10 flex flex-col items-center justify-center text-center pt-2">
                                        <svg className="w-5 h-5 text-black mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span className="text-[9px] font-black text-black uppercase tracking-widest leading-none">Certified</span>
                                        <span className="text-[6px] font-bold text-gray-600 uppercase tracking-widest mt-1">Design</span>
                                        <span className="text-[6px] font-bold text-gray-600 uppercase tracking-widest bg-gray-100 rounded-full px-2 py-0.5 mt-1 border border-black/10">
                                            Partner
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="py-10 border-b border-white/10 flex items-center justify-center">
                                {/* Additional badge or leave empty as per image structure where only left had badge but table spanned */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Optional curved break for transition if needed, but sticking to bg color blending for now */}
        </section>
    );
}

// ─────────────────────────────────────────────
// 1.8 CHALLENGES SECTION — white, inspired by reference image
// ─────────────────────────────────────────────
function ChallengesSection() {
    const challenges = [
        {
            problem: "We tried redesigning our platform, but user engagement didn't improve — if anything, drop-off got worse.",
            solution: "Our product design services stay rooted in UX research and usability testing. The result? Higher activation and retention across complex SaaS tools, mobile apps, and enterprise dashboards."
        },
        {
            problem: "Our core interface is so bloated, even internal teams complain it slows them down during daily operations.",
            solution: "Using modular design and product-specific UX logic, we streamline complex web applications, internal tools, and massive datasets — reducing friction, cognitive load, and task time."
        },
        {
            problem: "We don't just need a trendy interface. We need a team that actually understands what it takes to build a scalable, secure architecture.",
            solution: "As a specialized product design agency, we build robust scaling into every layer — from secure data flows to modular permissions — without compromising on usability or design quality."
        }
    ];

    return (
        <section className="bg-white py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top header area */}
                <div className="flex justify-between items-start mb-20">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mt-4">
                        Common Product Challenges
                    </p>
                    <a
                        href="mailto:hello@elux.space"
                        className="inline-flex items-center gap-2 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-gray-800 transition-colors shadow-sm"
                        style={{ borderRadius: '6px' }}
                    >
                        Get In Touch
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                </div>

                {/* Sticky two-column layout */}
                <div className="flex flex-col lg:flex-row gap-0">
                    {/* LEFT: sticky title column */}
                    <div className="w-full lg:w-[42%] lg:pr-16">
                        <div className="lg:sticky lg:top-32">
                            <h2 className="text-[40px] md:text-[52px] lg:text-[60px] font-medium tracking-tighter text-gray-900 leading-[1.05] mb-8 font-display">
                                When the stakes are high, the user experience can't be casual
                            </h2>
                            <p className="text-gray-500 text-lg font-medium leading-[1.6] max-w-sm tracking-tight mb-12">
                                From user drop-off in onboarding to overloaded interfaces — here's what we hear most, and how we solve it.
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-px bg-gray-900" />
                                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{challenges.length} challenges addressed</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: scrolling challenge rows */}
                    <div className="w-full lg:w-[58%] border-t border-gray-200 mt-12 lg:mt-0">
                        {challenges.map((item, idx) => (
                            <div key={idx} className="py-14 border-b border-gray-100 group">
                                <span className="text-[10px] font-bold tracking-[0.25em] text-gray-300 uppercase mb-5 block">Challenge {String(idx + 1).padStart(2, '0')}</span>
                                <p className="text-[18px] md:text-[20px] text-gray-400 leading-[1.55] mb-8 font-medium tracking-tight italic">
                                    "{item.problem}"
                                </p>
                                <p className="text-[20px] md:text-[26px] text-gray-900 leading-[1.35] font-medium tracking-tight">
                                    {item.solution}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// 2. EXPECTATIONS SHOWCASE — white, inspired by reference image
// ─────────────────────────────────────────────
function ExpectationsSection() {
    const categories = [
        'SaaS & Web Apps',
        'Fintech Solutions',
        'HealthTech',
        'E-Commerce & Retail',
        'Team Augmentation',
    ];

    const showcases = [
        {
            text: 'Custom web apps designed for logging complex data, managing workflows, and generating reports — paired with smart visualizations, bulk tools, and adaptive UX that keeps users engaged long-term.',
            img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
        },
        {
            text: 'Dashboards and mobile apps that connect users and businesses through real-time data sync, secure integrations, and proactive alerts. Built to streamline reporting and reduce cognitive load.',
            img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200',
        },
        {
            text: 'We simplify complex platforms into modular, intuitive interfaces that reduce time-on-task. Designed for power users, administrators, and general consumers — all in one unified ecosystem.',
            img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
        },
        {
            text: 'End-to-end UX and development for diverse digital products — including specialized educational platforms, comprehensive web portals, and scalable design systems that accelerate future development cycles.',
            img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200',
        }
    ];

    return (
        <section className="bg-white py-40 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 border-0 shadow-none">
                {/* Left side fixed/sticky */}
                <div className="w-full lg:w-[40%] border-0 shadow-none">
                    <div className="lg:sticky lg:top-40 border-0 shadow-none">
                        <div className="flex items-center gap-2 mb-8 border-0 shadow-none">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full border-0 shadow-none"></span>
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase border-0 shadow-none">EXPERTISE</span>
                        </div>
                        <h2 className="text-[64px] font-medium tracking-tighter text-gray-900 leading-[1] mb-10 border-0 shadow-none font-display">
                            What you'd expect from a world-class partner
                        </h2>
                        <p className="text-gray-500 text-lg font-medium mb-12 max-w-sm border-0 shadow-none leading-[1.6] tracking-tight">
                            From ambitious startups to global enterprises, our product design studio creates digital products that do more than look good — they accelerate workflows and scale businesses.
                        </p>

                        <div className="flex flex-col border-t border-gray-100 mb-12 border-0 shadow-none">
                            {categories.map((item, idx) => (
                                <div key={idx} className="group flex items-center justify-between cursor-pointer border-b border-gray-100 py-6 transition-colors hover:border-black border-0 shadow-none">
                                    <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 border-0 shadow-none ${idx === 0 ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                                        {item}
                                    </span>
                                    <svg className={`w-5 h-5 transition-all duration-300 border-0 shadow-none ${idx === 0 ? 'text-black translate-x-0' : 'text-transparent -translate-x-4 group-hover:text-black group-hover:translate-x-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#work"
                            onClick={(e) => { e.preventDefault(); window.location.hash = '#case-studies'; }}
                            className="group flex items-center gap-4 bg-black text-white px-8 py-5 rounded-full hover:scale-105 transition-all duration-300 border-0 shadow-none w-fit"
                        >
                            <span className="text-sm font-bold uppercase tracking-widest border-0 shadow-none">See Our Work</span>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-colors group-hover:bg-blue-600 border-0 shadow-none">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right side scrolling items */}
                <div className="w-full lg:w-[60%] flex flex-col gap-32 border-0 shadow-none pt-10 lg:pt-0">
                    {showcases.map((showcase, i) => (
                        <div key={i} className="flex flex-col gap-8 group border-0 shadow-none">
                            <p className="text-gray-500 text-[20px] md:text-[24px] font-medium leading-[1.6] max-w-2xl tracking-tight border-0 shadow-none">
                                {showcase.text}
                            </p>
                            <div className="w-full rounded-[32px] overflow-hidden bg-gray-100 aspect-[4/3] relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-0">
                                <img
                                    src={showcase.img}
                                    alt={`Showcase ${i}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] border-0 shadow-none"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 border-0 shadow-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}






// ─────────────────────────────────────────────
// 10. FAQ ACCORDION — dark
// ─────────────────────────────────────────────
function FAQ() {
    const [open, setOpen] = useState<number | null>(null);
    const faqs = [
        { q: 'Do you specialise in a particular industry?', a: "We have deep experience in tech (SaaS, AI, Web3), finance (fintech, banking, DeFi), and lifestyle (health, e-commerce, EdTech). That said, we've shipped products in many more verticals — we adapt fast." },
        { q: 'How quickly can we get started?', a: 'Most projects kick off within a week of signing. Discovery calls are free with zero commitment. We can also start with a focused audit before committing to a full engagement.' },
        { q: 'How long does a typical project take?', a: 'MVP scopes: 2–4 weeks. Full product design: 4–8 weeks. Audit + redesign: 3–6 weeks. We work in focused sprints and eliminate delays through tight feedback loops.' },
        { q: 'Does industry experience affect the price?', a: "No — our pricing is scope-based, not sector-based. What you're buying is a design team that already speaks your industry's language, saving you rounds of context-setting." },
        { q: 'What does design handoff look like?', a: "Organised Figma files, annotated components, a design system, spacing tokens, and an interactive prototype — everything your engineering team needs to build without back-and-forth." },
    ];

    return (
        <section className="bg-[#0a0a0a] py-40 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="h-fit lg:sticky lg:top-32">
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">FAQ</span>
                    </div>
                    <h2 className="text-[64px] font-medium tracking-tighter text-white leading-[1.0] font-display mb-8">
                        Common<br />Questions
                    </h2>
                    <p className="text-gray-400 text-base font-medium leading-[1.6] tracking-tight mb-12">
                        Can't find what you're looking for?<br />
                        Reach us at{' '}
                        <a href="mailto:hello@elux.space" className="text-white underline underline-offset-4 hover:text-white/70 transition-colors">
                            hello@elux.space
                        </a>
                    </p>
                    <button
                        onClick={() => { window.location.hash = '#contact'; }}
                        className="group flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full hover:scale-105 transition-all duration-300"
                    >
                        <span className="text-sm font-bold uppercase tracking-widest">Book a Discovery Call</span>
                        <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="border-t border-white/10">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-white/10">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between py-8 text-left group"
                            >
                                <span className={`text-lg font-medium transition-colors pr-8 ${open === i ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-white border-white rotate-45' : 'border-white/20 group-hover:border-white/40'}`}>
                                    <svg className={`w-4 h-4 transition-colors ${open === i ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>
                            {open === i && (
                                <div className="pb-8 pr-16">
                                    <p className="text-gray-400 text-base font-medium leading-[1.6] tracking-tight">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// 11. SERVICES BY CATEGORY — dark, left nav + 3-col rows
// ─────────────────────────────────────────────
function ServicesByCategory() {
    const [active, setActive] = useState(0);

    const categories = [
        {
            label: 'Research',
            heading: 'Strategic groundwork for scalable digital products.',
            groups: [
                {
                    title: 'Solid foundation for every product',
                    items: [
                        { title: 'Product Discovery', desc: 'Define scope, user needs, and architecture before building anything.' },
                        { title: 'UX Audit', desc: 'Surface friction points and prioritise a clear improvement roadmap.' },
                        { title: 'Technical Workshop', desc: 'Align your team on stack, scope, and timeline from day one.' },
                    ],
                },
            ],
        },
        {
            label: 'Design',
            heading: 'Interfaces that support real digital workflows.',
            groups: [
                {
                    title: 'Visual & interaction design',
                    items: [
                        { title: 'Design Prototype', desc: 'Test ideas fast with clickable user journeys and visual flows.' },
                        { title: 'Web App Design', desc: 'Intuitive, user-focused patterns with strong UX logic.' },
                        { title: 'Mobile App Design', desc: 'Performance-first mobile UX for iOS and Android.' },
                    ],
                },
                {
                    title: 'Brand & web presence',
                    items: [
                        { title: 'Website Design', desc: 'Editorial-quality layouts that improve engagement and conversion.' },
                        { title: 'Website Redesign', desc: 'Modernise your web presence with a product-design approach.' },
                        { title: 'Branding', desc: 'A brand that resonates — visually, emotionally, and strategically.' },
                    ],
                },
            ],
        },
        {
            label: 'Development',
            heading: 'Code that powers real digital products.',
            groups: [
                {
                    title: 'Web & app builds',
                    items: [
                        { title: 'Custom MVP Development', desc: 'Turn your prototype into a fully functional, production-ready product.' },
                        { title: 'Web Development', desc: 'Complex platforms, dashboards, and SaaS products — built to scale.' },
                        { title: 'Website Development', desc: 'Fast, SEO-optimised websites that convert and grow.' },
                    ],
                },
                {
                    title: 'Emerging tech',
                    items: [
                        { title: 'No-Code Development', desc: 'Rapid, cost-effective builds using the best no-code tools.' },
                        { title: 'Mobile App Development', desc: 'End-to-end mobile development for iOS and Android.' },
                        { title: 'Blockchain Development', desc: 'Secure, scalable smart contracts and decentralised apps.' },
                    ],
                },
            ],
        },
    ];

    const current = categories[active];

    return (
        <section className="bg-[#0a0a0a] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 max-w-3xl">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Our Services</span>
                    </div>
                    <h2 className="text-[48px] md:text-[64px] lg:text-[72px] xl:text-[88px] font-medium tracking-tighter text-white leading-[1] font-display">
                        Everything you need to build,
                        launch, and grow<span className="text-blue-600">.</span>
                    </h2>
                </div>

                {/* Sticky-left nav + right scrolling panels */}
                <div className="flex flex-col lg:flex-row gap-0 border-t border-white/8 pt-12">
                    {/* LEFT: sticky category nav */}
                    <div className="w-full lg:w-[18%] mb-8 lg:mb-0">
                        <div className="lg:sticky lg:top-32 flex lg:flex-col gap-6">
                            {categories.map((cat, i) => (
                                <button
                                    key={cat.label}
                                    onClick={() => setActive(i)}
                                    className={`text-left transition-all duration-200 flex items-center gap-3 group ${active === i ? 'text-white' : 'text-gray-600 hover:text-gray-400'
                                        }`}
                                >
                                    <span className={`w-4 h-px transition-all duration-300 ${active === i ? 'bg-blue-500 w-6' : 'bg-gray-700'
                                        }`} />
                                    <span className="text-sm font-medium">{cat.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: content */}
                    <div className="w-full lg:w-[82%] lg:pl-16">
                        <p className="text-2xl md:text-3xl font-medium tracking-tight text-gray-300 mb-12 max-w-xl">
                            {current.heading}
                        </p>
                        <div className="space-y-10">
                            {current.groups.map((group, gi) => (
                                <div key={gi}>
                                    <p className="text-[10px] font-bold tracking-[0.25em] text-gray-600 uppercase mb-5">{group.title}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
                                        {group.items.map((item, ii) => (
                                            <div key={ii} className="bg-[#0a0a0a] p-8 group hover:bg-white/[0.03] transition-colors">
                                                <h4 className="text-white font-medium text-[17px] mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                                <p className="text-gray-500 text-[15px] font-medium leading-[1.6] tracking-tight mb-6">{item.desc}</p>
                                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600 group-hover:text-white transition-colors">
                                                    Explore
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => { window.location.hash = '#services'; }}
                            className="mt-12 inline-flex items-center gap-2 border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Explore All Services
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


// ─────────────────────────────────────────────
// 12. CAPABILITY GRID — light, icon grid + tech stack
// ─────────────────────────────────────────────
function CapabilityGrid() {
    const capabilities = [
        { icon: '⬡', title: 'User Research & Interviews', desc: 'Structured discovery with real users to validate assumptions and inform every design decision.' },
        { icon: '◎', title: 'Information Architecture', desc: 'Clear content hierarchy and navigation systems that help users find what they need, fast.' },
        { icon: '▭', title: 'Wireframes & Prototyping', desc: 'Low and high-fidelity prototypes for rapid testing before any development begins.' },
        { icon: '⬡', title: 'Accessibility & Compliance', desc: 'Designs that meet WCAG standards and pass accessibility audits out of the box.' },
        { icon: '◎', title: 'Design System Creation', desc: 'Scalable component libraries and token-based systems that grow with your product.' },
        { icon: '▭', title: 'Interaction & Motion Design', desc: 'Micro-animations and state transitions that make your product feel responsive and alive.' },
        { icon: '⬡', title: 'Multi-Platform Design', desc: 'Consistent UX across web, iOS, Android, and desktop — without duplicating effort.' },
        { icon: '◎', title: 'Data Visualisation', desc: 'Complex datasets translated into dashboards that drive real decisions, not confusion.' },
        { icon: '▭', title: 'Continuous Iteration', desc: 'Post-launch design support and rapid iteration cycles based on real user data.' },
    ];

    return (
        <section className="bg-white py-32 px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                {/* LEFT: sticky header */}
                <div className="w-full lg:w-[36%]">
                    <div className="lg:sticky lg:top-32">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Capabilities</span>
                        </div>
                        <h2 className="text-[48px] md:text-[56px] font-medium tracking-tighter text-gray-900 leading-[1.0] font-display mb-8">
                            What we bring to every project<span className="text-blue-600">.</span>
                        </h2>
                        <p className="text-gray-500 text-lg font-medium leading-[1.6] tracking-tight mb-12">
                            A full-spectrum design capability — from discovery and strategy through to developer-ready delivery. No handoff gaps, no guesswork.
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-px bg-gray-900" />
                            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{capabilities.length} core capabilities</span>
                        </div>
                    </div>
                </div>
                {/* RIGHT: scrolling grid */}
                <div className="w-full lg:w-[64%] grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100 h-fit">
                    {capabilities.map((cap, i) => (
                        <div key={i} className="bg-white p-8 group hover:bg-[#f8f8f8] transition-colors">
                            <span className="block text-2xl mb-5 text-gray-300 group-hover:text-blue-600 transition-colors">{cap.icon}</span>
                            <h3 className="text-gray-900 font-medium text-[17px] mb-3 tracking-tight">{cap.title}</h3>
                            <p className="text-gray-500 text-[15px] font-medium leading-[1.6] tracking-tight">{cap.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


// ─────────────────────────────────────────────
// X. TECHNOLOGY STACK
// ─────────────────────────────────────────────
function TechnologyStack() {
    return (
        <section className="bg-white py-32 px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-16">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mt-4">
                        Technology Stack
                    </p>
                    <a
                        href="mailto:hello@elux.space"
                        className="inline-flex items-center gap-2 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
                        style={{ borderRadius: '6px' }}
                    >
                        Get In Touch
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium tracking-tighter text-gray-900 leading-[1] max-w-5xl mb-24 font-display">
                    Frameworks behind our most scalable digital products and web applications
                </h2>

                <div className="flex flex-col border-t border-gray-200">
                    <div className="flex gap-4 md:gap-8 font-bold text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-gray-900 py-6 border-b border-gray-100 overflow-x-auto no-scrollbar">
                        <span className="bg-black text-white px-6 py-3 rounded-md shrink-0">Frontend</span>
                        <span className="px-4 py-3 text-gray-400 hover:text-black cursor-pointer transition-colors shrink-0">Backend</span>
                        <span className="px-4 py-3 text-gray-400 hover:text-black cursor-pointer transition-colors shrink-0">CMS</span>
                        <span className="px-4 py-3 text-gray-400 hover:text-black cursor-pointer transition-colors shrink-0">Server</span>
                        <span className="px-4 py-3 text-gray-400 hover:text-black cursor-pointer transition-colors shrink-0">Mobile</span>
                        <span className="px-4 py-3 text-gray-400 hover:text-black cursor-pointer transition-colors shrink-0">No-Code</span>
                        <span className="px-4 py-3 text-gray-400 hover:text-black cursor-pointer transition-colors shrink-0">Pre-Made Libraries</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-100">
                    <div className="border-r border-b border-gray-100 p-12 min-h-[320px] flex flex-col justify-between group hover:bg-gray-50 transition-colors">
                        <span className="text-gray-400 group-hover:text-blue-500 text-4xl transition-colors">⚛</span>
                        <p className="text-[32px] font-medium tracking-tight text-gray-900">React</p>
                    </div>
                    <div className="border-r border-b border-gray-100 p-12 min-h-[320px] flex flex-col justify-between group hover:bg-gray-50 transition-colors">
                        <span className="text-gray-400 group-hover:text-black text-4xl transition-colors">N</span>
                        <p className="text-[32px] font-medium tracking-tight text-gray-900">Next.js</p>
                    </div>
                    <div className="border-r border-b border-gray-100 p-12 min-h-[320px] flex flex-col justify-between group hover:bg-gray-50 transition-colors">
                        <span className="text-gray-400 group-hover:text-blue-400 text-4xl transition-colors font-bold tracking-tighter">S</span>
                        <p className="text-[32px] font-medium tracking-tight text-gray-900">Solid.js</p>
                    </div>
                    <div className="border-r border-b border-gray-100 p-12 min-h-[320px] flex flex-col justify-between group hover:bg-gray-50 transition-colors">
                        <span className="text-gray-400 group-hover:text-orange-500 text-4xl transition-colors">A</span>
                        <p className="text-[32px] font-medium tracking-tight text-gray-900">Astro</p>
                    </div>
                    <div className="border-r border-b border-gray-100 p-12 min-h-[320px] flex flex-col justify-between group hover:bg-gray-50 transition-colors">
                        <span className="text-gray-400 group-hover:text-blue-600 text-4xl transition-colors font-bold">TS</span>
                        <p className="text-[32px] font-medium tracking-tight text-gray-900">TypeScript</p>
                    </div>
                    <div className="border-r border-b border-gray-100 p-12 min-h-[320px] flex flex-col justify-between group hover:bg-gray-50 transition-colors">
                        <span className="text-gray-400 group-hover:text-teal-500 text-4xl transition-colors">≈</span>
                        <p className="text-[32px] font-medium tracking-tight text-gray-900">Tailwind CSS</p>
                    </div>
                    <div className="border-r border-b border-gray-100 p-12 min-h-[320px] flex flex-col justify-between group hover:bg-gray-50 transition-colors">
                        <span className="text-gray-400 group-hover:text-purple-500 text-4xl transition-colors">V</span>
                        <p className="text-[32px] font-medium tracking-tight text-gray-900">Vue.js</p>
                    </div>
                    <div className="border-r border-b border-gray-100 p-12 min-h-[320px] flex flex-col justify-between group hover:bg-gray-50 transition-colors">
                        <span className="text-gray-400 group-hover:text-yellow-500 text-4xl transition-colors font-bold">JS</span>
                        <p className="text-[32px] font-medium tracking-tight text-gray-900">Vanilla JS</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// X2. ADVANCED TECH SECTION
// ─────────────────────────────────────────────
function AdvancedTechSection() {
    const techItems = [
        {
            num: '01',
            title: 'AI & machine learning',
            desc: 'Predictive risk scores, computer-vision diagnostics, and auto-coding that surface issues early and cut manual workload.'
        },
        {
            num: '02',
            title: 'IoT & edge computing',
            desc: 'Secure data streams from connected devices with real-time alerts and longitudinal dashboards.'
        },
        {
            num: '03',
            title: 'Blockchain & Web3 infrastructure',
            desc: 'Tamper-proof audit trails, user-controlled consent layers, and cross-platform sharing on permissioned ledgers.'
        },
        {
            num: '04',
            title: 'API & system interoperability',
            desc: 'Smart gateways and system mapping that sync legacy tech stacks—unlocking clean, actionable data ecosystem-wide.'
        },
        {
            num: '05',
            title: 'Natural language processing & voice',
            desc: 'Ambient intelligence, multilingual chatbots, and sentiment analysis that reduce documentation time and boost user engagement.'
        },
        {
            num: '06',
            title: 'Cloud-native & serverless',
            desc: 'Auto-scaling, cost-efficient hosting on AWS, GCP, or Azure—meeting strict security compliance with minimal DevOps overhead.'
        }
    ];

    return (
        <section className="bg-white py-32 px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                {/* LEFT: sticky section title */}
                <div className="w-full lg:w-[38%]">
                    <div className="lg:sticky lg:top-32">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">Advanced Capabilities</p>
                        <h2 className="text-[40px] md:text-[52px] font-medium tracking-tighter text-gray-900 leading-[1.05] mb-8 font-display">
                            Integrating emerging technologies into complex market solutions
                        </h2>
                        <p className="text-gray-500 text-lg font-medium leading-[1.6] tracking-tight mb-12">
                            From predictive AI models to seamless system interoperability, our approach applies advanced tech without adding friction.
                        </p>
                        <a
                            href="mailto:hello@elux.space"
                            className="inline-flex items-center gap-2 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-gray-800 transition-colors shadow-sm"
                            style={{ borderRadius: '6px' }}
                        >
                            Get In Touch
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                    </div>
                </div>
                {/* RIGHT: scrolling rows */}
                <div className="w-full lg:w-[62%] border-t border-gray-100">
                    {techItems.map((item, idx) => (
                        <div key={idx} className="py-12 border-b border-gray-100 group flex gap-10 items-start hover:bg-gray-50 transition-colors px-6 -mx-6">
                            <span className="text-gray-300 font-medium text-sm shrink-0 w-6 pt-1">{item.num}</span>
                            <div>
                                <h3 className="text-[22px] font-medium tracking-tight text-gray-900 mb-4 font-display group-hover:text-blue-600 transition-colors leading-[1.2]">{item.title}</h3>
                                <p className="text-gray-500 text-base font-medium leading-[1.6] tracking-tight">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// X3. FEATURED CASES PORTFOLIO
// ─────────────────────────────────────────────
function FeaturedCases() {
    const cases = [
        {
            title: "Vitalix — unleashing a healthier you",
            tags: ["#PRODUCT DISCOVERY", "#MVP BUILDING"],
            client: "VITALIX",
            country: "USA",
            results: ["Faster time-to-market", "Reduced development costs", "Simplification of complex health concepts"],
            image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1200&auto=format&fit=crop",
            quote: "The client expressed high satisfaction with the team's proficiency, facilitating the prompt and timely completion of the design within the initially estimated timeframes.",
            author: "Julia Cooney",
            role: "CEO of Vitalix",
            avatar: "https://i.pravatar.cc/150?u=julia"
        },
        {
            title: "CareConnect — digital doctor mobile app",
            tags: ["#MOBILE APP DESIGN", "#MOBILE APP DEVELOPMENT"],
            client: "CARECONNECT LLC",
            country: "CANADA",
            results: ["Easy booking and doctor access", "Family health tracking made simple", "Clean and intuitive design"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
            quote: "Elux delivered a seamless and beautiful application. Our users love the new interface and the conversion rates have been outstanding since launch.",
            author: "Mark Henderson",
            role: "Product Lead",
            avatar: "https://i.pravatar.cc/150?u=mark"
        }
    ];

    return (
        <section className="bg-white py-32 px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                <div className="flex justify-between items-start mb-24">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-4">
                        Featured Client Cases
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
                        style={{ borderRadius: '6px' }}
                    >
                        Get In Touch
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                <div className="max-w-4xl mb-32">
                    <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium tracking-tighter text-gray-900 leading-[1] mb-12 font-display">
                        Digital products we've delivered — with tangible commercial traction
                    </h2>
                </div>

                <div className="flex flex-col">
                    {cases.map((project, idx) => (
                        <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch ${idx > 0 ? 'mt-24 pt-24 lg:mt-32 lg:pt-32 border-t border-gray-200' : ''}`}>

                            {/* Image Side */}
                            <div className={`relative rounded-[32px] overflow-hidden bg-gray-50 h-[400px] lg:h-auto lg:min-h-full border border-gray-100 ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Content Side */}
                            <div className="flex flex-col justify-center py-4 lg:py-8 lg:px-6">
                                <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-[0.1em] uppercase text-[#888] mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>

                                <h3 className="text-[40px] lg:text-[46px] xl:text-[52px] font-medium tracking-tight text-[#222] leading-[1.15] mb-8 font-display">
                                    {project.title}
                                </h3>

                                <div className="flex gap-3 mb-12">
                                    <span className="bg-[#2a2a2a] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2.5 rounded-md shadow-sm">
                                        {project.client}
                                    </span>
                                    <span className="bg-[#2a2a2a] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2.5 rounded-md shadow-sm flex items-center gap-2">
                                        <span className="text-[13px] leading-none opacity-90">🇺🇸</span> {project.country}
                                    </span>
                                </div>

                                <div className="pt-8 border-t border-gray-200">
                                    <p className="text-[11px] font-bold tracking-[0.15em] text-[#999] uppercase mb-8">
                                        Results
                                    </p>

                                    <ul className="space-y-5 mb-12">
                                        {project.results.map((result, i) => (
                                            <li key={i} className="text-gray-500 text-[17px] font-medium leading-[1.6] tracking-tight">{result}</li>
                                        ))}
                                    </ul>

                                    <button
                                        className="bg-[#ff7e00] text-white text-[12px] font-bold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-[#e67300] transition-colors w-fit flex items-center gap-2 shadow-sm"
                                    >
                                        Explore <span className="text-lg leading-none font-normal relative bottom-[1px]">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// X4. WHAT OUR CLIENTS SAY
// ─────────────────────────────────────────────
function ClientsSaySection() {
    const reviews = [
        {
            author: "Craig Tortolani",
            role: "CPO at Dekryption Labs",
            avatar: "https://i.pravatar.cc/150?u=craig",
            type: "video",
            content: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600"
        },
        {
            author: "Alex Friedman",
            role: "CEO at Open Path",
            avatar: "https://i.pravatar.cc/150?u=alex",
            type: "text",
            content: "Not only is the team extremely communicative, their work is exceptional. I have never worked with a team so talented while also being competitively priced and communicative."
        },
        {
            author: "KlickEx Team",
            role: "",
            avatar: "https://i.pravatar.cc/150?u=klick",
            type: "video",
            content: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600"
        },
        {
            author: "George Fry",
            role: "Founder at Neap",
            avatar: "https://i.pravatar.cc/150?u=george",
            type: "text",
            content: "The quality of the designs is fantastic. Elux works at speed and is extremely punctual with timelines. They deliver top-notch outcomes with exceptional designs."
        },
        {
            author: "Andre Guerra",
            role: "Co-Owner at RADCAT Design",
            avatar: "https://i.pravatar.cc/150?u=andre",
            type: "video",
            content: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600"
        },
        {
            author: "Kevin Alvarez",
            role: "Founder & General Partner, Predictive",
            avatar: "https://i.pravatar.cc/150?u=kevin",
            type: "text",
            content: "Elux's ability to translate concepts and rough design mock-ups into high-fidelity assets, designs, and visuals was very impressive. The goal was to maintain simple elegance in the design aesthetic, and they did it very well."
        }
    ];

    return (
        <section className="bg-white py-32 px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Header Area */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
                    <div className="max-w-2xl">
                        <p className="text-[11px] font-bold tracking-[0.2em] text-[#888] uppercase mb-6">
                            What Our Clients Say
                        </p>
                        <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium tracking-tight text-[#111] leading-[1.05] font-display">
                            5.0 is our average on clutch & upwork
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        {/* Clutch Alternative Badge */}
                        <div className="bg-[#f8f8f8] rounded-2xl p-6 flex flex-col justify-between min-w-[200px] h-[120px]">
                            <p className="font-bold text-2xl text-black">C</p>
                            <div className="flex justify-between items-center w-full">
                                <div className="flex gap-1 text-[#ff6600]">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    ))}
                                </div>
                                <span className="font-medium text-gray-500 text-sm tracking-tight">5.0</span>
                            </div>
                        </div>

                        {/* Secondary Badge */}
                        <div className="bg-[#f8f8f8] rounded-2xl p-6 flex flex-col justify-between min-w-[200px] h-[120px]">
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" /></svg>
                            <div className="flex justify-between items-center w-full">
                                <div className="flex gap-1 text-[#ff6600]">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    ))}
                                </div>
                                <span className="font-medium text-gray-500 text-sm tracking-tight">4.9</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-[#f8f8f8] rounded-2xl p-8 flex flex-col h-full overflow-hidden relative group">
                            <div className="flex items-center gap-4 mb-8">
                                <img src={r.avatar} alt={r.author} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-medium text-gray-900 leading-snug tracking-tight">{r.author}</p>
                                    {r.role && <p className="text-gray-500 text-sm font-medium tracking-tight">{r.role}</p>}
                                </div>
                            </div>

                            {r.type === 'text' ? (
                                <>
                                    <p className="text-gray-500 text-[18px] lg:text-[20px] leading-[1.6] font-medium tracking-tight z-10">
                                        {r.content}
                                    </p>
                                    <span className="absolute bottom-6 left-8 text-gray-300 text-7xl font-serif opacity-30 leading-none">
                                        "
                                    </span>
                                </>
                            ) : (
                                <div className="relative mt-auto w-full h-[200px] rounded-xl overflow-hidden -mb-4 -mx-4 w-[calc(100%+2rem)]">
                                    <img src={r.content} className="absolute inset-0 w-full h-full object-cover" alt="Video thumbnail" />
                                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
                                    <div className="absolute bottom-4 left-4 w-8 h-8 flex items-center justify-center bg-white/30 backdrop-blur rounded-full group-hover:scale-110 transition-transform">
                                        <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// 13. GROWTH PARTNER — dark, split image + big stats
// ─────────────────────────────────────────────
function GrowthPartner() {
    const stats = [
        { num: '98%', label: 'client satisfaction rate' },
        { num: '35%+', label: 'avg. conversion lift after redesign' },
        { num: '70+', label: 'products shipped across 15+ industries' },
        { num: '$20M+', label: 'in client revenue attributed to design' },
    ];

    const logos = ['Techstars', 'Y Combinator', 'a16z', 'Seedcamp', 'and more'];

    return (
        <section className="bg-[#0a0a0a] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Split: image left, text right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    {/* Screenshot / visual */}
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-950/40 to-[#111] border border-white/8 aspect-[4/3]">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900"
                            alt="Product dashboard"
                            className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <span className="text-white text-xs font-medium">Live product — 12k active users</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-1">
                                    <div className="bg-blue-500 h-1 rounded-full" style={{ width: '72%' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text block */}
                    <div className="lg:pl-8">
                        <div className="flex items-center gap-2 mb-8">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Growth Partner</span>
                        </div>
                        <h2 className="text-[36px] md:text-[52px] font-medium tracking-tighter text-white leading-[1.05] font-display mb-8">
                            Your next growth stage starts with the right design partner — at launch, or at scale.
                        </h2>
                        <p className="text-gray-400 text-base font-medium leading-[1.6] tracking-tight mb-12 max-w-md">
                            Whether you're raising a seed round or rebuilding for enterprise scale, Elux brings
                            the design maturity your product needs at every stage.
                        </p>

                        {/* Client logos */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.25em] text-gray-700 uppercase mb-5">
                                Designing for founders backed by
                            </p>
                            <div className="flex flex-wrap gap-6 items-center">
                                {logos.map((l, i) => (
                                    <span key={i} className={`font-semibold text-sm ${i === logos.length - 1 ? 'text-gray-700' : 'text-gray-400 hover:text-white transition-colors cursor-default'}`}>
                                        {l}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Big stats grid */}
                <div className="border-t border-white/8 pt-16">
                    <p className="text-[10px] font-bold tracking-[0.25em] text-gray-700 uppercase mb-16">Elux by the numbers</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {stats.map((s, i) => (
                            <div key={i}>
                                <p className="text-[56px] md:text-[72px] font-bold tracking-tighter text-white leading-none mb-3">{s.num}</p>
                                <p className="text-gray-400 text-sm font-medium leading-[1.6] tracking-tight">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// X5. COLLABORATION MODELS (White Background)
// ─────────────────────────────────────────────
function CollaborationModelsSection() {
    const [activeTab, setActiveTab] = useState(0);

    const models = [
        {
            menuTitle: 'End-to-End Delivery',
            title: 'Partner with a full-cycle product design company',
            desc: 'We work as your long-term product design and development partner, owning strategy, discovery, design, dev, QA, and scaling iterations. This is not a "project" — it\'s your full product team.',
            bestFor: [
                'Founders who want a senior team thinking beyond sprints',
                'Startups scaling beyond MVP and needing deep product ownership'
            ],
            whatYouGet: [
                'Expert team aligned with your roadmap, KPIs, and business goals',
                'Strategic discovery, UX systems, and scalable architecture'
            ],
            linkText: 'HIRE YOUR FULL-CYCLE TEAM'
        },
        {
            menuTitle: 'Dedicated Squads',
            title: 'Hire a full-stack dedicated team',
            desc: 'We deliver your product from idea to launched MVP—fast and lean. You get execution-ready design and development support with a clear project scope and delivery timeline.',
            bestFor: [
                'MVPs or feature builds with a defined goal and launch window',
                'Pre-seed and seed startups that need to ship without building an in-house team'
            ],
            whatYouGet: [
                'UI/UX, development, QA, and PM in one dedicated squad',
                'Clear scope, fixed timeline, and efficient delivery'
            ],
            linkText: 'GET YOUR DEDICATED TEAM'
        },
        {
            menuTitle: 'Team Extension',
            title: 'Augment your team with top design talent',
            desc: 'Bring experienced product designers and engineers directly into your existing workflow. We adapt to your tools and culture to instantly boost your delivery capabilities and speed.',
            bestFor: [
                'Scale-ups needing specialized senior talent fast to hit milestones',
                'Internal teams requiring an immediate boost in bandwidth or expertise'
            ],
            whatYouGet: [
                'Embedded senior talent ready to commit code or designs on day one',
                'Seamless cultural and operational integration with your Agile processes'
            ],
            linkText: 'EXTEND YOUR TEAM'
        }
    ];

    const active = models[activeTab];

    return (
        <section className="bg-white py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Context */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 pb-16">
                    <div className="max-w-3xl">
                        <p className="text-[11px] font-bold tracking-[0.2em] text-[#888] uppercase mb-8">
                            How To Work With Us
                        </p>
                        <h2 className="text-[48px] md:text-[64px] font-medium tracking-tight text-[#111] leading-[1.05] font-display">
                            Choose from three flexible collaboration models for building scalable digital products.
                        </h2>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

                    {/* Left Sidebar Menu — sticky */}
                    <div className="w-full lg:w-1/4">
                        <div className="lg:sticky lg:top-32 flex flex-row lg:flex-col gap-4 lg:gap-8">
                            {models.map((model, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`text-left transition-all duration-300 flex items-start gap-3 group ${activeTab === idx ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    <span className={`w-4 h-px mt-3 shrink-0 transition-all duration-300 ${activeTab === idx ? 'bg-gray-900 w-6' : 'bg-gray-300'}`} />
                                    <span className="text-xl lg:text-2xl font-medium tracking-tight">{model.menuTitle}</span>
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Right Dynamic Content */}
                    <div className="w-full lg:w-3/4 flex flex-col">
                        <div className="animate-in fade-in duration-700">
                            <h3 className="text-[36px] md:text-[44px] font-medium tracking-tight text-gray-900 leading-[1.1] mb-8 font-display">
                                {active.title}
                            </h3>
                            <p className="text-gray-500 text-lg lg:text-xl font-medium leading-[1.6] tracking-tight max-w-3xl mb-16">
                                {active.desc}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
                                {/* Best For */}
                                <div>
                                    <h4 className="text-[28px] font-medium tracking-tight text-gray-900 mb-8 border-b border-gray-100 pb-6">
                                        Best for
                                    </h4>
                                    <ul className="space-y-6">
                                        {active.bestFor.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className="text-[#ff6600] text-2xl mt-0.5 leading-none font-serif">*</span>
                                                <span className="text-gray-500 font-medium leading-[1.6] tracking-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* What You Get */}
                                <div>
                                    <h4 className="text-[28px] font-medium tracking-tight text-gray-900 mb-8 border-b border-gray-100 pb-6">
                                        What you get
                                    </h4>
                                    <ul className="space-y-6">
                                        {active.whatYouGet.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className="text-[#ff6600] text-2xl mt-0.5 leading-none font-serif">*</span>
                                                <span className="text-gray-500 font-medium leading-[1.6] tracking-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-100 pt-10">
                                <button className="bg-[#ff6600] text-white text-[12px] font-bold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-[#e65c00] transition-colors flex items-center gap-2 mb-6 sm:mb-0">
                                    Explore All <span className="text-lg leading-none">→</span>
                                </button>

                                <a href="#contact" className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-900">
                                    <span className="border-b-2 border-transparent group-hover:border-gray-900 pb-1 transition-colors uppercase tracking-[0.2em]">{active.linkText}</span>
                                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// 14. PORTFOLIO SHOWCASE — light, editorial + case items
// ─────────────────────────────────────────────
function PortfolioShowcase() {
    const caseStudies = [
        {
            tag: 'SaaS / B2B',
            title: 'We redesigned a complex analytics platform — turning 14-screen flows into a 3-step experience that reduced churn by 42%.',
            desc: 'The product had grown organically over 4 years. Menus buried beneath menus, no clear primary action, and an onboarding that lost 60% of users in the first session. We restructured the entire product architecture from the ground up.',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900',
        },
        {
            tag: 'Fintech',
            title: 'We built a DeFi wallet interface that made complex blockchain interactions feel as simple as a bank transfer.',
            desc: 'Most DeFi interfaces are built by engineers for engineers. We redesigned the full UX — wallet connect, token swap, staking, portfolio — for the mainstream user who wants security and clarity, not complexity.',
            img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=900',
        },
        {
            tag: 'HealthTech',
            title: 'We designed a telehealth platform from 0→1 that helped the founder close a $2.4M seed round within 3 weeks of completion.',
            desc: 'The client came with a Notion doc and a vision. We delivered a full product UI — patient booking, clinician dashboard, secure messaging, and a marketing site — all within a 4-week sprint.',
            img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=900',
        },
    ];

    return (
        <section className="bg-[#f8f8f8] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left sticky: heading */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Selected Work</span>
                        </div>
                        <h2 className="text-[48px] font-medium tracking-tighter text-gray-900 leading-[1.0] font-display mb-8">
                            What you'd expect from a world-class design partner — and more.
                        </h2>
                        <p className="text-gray-500 text-base font-medium leading-[1.6] tracking-tight mb-10">
                            From lean startups racing to market to established companies rearchitecting for scale —
                            we've been the design team that makes the difference.
                        </p>
                        <a
                            href="#case-studies"
                            onClick={() => { window.location.hash = '#case-studies'; }}
                            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
                        >
                            <span className="border-b-2 border-gray-900 pb-0.5">View Case Studies</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Right: case study items */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {caseStudies.map((cs, i) => (
                            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 group hover:shadow-lg transition-all duration-500">
                                {/* Image */}
                                <div className="relative overflow-hidden h-[280px]">
                                    <img
                                        src={cs.img}
                                        alt={cs.tag}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    <div className="absolute top-6 left-6">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur px-3 py-1.5 rounded-full">{cs.tag}</span>
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="p-10">
                                    <h3 className="text-[22px] font-medium tracking-tight text-gray-900 leading-[1.3] mb-5 font-display">{cs.title}</h3>
                                    <p className="text-gray-500 text-base font-medium leading-[1.6] tracking-tight">{cs.desc}</p>
                                    <div className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-blue-600 transition-colors">
                                        Read case study
                                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// Page assembly
// ─────────────────────────────────────────────
export default function Industries() {
    return (
        <div className="bg-white overflow-x-hidden">
            <Hero />
            <PartnershipSection />
            <ChallengesSection />
            <ExpectationsSection />
            <ServicesByCategory />
            <CapabilityGrid />
            <TechnologyStack />
            <AdvancedTechSection />
            <FeaturedCases />
            <ClientsSaySection />
            <CollaborationModelsSection />
            <GrowthPartner />
            <PortfolioShowcase />
            <FAQ />
        </div>
    );
}
