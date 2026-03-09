import { useEffect } from 'react';

// ─────────────────────────────────────────────
// CASE STUDY DATA
// ─────────────────────────────────────────────
const caseStudy = {
    slug: 'upnova',
    client: 'Upnova',
    category: 'AI Platforms / Dashboard',
    tagline: 'Simplifying AI-driven analytics into intuitive flows — from raw data chaos to clear decisions.',
    year: '2025',
    timeline: '4 Weeks',
    role: 'End-to-end UX/UI',
    stack: 'Figma, Framer',
    industry: 'SaaS / AI',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2400',
    sections: [
        {
            type: 'text-wide',
            label: 'The Challenge',
            heading: 'Power buried under complexity',
            body: `The legacy platform was beloved by data scientists but feared by business users. Cognitive overload during onboarding was causing 67% of trial users to abandon within 72 hours — long before they reached the product's core value.\n\nThe brief: design an experience that makes AI-driven predictive insight feel instant, trustworthy, and inevitable — not intimidating.`,
        },
        {
            type: 'image-full',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2400',
            caption: 'Early discovery: legacy dashboard interface audit',
        },
        {
            type: 'text-split',
            label: 'Research',
            heading: 'Ten conversations that changed everything',
            body: `We conducted 10 user interviews across two personas — power analysts and first-time business leads. What emerged was a clear pattern: users didn't distrust the data. They distrusted the interface.\n\nThe system surfaced conclusions without showing reasoning. Users needed to see the thinking — not just the result.`,
            imageRight: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
        },
        {
            type: 'gallery-3',
            label: 'Design Exploration',
            heading: 'Exploring the solution space',
            images: [
                'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=900',
                'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=900',
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=900',
            ],
        },
        {
            type: 'text-wide',
            label: 'Design System',
            heading: 'Building clarity from first principles',
            body: `We established a strict visual hierarchy — every element had to earn its place. AI "thinking states" were given their own motion vocabulary: subtle pulsing radials that communicated processing without triggering anxiety.\n\nTypographic scale was compressed. Every label was rewritten in plain language. Tooltips became teachers.`,
        },
        {
            type: 'image-full',
            image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=2400',
            caption: 'Final UI — the primary analytics dashboard at 100% fidelity',
        },
        {
            type: 'gallery-2',
            label: 'Final UI',
            images: [
                'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
            ],
        },
        {
            type: 'image-full',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2400',
            caption: 'Mobile-first responsive breakpoints across the core flows',
        },
    ],
    results: [
        { metric: '+80%', label: 'Activation rate', sub: 'within 7 days of launch' },
        { metric: '2×', label: 'Faster onboarding', sub: 'vs. legacy experience' },
        { metric: '0', label: 'Dev handoff revisions', sub: 'shipped exactly as designed' },
        { metric: '$2.1M', label: 'Seed round closed', sub: '3 weeks post-launch' },
    ],
    testimonial: {
        quote: "Elux didn't just redesign our dashboard. They redesigned how we think about who our product is for. The new onboarding alone paid for the engagement within two sprints.",
        name: 'Marcus Venna',
        title: 'CEO, Upnova',
        avatar: 'https://i.pravatar.cc/80?u=marcusvenna',
    },
    nextProject: {
        title: 'Novus Medical',
        slug: 'novus-medical',
        category: 'HealthTech',
    },
};

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero() {
    return (
        <section className="bg-[#0a0a0a] text-white pt-32 pb-0 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-14">
                    <button
                        onClick={() => { window.location.hash = '#case-studies'; }}
                        className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                    >
                        Work
                    </button>
                    <span className="text-gray-700">/</span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">{caseStudy.category}</span>
                </div>

                {/* Title block */}
                <div className="max-w-5xl mb-16">
                    <h1 className="text-[64px] md:text-[80px] lg:text-[100px] font-medium tracking-tighter leading-none font-display mb-8">
                        {caseStudy.client}.
                    </h1>
                    <p className="text-gray-400 text-xl md:text-2xl font-normal leading-relaxed max-w-3xl">
                        {caseStudy.tagline}
                    </p>
                </div>

                {/* Meta strip */}
                <div className="flex flex-wrap gap-x-12 gap-y-4 pb-16 border-b border-white/8">
                    {[
                        { label: 'Client', value: caseStudy.client },
                        { label: 'Industry', value: caseStudy.industry },
                        { label: 'Year', value: caseStudy.year },
                        { label: 'Timeline', value: caseStudy.timeline },
                        { label: 'Role', value: caseStudy.role },
                    ].map(item => (
                        <div key={item.label}>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-1">{item.label}</p>
                            <p className="text-white text-[15px] font-medium">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hero image — peaks into next section */}
            <div className="max-w-7xl mx-auto mt-12 rounded-t-3xl overflow-hidden">
                <img
                    src={caseStudy.heroImage}
                    alt={`${caseStudy.client} hero`}
                    className="w-full object-cover"
                    style={{ aspectRatio: '21/9' }}
                />
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// SECTION RENDERERS
// ─────────────────────────────────────────────

function TextWide({ section }: { section: typeof caseStudy.sections[0] & { type: 'text-wide' } }) {
    return (
        <section className="bg-white py-24 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Label + heading — sticky left */}
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-28">
                        {section.label && (
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">{section.label}</p>
                        )}
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 font-display leading-tight">
                            {section.heading}
                        </h2>
                    </div>
                </div>
                {/* Body right */}
                <div className="lg:col-span-8">
                    {section.body?.split('\n\n').map((para, i) => (
                        <p key={i} className="text-gray-600 text-xl font-normal leading-relaxed mb-6">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ImageFull({ section }: { section: typeof caseStudy.sections[0] & { type: 'image-full' } }) {
    return (
        <section className="bg-white px-8 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="rounded-2xl overflow-hidden bg-gray-100">
                    <img
                        src={section.image}
                        alt={section.caption || ''}
                        className="w-full object-cover"
                        style={{ aspectRatio: '16/9' }}
                    />
                </div>
                {section.caption && (
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-4 text-center">{section.caption}</p>
                )}
            </div>
        </section>
    );
}

function TextSplit({ section }: { section: typeof caseStudy.sections[0] & { type: 'text-split' } }) {
    return (
        <section className="bg-[#F9FAFB] py-24 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    {section.label && (
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">{section.label}</p>
                    )}
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 font-display leading-tight mb-8">
                        {section.heading}
                    </h2>
                    {section.body?.split('\n\n').map((para, i) => (
                        <p key={i} className="text-gray-600 text-lg font-normal leading-relaxed mb-5">
                            {para}
                        </p>
                    ))}
                </div>
                {section.imageRight && (
                    <div className="rounded-2xl overflow-hidden bg-gray-200">
                        <img
                            src={section.imageRight}
                            alt={section.label || ''}
                            className="w-full object-cover"
                            style={{ aspectRatio: '4/3' }}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

function Gallery3({ section }: { section: typeof caseStudy.sections[0] & { type: 'gallery-3' } }) {
    return (
        <section className="bg-white py-24 px-8">
            <div className="max-w-7xl mx-auto">
                {(section.label || section.heading) && (
                    <div className="mb-12">
                        {section.label && (
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">{section.label}</p>
                        )}
                        {section.heading && (
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 font-display leading-tight">
                                {section.heading}
                            </h2>
                        )}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {section.images?.map((img, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden bg-gray-100">
                            <img
                                src={img}
                                alt={`Design exploration ${i + 1}`}
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: '4/3' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Gallery2({ section }: { section: typeof caseStudy.sections[0] & { type: 'gallery-2' } }) {
    return (
        <section className="bg-[#F9FAFB] py-8 px-8">
            <div className="max-w-7xl mx-auto">
                {section.label && (
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">{section.label}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.images?.map((img, i) => (
                        <div key={i} className={`rounded-2xl overflow-hidden bg-gray-100 ${i === 0 ? 'md:row-span-1' : ''}`}>
                            <img
                                src={img}
                                alt={`Final design ${i + 1}`}
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: '4/3' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// RESULTS
// ─────────────────────────────────────────────
function Results() {
    return (
        <section className="bg-white py-24 px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Impact</p>
                    <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-gray-900 font-display leading-tight">
                        The results.
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-l border-gray-200">
                    {caseStudy.results.map((r, i) => (
                        <div key={i} className="pl-8 pr-4 py-8 border-r border-gray-200">
                            <p className="text-[56px] md:text-[72px] font-medium tracking-tighter text-gray-900 leading-none mb-3 font-display">{r.metric}</p>
                            <p className="text-base font-semibold text-gray-900 mb-1">{r.label}</p>
                            <p className="text-sm text-gray-400 font-normal">{r.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// TESTIMONIAL
// ─────────────────────────────────────────────
function Testimonial() {
    const t = caseStudy.testimonial;
    return (
        <section className="bg-[#0a0a0a] py-24 px-8">
            <div className="max-w-5xl mx-auto text-center">
                <svg className="w-8 h-8 text-blue-500 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-white text-2xl md:text-3xl font-medium leading-snug tracking-tight font-display mb-10">
                    "{t.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                    <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                        <p className="text-white font-semibold text-base">{t.name}</p>
                        <p className="text-gray-500 text-sm">{t.title}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// NEXT PROJECT
// ─────────────────────────────────────────────
function NextProject() {
    const next = caseStudy.nextProject;
    return (
        <section
            onClick={() => { window.location.hash = '#case-studies'; }}
            className="bg-[#0a0a0a] border-t border-white/5 py-24 px-8 cursor-pointer group hover:bg-[#111] transition-colors"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4">Next case study</p>
                    <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white font-display leading-none group-hover:text-blue-400 transition-colors duration-500">
                        {next.title}
                    </h2>
                    <p className="text-gray-500 text-base mt-3">{next.category}</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600 transition-all duration-300">
                    <svg className="w-5 h-5 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// SECTION ROUTER
// ─────────────────────────────────────────────
function renderSection(section: typeof caseStudy.sections[0], i: number) {
    switch (section.type) {
        case 'text-wide':
            return <TextWide key={i} section={section as any} />;
        case 'image-full':
            return <ImageFull key={i} section={section as any} />;
        case 'text-split':
            return <TextSplit key={i} section={section as any} />;
        case 'gallery-3':
            return <Gallery3 key={i} section={section as any} />;
        case 'gallery-2':
            return <Gallery2 key={i} section={section as any} />;
        default:
            return null;
    }
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export default function CaseStudyDetail() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="antialiased">
            <Hero />
            {caseStudy.sections.map((section, i) => renderSection(section, i))}
            <Results />
            <Testimonial />
            <NextProject />
        </div>
    );
}
