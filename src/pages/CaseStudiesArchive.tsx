import { useState } from 'react';

const filters = ["All", "Healthcare", "SaaS", "AI Platforms", "FinTech"];

const caseStudies = [
    {
        id: 1,
        title: "Novus Medical",
        category: "HEALTHCARE",
        metric: "+120% Placement Rate",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
        span: 2
    },
    {
        id: 2,
        title: "Upnova",
        category: "AI PLATFORMS",
        metric: "2x Faster Workflows",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        span: 1
    },
    {
        id: 3,
        title: "AETERNA Labs",
        category: "SAAS",
        metric: "$2M Seed Raised",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
        span: 1
    }
];

function ArchiveHero() {
    return (
        <section className="min-h-[60vh] bg-[#0a0a0a] text-white flex flex-col justify-end pb-24 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto w-full border-0 shadow-none">
                <h1 className="text-[72px] leading-none tracking-tighter border-0 shadow-none font-display">
                    Work That Ships.
                </h1>
                <p className="max-w-3xl text-gray-400 text-2xl mt-8 font-medium leading-relaxed border-0 shadow-none">
                    Pragmatic outcomes and validated product foundations.
                </p>
            </div>
        </section>
    );
}

function StickyFilterAndGrid() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredStudies = activeFilter === "All"
        ? caseStudies
        : caseStudies.filter(study => study.category.toLowerCase() === activeFilter.toLowerCase());

    return (
        <section className="bg-white text-black min-h-screen pb-32 border-0 shadow-none">
            {/* The Filter */}
            <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md py-6 px-8 border-b border-gray-200 flex gap-4 overflow-x-auto shadow-none">
                <div className="max-w-7xl mx-auto w-full flex gap-4 border-0 shadow-none">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full border border-gray-300 text-sm tracking-wide transition-colors shadow-none whitespace-nowrap ${activeFilter === filter
                                ? 'bg-black text-white border-black'
                                : 'bg-transparent text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* The Grid */}
            <div className="max-w-7xl mx-auto px-8 mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 border-0 shadow-none">
                {filteredStudies.map((study) => (
                    <a
                        href="#case-study-detail"
                        key={study.id}
                        className={`flex flex-col cursor-pointer group shadow-none border-0 ${study.span === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}
                    >
                        <div className="overflow-hidden rounded-3xl bg-gray-100 border-0 shadow-none mb-6">
                            <img
                                src={study.image}
                                alt={study.title}
                                className={`w-full object-cover border-0 shadow-none filter grayscale group-hover:grayscale-0 transition-all duration-700 ${study.span === 2 ? 'aspect-[21/9]' : 'aspect-square'}`}
                            />
                        </div>
                        <div className="border-0 shadow-none">
                            <span className="text-gray-500 text-xs tracking-[0.2em] font-semibold uppercase border-0 shadow-none">
                                {study.category}
                            </span>
                            <h3 className="text-3xl mt-4 font-medium tracking-tight text-gray-900 border-0 shadow-none">
                                {study.title}
                            </h3>
                            <p className="text-blue-600 font-medium mt-2 border-0 shadow-none">
                                {study.metric}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default function CaseStudiesArchive() {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white border-0 shadow-none">
            {/* Assuming a global navbar would be here */}
            <main className="border-0 shadow-none">
                <ArchiveHero />
                <StickyFilterAndGrid />
            </main>
        </div>
    );
}
