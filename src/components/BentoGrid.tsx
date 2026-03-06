/* ── CSS-only illustrative UI elements for bento cards ── */

function WireframeUI() {
    return (
        <div className="mt-6 space-y-4">
            {/* Fake browser frame */}
            <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                {/* Toolbar */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                    </div>
                    <div className="flex-1 mx-8">
                        <div className="h-5 bg-gray-100 rounded-full max-w-xs mx-auto" />
                    </div>
                </div>
                {/* Page content wireframe */}
                <div className="p-5 space-y-4">
                    {/* Nav */}
                    <div className="flex items-center justify-between">
                        <div className="w-20 h-3 bg-gray-200 rounded" />
                        <div className="flex gap-3">
                            <div className="w-12 h-2.5 bg-gray-100 rounded" />
                            <div className="w-12 h-2.5 bg-gray-100 rounded" />
                            <div className="w-12 h-2.5 bg-gray-100 rounded" />
                            <div className="w-16 h-6 bg-[#2563EB]/20 rounded-full" />
                        </div>
                    </div>
                    {/* Hero block */}
                    <div className="pt-4 space-y-2">
                        <div className="w-3/4 h-4 bg-gray-200 rounded" />
                        <div className="w-1/2 h-4 bg-gray-200 rounded" />
                        <div className="w-2/3 h-2.5 bg-gray-100 rounded mt-3" />
                    </div>
                    {/* Flow arrows */}
                    <div className="flex items-center justify-center gap-2 pt-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-14 h-10 border-2 border-[#2563EB]/30 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-1.5 bg-[#2563EB]/20 rounded" />
                                </div>
                                {i < 4 && (
                                    <svg className="w-4 h-4 text-[#2563EB]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Progress bar */}
            <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 font-medium">Flow coverage</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-[78%] h-full bg-[#2563EB] rounded-full" />
                </div>
                <span className="text-xs text-[#2563EB] font-semibold">78%</span>
            </div>
        </div>
    );
}

function HighFidelityUI() {
    return (
        <div className="mt-6 space-y-5">
            {/* Color palette */}
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Palette</p>
                <div className="flex gap-2">
                    {['#2563EB', '#0a0a0a', '#F9FAFB', '#6366f1', '#10b981'].map((color) => (
                        <div key={color} className="flex flex-col items-center gap-1.5">
                            <div className="w-10 h-10 rounded-xl shadow-sm border border-white/10" style={{ backgroundColor: color }} />
                            <span className="text-[10px] text-gray-500 font-mono">{color}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Typography sample */}
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Typography</p>
                <div className="space-y-1">
                    <p className="text-white text-2xl font-bold tracking-tight">Heading 1</p>
                    <p className="text-gray-300 text-base font-medium">Body Medium</p>
                    <p className="text-gray-500 text-sm">Caption Text — Inter 400</p>
                </div>
            </div>
            {/* Mini component preview */}
            <div className="flex gap-2 mt-2">
                <div className="px-4 py-2 bg-[#2563EB] rounded-full text-xs text-white font-semibold">Primary</div>
                <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs text-white font-medium">Secondary</div>
            </div>
        </div>
    );
}

function PrototypeUI() {
    return (
        <div className="mt-6 relative">
            {/* Stacked screens */}
            <div className="relative h-44">
                <div className="absolute bottom-0 left-4 right-4 h-32 bg-gray-100 rounded-xl border border-gray-200 opacity-40" />
                <div className="absolute bottom-3 left-2 right-2 h-32 bg-gray-50 rounded-xl border border-gray-200 opacity-70" />
                <div className="absolute bottom-6 left-0 right-0 h-32 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                    {/* Mini mobile screen */}
                    <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                            <div className="w-4 h-4 rounded bg-[#2563EB]/30" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="w-full h-2 bg-gray-200 rounded" />
                            <div className="w-3/4 h-2 bg-gray-100 rounded" />
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <div className="flex-1 h-7 bg-[#2563EB] rounded-lg" />
                        <div className="flex-1 h-7 bg-gray-100 rounded-lg" />
                    </div>
                </div>
            </div>
            {/* Animated tap indicator */}
            <div className="absolute bottom-10 right-8 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#2563EB]/60 animate-tap-pulse" />
                <div className="absolute w-3 h-3 rounded-full bg-[#2563EB]" />
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">Click-through prototype · 24 screens</p>
        </div>
    );
}

function HandoffUI() {
    return (
        <div className="mt-6">
            {/* Specs mockup */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
                {/* Component with dimension lines */}
                <div className="relative">
                    <div className="w-full h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-4 gap-3">
                        <div className="w-5 h-5 rounded bg-[#2563EB]/20" />
                        <div className="w-24 h-2 bg-gray-200 rounded" />
                        <div className="ml-auto w-16 h-6 bg-[#2563EB] rounded-md" />
                    </div>
                    {/* Dimension markers */}
                    <div className="absolute -top-4 left-0 right-0 flex items-center justify-center">
                        <div className="flex items-center gap-1">
                            <div className="w-8 h-[1px] bg-red-400" />
                            <span className="text-[9px] text-red-400 font-mono">48px</span>
                            <div className="w-8 h-[1px] bg-red-400" />
                        </div>
                    </div>
                    <div className="absolute -right-12 top-0 bottom-0 flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center gap-0.5">
                            <div className="h-4 w-[1px] bg-red-400" />
                            <span className="text-[9px] text-red-400 font-mono">h:48</span>
                            <div className="h-4 w-[1px] bg-red-400" />
                        </div>
                    </div>
                </div>
                {/* Specs table */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                    {[
                        { label: 'Corner radius', value: '12px' },
                        { label: 'Font weight', value: '600' },
                        { label: 'Line height', value: '1.5' },
                        { label: 'Padding X', value: '16px' },
                        { label: 'Padding Y', value: '12px' },
                        { label: 'Font size', value: '14px' },
                    ].map((spec) => (
                        <div key={spec.label} className="text-center p-2 bg-gray-50 rounded-lg">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">{spec.label}</p>
                            <p className="text-sm text-gray-800 font-mono font-semibold mt-0.5">{spec.value}</p>
                        </div>
                    ))}
                </div>
                {/* Color chips */}
                <div className="flex items-center gap-3 pt-2">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#2563EB] border border-white shadow-sm" />
                        <span className="text-[10px] font-mono text-gray-500">#2563EB</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border border-gray-200 shadow-sm" />
                        <span className="text-[10px] font-mono text-gray-500">#0A0A0A</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#F9FAFB] border border-gray-200 shadow-sm" />
                        <span className="text-[10px] font-mono text-gray-500">#F9FAFB</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BentoGrid() {
    return (
        <section className="bg-[#F9FAFB] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-8">
                {/* Section header */}
                <div className="mb-16">
                    <p className="text-[#2563EB] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                        Deliverables
                    </p>
                    <h2 className="text-[64px] font-bold text-[#0a0a0a] tracking-tight font-display">
                        What You Get<span className="text-[#2563EB]">.</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Card 1 — User Flows & Architecture (spans 2) */}
                    <div className="md:col-span-2 bg-white rounded-3xl border border-gray-200 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300 cursor-default group">
                        <div className="flex items-start justify-between">
                            <div>
                                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/5 px-3 py-1 rounded-full mb-3">
                                    Architecture
                                </span>
                                <h3 className="text-2xl font-bold text-[#0a0a0a] tracking-tight">User Flows & Architecture</h3>
                                <p className="text-gray-500 text-sm mt-2 max-w-md">
                                    Mapped user journeys and information architecture that define
                                    every path through your product.
                                </p>
                            </div>
                            <div className="hidden md:block w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#2563EB]/5 transition-colors">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#2563EB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                </svg>
                            </div>
                        </div>
                        <WireframeUI />
                    </div>

                    {/* Card 2 — High-Fidelity UI (dark) */}
                    <div className="md:col-span-1 bg-[#111111] rounded-3xl border border-white/5 p-8 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 transition-all duration-300 cursor-default group">
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full mb-3">
                            Visual Design
                        </span>
                        <h3 className="text-2xl font-bold text-white tracking-tight">High-Fidelity UI</h3>
                        <p className="text-gray-500 text-sm mt-2">
                            Pixel-perfect interfaces with your brand's visual language,
                            ready for development.
                        </p>
                        <HighFidelityUI />
                    </div>

                    {/* Card 3 — Interactive Prototype */}
                    <div className="md:col-span-1 bg-white rounded-3xl border border-gray-200 p-8 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-default group">
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/5 px-3 py-1 rounded-full mb-3">
                            Prototype
                        </span>
                        <h3 className="text-2xl font-bold text-[#0a0a0a] tracking-tight">Interactive Prototype</h3>
                        <p className="text-gray-500 text-sm mt-2">
                            Clickable flows that feel real — test with users before writing a line of code.
                        </p>
                        <PrototypeUI />
                    </div>

                    {/* Card 4 — Developer Handoff (spans 2) */}
                    <div className="md:col-span-2 bg-white rounded-3xl border border-gray-200 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300 cursor-default group">
                        <div className="flex items-start justify-between">
                            <div>
                                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/5 px-3 py-1 rounded-full mb-3">
                                    Handoff
                                </span>
                                <h3 className="text-2xl font-bold text-[#0a0a0a] tracking-tight">Developer Handoff</h3>
                                <p className="text-gray-500 text-sm mt-2 max-w-md">
                                    Precise specs, tokens, and component documentation
                                    your engineering team can run with.
                                </p>
                            </div>
                            <div className="hidden md:block w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#2563EB]/5 transition-colors">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#2563EB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                        </div>
                        <HandoffUI />
                    </div>
                </div>
            </div>
        </section>
    );
}
