import { useState } from 'react';

export default function BottomCTA() {
    const [projectType, setProjectType] = useState('UI/UX Design');
    const [budget, setBudget] = useState('$10-$20k');

    return (
        <section className="bg-[#0a0a0a] text-white py-32 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24 border-0 shadow-none">
                    <div className="flex items-center gap-2 mb-8 border-0 shadow-none">
                        <span className="w-2 h-2 bg-blue-600 border-0 shadow-none"></span>
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase border-0 shadow-none">CALL TO ACTION</span>
                    </div>
                    <h2 className="text-5xl md:text-[80px] font-medium tracking-tighter leading-[1] mb-8 border-0 shadow-none font-display">
                        Great Product dies <br />
                        in bad interfaces and experiences
                    </h2>
                    <p className="text-gray-500 text-sm border-0 shadow-none">
                        Let's start to create and fix yours. Book a discovery call today!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 border-0 shadow-none">
                    {/* Left Column: Contact Cards */}
                    <div className="lg:col-span-4 space-y-12 border-0 shadow-none">
                        <div className="border-0 shadow-none">
                            <h3 className="text-xl font-medium mb-8 border-0 shadow-none">Have a project to discuss?</h3>
                            <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 flex items-center gap-4 group cursor-pointer hover:border-white/10 transition-colors shadow-none">
                                <img
                                    src="/assets/contact1.png"
                                    alt="Kseniia Shalia"
                                    className="w-16 h-16 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border-0 shadow-none"
                                />
                                <div className="border-0 shadow-none flex-1">
                                    <h4 className="font-semibold text-lg border-0 shadow-none">Kseniia Shalia</h4>
                                    <p className="text-gray-500 text-sm border-0 shadow-none">Account Executive</p>
                                    <div className="h-[1px] bg-white/10 my-3 border-0 shadow-none"></div>
                                    <div className="flex items-center justify-between text-xs font-medium border-0 shadow-none">
                                        <span className="border-0 shadow-none">hello@elux.space</span>
                                        <svg className="w-3 h-3 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-0 shadow-none pt-4">
                            <h3 className="text-xl font-medium mb-8 border-0 shadow-none">Have a partnership in mind?</h3>
                            <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 flex items-center gap-4 group cursor-pointer hover:border-white/10 transition-colors shadow-none">
                                <img
                                    src="/assets/contact2.png"
                                    alt="Darrell Steward"
                                    className="w-16 h-16 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border-0 shadow-none"
                                />
                                <div className="border-0 shadow-none flex-1">
                                    <h4 className="font-semibold text-lg border-0 shadow-none">Darrell Steward</h4>
                                    <p className="text-gray-500 text-sm border-0 shadow-none">Partnership Manager</p>
                                    <div className="h-[1px] bg-white/10 my-3 border-0 shadow-none"></div>
                                    <div className="flex items-center justify-between text-xs font-medium border-0 shadow-none">
                                        <span className="border-0 shadow-none">hello@elux.space</span>
                                        <svg className="w-3 h-3 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-8 border-0 shadow-none">
                        <form className="space-y-12 border-0 shadow-none" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 border-0 shadow-none">
                                <div className="flex flex-col border-0 shadow-none">
                                    <label className="text-xs text-gray-500 uppercase font-semibold mb-4 border-0 shadow-none">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-blue-600 transition-colors text-xl font-medium placeholder:text-gray-700 shadow-none"
                                    />
                                </div>
                                <div className="flex flex-col border-0 shadow-none">
                                    <label className="text-xs text-gray-500 uppercase font-semibold mb-4 border-0 shadow-none">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-blue-600 transition-colors text-xl font-medium placeholder:text-gray-700 shadow-none"
                                    />
                                </div>
                                <div className="flex flex-col border-0 shadow-none">
                                    <label className="text-xs text-gray-500 uppercase font-semibold mb-4 border-0 shadow-none">Your Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Company Name"
                                        className="bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-blue-600 transition-colors text-xl font-medium placeholder:text-gray-700 shadow-none"
                                    />
                                </div>
                                <div className="flex flex-col border-0 shadow-none">
                                    <label className="text-xs text-gray-500 uppercase font-semibold mb-4 border-0 shadow-none">Your Title</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Title in Company"
                                        className="bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-blue-600 transition-colors text-xl font-medium placeholder:text-gray-700 shadow-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col border-0 shadow-none">
                                <label className="text-xs text-gray-500 uppercase font-semibold mb-4 border-0 shadow-none">Message</label>
                                <input
                                    type="text"
                                    placeholder="Tell us about your project"
                                    className="bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-blue-600 transition-colors text-xl font-medium placeholder:text-gray-700 shadow-none"
                                />
                            </div>

                            <div className="border-0 shadow-none">
                                <label className="text-xs text-gray-500 uppercase font-semibold mb-6 block border-0 shadow-none">Project type</label>
                                <div className="flex flex-wrap gap-3 border-0 shadow-none">
                                    {['UI/UX Design', 'Product Design', 'Webflow/Framer Development', 'Branding Identity'].map(type => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setProjectType(type)}
                                            className={`px-6 py-3 rounded-full border text-sm font-medium transition-all shadow-none ${projectType === type ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="border-0 shadow-none">
                                <label className="text-xs text-gray-500 uppercase font-semibold mb-6 block border-0 shadow-none">Your Budget About This Project</label>
                                <div className="flex flex-wrap gap-3 border-0 shadow-none">
                                    {['< $5,000', '$5-$10k', '$10-$20k', '$20-$50k', '$50k+'].map(val => (
                                        <button
                                            key={val}
                                            type="button"
                                            onClick={() => setBudget(val)}
                                            className={`px-6 py-3 rounded-full border text-sm font-medium transition-all shadow-none ${budget === val ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'}`}
                                        >
                                            {val}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8 pt-8 border-0 shadow-none">
                                <button className="bg-blue-600 text-white rounded-full px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-700 transition-all hover:scale-105 shadow-none">
                                    SUBMIT
                                </button>
                                <p className="text-[10px] text-gray-500 max-w-[200px] border-0 shadow-none">
                                    By clicking this button you accept Terms of Service and Privacy Policy.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
