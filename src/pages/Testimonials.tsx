import { useState, useRef, useEffect } from 'react';
import { motion, LayoutGroup } from 'framer-motion';

interface Testimonial {
    id: string;
    speakerName: string;
    companyName: string;
    quote: string;
    videoUrl: string;
    thumbnail: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        speakerName: 'Jana Komarov',
        companyName: 'Concept Family',
        quote: "Elux transformed our entire workflow. The speed and precision they brought to our product development was something we hadn't seen with any other agency.",
        videoUrl: 'https://player.vimeo.com/external/494252666.sd.mp4?s=72ce12da43194090288eb1f86851b43952ecae68&profile_id=164&oauth_token_id=57447761',
        thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '2',
        speakerName: 'Torsten Kaldun',
        companyName: 'World of Pizza',
        quote: "The design language Elux created for us resonated perfectly with our enterprise clients. It bridged the gap between complex tech and human-centric UI.",
        videoUrl: 'https://player.vimeo.com/external/494252666.sd.mp4?s=72ce12da43194090288eb1f86851b43952ecae68&profile_id=164&oauth_token_id=57447761',
        thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '3',
        speakerName: 'Sebastian Remus',
        companyName: 'Kaimug',
        quote: "Scaling our platform from 10k to 500k users required a robust UX strategy. Elux was there every step of the way, ensuring every transition was seamless.",
        videoUrl: 'https://player.vimeo.com/external/494252666.sd.mp4?s=72ce12da43194090288eb1f86851b43952ecae68&profile_id=164&oauth_token_id=57447761',
        thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    },
];

const v3Testimonials = [
    {
        type: 'video',
        name: "Marcus Thorne",
        company: "Aventi Corp",
        role: "Chief Operating Officer",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
        videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=72ce12da43194090288eb1f86851b43952ecae68&profile_id=164&oauth_token_id=57447761"
    },
    {
        type: 'text',
        logo: 'simmons',
        quote: "Through our partnership with Elux, we've embedded agents that handle the drafting and negotiation of complex NDAs and service agreements autonomously.",
        name: "Lucy Shurwood",
        role: "Partner, Simmons & Simmons",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    },
    {
        type: 'video',
        name: "Elena Rodriguez",
        company: "Solaris Tech",
        role: "Head of Marketing",
        thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=72ce12da43194090288eb1f86851b43952ecae68&profile_id=164&oauth_token_id=57447761"
    },
    {
        type: 'text',
        logo: 'velo',
        quote: "Scaling our creative production with Elux has been a game changer. We achieved seamless integration and high-impact outcomes across our global teams.",
        name: "Sarah Chen",
        role: "Global Creative Director, Velo",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    },
    {
        type: 'video',
        name: "David Kim",
        company: "CloudScale",
        role: "Product Manager",
        thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=72ce12da43194090288eb1f86851b43952ecae68&profile_id=164&oauth_token_id=57447761"
    },
    {
        type: 'text',
        logo: 'nexus',
        quote: "Elux builds systems that think. Our user engagement metrics have skyrocketed since the relaunch, and maintenance is now virtually automated.",
        name: "James Wilson",
        role: "CEO, Nexus Digital",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    }
];

export default function Testimonials() {
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const nextTestimonial1 = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setIsPlaying(false);
        setActiveIndex1((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial1 = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setIsPlaying(false);
        setActiveIndex1((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const nextTestimonial2 = () => setActiveIndex2((prev) => (prev + 1) % 3);
    const prevTestimonial2 = () => setActiveIndex2((prev) => (prev - 1 + 3) % 3);

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'left' ? -800 : 800;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        setIsPlaying(false);
    }, [activeIndex1]);

    return (
        <main className="bg-[#F9FAFB] overflow-x-hidden">
            {/* Testimonial 1 Section */}
            <section id="testimonial-v1" className="pt-32 pb-24 px-4 md:px-8 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-2 mb-4"
                        >
                            <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                            <p className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase">
                                Testimonial 1
                            </p>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-gray-900 leading-tight"
                        >
                            Why our customers love Elux
                        </motion.h2>
                    </div>

                    {/* Horizontal Accordion Section */}
                    <div className="relative mb-12">
                        <LayoutGroup>
                            <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px] items-stretch">
                                {testimonials.map((item, index) => {
                                    const isActive = activeIndex1 === index;
                                    return (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            onClick={() => setActiveIndex1(index)}
                                            className={`relative cursor-pointer transition-all duration-700 ease-[0.23, 1, 0.32, 1] ${isActive
                                                ? 'flex-[5] md:flex-[8]'
                                                : 'flex-[1] md:flex-[1]'
                                                }`}
                                        >
                                            <motion.div
                                                layout
                                                className="relative h-[400px] md:h-full rounded-2xl overflow-hidden group shadow-lg"
                                            >
                                                <motion.img
                                                    layout
                                                    src={item.thumbnail}
                                                    alt={item.speakerName}
                                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isActive && isPlaying ? 'opacity-0' : 'opacity-100'}`}
                                                />
                                                {isActive ? (
                                                    <div className="absolute inset-0 bg-transparent flex">
                                                        <div className="relative flex-1 h-full bg-black/5">
                                                            <video
                                                                ref={videoRef}
                                                                src={item.videoUrl}
                                                                className="w-full h-full object-cover"
                                                                playsInline
                                                                loop
                                                            />
                                                            {!isPlaying && (
                                                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                                                    <motion.button
                                                                        whileHover={{ scale: 1.1 }}
                                                                        whileTap={{ scale: 0.9 }}
                                                                        onClick={togglePlay}
                                                                        className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl"
                                                                    >
                                                                        <svg className="w-8 h-8 text-[#2563EB] fill-current ml-1" viewBox="0 0 24 24">
                                                                            <path d="M8 5v14l11-7z" />
                                                                        </svg>
                                                                    </motion.button>
                                                                </div>
                                                            )}
                                                            {isPlaying && (
                                                                <div className="absolute inset-0 cursor-pointer" onClick={togglePlay} />
                                                            )}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                            <motion.div layout className="mt-4 overflow-hidden">
                                                <p className={`font-bold text-gray-900 transition-all ${isActive ? 'text-lg' : 'text-sm'}`}>
                                                    {item.speakerName}
                                                </p>
                                                <p className="text-gray-500 text-xs md:text-sm whitespace-nowrap">
                                                    {item.companyName}
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </LayoutGroup>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mb-16">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevTestimonial1}
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:border-[#2563EB]/40 hover:text-[#2563EB] transition-all bg-white shadow-sm"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextTestimonial1}
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:border-[#2563EB]/40 hover:text-[#2563EB] transition-all bg-white shadow-sm"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Static Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Udy Joe",
                                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
                                rating: 5,
                                text: "For those who need AI and multi-functional chatbots, definitely add this to your collection. Although it only works in Browser, you can still capture screens from other applications.",
                            },
                            {
                                name: "Hianto Mateus",
                                avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
                                rating: 5,
                                text: "The improvement in my productivity, I won't even comment on. The features are enough for all my needs. Thank you for existing! I highly recommend Elux to everyone.",
                            },
                            {
                                name: "Miyamoto Musashi",
                                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                                rating: 5,
                                text: "BIG thanks to Elux! I'm incredibly helped by its super duper many features. Cool, it's All in 1. This is perfectly well built and constantly updating.",
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-3">
                                    <img src={card.avatar} alt={card.name} className="w-10 h-10 rounded-full object-cover" />
                                    <span className="font-bold text-gray-900 uppercase text-sm tracking-tight">{card.name}</span>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(card.rating)].map((_, idx) => (
                                        <svg key={idx} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial 2 Section */}
            <section id="testimonial-v2" className="bg-[#0A0A0A] pt-32 pb-48 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold tracking-[0.4em] text-[#2563EB] uppercase mb-6"
                        >
                            Testimonial 2
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white leading-tight"
                        >
                            Founders Who've Scaled With Us
                        </motion.h2>
                    </div>

                    {/* Carousel */}
                    <div className="relative flex justify-center items-center h-[400px] md:h-[500px] mb-8">
                        <div className="relative w-full flex justify-center items-center">
                            {[
                                {
                                    id: 'c1',
                                    name: 'Cory Gill',
                                    role: 'COO of Alialearn',
                                    location: 'United States',
                                    thumb: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200'
                                },
                                {
                                    id: 'c2',
                                    name: 'Karlin Walker',
                                    role: 'CEO of Lightrow',
                                    location: 'United States',
                                    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200'
                                },
                                {
                                    id: 'c3',
                                    name: 'Sarah Chen',
                                    role: 'Founder of Velo',
                                    location: 'Canada',
                                    thumb: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200'
                                }
                            ].map((item, i) => {
                                const displayIndex = (i - activeIndex2 + 3) % 3;
                                let x = 0;
                                let scale = 0.8;
                                let opacity = 0.3;
                                let zIndex = 0;

                                if (displayIndex === 0) { // Left
                                    x = -550;
                                    zIndex = 10;
                                } else if (displayIndex === 1) { // Center
                                    x = 0;
                                    scale = 1.05;
                                    opacity = 1;
                                    zIndex = 30;
                                } else if (displayIndex === 2) { // Right
                                    x = 550;
                                    zIndex = 10;
                                }

                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={false}
                                        animate={{ x, scale, opacity, zIndex }}
                                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                        className="absolute w-[90%] md:w-[850px] aspect-[16/8] rounded-2xl overflow-hidden shadow-2xl bg-[#1A1A1A] border border-white/5"
                                    >
                                        <img src={item.thumb} alt={item.name} className="w-full h-full object-cover" />
                                        {displayIndex === 1 && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                <div className="absolute bottom-8 left-8 flex border-l-2 border-white pl-5">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white mb-0.5">{item.name}</h3>
                                                        <p className="text-white/80 text-base font-medium">{item.role}</p>
                                                        <p className="text-white/60 text-xs mt-0.5">{item.location}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mb-12">
                        <button onClick={prevTestimonial2} className="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={nextTestimonial2} className="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Integrated Static Cards (V2) */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Udy Joe", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200", rating: 5, text: "For those who need AI and multi-functional chatbots, definitely add this to your collection. The browser-based capture is incredibly efficient, and the constant updates make it a future-proof investment for any team." },
                            { name: "Hianto Mateus", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200", rating: 5, text: "The improvement in my productivity, I won't even comment on. The features are enough for all my needs. Thank you for existing! I highly recommend Elux to everyone looking for a serious performance boost." },
                            { name: "Miyamoto Musashi", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", rating: 5, text: "BIG thanks to Elux! I'm incredibly helped by its super duper many features. Cool, it's All in 1. This is perfectly well built and constantly updating, making it the most reliable tool in my tech stack." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#141414] p-8 rounded-[2rem] border border-white/5 flex flex-col gap-5"
                            >
                                <div className="flex items-center gap-4">
                                    <img src={card.avatar} alt={card.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-white text-sm tracking-wide uppercase">{card.name}</span>
                                        <div className="flex gap-0.5 mt-1">
                                            {[...Array(card.rating)].map((_, idx) => (
                                                <svg key={idx} className="w-3.5 h-3.5 text-orange-400 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-white/60 text-[15px] leading-relaxed italic">"{card.text}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial 3 Section */}
            <section id="testimonial-v3" className="bg-[#0A0A0A] pt-32 pb-48 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Header - V1 Style */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-2 mb-4"
                        >
                            <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                            <p className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase">
                                Testimonial 3
                            </p>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white leading-tight"
                        >
                            Why our customers love Elux
                        </motion.h2>
                    </div>

                    {/* Horizontal Carousel (1 Baris) */}
                    <div className="relative">
                        <div
                            ref={carouselRef}
                            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-8"
                        >
                            {v3Testimonials.map((item, i) => (
                                <div key={i} className="flex-shrink-0 w-[95%] md:w-[850px] snap-center">
                                    <div className={`${item.type === 'text' ? 'bg-[#111111] p-6 border border-white/5 h-auto md:h-[480px] flex-col md:flex-row' : 'h-[400px] md:h-[480px]'} rounded-2xl flex gap-6 relative group overflow-hidden`}>
                                        {item.type === 'text' ? (
                                            <>
                                                {/* Card Content Top Left - Precisely like screenshot */}
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div>
                                                        {/* Logo Box */}
                                                        <div className="bg-[#1a1a1a] rounded-lg p-3 w-fit mb-6 md:mb-12 border border-white/5">
                                                            <div className="text-[10px] font-bold text-white uppercase leading-none">
                                                                #{item.logo}<br />{item.logo}
                                                            </div>
                                                        </div>
                                                        {/* Quote */}
                                                        <p className="text-white text-xl md:text-2xl font-medium leading-relaxed tracking-tight max-w-[90%] mb-8 md:mb-0">
                                                            "{item.quote}"
                                                        </p>
                                                    </div>
                                                    {/* Author */}
                                                    <div className="mb-6 md:mb-0">
                                                        <h4 className="text-white font-bold text-lg">{item.name}</h4>
                                                        <p className="text-zinc-500 text-sm mt-1">{item.role}</p>
                                                    </div>
                                                </div>
                                                {/* Image */}
                                                <div className="w-full md:w-[45%] h-64 md:h-full relative overflow-hidden rounded-2xl">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                            </>
                                        ) : (
                                            <div className="w-full h-full relative cursor-pointer">
                                                <img src={item.thumbnail} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/30" />

                                                {/* Play Button - Pojok Kanan Bawah */}
                                                <div className="absolute bottom-10 right-10">
                                                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                                        <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                {/* Info Overlay - Pojok Kiri Bawah */}
                                                <div className="absolute bottom-10 left-10">
                                                    <h4 className="text-white font-bold text-4xl mb-1">{item.name}</h4>
                                                    <p className="text-[#2563EB] text-base font-bold tracking-[0.2em] uppercase">{item.company}</p>
                                                    <p className="text-white/40 text-sm mt-1">{item.role}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={() => scrollCarousel('left')}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all bg-[#111111]"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scrollCarousel('right')}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all bg-[#111111]"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial 4 Section - Premium Bento Grid */}
            <section id="testimonial-v4" className="bg-white pt-32 pb-48 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-2 mb-4"
                        >
                            <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                            <p className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase">
                                Testimonial 4
                            </p>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-gray-900 leading-tight"
                        >
                            Why our customers love Elux
                        </motion.h2>
                    </div>

                    {/* Bento Grid - 16:9 Video Aspect Ratio Focus */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Row 1: Video 1 (16:9 Rectangle) + Text 1 (Square-ish) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="md:col-span-2 aspect-[16/9] rounded-[2rem] relative overflow-hidden group cursor-pointer"
                        >
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" alt="Marcus" className="absolute inset-0 w-full h-full object-cover object-center" />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute bottom-10 left-10">
                                <h4 className="text-white font-bold text-2xl md:text-4xl mb-1">Marcus Thorne</h4>
                                <p className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Aventi Corp</p>
                            </div>
                            <div className="absolute bottom-10 right-10">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-[#E9E4F0] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative group overflow-hidden h-full min-h-[250px] md:min-h-0"
                        >
                            <p className="text-gray-900 text-base md:text-lg font-medium leading-[1.6] tracking-tight">
                                "Elux has revolutionized how we handle our backend operations. The automation they've implemented is seamless."
                            </p>
                            <div>
                                <h4 className="text-gray-900 font-bold text-lg">Julianne Moore</h4>
                                <p className="text-gray-600 text-sm">Ops Manager, Flow</p>
                            </div>
                        </motion.div>

                        {/* Row 2: Text 2 (Square-ish) + Video 2 (16:9 Rectangle) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-[#F8F8F8] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative group overflow-hidden border border-gray-100 h-full min-h-[250px] md:min-h-0"
                        >
                            <p className="text-gray-900 text-base md:text-lg font-medium leading-[1.6] tracking-tight">
                                "The level of customization and support we received was beyond expectations. A truly premium experience."
                            </p>
                            <div>
                                <h4 className="text-gray-900 font-bold text-lg">Thomas Wright</h4>
                                <p className="text-gray-600 text-sm">Founder, Wright & Co</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="md:col-span-2 aspect-[16/9] rounded-[2rem] relative overflow-hidden group cursor-pointer"
                        >
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" alt="Elena" className="absolute inset-0 w-full h-full object-cover object-center" />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute bottom-10 left-10">
                                <h4 className="text-white font-bold text-2xl md:text-4xl mb-1">Elena Rodriguez</h4>
                                <p className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Solaris Tech</p>
                            </div>
                            <div className="absolute bottom-10 right-10">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Row 3: Video 3 (16:9 Rectangle) + Text 3 (Square-ish) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="md:col-span-2 aspect-[16/9] rounded-[2rem] relative overflow-hidden group cursor-pointer"
                        >
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" alt="David" className="absolute inset-0 w-full h-full object-cover object-center" />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute bottom-10 left-10">
                                <h4 className="text-white font-bold text-2xl md:text-4xl mb-1">David Kim</h4>
                                <p className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">CloudScale</p>
                            </div>
                            <div className="absolute bottom-10 right-10">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-[#D9DEE1] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative group overflow-hidden h-full min-h-[250px] md:min-h-0"
                        >
                            <p className="text-gray-900 text-base md:text-lg font-medium leading-[1.6] tracking-tight">
                                "Helping us scale faster than any internal team could. Their expertise in automation is unmatched in the industry."
                            </p>
                            <div>
                                <h4 className="text-gray-900 font-bold text-lg">Ritika Sehgal</h4>
                                <p className="text-gray-600 text-sm">Gupshup Marketing</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                .scroll-smooth { scroll-behavior: smooth; }
            `}} />
        </main>
    );
}
