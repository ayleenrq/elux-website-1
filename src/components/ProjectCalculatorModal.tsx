import { useState, useEffect } from 'react';

// ── Types ──────────────────────────────────────────────────
interface CalcState {
    projectType: string;
    industry: string;
    services: string[];
    scope: string;
    timeline: string;
    budget: string;
    name: string;
    email: string;
    company: string;
    message: string;
}

const INIT: CalcState = {
    projectType: '', industry: '', services: [], scope: '',
    timeline: '', budget: '', name: '', email: '', company: '', message: '',
};

// ── Step nav config ─────────────────────────────────────────
const STEPS = [
    'Project type', 'Industry', 'Services',
    'Scope', 'Timeline', 'Budget', 'Get estimate',
];

// ── Option data ─────────────────────────────────────────────
const PROJECT_TYPES = [
    { id: 'ui-ux', label: 'UI / UX Design', icon: '✏️' },
    { id: 'product', label: 'Product Design', icon: '🎨' },
    { id: 'webflow', label: 'Webflow / Framer', icon: '⚡' },
    { id: 'mobile', label: 'Mobile App', icon: '📱' },
    { id: 'brand', label: 'Brand Identity', icon: '✦' },
    { id: 'mvp', label: 'MVP Build', icon: '🚀' },
];

const INDUSTRIES = [
    { id: 'saas', label: 'SaaS', icon: '☁️' },
    { id: 'fintech', label: 'Fintech', icon: '💳' },
    { id: 'health', label: 'HealthTech', icon: '🏥' },
    { id: 'edtech', label: 'EdTech', icon: '📚' },
    { id: 'ecommerce', label: 'E-commerce', icon: '🛍️' },
    { id: 'logistics', label: 'Logistics', icon: '📦' },
    { id: 'realestate', label: 'Real Estate', icon: '🏠' },
    { id: 'wellness', label: 'Wellness', icon: '🌿' },
    { id: 'agency', label: 'Agency', icon: '🎯' },
    { id: 'other', label: 'Other', icon: '✨' },
];

const SERVICES = [
    { id: 'custom-ui', label: 'Custom UI Design', days: [10, 20] },
    { id: 'ux-research', label: 'UX Research & Strategy', days: [5, 10] },
    { id: 'ds', label: 'Design System', days: [8, 15] },
    { id: 'prototype', label: 'Interactive Prototype', days: [3, 6] },
    { id: 'web-dev', label: 'Web Development', days: [15, 30] },
    { id: 'mobile-dev', label: 'Mobile Development', days: [20, 40] },
    { id: 'branding', label: 'Branding & Identity', days: [7, 14] },
    { id: 'motion', label: 'Motion Design', days: [5, 10] },
];

const SCOPES = [
    { id: '1-5', label: '1 – 5 screens', days: [2, 5] },
    { id: '6-15', label: '6 – 15 screens', days: [3, 7] },
    { id: '16-30', label: '16 – 30 screens', days: [5, 12] },
    { id: '30+', label: '30+ screens', days: [10, 20] },
];

const TIMELINES = [
    { id: 'asap', label: 'ASAP', sub: 'Under 4 weeks' },
    { id: '1-2m', label: '1 – 2 months', sub: 'Standard pace' },
    { id: '3-6m', label: '3 – 6 months', sub: 'Comfortable timeline' },
    { id: 'flexible', label: 'Flexible', sub: 'No strict deadline' },
];

const BUDGETS = [
    { id: 'u5k', label: '< $5,000' },
    { id: '5-15k', label: '$5,000 – $15,000' },
    { id: '15-30k', label: '$15,000 – $30,000' },
    { id: '30-60k', label: '$30,000 – $60,000' },
    { id: '60k+', label: '$60,000+' },
];

// ── Small reusable atoms ────────────────────────────────────
function CheckIcon({ size = 'sm' }: { size?: 'sm' | 'xs' }) {
    const cls = size === 'xs' ? 'w-2.5 h-2.5' : 'w-3 h-3';
    return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function StepDot({ status }: { status: 'done' | 'active' | 'pending' }) {
    if (status === 'done') return (
        <div className="w-[18px] h-[18px] rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white">
            <CheckIcon size="xs" />
        </div>
    );
    if (status === 'active') return (
        <div className="w-[18px] h-[18px] rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
        </div>
    );
    return <div className="w-[18px] h-[18px] rounded-full border-2 border-gray-300 flex-shrink-0" />;
}

// Option row (single-select)
function OptionRow({ label, icon, selected, onClick }: {
    label: string; icon: string; selected: boolean; onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-left transition-all duration-150 border-2 ${selected
                    ? 'bg-blue-50 border-blue-600'
                    : 'bg-gray-50 border-transparent hover:bg-gray-100'
                }`}
        >
            <span className="text-xl w-7 text-center flex-shrink-0">{icon}</span>
            <span className={`text-[15px] font-medium flex-1 ${selected ? 'text-blue-700' : 'text-gray-800'}`}>{label}</span>
            {selected && (
                <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white">
                    <CheckIcon />
                </span>
            )}
        </button>
    );
}

// Grid option (2-col, single-select)
function GridOpt({ label, icon, selected, onClick }: {
    label: string; icon: string; selected: boolean; onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-150 border-2 ${selected
                    ? 'bg-blue-50 border-blue-600'
                    : 'bg-gray-50 border-transparent hover:bg-gray-100'
                }`}
        >
            <span className="text-lg w-6 text-center flex-shrink-0">{icon}</span>
            <span className={`text-[14px] font-medium flex-1 ${selected ? 'text-blue-700' : 'text-gray-800'}`}>{label}</span>
            {selected && (
                <span className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white ml-auto">
                    <CheckIcon size="xs" />
                </span>
            )}
        </button>
    );
}

// Checkbox option (multi-select)
function CheckOpt({ label, selected, onClick }: {
    label: string; selected: boolean; onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-left transition-all duration-150 border-2 ${selected
                    ? 'bg-blue-50 border-blue-600'
                    : 'bg-gray-50 border-transparent hover:bg-gray-100'
                }`}
        >
            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 text-white ${selected ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                }`}>
                {selected && <CheckIcon />}
            </div>
            <span className={`text-[15px] font-medium flex-1 ${selected ? 'text-blue-700' : 'text-gray-800'}`}>{label}</span>
        </button>
    );
}

// ── Main Modal ──────────────────────────────────────────────
export default function ProjectCalculatorModal({ onClose }: { onClose: () => void }) {
    const [step, setStep] = useState(0);
    const [s, setS] = useState<CalcState>(INIT);
    const [submitted, setSubmitted] = useState(false);

    // Lock scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    const toggle = (id: string) =>
        setS(p => ({ ...p, services: p.services.includes(id) ? p.services.filter(x => x !== id) : [...p.services, id] }));

    const canGo = (): boolean => {
        if (step === 0) return !!s.projectType;
        if (step === 1) return !!s.industry;
        if (step === 2) return s.services.length > 0;
        if (step === 3) return !!s.scope;
        if (step === 4) return !!s.timeline;
        if (step === 5) return !!s.budget;
        if (step === 6) return !!(s.name.trim() && s.email.trim());
        return true;
    };

    const next = () => { if (step < 6) setStep(v => v + 1); else setSubmitted(true); };
    const prev = () => { if (step > 0) setStep(v => v - 1); };

    // Summary day totals
    const sumMin = s.services.reduce((a, id) => a + (SERVICES.find(x => x.id === id)?.days[0] ?? 0), 0)
        + (SCOPES.find(x => x.id === s.scope)?.days[0] ?? 0);
    const sumMax = s.services.reduce((a, id) => a + (SERVICES.find(x => x.id === id)?.days[1] ?? 0), 0)
        + (SCOPES.find(x => x.id === s.scope)?.days[1] ?? 0);

    const showSummary = step >= 2;

    const inputCls = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-[14px] placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all';

    // Step content
    const content = () => {
        switch (step) {
            case 0: return (
                <>
                    <h2 className="text-[24px] font-semibold tracking-tight text-gray-900 mb-5">Select your project type:</h2>
                    <div className="flex flex-col gap-2.5">
                        {PROJECT_TYPES.map(pt => (
                            <OptionRow key={pt.id} label={pt.label} icon={pt.icon}
                                selected={s.projectType === pt.id} onClick={() => setS(p => ({ ...p, projectType: pt.id }))} />
                        ))}
                    </div>
                </>
            );
            case 1: return (
                <>
                    <h2 className="text-[24px] font-semibold tracking-tight text-gray-900 mb-5">Choose the industry of your product</h2>
                    <div className="grid grid-cols-2 gap-2.5">
                        {INDUSTRIES.map(ind => (
                            <GridOpt key={ind.id} label={ind.label} icon={ind.icon}
                                selected={s.industry === ind.id} onClick={() => setS(p => ({ ...p, industry: ind.id }))} />
                        ))}
                    </div>
                </>
            );
            case 2: return (
                <>
                    <h2 className="text-[24px] font-semibold tracking-tight text-gray-900 mb-1">Which services are you looking for?</h2>
                    <p className="text-gray-400 text-sm mb-4">Select all that apply</p>
                    <div className="flex flex-col gap-2">
                        {SERVICES.map(svc => (
                            <CheckOpt key={svc.id} label={svc.label}
                                selected={s.services.includes(svc.id)} onClick={() => toggle(svc.id)} />
                        ))}
                    </div>
                </>
            );
            case 3: return (
                <>
                    <h2 className="text-[24px] font-semibold tracking-tight text-gray-900 mb-5">How many screens / pages?</h2>
                    <div className="grid grid-cols-2 gap-2.5">
                        {SCOPES.map(sc => (
                            <GridOpt key={sc.id} label={sc.label} icon="📐"
                                selected={s.scope === sc.id} onClick={() => setS(p => ({ ...p, scope: sc.id }))} />
                        ))}
                    </div>
                </>
            );
            case 4: return (
                <>
                    <h2 className="text-[24px] font-semibold tracking-tight text-gray-900 mb-5">What is your ideal timeline?</h2>
                    <div className="flex flex-col gap-2.5">
                        {TIMELINES.map(tl => (
                            <button
                                key={tl.id}
                                onClick={() => setS(p => ({ ...p, timeline: tl.id }))}
                                className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-left transition-all duration-150 border-2 ${s.timeline === tl.id
                                        ? 'bg-blue-50 border-blue-600'
                                        : 'bg-gray-50 border-transparent hover:bg-gray-100'
                                    }`}
                            >
                                <div>
                                    <p className={`text-[15px] font-semibold ${s.timeline === tl.id ? 'text-blue-700' : 'text-gray-800'}`}>{tl.label}</p>
                                    <p className={`text-sm mt-0.5 ${s.timeline === tl.id ? 'text-blue-400' : 'text-gray-400'}`}>{tl.sub}</p>
                                </div>
                                {s.timeline === tl.id && (
                                    <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                                        <CheckIcon />
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            );
            case 5: return (
                <>
                    <h2 className="text-[24px] font-semibold tracking-tight text-gray-900 mb-5">What is your estimated budget?</h2>
                    <div className="flex flex-col gap-2.5">
                        {BUDGETS.map(b => (
                            <OptionRow key={b.id} label={b.label} icon="💰"
                                selected={s.budget === b.id} onClick={() => setS(p => ({ ...p, budget: b.id }))} />
                        ))}
                    </div>
                </>
            );
            case 6: return (
                <>
                    <h2 className="text-[24px] font-semibold tracking-tight text-gray-900 mb-1">Almost there — tell us about you</h2>
                    <p className="text-gray-400 text-sm mb-5">We'll send your personalised estimate within 24 hours.</p>
                    <div className="flex flex-col gap-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Full Name *</label>
                                <input type="text" value={s.name} onChange={e => setS(p => ({ ...p, name: e.target.value }))} placeholder="Ada Lovelace" className={inputCls} />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Email *</label>
                                <input type="email" value={s.email} onChange={e => setS(p => ({ ...p, email: e.target.value }))} placeholder="ada@company.com" className={inputCls} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Company</label>
                            <input type="text" value={s.company} onChange={e => setS(p => ({ ...p, company: e.target.value }))} placeholder="Acme Corp" className={inputCls} />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Tell us more</label>
                            <textarea rows={3} value={s.message} onChange={e => setS(p => ({ ...p, message: e.target.value }))} placeholder="Share anything about your project..." className={`${inputCls} resize-none`} />
                        </div>
                    </div>
                </>
            );
            default: return null;
        }
    };

    // ── Success screen ──────────────────────────────────────
    if (submitted) return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(10,10,10,0.9)' }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="bg-white rounded-[32px] p-16 max-w-sm w-full text-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 font-display mb-3">Estimate Sent!</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    Thanks {s.name.split(' ')[0] || 'there'}! We'll review your project and reach out at <strong>{s.email}</strong> within 24 hours.
                </p>
                <button onClick={onClose} className="bg-gray-900 text-white text-sm font-bold uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors">
                    Close
                </button>
            </div>
        </div>
    );

    // ── Main modal ──────────────────────────────────────────
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-6"
            style={{ background: 'rgba(10,10,10,0.88)' }}
            onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className={`flex items-start gap-4 w-full justify-center transition-all duration-500 ${showSummary ? 'max-w-[1020px]' : 'max-w-[760px]'}`}>

                {/* ── Main white card ──────────────────── */}
                <div className="bg-white rounded-[32px] flex-1 flex overflow-hidden shadow-2xl relative" style={{ minHeight: '600px', maxHeight: '92vh' }}>

                    {/* Step counter */}
                    <span className="absolute top-6 right-8 text-sm font-medium text-gray-400 z-10 select-none">
                        {step + 1} / {STEPS.length}
                    </span>

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 left-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                    >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Left sidebar nav */}
                    <div className="w-[196px] border-r border-gray-100 pt-[68px] pb-8 px-6 flex-shrink-0">
                        <div className="flex flex-col gap-0.5">
                            {STEPS.map((label, i) => {
                                const status = i < step ? 'done' : i === step ? 'active' : 'pending';
                                return (
                                    <div key={label} className="flex items-center gap-2.5 py-2.5">
                                        <StepDot status={status} />
                                        <span className={`text-[13px] transition-colors leading-tight ${status === 'done' ? 'text-gray-400 font-medium' :
                                                status === 'active' ? 'text-blue-600 font-semibold' :
                                                    'text-gray-300'
                                            }`}>{label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: content + nav */}
                    <div className="flex-1 flex flex-col pt-[68px] pb-8 px-8 overflow-y-auto">
                        <div className="flex-1">{content()}</div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                            <button
                                onClick={prev}
                                disabled={step === 0}
                                className="px-7 py-3 rounded-full border border-gray-200 text-gray-700 text-[12px] font-bold uppercase tracking-widest hover:border-gray-400 disabled:opacity-0 disabled:pointer-events-none transition-all"
                            >
                                Back
                            </button>
                            <button
                                onClick={next}
                                disabled={!canGo()}
                                className={`px-8 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-200 ${canGo()
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                {step === 6 ? 'Submit' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Summary card (appears step 2+) ─── */}
                {showSummary && (
                    <div className="hidden lg:flex flex-col w-[230px] flex-shrink-0 bg-gray-900 text-white rounded-[28px] p-6 gap-5 shadow-2xl" style={{ minHeight: '300px' }}>
                        <h3 className="text-[15px] font-bold tracking-tight font-display">Summary</h3>

                        {s.services.length > 0 && (
                            <div className="flex flex-col gap-2.5">
                                {s.services.map(id => {
                                    const svc = SERVICES.find(x => x.id === id);
                                    if (!svc) return null;
                                    return (
                                        <div key={id} className="flex items-start justify-between gap-2">
                                            <div className="flex items-start gap-2 min-w-0">
                                                <svg className="w-3 h-3 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-[12px] text-gray-300 leading-tight">{svc.label}</span>
                                            </div>
                                            <span className="text-[11px] text-gray-500 flex-shrink-0">{svc.days[0]}–{svc.days[1]}d</span>
                                        </div>
                                    );
                                })}
                                {s.scope && (() => {
                                    const sc = SCOPES.find(x => x.id === s.scope);
                                    return sc ? (
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex items-start gap-2 min-w-0">
                                                <svg className="w-3 h-3 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-[12px] text-gray-300 leading-tight">Scope: {sc.label}</span>
                                            </div>
                                            <span className="text-[11px] text-gray-500 flex-shrink-0">{sc.days[0]}–{sc.days[1]}d</span>
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        )}

                        {sumMax > 0 && (
                            <div className="border-t border-white/10 pt-4 mt-auto">
                                <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-1">Total estimate</p>
                                <p className="text-xl font-bold tracking-tighter text-blue-400">
                                    {sumMin} – {sumMax} days
                                </p>
                            </div>
                        )}

                        {s.services.length === 0 && (
                            <p className="text-[12px] text-gray-600 italic">Your selections will appear here…</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
