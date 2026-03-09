import { useState, useRef, useEffect } from 'react';

// ─── Data with descriptions ───────────────────────────────────────────────────
const servicesMenu = {
    SEED: [
        { title: 'MVP UX & UI Design', desc: 'From zero to a fundable, shippable product interface.' },
        { title: 'Clickable Prototype', desc: 'Validated, interactive prototypes for demos or user testing.' },
        { title: 'Launch-Ready Landing Page', desc: 'High-converting landing pages built to capture and retain.' },
        { title: 'No-Code MVP Build', desc: 'Full product launched without a single line of custom code.' },
        { title: 'Pitch & Demo Readiness', desc: 'Investor-facing decks, flows, and screen presentations.' },
    ],
    GROWTH: [
        { title: 'UX Audit & Priorities', desc: 'Identify friction points and a clear roadmap to fix them.' },
        { title: 'Brand & Visual Enhancement', desc: 'Elevate your product identity without a full redesign.' },
        { title: 'Product Redesign', desc: 'Modernise and restructure existing products for better outcomes.' },
        { title: 'Dashboard & Data UX', desc: 'Turn complex data into clear, decision-driving interfaces.' },
        { title: 'Team Extension', desc: 'Senior designers embedded into your existing product team.' },
    ],
    SCALE: [
        { title: 'Design System Build', desc: 'A living system of components, tokens, and documentation.' },
        { title: 'Enterprise UX Redesign', desc: 'Scalable design architecture for complex, multi-team products.' },
        { title: 'Website Redesign', desc: 'Editorial-quality web presence that converts and retains.' },
        { title: 'Ongoing Design Partnership', desc: 'A long-term design team that grows with your product.' },
        { title: 'UX Research & Strategy', desc: 'User interviews, workshops, and evidence-based direction.' },
    ],
};

const industriesMenu = {
    TECHNOLOGY: [
        { title: 'SaaS Platforms', desc: 'Dashboards, onboarding flows, and feature-rich product UX.' },
        { title: 'AI & Machine Learning', desc: 'Making complex AI outputs legible to non-technical users.' },
        { title: 'Blockchain & Web3', desc: 'Wallets, DeFi interfaces, and NFT platforms.' },
        { title: 'Cloud & DevOps', desc: 'Infrastructure dashboards for ops teams who move fast.' },
        { title: 'Developer Tools', desc: 'Precision-first UX for technical, particular audiences.' },
    ],
    FINANCE: [
        { title: 'Fintech & Payments', desc: 'Payment flows that inspire trust and reduce drop-off.' },
        { title: 'Banking & Insurance', desc: 'Compliance-first UX with excellent accessibility.' },
        { title: 'Crypto & DeFi', desc: 'Decentralised exchanges and staking interfaces.' },
        { title: 'Investment Platforms', desc: 'Portfolio trackers and trade execution UX.' },
        { title: 'Regulatory Compliance', desc: 'KYC flows and audit dashboards as a competitive edge.' },
    ],
    LIFESTYLE: [
        { title: 'Health & Wellness', desc: 'Empathetic UX for sensitive healthcare contexts.' },
        { title: 'E-Commerce & Retail', desc: 'Checkout flows and product pages that convert.' },
        { title: 'EdTech & Learning', desc: 'LMS platforms that keep students engaged and progressing.' },
        { title: 'Travel & Hospitality', desc: 'Booking flows that make travel feel effortless.' },
        { title: 'Media & Entertainment', desc: 'Content discovery and streaming UX audiences return to.' },
    ],
};

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
    return (
        <a
            href="#home"
            onClick={() => { window.location.hash = '#home'; }}
            className="text-white text-xl font-bold tracking-tight"
        >
            eluxspace
        </a>
    );
}

// ─── Desktop Mega Menu Panel ──────────────────────────────────────────────────
function MegaMenuPanel({
    type,
    visible,
    onEnter,
    onLeave,
    onClose,
}: {
    type: 'services' | 'industries';
    visible: boolean;
    onEnter: () => void;
    onLeave: () => void;
    onClose: () => void;
}) {
    const items = type === 'services' ? servicesMenu : industriesMenu;
    const targetHash = type === 'services' ? '#services' : '#industries';

    const featured = type === 'services'
        ? {
            eyebrow: 'Ready to ship?',
            heading: 'From idea to\nlaunched product\nin 2–4 weeks.',
            cta: 'Book a Discovery Call',
            ctaHref: 'mailto:hello@elux.space',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900',
            badge: 'Services',
        }
        : {
            eyebrow: 'Built for your sector',
            heading: 'Design that\nspeaks your\nindustry\'s language.',
            cta: 'See All Industries',
            ctaHref: '#industries',
            img: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?auto=format&fit=crop&q=80&w=900',
            badge: 'Industries',
        };

    return (
        <div
            className={`fixed left-0 right-0 top-[72px] z-40 transition-all duration-300 ease-out ${visible
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-3 pointer-events-none'
                }`}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            {/* Dim backdrop */}
            <div
                className="absolute inset-0 h-screen bg-black/50 -z-10"
                onClick={onClose}
            />

            {/* Panel */}
            <div className="bg-[#0f0f0f] border-t border-white/8 shadow-2xl">
                <div className="max-w-7xl mx-auto px-8 py-10">
                    <div className="grid grid-cols-12 gap-8">

                        {/* ── Left: grouped service/industry links ── */}
                        <div className="col-span-8 grid grid-cols-3 gap-10">
                            {Object.entries(items).map(([category, links]) => (
                                <div key={category}>
                                    {/* Category header */}
                                    <p className="text-[10px] font-bold tracking-[0.25em] text-gray-600 uppercase mb-5">
                                        {category}
                                    </p>
                                    <ul className="space-y-1">
                                        {links.map((item) => (
                                            <li key={item.title}>
                                                <a
                                                    href={targetHash}
                                                    onClick={() => {
                                                        window.location.hash = targetHash;
                                                        onClose();
                                                    }}
                                                    className="group block py-2.5 px-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                                                >
                                                    <div className="flex items-center gap-2 mb-0.5">
                                                        <span className="text-[13px] font-medium text-gray-200 group-hover:text-white transition-colors">
                                                            {item.title}
                                                        </span>
                                                        <svg
                                                            className="w-3 h-3 text-gray-700 group-hover:text-white opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-[11px] text-gray-600 group-hover:text-gray-400 transition-colors leading-snug">
                                                        {item.desc}
                                                    </p>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* ── Right: Featured panel ── */}
                        <div className="col-span-4">
                            <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden h-full min-h-[300px] border border-white/5 group">
                                {/* Background image */}
                                <img
                                    src={featured.img}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                {/* Content */}
                                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/50 bg-white/10 px-2 py-1 rounded w-fit">
                                        {featured.badge}
                                    </span>
                                    <div>
                                        <p className="text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase mb-3">
                                            {featured.eyebrow}
                                        </p>
                                        <h3 className="text-[22px] font-medium tracking-tight text-white leading-[1.2] font-display mb-6 whitespace-pre-line">
                                            {featured.heading}
                                        </h3>
                                        <a
                                            href={featured.ctaHref}
                                            onClick={onClose}
                                            className="inline-flex items-center gap-2 bg-white text-black text-[11px] font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-white/90 transition-all group/cta"
                                        >
                                            {featured.cta}
                                            <svg className="w-3 h-3 group-hover/cta:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 px-8 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <p className="text-[11px] text-gray-600">
                            {type === 'services'
                                ? '3 engagement packages · 15+ active services'
                                : '6 verticals · 15+ industries covered'}
                        </p>
                        <a
                            href={targetHash}
                            onClick={() => { window.location.hash = targetHash; onClose(); }}
                            className="text-[11px] font-semibold text-gray-500 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                            View all {type === 'services' ? 'services' : 'industries'}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Mobile Accordion Block ───────────────────────────────────────────────────
function MobileAccordion({
    label,
    type,
    isOpen,
    onToggle,
    onClose,
}: {
    label: string;
    type: 'services' | 'industries';
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
}) {
    const items = type === 'services' ? servicesMenu : industriesMenu;
    const targetHash = type === 'services' ? '#services' : '#industries';

    return (
        <div className="border-b border-white/5">
            <button
                className="flex items-center justify-between w-full text-gray-300 text-lg font-medium py-4 hover:text-white transition-colors"
                onClick={onToggle}
            >
                {label}
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[900px] pb-4' : 'max-h-0'}`}>
                {Object.entries(items).map(([category, links]) => (
                    <div key={category} className="mb-5">
                        <h5 className="text-[9px] tracking-[0.25em] text-gray-600 uppercase mb-3 px-2 font-bold">{category}</h5>
                        {links.map((item) => (
                            <a
                                key={item.title}
                                href={targetHash}
                                onClick={() => {
                                    window.location.hash = targetHash;
                                    onClose();
                                }}
                                className="block px-2 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
                            >
                                <p className="text-sm text-gray-300 font-medium">{item.title}</p>
                                <p className="text-[11px] text-gray-600 leading-snug mt-0.5">{item.desc}</p>
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState<'services' | 'industries' | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMenuEnter = (menu: 'services' | 'industries') => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(menu);
    };

    const handleMenuLeave = () => {
        timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
    };

    useEffect(() => {
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, []);

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Blog', href: '#blog' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* ── Nav bar ── */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 bg-black/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    <Logo />

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* About */}
                        <a
                            href="#about"
                            onClick={() => { window.location.hash = '#about'; }}
                            className="text-[13px] text-gray-300 uppercase tracking-[0.15em] font-medium hover:text-white transition-colors duration-200"
                        >
                            About
                        </a>

                        {/* Services dropdown trigger */}
                        <div
                            onMouseEnter={() => handleMenuEnter('services')}
                            onMouseLeave={handleMenuLeave}
                        >
                            <button
                                className={`text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-200 flex items-center gap-1.5 ${activeMenu === 'services' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                            >
                                Services
                                <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {/* Industries dropdown trigger */}
                        <div
                            onMouseEnter={() => handleMenuEnter('industries')}
                            onMouseLeave={handleMenuLeave}
                        >
                            <button
                                className={`text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-200 flex items-center gap-1.5 ${activeMenu === 'industries' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                            >
                                Industries
                                <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {navLinks.slice(1).map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => { window.location.hash = link.href; }}
                                className="text-[13px] text-gray-300 uppercase tracking-[0.15em] font-medium hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right: CTA + hamburger */}
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:hello@elux.space"
                            className="hidden lg:inline-flex items-center gap-2 bg-[#2563EB] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#1d4ed8] transition-colors duration-200"
                        >
                            Book Discovery Call
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        {/* Hamburger */}
                        <button
                            className="lg:hidden text-white p-2"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 flex flex-col gap-[5px]">
                                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Desktop Mega Menu Panels ── */}
            <div className="hidden lg:block">
                <MegaMenuPanel
                    type="services"
                    visible={activeMenu === 'services'}
                    onEnter={() => handleMenuEnter('services')}
                    onLeave={handleMenuLeave}
                    onClose={() => setActiveMenu(null)}
                />
                <MegaMenuPanel
                    type="industries"
                    visible={activeMenu === 'industries'}
                    onEnter={() => handleMenuEnter('industries')}
                    onLeave={handleMenuLeave}
                    onClose={() => setActiveMenu(null)}
                />
            </div>

            {/* ── Mobile Slide-out Panel ── */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
                <div className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-[#0a0a0a] border-l border-white/8 transform transition-transform duration-300 ease-out overflow-y-auto ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="pt-20 px-5 pb-10">

                        <a
                            href="#about"
                            onClick={() => { window.location.hash = '#about'; setMobileOpen(false); }}
                            className="block text-gray-300 text-lg font-medium py-4 border-b border-white/5 hover:text-white transition-colors"
                        >
                            About
                        </a>

                        <MobileAccordion
                            label="Services"
                            type="services"
                            isOpen={mobileAccordion === 'services'}
                            onToggle={() => setMobileAccordion(mobileAccordion === 'services' ? null : 'services')}
                            onClose={() => setMobileOpen(false)}
                        />

                        <MobileAccordion
                            label="Industries"
                            type="industries"
                            isOpen={mobileAccordion === 'industries'}
                            onToggle={() => setMobileAccordion(mobileAccordion === 'industries' ? null : 'industries')}
                            onClose={() => setMobileOpen(false)}
                        />

                        {[
                            { label: 'Case Studies', href: '#case-studies' },
                            { label: 'Blog', href: '#blog' },
                            { label: 'Testimonials', href: '#testimonials' },
                            { label: 'Contact', href: '#contact' },
                        ].map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => { window.location.hash = link.href; setMobileOpen(false); }}
                                className="block text-gray-300 text-lg font-medium py-4 border-b border-white/5 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="mailto:hello@elux.space"
                            className="mt-8 flex items-center justify-center gap-2 bg-[#2563EB] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#1d4ed8] transition-colors w-full"
                        >
                            Book Discovery Call
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
