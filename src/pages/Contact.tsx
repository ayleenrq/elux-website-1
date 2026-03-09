import { useState } from 'react';

// ─────────────────────────────────────────────
// CONTACT HERO — dark, full width
// ─────────────────────────────────────────────
function ContactHero() {
    return (
        <section className="bg-[#0a0a0a] pt-32 pb-0 px-8 relative overflow-hidden">
            {/* Subtle gradient orbs */}
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-purple-600/6 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pb-20 border-b border-white/8">

                    {/* LEFT: Headline + contact info */}
                    <div>
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 mb-10">
                            <span className="text-[10px] font-bold tracking-[0.25em] text-gray-600 uppercase">eluxspace</span>
                            <span className="text-gray-700">·</span>
                            <span className="text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase">Contact</span>
                        </div>

                        <h1 className="text-[56px] md:text-[72px] lg:text-[80px] font-medium tracking-tighter text-white leading-[1.0] font-display mb-8">
                            Got an idea?<br />
                            Let's talk!
                        </h1>

                        <p className="text-gray-400 text-lg font-medium leading-[1.6] tracking-tight mb-12 max-w-md">
                            Whether you're building from scratch or levelling up an existing product — we'd love to hear what you're working on.
                        </p>

                        {/* Contact details grid */}
                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-3">Email us</p>
                                <a href="mailto:hello@elux.space" className="text-white text-sm font-medium hover:text-blue-400 transition-colors">
                                    hello@elux.space
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-3">Call us</p>
                                <a href="tel:+6285156989279" className="text-white text-sm font-medium hover:text-blue-400 transition-colors">
                                    +62 851-5698-9279
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-3">Based in</p>
                                <p className="text-white text-sm font-medium">Jakarta, Indonesia 🇮🇩</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-3">Working hours</p>
                                <p className="text-white text-sm font-medium">Mon–Fri, 9am–6pm WIB</p>
                            </div>
                        </div>

                        {/* Availability badge */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[11px] font-semibold text-gray-300 tracking-wide">Available for new projects</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Social proof card + quick links */}
                    <div className="flex flex-col gap-6">
                        {/* Clutch rating card */}
                        <div className="bg-[#111] border border-white/8 rounded-2xl p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-2">Rated on</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-bold text-lg tracking-tight">Clutch</span>
                                        <span className="text-gray-500 text-sm">& Designrush</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[28px] font-bold text-white tracking-tight leading-none">5.0</p>
                                    <div className="flex gap-0.5 mt-1 justify-end">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-500 text-[13px] font-medium leading-[1.5]">
                                "The team's proficiency facilitated prompt and timely completion of design within the initially estimated timeframes."
                            </p>
                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                                <img src="https://i.pravatar.cc/150?u=julia" alt="Julia" className="w-8 h-8 rounded-full object-cover" />
                                <div>
                                    <p className="text-white text-[12px] font-semibold">Julia Cooney</p>
                                    <p className="text-gray-500 text-[11px]">CEO of Vitalix</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="mailto:hello@elux.space"
                                className="group bg-[#111] border border-white/8 rounded-xl p-5 hover:border-blue-600/50 hover:bg-blue-600/5 transition-all duration-300"
                            >
                                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center mb-3 group-hover:bg-blue-600/30 transition-colors">
                                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-white text-[13px] font-semibold mb-1">Send an email</p>
                                <p className="text-gray-500 text-[11px]">We reply within 24h</p>
                            </a>
                            <a
                                href="https://calendly.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-[#111] border border-white/8 rounded-xl p-5 hover:border-white/20 hover:bg-white/3 transition-all duration-300"
                            >
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3 group-hover:bg-white/15 transition-colors">
                                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-white text-[13px] font-semibold mb-1">Book a call</p>
                                <p className="text-gray-500 text-[11px]">30-min discovery</p>
                            </a>
                        </div>

                        {/* ── Contact cards ── */}
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            {/* Project card */}
                            <div className="bg-[#111111] p-4 rounded-2xl border border-white/5 group cursor-pointer hover:border-white/10 transition-colors flex flex-col gap-3">
                                <img
                                    src="/assets/contact1.png"
                                    alt="Kseniia Shalia"
                                    className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all"
                                />
                                <div>
                                    <p className="text-white font-semibold text-[13px]">Kseniia Shalia</p>
                                    <p className="text-gray-500 text-[11px] mb-2">Account Executive</p>
                                    <div className="h-px bg-white/10 mb-2" />
                                    <div className="flex items-center justify-between text-[11px] font-medium">
                                        <span className="text-gray-400 text-[10px]">Project brief</span>
                                        <svg className="w-3 h-3 text-gray-500 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Partnership card */}
                            <div className="bg-[#111111] p-4 rounded-2xl border border-white/5 group cursor-pointer hover:border-white/10 transition-colors flex flex-col gap-3">
                                <img
                                    src="/assets/contact2.png"
                                    alt="Darrell Steward"
                                    className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all"
                                />
                                <div>
                                    <p className="text-white font-semibold text-[13px]">Darrell Steward</p>
                                    <p className="text-gray-500 text-[11px] mb-2">Partnership Manager</p>
                                    <div className="h-px bg-white/10 mb-2" />
                                    <div className="flex items-center justify-between text-[11px] font-medium">
                                        <span className="text-gray-400 text-[10px]">Partnership</span>
                                        <svg className="w-3 h-3 text-gray-500 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// CONTACT FORM SECTION — dark
// ─────────────────────────────────────────────
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        budget: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const budgetOptions = ['< $5k', '$5k – $15k', '$15k – $30k', '$30k – $60k', '$60k+'];
    const serviceOptions = ['UX/UI Design', 'Web App Design', 'Mobile App Design', 'Design System', 'Website Design', 'MVP Development', 'Other'];

    if (submitted) {
        return (
            <section className="bg-[#0a0a0a] py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-8">
                            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-[40px] font-medium tracking-tighter text-white font-display mb-4">Message received!</h2>
                        <p className="text-gray-400 text-lg font-medium leading-[1.6]">
                            Thanks for reaching out. We'll get back to you within 24 hours with next steps.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#0a0a0a] py-24 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* LEFT: Section intro */}
                    <div>
                        <div className="lg:sticky lg:top-32">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Tell Us More</span>
                            </div>
                            <h2 className="text-[40px] md:text-[52px] font-medium tracking-tighter text-white leading-[1.05] font-display mb-6">
                                Share your project brief
                            </h2>
                            <p className="text-gray-400 text-lg font-medium leading-[1.6] tracking-tight mb-10">
                                The more you tell us, the better we can tailor our response. We read every message ourselves.
                            </p>

                            {/* Process steps */}
                            <div className="space-y-6">
                                {[
                                    { num: '01', title: 'Submit your brief', desc: 'Fill in the form with your project details and goals.' },
                                    { num: '02', title: 'Discovery call', desc: '30-minute intro to align on scope, timelines, and expectations.' },
                                    { num: '03', title: 'Proposal & kickoff', desc: 'We send a tailored proposal and start within a week of signing.' },
                                ].map((step) => (
                                    <div key={step.num} className="flex gap-5">
                                        <span className="text-[11px] font-bold text-gray-700 w-6 pt-0.5 shrink-0">{step.num}</span>
                                        <div>
                                            <p className="text-white text-[15px] font-medium mb-1">{step.title}</p>
                                            <p className="text-gray-500 text-[13px] font-medium leading-[1.5]">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">Full name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Alex Johnson"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-[14px] font-medium placeholder-gray-600 focus:outline-none focus:border-blue-600/60 focus:bg-white/8 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">Email address *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="alex@company.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-[14px] font-medium placeholder-gray-600 focus:outline-none focus:border-blue-600/60 focus:bg-white/8 transition-all"
                                />
                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">Company / Project name</label>
                            <input
                                type="text"
                                value={formData.company}
                                onChange={e => setFormData({ ...formData, company: e.target.value })}
                                placeholder="Acme Inc."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-[14px] font-medium placeholder-gray-600 focus:outline-none focus:border-blue-600/60 focus:bg-white/8 transition-all"
                            />
                        </div>

                        {/* Service */}
                        <div>
                            <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">Service you're interested in *</label>
                            <div className="flex flex-wrap gap-2">
                                {serviceOptions.map(opt => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, service: opt })}
                                        className={`text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-full border transition-all duration-200 ${formData.service === opt
                                            ? 'bg-blue-600 border-blue-600 text-white'
                                            : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Budget */}
                        <div>
                            <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">Estimated budget</label>
                            <div className="flex flex-wrap gap-2">
                                {budgetOptions.map(opt => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, budget: opt })}
                                        className={`text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-full border transition-all duration-200 ${formData.budget === opt
                                            ? 'bg-white border-white text-black'
                                            : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">Project description *</label>
                            <textarea
                                required
                                rows={5}
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell us about your project — what are you building, what's the challenge, and what does success look like?"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-[14px] font-medium placeholder-gray-600 focus:outline-none focus:border-blue-600/60 focus:bg-white/8 transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group w-full flex items-center justify-center gap-3 bg-white text-black text-[12px] font-bold uppercase tracking-widest px-8 py-5 rounded-full hover:bg-gray-100 transition-all duration-300"
                        >
                            Send Message
                            <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </button>

                        <p className="text-gray-600 text-[11px] text-center font-medium">
                            No spam, no commitment. We respect your privacy.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// AREAS OF EXPERTISE — white section
// ─────────────────────────────────────────────
function AreasOfExpertise() {
    const areas = [
        {
            category: 'SaaS & Web Apps',
            services: ['Dashboard UX Design', 'Onboarding Flow Design', 'Admin Panel Design', 'Feature UX Design'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
            desc: 'Powerful, intuitive interfaces for complex SaaS products — from onboarding to power-user dashboards.',
        },
        {
            category: 'Fintech & Finance',
            services: ['Payment Flow Design', 'Investment Platform UX', 'Banking App Design', 'KYC Flow Optimisation'],
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200',
            desc: 'Trust-first design for financial products where every interaction needs to be clear, secure, and friction-free.',
        },
        {
            category: 'HealthTech',
            services: ['Patient Portal UX', 'Telemedicine App Design', 'Clinical Dashboard', 'Health Tracking UI'],
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
            desc: 'Empathetic, accessible interfaces that bridge complex clinical workflows with everyday human needs.',
        },
    ];

    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="bg-white py-32 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Expertise</span>
                        </div>
                        <h2 className="text-[40px] md:text-[56px] font-medium tracking-tighter text-gray-900 leading-[1.0] font-display">
                            Our areas of expertise
                        </h2>
                    </div>
                    <a
                        href="#services"
                        onClick={() => { window.location.hash = '#services'; }}
                        className="hidden lg:inline-flex items-center gap-2 border border-gray-900 text-gray-900 text-[11px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
                    >
                        All Services
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                </div>

                {/* Tab navigation */}
                <div className="flex gap-0 border-b border-gray-200 mb-12">
                    {areas.map((area, i) => (
                        <button
                            key={area.category}
                            onClick={() => setActiveIdx(i)}
                            className={`text-[11px] font-bold uppercase tracking-widest px-6 py-4 border-b-2 transition-all duration-200 ${activeIdx === i
                                ? 'border-gray-900 text-gray-900'
                                : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {area.category}
                        </button>
                    ))}
                </div>

                {/* Active area panel */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-gray-400 text-lg font-medium leading-[1.6] tracking-tight mb-10">
                            {areas[activeIdx].desc}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-10">
                            {areas[activeIdx].services.map((svc) => (
                                <div key={svc} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                                    <span className="text-gray-700 text-[13px] font-medium">{svc}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => { window.location.hash = '#services'; }}
                            className="inline-flex items-center gap-2 bg-black text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Explore {areas[activeIdx].category}
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>
                    <div className="rounded-[28px] overflow-hidden aspect-[4/3] relative">
                        <img
                            src={areas[activeIdx].image}
                            alt={areas[activeIdx].category}
                            className="w-full h-full object-cover transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// CLIENT REVIEWS — dark, masonry-style
// ─────────────────────────────────────────────
function ClientReviews() {
    const reviews = [
        {
            author: 'Alex Friedman',
            role: 'CEO at Open Path',
            avatar: 'https://i.pravatar.cc/150?u=alex',
            type: 'text',
            rating: 5,
            content: 'Not only is the team extremely communicative, their work is exceptional. I have never worked with a team so talented while also being competitively priced.',
        },
        {
            author: 'Craig Tortolani',
            role: 'CPO at Dekryption Labs',
            avatar: 'https://i.pravatar.cc/150?u=craig',
            type: 'video',
            content: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600',
        },
        {
            author: 'George Fry',
            role: 'Founder at Neap',
            avatar: 'https://i.pravatar.cc/150?u=george',
            type: 'text',
            rating: 5,
            content: 'The quality of the designs is fantastic. Elux works at speed and is extremely punctual with timelines. They deliver top-notch outcomes every time.',
        },
        {
            author: 'Andre Guerra',
            role: 'Co-Owner at RADCAT Design',
            avatar: 'https://i.pravatar.cc/150?u=andre',
            type: 'video',
            content: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600',
        },
        {
            author: 'Kevin Alvarez',
            role: 'Founder & GP, Predictive',
            avatar: 'https://i.pravatar.cc/150?u=kevin',
            type: 'text',
            rating: 5,
            content: "Elux's ability to translate concepts into high-fidelity assets was impressive. The goal was to maintain simple elegance, and they did it very well.",
        },
        {
            author: 'KlickEx Team',
            role: 'KlickEx Group',
            avatar: 'https://i.pravatar.cc/150?u=klick',
            type: 'video',
            content: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600',
        },
    ];

    return (
        <section className="bg-[#0a0a0a] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Testimonials</span>
                        </div>
                        <h2 className="text-[40px] md:text-[52px] font-medium tracking-tighter text-white leading-[1.05] font-display">
                            5.0 is our average<br />
                            on Clutch & Designrush
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-white font-bold text-lg">5.0</span>
                        <span className="text-gray-500 text-sm">· 40+ reviews</span>
                    </div>
                </div>

                {/* Masonry grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {reviews.map((review, i) => (
                        <div key={i} className="break-inside-avoid">
                            {review.type === 'video' ? (
                                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
                                    <img
                                        src={review.content}
                                        alt={review.author}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    {/* Play button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-colors">
                                            <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <div className="flex items-center gap-3">
                                            <img src={review.avatar} alt={review.author} className="w-8 h-8 rounded-full border border-white/20" />
                                            <div>
                                                <p className="text-white text-[13px] font-semibold">{review.author}</p>
                                                <p className="text-white/60 text-[11px]">{review.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-[#111] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors">
                                    <div className="flex gap-0.5 mb-4">
                                        {[...Array(review.rating || 5)].map((_, si) => (
                                            <svg key={si} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-300 text-[15px] font-medium leading-[1.6] tracking-tight mb-5">
                                        "{review.content}"
                                    </p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                        <img src={review.avatar} alt={review.author} className="w-8 h-8 rounded-full" />
                                        <div>
                                            <p className="text-white text-[12px] font-semibold">{review.author}</p>
                                            <p className="text-gray-500 text-[11px]">{review.role}</p>
                                        </div>
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
// SOCIAL PROOF LOGOS — white section
// ─────────────────────────────────────────────
function SocialProofLogos() {
    const platforms = [
        { name: 'Clutch', rating: '5.0', reviews: '40+' },
        { name: 'DesignRush', rating: '5.0', reviews: '25+' },
        { name: 'Contra', rating: 'Top', reviews: 'Agency' },
        { name: 'LinkedIn', rating: '500+', reviews: 'Followers' },
        { name: 'Dribbble', rating: 'Pro', reviews: 'Studio' },
    ];

    const clients = [
        'Vitalix', 'CareConnect', 'KlickEx', 'Neap', 'Open Path', 'Predictive', 'Dekryption Labs', 'RADCAT',
    ];

    return (
        <section className="bg-white py-24 px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Platforms */}
                <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase text-center mb-10">
                    Trusted & reviewed on
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-20">
                    {platforms.map((p) => (
                        <div key={p.name} className="flex flex-col items-center gap-1">
                            <p className="text-gray-900 font-bold text-lg tracking-tight">{p.name}</p>
                            <p className="text-[11px] text-gray-400 font-medium">{p.rating} · {p.reviews}</p>
                        </div>
                    ))}
                </div>

                {/* Client names marquee-like */}
                <div className="border-t border-gray-100 pt-12">
                    <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase text-center mb-8">
                        Brands we've partnered with
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {clients.map((client) => (
                            <span key={client} className="text-gray-300 text-[13px] font-bold uppercase tracking-widest px-5 py-2.5 border border-gray-100 rounded-full">
                                {client}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// CONTACT FAQ — light
// ─────────────────────────────────────────────
function ContactFAQ() {
    const [open, setOpen] = useState<number | null>(0);
    const faqs = [
        {
            q: 'How quickly can we get started?',
            a: 'Most projects kick off within a week of signing. Discovery calls are free with zero commitment. We can also start with a focused audit before committing to a full engagement.',
        },
        {
            q: 'What information should I include in my brief?',
            a: 'The more detail the better — project goals, target audience, existing brand assets, timeline, and any references you love. A solid brief means faster, more accurate proposals.',
        },
        {
            q: 'Do you work with startups or only established companies?',
            a: "Both. We have dedicated packages for early-stage startups building MVPs and for growth-stage companies redesigning or scaling their products. Budget and scope adapt accordingly.",
        },
        {
            q: 'What does your design process look like?',
            a: 'Discovery → Strategy → Wireframes → Visual Design → Prototype → Handoff. Each phase has defined deliverables and review checkpoints. You own everything we create.',
        },
        {
            q: 'Do you offer ongoing retainers?',
            a: 'Yes — our Ongoing Design Partnership retainer gives you dedicated senior design capacity on a monthly basis. Ideal for teams shipping frequently.',
        },
    ];

    return (
        <section className="bg-white py-32 px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* LEFT */}
                <div className="h-fit lg:sticky lg:top-32">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">FAQ</span>
                    </div>
                    <h2 className="text-[40px] md:text-[52px] font-medium tracking-tighter text-gray-900 leading-[1.0] font-display mb-6">
                        Common<br />questions
                    </h2>
                    <p className="text-gray-500 text-base font-medium leading-[1.6] tracking-tight mb-10">
                        Can't find what you're looking for?<br />
                        Email us at{' '}
                        <a href="mailto:hello@elux.space" className="text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors">
                            hello@elux.space
                        </a>
                    </p>
                    <a
                        href="mailto:hello@elux.space"
                        className="group inline-flex items-center gap-4 bg-black text-white px-8 py-5 rounded-full hover:scale-105 transition-all duration-300"
                    >
                        <span className="text-sm font-bold uppercase tracking-widest">Get In Touch</span>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-colors group-hover:bg-blue-600">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                </div>

                {/* RIGHT */}
                <div className="border-t border-gray-200">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-gray-100">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between py-7 text-left group"
                            >
                                <span className={`text-base font-medium transition-colors pr-8 ${open === i ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-gray-900 border-gray-900 rotate-45' : 'border-gray-200 group-hover:border-gray-400'}`}>
                                    <svg className={`w-4 h-4 transition-colors ${open === i ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>
                            {open === i && (
                                <div className="pb-7 pr-16">
                                    <p className="text-gray-500 text-[15px] font-medium leading-[1.6] tracking-tight">{faq.a}</p>
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
// MAIN EXPORT
// ─────────────────────────────────────────────
export default function Contact() {
    return (
        <>
            <ContactHero />
            <ContactForm />
            <AreasOfExpertise />
            <ClientReviews />
            <SocialProofLogos />
            <ContactFAQ />
        </>
    );
}
