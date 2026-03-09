import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const categories = ['All', 'Product Design', 'UX Strategy', 'Development', 'Case Study', 'Industry Insights'];

const posts = [
    {
        id: 1,
        slug: 'why-ux-research-matters',
        category: 'UX Strategy',
        title: 'Why UX Research Is the Most Underrated Step in Product Development',
        excerpt: "Most teams treat research as optional. The ones that don't consistently ship products that actually stick. Here's what the data shows — and what we've learned firsthand.",
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
        date: 'Mar 05, 2026',
        readTime: '6 min read',
        featured: true,
    },
    {
        id: 2,
        slug: 'design-systems-scaling',
        category: 'Product Design',
        title: 'How to Build a Design System That Actually Scales With Your Team',
        excerpt: 'Component libraries are easy to build. The hard part is making them survive product growth, team changes, and shifting design philosophy — without becoming a liability.',
        image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1200',
        date: 'Feb 28, 2026',
        readTime: '8 min read',
        featured: false,
    },
    {
        id: 3,
        slug: 'fintech-ux-trust',
        category: 'Industry Insights',
        title: 'Designing for Trust: UX Principles Every Fintech Product Must Follow',
        excerpt: "In financial products, a confusing UI doesn't just frustrate users — it erodes trust. We break down the design patterns that separate great fintech from forgettable ones.",
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200',
        date: 'Feb 20, 2026',
        readTime: '7 min read',
        featured: false,
    },
    {
        id: 4,
        slug: 'mvp-design-mistakes',
        category: 'Product Design',
        title: '5 MVP Design Mistakes That Tank Your Launch Before It Even Starts',
        excerpt: "Speed is everything when building an MVP. But these five design shortcuts consistently backfire — adding weeks of rework and confusing the users you're trying to impress.",
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
        date: 'Feb 12, 2026',
        readTime: '5 min read',
        featured: false,
    },
    {
        id: 5,
        slug: 'vitalix-case-study',
        category: 'Case Study',
        title: 'Vitalix: How We Designed a HealthTech MVP in 3 Weeks That Users Actually Love',
        excerpt: 'From a rough concept to a fundable, shippable product in three weeks — this is how we approached discovery, design, and delivery for one of our most complex health clients.',
        image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1200&auto=format&fit=crop',
        date: 'Feb 05, 2026',
        readTime: '10 min read',
        featured: false,
    },
    {
        id: 6,
        slug: 'saas-dashboard-ux',
        category: 'UX Strategy',
        title: 'The Anatomy of a Great SaaS Dashboard: What Separates Good From Exceptional',
        excerpt: "Dashboards are where SaaS products win or lose. We've designed dozens — here are the structural patterns, mental models, and hierarchy decisions that make or break user retention.",
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        date: 'Jan 28, 2026',
        readTime: '9 min read',
        featured: false,
    },
    {
        id: 7,
        slug: 'no-code-mvps',
        category: 'Development',
        title: "No-Code MVPs: When They Work, When They Don't, and How to Decide",
        excerpt: "No-code tools have matured dramatically. For many early-stage founders, they're the fastest path to user validation — but picking the wrong tool for the wrong stage is costly.",
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
        date: 'Jan 20, 2026',
        readTime: '6 min read',
        featured: false,
    },
    {
        id: 8,
        slug: 'mobile-ux-patterns',
        category: 'Product Design',
        title: 'Mobile UX Patterns That Have Stood the Test of Time (And Why)',
        excerpt: "Trends come and go. But some mobile interaction patterns have survived because they align with how people actually think and reach. Here's what we keep coming back to.",
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
        date: 'Jan 10, 2026',
        readTime: '7 min read',
        featured: false,
    },
];

// ─────────────────────────────────────────────
// FEATURED CARD  (left column — Webflow style)
// ─────────────────────────────────────────────
function FeaturedCard({ post }: { post: typeof posts[0] }) {
    const navigate = () => { window.location.hash = `#blog/${post.slug}`; };
    return (
        <article data-animate onClick={navigate} className="group flex flex-col cursor-pointer h-full">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 mb-6" style={{ aspectRatio: '4/3' }}>
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 flex gap-2">
                    <span className="bg-blue-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                        Featured
                    </span>
                    <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                        {post.category}
                    </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
                <h2 className="text-gray-900 font-display font-medium tracking-tighter text-3xl leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                </h2>
                <p className="text-gray-600 text-base font-normal leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-normal text-gray-400">{post.date}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-sm font-normal text-gray-400">{post.readTime}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                        Read Article
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </article>
    );
}


// ─────────────────────────────────────────────
// ARTICLE LIST ITEM  (right column — text only)
// ─────────────────────────────────────────────
function ArticleListItem({ post, delay, isLast }: { post: typeof posts[0]; delay: number; isLast: boolean }) {
    const navigate = () => { window.location.hash = `#blog/${post.slug}`; };
    return (
        <article
            data-animate
            data-delay={String(delay)}
            onClick={navigate}
            className={`group cursor-pointer py-6 ${!isLast ? 'border-b border-gray-200' : ''}`}
        >
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">{post.category}</p>
            <h3 className="text-gray-900 font-display font-medium tracking-tight text-xl leading-snug group-hover:text-blue-600 transition-colors duration-300 mb-3">
                {post.title}
            </h3>
            <div className="flex items-center gap-3">
                <span className="text-sm font-normal text-gray-400">{post.date}</span>
                <span className="text-gray-300">·</span>
                <span className="text-sm font-normal text-gray-400">{post.readTime}</span>
            </div>
        </article>
    );
}


// ─────────────────────────────────────────────
// BLOG CARD  (bottom grid)
// ─────────────────────────────────────────────
function BlogCard({ post, delay }: { post: typeof posts[0]; delay: number }) {
    const navigate = () => { window.location.hash = `#blog/${post.slug}`; };
    return (
        <article
            data-animate
            data-delay={String(delay)}
            onClick={navigate}
            className="group flex flex-col cursor-pointer"
        >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden mb-6 bg-gray-100" style={{ aspectRatio: '16/10' }}>
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white text-black text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                        {post.category}
                    </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-sm font-normal text-gray-400">{post.readTime}</span>
            </div>

            <h3 className="text-gray-900 font-display font-medium tracking-tight text-2xl leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
            </h3>

            <p className="text-gray-600 text-base font-normal leading-relaxed flex-1 mb-6 line-clamp-3">
                {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-5 border-t border-gray-200">
                <span className="text-sm font-normal text-gray-400">{post.date}</span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    Read More
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </span>
            </div>
        </article>
    );
}

// ─────────────────────────────────────────────
// BLOG HERO
// ─────────────────────────────────────────────
function BlogHero() {
    return (
        <section className="min-h-[90vh] bg-[#0a0a0a] text-white flex flex-col justify-center px-8">
            <div className="max-w-7xl mx-auto w-full pt-20">
                <p data-animate className="text-blue-500 text-sm tracking-widest uppercase font-semibold mb-6">
                    Insights & Knowledge
                </p>
                <h1 data-animate data-delay="60" className="text-[72px] leading-none tracking-tighter font-display">
                    Ideas, craft, and lessons<br />
                    from the Elux team.
                </h1>
                <p data-animate data-delay="140" className="text-gray-400 text-2xl max-w-3xl mt-8 font-medium leading-relaxed">
                    Deep dives into product design, UX strategy, and digital craft — written by the people building real products every day.
                </p>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// MAIN EXPORT — Blog List Page
// ─────────────────────────────────────────────
export default function Blog() {
    useScrollReveal();
    const [activeCategory, setActiveCategory] = useState('All');

    const featuredPost = posts.find(p => p.featured)!;
    const filteredPosts = posts.filter(p =>
        !p.featured && (activeCategory === 'All' || p.category === activeCategory)
    );

    const totalCount = filteredPosts.length + (activeCategory === 'All' || activeCategory === featuredPost.category ? 1 : 0);

    return (
        <>
            {/* ── Hero ── */}
            <BlogHero />

            {/* ── Main content ── */}
            <section className="bg-white py-16 px-8">
                <div className="max-w-7xl mx-auto">

                    {/* ── Category filter bar ── */}
                    <div data-animate className="flex flex-wrap gap-2 mb-16 pb-8 border-b border-gray-200">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-200 ${activeCategory === cat
                                    ? 'bg-gray-900 border-gray-900 text-white'
                                    : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                        <span className="ml-auto text-sm font-normal text-gray-400 self-center">
                            {totalCount} {totalCount === 1 ? 'article' : 'articles'}
                        </span>
                    </div>

                    {/* ── Webflow-style: Featured Left + Article List Right ── */}
                    {(activeCategory === 'All' || activeCategory === featuredPost.category) && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 pb-20 border-b border-gray-200">
                            {/* Left: Big featured card */}
                            <div className="lg:col-span-7">
                                <FeaturedCard post={featuredPost} />
                            </div>

                            {/* Right: Latest articles list */}
                            <div className="lg:col-span-5">
                                <div className="flex items-center justify-between mb-2 pb-5 border-b border-gray-900">
                                    <p className="text-base font-semibold text-gray-900 tracking-tight">Latest articles</p>
                                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                                        {filteredPosts.length} more
                                    </span>
                                </div>
                                {filteredPosts.slice(0, 4).map((post, i) => (
                                    <ArticleListItem
                                        key={post.id}
                                        post={post}
                                        delay={i * 60}
                                        isLast={i === Math.min(3, filteredPosts.length - 1)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── Grid: remaining articles (2 cols) ── */}
                    {filteredPosts.length > 4 ? (
                        <>
                            <div className="flex items-center justify-between mb-12">
                                <p className="text-2xl font-medium tracking-tighter text-gray-900 font-display">More articles</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
                                {filteredPosts.slice(4).map((post, i) => (
                                    <BlogCard key={post.id} post={post} delay={i * 80} />
                                ))}
                            </div>
                        </>
                    ) : activeCategory !== 'All' && filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
                            {filteredPosts.map((post, i) => (
                                <BlogCard key={post.id} post={post} delay={i * 80} />
                            ))}
                        </div>
                    ) : !['All', featuredPost.category].includes(activeCategory) && (
                        <div className="text-center py-24">
                            <p className="text-gray-300 text-lg font-normal">No articles in this category yet.</p>
                        </div>
                    )}

                    {/* ── Load more ── */}
                    {filteredPosts.length > 4 && (
                        <div data-animate className="flex justify-center mt-20 pt-12 border-t border-gray-200">
                            <button className="group inline-flex items-center gap-3 border border-gray-200 text-gray-600 text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
                                Load More Articles
                                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
