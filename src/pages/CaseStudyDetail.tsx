
function ProjectHero() {
    return (
        <section className="min-h-[80vh] bg-[#0a0a0a] text-white pt-40 px-8 flex flex-col items-center text-center relative overflow-hidden border-0 shadow-none">
            <div className="max-w-7xl mx-auto w-full flex flex-col items-center border-0 shadow-none z-10 relative">
                <p className="text-blue-500 tracking-widest text-sm uppercase mb-6 font-semibold border-0 shadow-none">
                    AI PLATFORMS / DASHBOARD
                </p>
                <h1 className="text-[72px] leading-none tracking-tighter font-medium border-0 shadow-none font-display">
                    Upnova.
                </h1>
                <p className="max-w-3xl text-gray-400 text-2xl mt-8 font-medium leading-relaxed border-0 shadow-none mb-32">
                    Simplifying AI-driven analytics into intuitive user flows and progressive indicators.
                </p>
            </div>

            {/* Bottom element peaking up */}
            <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center translate-y-[20%] border-0 shadow-none">
                <div className="max-w-6xl w-full mx-8 h-[50vh] bg-gray-900 border-0 rounded-t-3xl shadow-none overflow-hidden flex items-start justify-center">
                    {/* Placeholder for the main hero image peaking up */}
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
                        alt="Upnova dashboard snippet"
                        className="w-full h-auto object-cover border-0 shadow-none grayscale opacity-80"
                    />
                </div>
            </div>
        </section>
    );
}

function TheBrief() {
    return (
        <section className="bg-white py-32 px-8 text-black border-0 shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-7xl mx-auto border-0 shadow-none">
                <div className="md:col-span-4 h-fit sticky top-32 border-0 shadow-none">
                    <h2 className="text-[64px] font-medium tracking-tighter text-gray-900 leading-tight border-0 shadow-none font-display">
                        The Challenge.
                    </h2>
                </div>
                <div className="md:col-span-8 flex flex-col border-0 shadow-none">
                    <p className="text-2xl text-gray-600 leading-relaxed font-normal border-0 shadow-none mb-8">
                        The legacy platform suffered from immense cognitive overload. Data scientists loved the power, but business users stalled during activation. The core challenge was distilling complex AI-driven predictive models into actionable, progressive insights—without dulling the feature set.
                    </p>
                    <p className="text-2xl text-gray-600 leading-relaxed font-normal border-0 shadow-none mb-16">
                        We needed to establish trust in black-box algorithms by designing transparent "thinking" indicators, explaining the 'why' behind every data point.
                    </p>

                    {/* Project Meta Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-t border-gray-200 shadow-none">
                        <div className="border-0 shadow-none">
                            <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">Role</h4>
                            <p className="text-xl font-medium text-gray-900">End-to-end UX/UI</p>
                        </div>
                        <div className="border-0 shadow-none">
                            <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">Timeline</h4>
                            <p className="text-xl font-medium text-gray-900">4 Weeks</p>
                        </div>
                        <div className="border-0 shadow-none">
                            <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">Stack</h4>
                            <p className="text-xl font-medium text-gray-900">Figma, Relume</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DesignSystemAndBento() {
    return (
        <section className="bg-[#F9FAFB] py-32 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                <h2 className="text-4xl text-gray-900 font-medium tracking-tighter mb-16 border-0 shadow-none">
                    Systematic Simplicity.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 shadow-none border-0">
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-none flex flex-col md:col-span-1 border-0">
                        <h3 className="text-xl font-medium text-gray-900 mb-6 tracking-tight border-0 shadow-none">Thinking Logic Configurator</h3>
                        <div className="mt-auto bg-gray-100 p-6 border-0 rounded-xl shadow-none">
                            <div className="flex flex-col gap-4 border-0 shadow-none">
                                <div className="h-6 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
                                <div className="h-6 w-4/5 bg-gray-200 rounded-md"></div>
                                <div className="h-6 w-1/2 bg-gray-200 rounded-md"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-none flex flex-col md:col-span-1 border-0">
                        <h3 className="text-xl font-medium text-gray-900 mb-6 tracking-tight border-0 shadow-none">AI Progress Indicators</h3>
                        <div className="mt-auto bg-gray-100 flex items-center justify-center p-12 border-0 rounded-xl shadow-none">
                            <div className="w-16 h-16 rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin shadow-none"></div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-none flex flex-col md:col-span-1 border-0">
                        <h3 className="text-xl font-medium text-gray-900 mb-6 tracking-tight border-0 shadow-none">Bento Analytics Logic</h3>
                        <div className="mt-auto grid grid-cols-2 gap-2 border-0 shadow-none">
                            <div className="bg-gray-200 aspect-square rounded-xl shadow-none border-0"></div>
                            <div className="bg-gray-200 aspect-square rounded-xl shadow-none border-0"></div>
                            <div className="bg-gray-200 aspect-[2/1] col-span-2 rounded-xl shadow-none border-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PragmaticOutcomes() {
    return (
        <section className="bg-white py-32 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                <h2 className="text-4xl font-medium tracking-tighter text-gray-900 mb-16 border-0 shadow-none">The Impact.</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-0 shadow-none">
                    <div className="border-l border-gray-200 pl-8 shadow-none">
                        <h3 className="text-6xl font-semibold tracking-tighter text-gray-900 mb-4 border-0 shadow-none">+80%</h3>
                        <p className="text-xl text-gray-600 font-medium border-0 shadow-none">Activation Rate within first 7 days.</p>
                    </div>
                    <div className="border-l border-gray-200 pl-8 shadow-none">
                        <h3 className="text-6xl font-semibold tracking-tighter text-gray-900 mb-4 border-0 shadow-none">2x</h3>
                        <p className="text-xl text-gray-600 font-medium border-0 shadow-none">Faster User Flow to insight delivery.</p>
                    </div>
                    <div className="border-l border-gray-200 pl-8 shadow-none">
                        <h3 className="text-6xl font-semibold tracking-tighter text-gray-900 mb-4 border-0 shadow-none">Zero</h3>
                        <p className="text-xl text-gray-600 font-medium border-0 shadow-none">Dev Handoff Friction.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function NextProject() {
    return (
        <a href="#case-studies" className="block w-full bg-[#0a0a0a] text-white py-40 px-8 flex flex-col items-center justify-center cursor-pointer hover:bg-[#111111] transition-colors border-0 shadow-none group">
            <h4 className="text-blue-500 tracking-widest text-sm uppercase font-semibold mb-8 border-0 shadow-none">
                NEXT CASE STUDY
            </h4>
            <h2 className="text-[120px] font-medium tracking-tighter leading-none border-0 shadow-none group-hover:scale-105 transition-transform duration-700 font-display">
                Novus Medical
            </h2>
        </a>
    );
}

export default function CaseStudyDetail() {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white border-0 shadow-none">
            {/* Global Navbar would go here */}
            <main className="border-0 shadow-none">
                <ProjectHero />
                <TheBrief />
                <DesignSystemAndBento />
                <PragmaticOutcomes />
                <NextProject />
            </main>
        </div>
    );
}
