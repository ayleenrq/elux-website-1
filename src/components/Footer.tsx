export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center overflow-hidden">
                                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 14.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z" fill="currentColor" />
                                    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" fill="#8B5CF6" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">eluxspace</span>
                        </div>
                        <p className="text-gray-400 text-lg max-w-[340px] leading-relaxed">
                            We help startups and companies design digital products people love and trust.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-xl font-bold mb-6">Find Us On</h4>
                            <ul className="space-y-3 text-gray-400 text-sm font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">Clutch</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Design Rush</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contra</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-6">Product</h4>
                            <ul className="space-y-3 text-gray-400 text-sm font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">UI8</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Creative Market</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Craftwork</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Gumroad</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-xl font-bold mb-6">Our Social</h4>
                            <ul className="space-y-3 text-gray-400 text-sm font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">Linkedin Page</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Bahance</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Layers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <a href="mailto:hello@elux.space" className="text-xl font-medium hover:text-blue-500 transition-colors flex items-center gap-2">
                            hello@elux.space
                            <svg className="w-5 h-5 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                        <a href="tel:+6285156989279" className="text-xl font-medium hover:text-blue-500 transition-colors flex items-center gap-2">
                            +62 851-5698-9279
                            <svg className="w-5 h-5 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                    <div className="text-gray-500 text-base font-medium">
                        © 2025 eluxspace-All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
