export default function Hero() {
    return (
        <section className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Primary orb — blue */}
                <div
                    className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] animate-float-orb"
                    style={{
                        background: 'radial-gradient(circle, #2563EB 0%, #1e40af 40%, transparent 70%)',
                    }}
                />
                {/* Secondary orb — purple/indigo */}
                <div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] animate-float-orb-2"
                    style={{
                        background: 'radial-gradient(circle, #6366f1 0%, #4f46e5 40%, transparent 70%)',
                    }}
                />
                {/* Subtle top-edge glow */}
                <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-30"
                    style={{
                        background: 'linear-gradient(90deg, transparent 0%, #2563EB 50%, transparent 100%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-24 w-full">
                {/* Eyebrow */}
                <p className="text-[#2563EB] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-6">
                    Seed Stage Service
                </p>

                {/* H1 */}
                <h1 className="text-[72px] font-bold text-white tracking-tighter leading-[0.9] font-display">
                    MVP UX &<br />
                    UI Design<span className="text-[#2563EB]">.</span>
                </h1>

                {/* Subtext */}
                <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mt-8 leading-relaxed">
                    Core flows and screens users actually need, ready for development.
                    We design the surfaces that signal credibility fast, so you look
                    ready when it counts.
                </p>

                {/* Optional subtle scroll indicator */}
                <div className="absolute bottom-12 left-8 flex flex-col items-center gap-2 opacity-40">
                    <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] rotate-90 origin-center translate-y-4">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent mt-6" />
                </div>
            </div>
        </section>
    );
}
