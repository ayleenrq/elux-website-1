import { useEffect, useState } from 'react';

// ─────────────────────────────────────────────
// POST DATA (shared with Blog.tsx)
// ─────────────────────────────────────────────
const posts = [
    {
        id: 1,
        slug: 'why-ux-research-matters',
        category: 'UX Strategy',
        title: 'Why UX Research Is the Most Underrated Step in Product Development',
        excerpt: "Most teams treat research as optional. The ones that don't consistently ship products that actually stick. Here's what the data shows — and what we've learned firsthand.",
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600',
        date: 'Mar 05, 2026',
        readTime: '6 min read',
        author: { name: 'Kseniia Shalia', role: 'Account Executive', avatar: '/assets/contact1.png' },
        featured: true,
    },
    {
        id: 2,
        slug: 'design-systems-scaling',
        category: 'Product Design',
        title: 'How to Build a Design System That Actually Scales With Your Team',
        excerpt: 'Component libraries are easy to build. The hard part is making them survive product growth, team changes, and shifting design philosophy.',
        image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1600',
        date: 'Feb 28, 2026',
        readTime: '8 min read',
        author: { name: 'Darrell Steward', role: 'Partnership Manager', avatar: '/assets/contact2.png' },
        featured: false,
    },
    {
        id: 3,
        slug: 'fintech-ux-trust',
        category: 'Industry Insights',
        title: 'Designing for Trust: UX Principles Every Fintech Product Must Follow',
        excerpt: "In financial products, a confusing UI doesn't just frustrate users — it erodes trust.",
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1600',
        date: 'Feb 20, 2026',
        readTime: '7 min read',
        author: { name: 'Kseniia Shalia', role: 'Account Executive', avatar: '/assets/contact1.png' },
        featured: false,
    },
    {
        id: 4,
        slug: 'mvp-design-mistakes',
        category: 'Product Design',
        title: '5 MVP Design Mistakes That Tank Your Launch Before It Even Starts',
        excerpt: "Speed is everything when building an MVP. But these five design shortcuts consistently backfire.",
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1600',
        date: 'Feb 12, 2026',
        readTime: '5 min read',
        author: { name: 'Darrell Steward', role: 'Partnership Manager', avatar: '/assets/contact2.png' },
        featured: false,
    },
    {
        id: 5,
        slug: 'vitalix-case-study',
        category: 'Case Study',
        title: 'Vitalix: How We Designed a HealthTech MVP in 3 Weeks That Users Actually Love',
        excerpt: 'From a rough concept to a fundable, shippable product in three weeks.',
        image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1600&auto=format&fit=crop',
        date: 'Feb 05, 2026',
        readTime: '10 min read',
        author: { name: 'Kseniia Shalia', role: 'Account Executive', avatar: '/assets/contact1.png' },
        featured: false,
    },
    {
        id: 6,
        slug: 'saas-dashboard-ux',
        category: 'UX Strategy',
        title: 'The Anatomy of a Great SaaS Dashboard: What Separates Good From Exceptional',
        excerpt: "Dashboards are where SaaS products win or lose. We've designed dozens — here are the structural patterns.",
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
        date: 'Jan 28, 2026',
        readTime: '9 min read',
        author: { name: 'Darrell Steward', role: 'Partnership Manager', avatar: '/assets/contact2.png' },
        featured: false,
    },
    {
        id: 7,
        slug: 'no-code-mvps',
        category: 'Development',
        title: "No-Code MVPs: When They Work, When They Don't, and How to Decide",
        excerpt: "No-code tools have matured dramatically. For many early-stage founders, they're the fastest path to user validation.",
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600',
        date: 'Jan 20, 2026',
        readTime: '6 min read',
        author: { name: 'Kseniia Shalia', role: 'Account Executive', avatar: '/assets/contact1.png' },
        featured: false,
    },
    {
        id: 8,
        slug: 'mobile-ux-patterns',
        category: 'Product Design',
        title: 'Mobile UX Patterns That Have Stood the Test of Time (And Why)',
        excerpt: "Trends come and go. But some mobile interaction patterns have survived because they align with how people actually think.",
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600',
        date: 'Jan 10, 2026',
        readTime: '7 min read',
        author: { name: 'Darrell Steward', role: 'Partnership Manager', avatar: '/assets/contact2.png' },
        featured: false,
    },
];

// ─────────────────────────────────────────────
// ARTICLE BODY content (generated per post)
// ─────────────────────────────────────────────
const articleSections = [
    {
        heading: 'The Problem With Skipping Research',
        body: `Most product teams skip research not because they don't value it — but because they're afraid of what it might reveal. Admitting that you don't know your users means admitting that your assumptions might be wrong. And in a world of tight deadlines and investor pressure, that's a hard pill to swallow.\n\nBut here's the uncomfortable truth: every hour saved by skipping research is typically paid back threefold in rework, failed features, and churned users. The data is consistent across the products we've built and advised on over the past five years.`,
    },
    {
        heading: 'What the Data Actually Shows',
        body: `In our own project retrospectives, we found that products that had at least two rounds of user interviews before any visual design had a 40% lower rate of major post-launch UX revisions. That's not a small margin — that's the difference between a product that grows and one that stalls.\n\nThe most common failure mode we see is teams doing research after design — using it to validate rather than generate direction. Discovery research and validation research are fundamentally different activities. Conflating them is one of the most expensive mistakes you can make.`,
        highlight: 'Products with early user interviews had 40% fewer post-launch UX revisions.',
    },
    {
        heading: 'How We Approach Research at Elux',
        body: `Our process has three stages before a single wireframe gets drawn:\n\n1. Stakeholder alignment — We interview internal teams to surface assumptions, constraints, and existing knowledge.\n2. User discovery — Structured 30-minute interviews with 5–8 representative users. We're looking for patterns, not anecdotes.\n3. Synthesis & direction — We turn raw observations into design principles that guide every decision downstream.\n\nThis takes roughly one week for most projects. The ROI is consistently positive.`,
    },
    {
        heading: 'The "We Know Our Users" Trap',
        body: `The most dangerous phrase in product development is "we know our users." It's almost always said by founders or PMs who have deep domain expertise but haven't had a structured external conversation with an actual user in months — sometimes years.\n\nExpertise creates blind spots. The closer you are to a problem, the harder it is to see what's obvious to someone encountering it for the first time. Research is the antidote. It's the mechanism that keeps your internal model of the user calibrated against reality.`,
    },
    {
        heading: 'Practical Takeaways',
        body: `If you're going into your next sprint without having spoken to at least three users in the past month, pause. Not forever — just long enough to schedule those conversations.\n\nThe format doesn't need to be elaborate. A 20-minute video call with a screenshare is enough. Ask people to show you how they currently solve the problem your feature is supposed to address. Watch where they hesitate. Listen to the language they use. That data is worth more than any analytics dashboard.`,
    },
];

const tocItems = articleSections.map((s, i) => ({ id: `section-${i}`, label: s.heading }));

// ─────────────────────────────────────────────
// RELATED CARD
// ─────────────────────────────────────────────
function RelatedCard({ post }: { post: typeof posts[0] }) {
    const handleClick = () => {
        window.location.hash = `#blog/${post.slug}`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <article
            onClick={handleClick}
            className="group cursor-pointer flex flex-col"
        >
            <div className="relative rounded-xl overflow-hidden mb-4 bg-gray-100" style={{ aspectRatio: '16/9' }}>
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">{post.category}</p>
            <h3 className="text-gray-900 font-display font-medium tracking-tight text-lg leading-snug group-hover:text-blue-600 transition-colors duration-300 mb-2">
                {post.title}
            </h3>
            <p className="text-sm font-normal text-gray-400">{post.date} · {post.readTime}</p>
        </article>
    );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export default function BlogDetail() {
    // Extract slug from hash: #blog/slug
    const slug = window.location.hash.replace('#blog/', '');
    const post = posts.find(p => p.slug === slug) ?? posts[0];
    const relatedPosts = posts.filter(p => p.slug !== post.slug).slice(0, 3);

    const [activeSection, setActiveSection] = useState(0);
    const [copied, setCopied] = useState(false);

    // Track scroll for TOC highlighting
    useEffect(() => {
        const handleScroll = () => {
            tocItems.forEach((item, i) => {
                const el = document.getElementById(item.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 140) setActiveSection(i);
                }
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [slug]);

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            {/* ── Article Header ── */}
            <section className="bg-white pt-28 pb-0 px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-10 pt-6">
                        <button
                            onClick={() => { window.location.hash = '#blog'; }}
                            className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors duration-200"
                        >
                            Blog
                        </button>
                        <span className="text-gray-300">/</span>
                        <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">{post.category}</span>
                    </div>

                    {/* Title */}
                    <div className="max-w-4xl">
                        <h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-medium tracking-tighter text-gray-900 leading-tight font-display mb-8">
                            {post.title}
                        </h1>
                        <p className="text-gray-400 text-xl font-normal leading-relaxed mb-10 max-w-2xl">
                            {post.excerpt}
                        </p>

                        {/* Meta bar */}
                        <div className="flex flex-wrap items-center gap-6 pb-10">
                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://i.pravatar.cc/80?u=${post.author.name}`;
                                    }}
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                                    <p className="text-xs font-normal text-gray-400">{post.author.role}</p>
                                </div>
                            </div>

                            <span className="text-gray-200 hidden md:block">|</span>

                            <div className="flex items-center gap-4 text-sm font-normal text-gray-400">
                                <span>{post.date}</span>
                                <span className="text-gray-200">·</span>
                                <span>{post.readTime}</span>
                            </div>

                            {/* Share */}
                            <div className="ml-auto flex items-center gap-3">
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors duration-200 border border-gray-200 px-4 py-2 rounded-full hover:border-gray-400"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    {copied ? 'Copied!' : 'Copy link'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Full-width divider — same width as hero image */}
                <div className="max-w-7xl mx-auto">
                    <div className="border-b border-gray-200" />
                </div>
            </section>

            {/* ── Hero Image ── */}
            <section className="bg-white px-8 mb-0">
                <div className="max-w-7xl mx-auto py-8">
                    <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '21/9' }}>
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ── Article Body — 2 column: sidebar + content ── */}
            <section className="bg-white px-8 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                        {/* LEFT — sticky sidebar */}
                        <aside className="lg:col-span-3 hidden lg:block">
                            <div className="sticky top-28 space-y-10">

                                {/* Table of Contents */}
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">In this article</p>
                                    <nav className="space-y-1">
                                        {tocItems.map((item, i) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                }}
                                                className={`block text-[13px] font-normal leading-snug py-1.5 pl-3 border-l-2 transition-all duration-200 ${activeSection === i
                                                    ? 'border-gray-900 text-gray-900 font-medium'
                                                    : 'border-gray-100 text-gray-400 hover:text-gray-600 hover:border-gray-300'
                                                    }`}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                {/* Author card */}
                                <div className="border-t border-gray-100 pt-8">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Written by</p>
                                    <div className="flex items-center gap-3 mb-3">
                                        <img
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://i.pravatar.cc/80?u=${post.author.name}`;
                                            }}
                                        />
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                                            <p className="text-xs text-gray-400">{post.author.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                                        Part of the Elux team building world-class digital products for startups and scale-ups.
                                    </p>
                                </div>

                                {/* Share / CTA */}
                                <div className="border-t border-gray-100 pt-8">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Share</p>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={handleCopy}
                                            className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors group"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            {copied ? 'Copied!' : 'Copy link'}
                                        </button>
                                        <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors">
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zM17.08 20.01h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                            Share on X
                                        </a>
                                        <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors">
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            Share on LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT — Article content */}
                        <article className="lg:col-span-9">
                            {/* Article intro */}
                            <p className="text-gray-600 text-xl font-normal leading-relaxed mb-12 border-l-4 border-blue-600 pl-6">
                                {post.excerpt}
                            </p>

                            {/* Body sections */}
                            <div className="space-y-14">
                                {articleSections.map((section, i) => (
                                    <div key={i} id={`section-${i}`} className="scroll-mt-28">
                                        <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-gray-900 font-display leading-tight mb-5">
                                            {section.heading}
                                        </h2>

                                        {section.body.split('\n\n').map((para, j) => (
                                            para.startsWith('1.') || para.startsWith('2.') ? (
                                                <ol key={j} className="space-y-3 mb-6 text-gray-600 text-[17px] font-normal leading-relaxed list-none pl-0">
                                                    {para.split('\n').map((line, k) => {
                                                        const match = line.match(/^(\d+)\.\s+(.+)$/);
                                                        if (!match) return null;
                                                        return (
                                                            <li key={k} className="flex gap-4">
                                                                <span className="text-xs font-bold text-gray-400 pt-1.5 shrink-0 w-5">{match[1]}.</span>
                                                                <span>{match[2]}</span>
                                                            </li>
                                                        );
                                                    })}
                                                </ol>
                                            ) : (
                                                <p key={j} className="text-gray-600 text-[17px] font-normal leading-relaxed mb-5">
                                                    {para}
                                                </p>
                                            )
                                        ))}

                                        {section.highlight && (
                                            <blockquote className="my-8 border-l-4 border-blue-600 pl-6 py-1">
                                                <p className="text-gray-900 text-xl md:text-2xl font-medium tracking-tight leading-snug font-display">
                                                    "{section.highlight}"
                                                </p>
                                            </blockquote>
                                        )}

                                        {/* Divider between sections (not after last) */}
                                        {i < articleSections.length - 1 && (
                                            <div className="border-b border-gray-100 mt-10" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* ── Tags ── */}
                            <div className="flex flex-wrap gap-2 mt-14 pt-10 border-t border-gray-200">
                                {['UX Research', 'Product Design', 'Design Process', post.category].map(tag => (
                                    <span key={tag} className="text-xs font-semibold uppercase tracking-widest text-gray-500 border border-gray-200 px-4 py-2 rounded-full hover:border-gray-800 hover:text-gray-800 transition-colors cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* ── Author bio (mobile/bottom) ── */}
                            <div className="mt-14 p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="w-14 h-14 rounded-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://i.pravatar.cc/80?u=${post.author.name}`;
                                        }}
                                    />
                                    <div>
                                        <p className="text-gray-900 font-semibold text-base">{post.author.name}</p>
                                        <p className="text-gray-400 text-sm">{post.author.role} · Eluxspace</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-[15px] font-normal leading-relaxed">
                                    Part of the Elux team. We help startups and growth-stage companies design digital products people love and trust. Have a project in mind?{' '}
                                    <button
                                        onClick={() => { window.location.hash = '#contact'; }}
                                        className="text-blue-600 font-medium underline underline-offset-4 hover:no-underline"
                                    >
                                        Let's talk.
                                    </button>
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* ── Related Articles ── */}
            <section className="bg-white px-8 py-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Keep reading</p>
                            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-gray-900 font-display leading-tight">
                                Related articles
                            </h2>
                        </div>
                        <button
                            onClick={() => { window.location.hash = '#blog'; }}
                            className="hidden md:inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
                        >
                            View all
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {relatedPosts.map((rp) => (
                            <RelatedCard key={rp.id} post={rp} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
