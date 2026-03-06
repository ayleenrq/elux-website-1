


// Common Types for Reusability
export interface ServiceDetailProps {
    stageCategory?: string;
    serviceTitle?: string;
    description?: string;
    longDescription?: {
        header: string;
        paragraphs: string[];
    };
    deliverables?: {
        title: string;
        span: 1 | 2;
        imagePlaceholder?: boolean;
        description?: string;
    }[];
    processSteps?: {
        number: string;
        title: string;
        description: string;
    }[];
    featuredProofImage?: string;
}





// 2. DYNAMIC HERO (Black Section)
function DynamicHero({ stageCategory, serviceTitle, description }: Pick<ServiceDetailProps, 'stageCategory' | 'serviceTitle' | 'description'>) {
    return (
        <section className="min-h-[90vh] bg-[#0a0a0a] text-white flex flex-col justify-center px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto w-full pt-20 border-0 shadow-none">
                <p className="text-blue-500 text-sm tracking-widest uppercase font-semibold mb-6 border-0 shadow-none">
                    {stageCategory}
                </p>
                <h1 className="text-[72px] leading-none tracking-tighter border-0 shadow-none font-display">
                    {serviceTitle}
                </h1>
                <p className="text-gray-400 text-2xl max-w-3xl mt-8 font-medium leading-relaxed border-0 shadow-none">
                    {description}
                </p>
            </div>
        </section>
    );
}

// 3. THE CONTEXT / WHY YOU NEED THIS (White Section - Sticky Scroll)
function TheContext({ longDescription }: Pick<ServiceDetailProps, 'longDescription'>) {
    if (!longDescription) return null;
    return (
        <section className="bg-white py-32 px-8 text-black border-0 shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-7xl mx-auto border-0 shadow-none">
                <div className="md:col-span-5 h-fit sticky top-32 border-0 shadow-none">
                    <h2 className="text-[64px] font-medium tracking-tighter text-gray-900 leading-tight border-0 shadow-none font-display">
                        {longDescription.header}
                    </h2>
                </div>
                <div className="md:col-span-7 flex flex-col border-0 shadow-none">
                    {longDescription.paragraphs.map((paragraph, index) => (
                        <div key={index} className="border-t border-gray-200 py-8 shadow-none">
                            <p className="text-xl text-gray-600 leading-relaxed font-normal border-0 shadow-none">
                                {paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 4. DELIVERABLES (Light Gray Section - Bento Grid)
function Deliverables({ deliverables }: Pick<ServiceDetailProps, 'deliverables'>) {
    if (!deliverables) return null;
    return (
        <section className="bg-[#F9FAFB] py-32 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                <h2 className="text-3xl font-medium tracking-tighter text-gray-900 mb-16 border-0 shadow-none">What You Get</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-none border-0">
                    {deliverables.map((item, index) => (
                        <div key={index} className={`bg-white border border-gray-200 rounded-3xl p-10 shadow-none flex flex-col ${item.span === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight border-0 shadow-none">{item.title}</h3>
                            {item.description && <p className="text-gray-600 leading-relaxed mb-6 border-0 shadow-none">{item.description}</p>}
                            {item.imagePlaceholder && (
                                <div className="mt-auto border-0 shadow-none">
                                    <div className="bg-gray-100 rounded-2xl w-full aspect-video border-0 shadow-none"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 5. THE PRAGMATIC PROCESS (White Section)
function PragmaticProcess({ processSteps }: Pick<ServiceDetailProps, 'processSteps'>) {
    if (!processSteps) return null;
    return (
        <section className="bg-white py-32 px-8 border-0 shadow-none">
            <div className="max-w-4xl mx-auto border-0 shadow-none">
                <h2 className="text-[64px] font-medium tracking-tighter text-gray-900 text-center mb-16 border-0 shadow-none font-display">How We Ship It.</h2>
                <div className="flex flex-col border-0 shadow-none">
                    {processSteps.map((step, index) => (
                        <div key={index} className="border-t border-gray-200 py-12 flex flex-col md:flex-row gap-8 shadow-none">
                            <span className="text-6xl font-semibold text-gray-300 tracking-tighter border-0 shadow-none w-24 flex-shrink-0">{step.number}.</span>
                            <div className="border-0 shadow-none">
                                <h3 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4 border-0 shadow-none">{step.title}</h3>
                                <p className="text-xl text-gray-600 leading-relaxed border-0 shadow-none">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 6. FEATURED PROOF (Black Section)
function FeaturedProof({ featuredProofImage }: Pick<ServiceDetailProps, 'featuredProofImage'>) {
    return (
        <section className="bg-[#0a0a0a] py-32 px-8 flex flex-col items-center border-0 shadow-none">
            <div className="max-w-7xl mx-auto w-full border-0 shadow-none">
                <h2 className="text-4xl text-white font-medium tracking-tighter text-center mb-16 border-0 shadow-none">Proof of Pragmatism.</h2>
                <div className="w-full border-0 shadow-none overflow-hidden rounded-3xl">
                    <img
                        src={featuredProofImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"}
                        alt="Featured Proof Dashboard"
                        className="w-full h-auto aspect-video object-cover border-0 rounded-3xl shadow-none filter grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </section>
    );
}



export default function ServiceDetail({
    stageCategory = "SEED STAGE",
    serviceTitle = "MVP UX & UI Design.",
    description = "Core flows and screens users actually need, ready for development. We design the surfaces that signal credibility fast.",
    longDescription = {
        header: "Validate Fast. Ship a Credible MVP in 7 Days.",
        paragraphs: [
            "Pragmatic, metrics-first thinking means removing all friction. We do not do endless user research or moodboards when you just need fundamental flows in place to prove your core value hypothesis.",
            "Our process gives you a high-fidelity interface that looks totally legit from day one, giving your team exactly what they need to code and launch without second-guessing every padding value."
        ]
    },
    deliverables = [
        { title: "User Flows & Architecture", span: 2, imagePlaceholder: true },
        { title: "High-Fidelity UI", span: 1 },
        { title: "Interactive Prototype", span: 1 },
        { title: "Developer Handoff", span: 2, description: "Ready for Framer, Webflow, or custom React codebases." }
    ],
    processSteps = [
        { number: "01", title: "Audit & Core Flows", description: "Mapping out the absolute necessities for your launch." },
        { number: "02", title: "High-Fidelity Design", description: "Applying a premium visual language to stand out." },
        { number: "03", title: "Motion & Prototyping", description: "Linking it all together so it feels real." },
        { number: "04", title: "Dev-Ready Handoff", description: "Delivering precise specs with no guesswork left behind." }
    ],
    featuredProofImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
}: ServiceDetailProps) {
    return (
        <div className="font-sans antialiased bg-white border-0 shadow-none">
            <main className="border-0 shadow-none">
                <DynamicHero
                    stageCategory={stageCategory}
                    serviceTitle={serviceTitle}
                    description={description}
                />
                <TheContext longDescription={longDescription} />
                <Deliverables deliverables={deliverables} />
                <PragmaticProcess processSteps={processSteps} />
                <FeaturedProof featuredProofImage={featuredProofImage} />

            </main>
        </div>
    );
}
