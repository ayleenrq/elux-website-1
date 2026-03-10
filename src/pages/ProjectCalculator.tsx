import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────
interface FormData {
    projectType: string;
    services: string[];
    complexity: string;
    timeline: string;
    budget: string;
    name: string;
    email: string;
    company: string;
    message: string;
}

// ─── Step Data ────────────────────────────────────────────
const PROJECT_TYPES = [
    { id: 'web-app', label: 'Web Application', icon: '🖥️', desc: 'SaaS, dashboards, portals' },
    { id: 'mobile-app', label: 'Mobile App', icon: '📱', desc: 'iOS, Android, cross-platform' },
    { id: 'website', label: 'Marketing Website', icon: '🌐', desc: 'Landing pages, company sites' },
    { id: 'design-system', label: 'Design System', icon: '🎨', desc: 'Component libraries, style guides' },
    { id: 'mvp', label: 'MVP / Prototype', icon: '🚀', desc: 'Rapid product validation' },
    { id: 'branding', label: 'Brand Identity', icon: '✦', desc: 'Logo, identity, guidelines' },
];

const SERVICES = [
    { id: 'ux-research', label: 'UX Research', icon: '🔍' },
    { id: 'ui-design', label: 'UI Design', icon: '✏️' },
    { id: 'prototyping', label: 'Prototyping', icon: '⚡' },
    { id: 'frontend', label: 'Front-End Dev', icon: '💻' },
    { id: 'backend', label: 'Back-End Dev', icon: '⚙️' },
    { id: 'branding', label: 'Branding', icon: '🎯' },
    { id: 'strategy', label: 'Product Strategy', icon: '📊' },
    { id: 'motion', label: 'Motion Design', icon: '🎬' },
];

const COMPLEXITIES = [
    { id: 'simple', label: 'Simple', desc: '1–3 core screens or features, existing design patterns', est: '2–4 weeks' },
    { id: 'medium', label: 'Medium', desc: 'Custom flows, integrations, moderate feature depth', est: '4–8 weeks' },
    { id: 'complex', label: 'Complex', desc: 'Multi-role systems, real-time data, advanced UX', est: '8–16 weeks' },
    { id: 'enterprise', label: 'Enterprise', desc: 'Large-scale platforms, design systems, long-term engagements', est: '16+ weeks' },
];

const TIMELINES = [
    { id: 'asap', label: 'ASAP', sub: 'Under 4 weeks', icon: '🔥' },
    { id: '1-2m', label: '1–2 Months', sub: 'Balanced pace', icon: '📅' },
    { id: '3-6m', label: '3–6 Months', sub: 'Comfortable timeline', icon: '🗓️' },
    { id: 'flexible', label: 'Flexible', sub: "I don't have a deadline yet", icon: '✌️' },
];

const BUDGETS = [
    { id: 'under-5k', label: '< $5,000', sub: 'Small scope' },
    { id: '5k-15k', label: '$5,000 – $15,000', sub: 'Mid-scope' },
    { id: '15k-50k', label: '$15,000 – $50,000', sub: 'Full product' },
    { id: '50k-plus', label: '$50,000+', sub: 'Enterprise / long-term' },
    { id: 'undecided', label: "I'm not sure", sub: 'Let's figure it out together' },
];

const STEPS = [
    { id: 1, label: 'Project Type' },
    { id: 2, label: 'Services' },
    { id: 3, label: 'Complexity' },
    { id: 4, label: 'Timeline' },
    { id: 5, label: 'Budget' },
    { id: 6, label: 'Contact' },
];

// ─── Estimate Engine ─────────────────────────────────────
function getEstimate(data: FormData): { weeks: string; price: string } {
    const complexMap: Record<string, [number, number]> = {
        simple: [2, 4],
        medium: [4, 8],
        complex: [8, 16],
        enterprise: [16, 32],
    };
    const budgetMap: Record<string, string> = {
        'under-5k': '< $5,000',
        '5k-15k': '$5,000 – $15,000',
        '15k-50k': '$15,000 – $50,000',
        '50k-plus': '$50,000+',
        undecided: 'TBD',
    };
    const range = complexMap[data.complexity] ?? [4, 8];
    return {
        weeks: range[0] ? `${range[0]}–${range[1]} weeks` : '—',
        price: budgetMap[data.budget] ?? '—',
    };
}

// ─── Progress Bar ─────────────────────────────────────────
function ProgressBar({ step, total }: { step: number; total: number }) {
    return (
        <div className="flex items-center gap-3">
            {Array.from({ length: total }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div
                        className={`transition-all duration-500 rounded-full ${i + 1 < step
                            ? 'w-6 h-2 bg-gray-900'
                            : i + 1 === step
                                ? 'w-8 h-2 bg-blue-600'
                                : 'w-6 h-2 bg-gray-200'
                            }`}
                    />
                </div>
            ))}
        </div>
    );
}

// ─── Step 1: Project Type ─────────────────────────────────
function StepProjectType({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 font-display mb-3 leading-tight">
                What are you building?
            </h2>
            <p className="text-gray-500 text-lg mb-10">Choose the category that best describes your project.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PROJECT_TYPES.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => onChange(t.id)}
                        className={`group text-left p-6 rounded-2xl border-2 transition-all duration-200 ${value === t.id
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-200 bg-white hover:border-gray-400'
                            }`}
                    >
                        <span className="block text-2xl mb-4">{t.icon}</span>
                        <span className={`block text-base font-semibold tracking-tight mb-1 ${value === t.id ? 'text-white' : 'text-gray-900'}`}>
                            {t.label}
                        </span>
                        <span className={`block text-sm ${value === t.id ? 'text-gray-300' : 'text-gray-500'}`}>
                            {t.desc}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

// ─── Step 2: Services ─────────────────────────────────────
function StepServices({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
    const toggle = (id: string) => {
        onChange(value.includes(id) ? value.filter((x) => x !== id) : [...value, id]);
    };
    return (
        <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 font-display mb-3 leading-tight">
                Which services do you need?
            </h2>
            <p className="text-gray-500 text-lg mb-10">Select all that apply. You can choose multiple.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {SERVICES.map((s) => {
                    const selected = value.includes(s.id);
                    return (
                        <button
                            key={s.id}
                            onClick={() => toggle(s.id)}
                            className={`relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border-2 transition-all duration-200 ${selected
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-200 bg-white hover:border-gray-400'
                                }`}
                        >
                            {selected && (
                                <span className="absolute top-2.5 right-2.5 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                            )}
                            <span className="text-2xl">{s.icon}</span>
                            <span className={`text-sm font-semibold text-center tracking-tight ${selected ? 'text-blue-700' : 'text-gray-900'}`}>
                                {s.label}
                            </span>
                        </button>
                    );
                })}
            </div>
            {value.length > 0 && (
                <p className="mt-6 text-sm text-gray-500">
                    <span className="font-semibold text-gray-900">{value.length}</span> service{value.length > 1 ? 's' : ''} selected
                </p>
            )}
        </div>
    );
}

// ─── Step 3: Complexity ────────────────────────────────────
function StepComplexity({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 font-display mb-3 leading-tight">
                How complex is the project?
            </h2>
            <p className="text-gray-500 text-lg mb-10">This helps us estimate the effort and scope involved.</p>
            <div className="flex flex-col gap-4">
                {COMPLEXITIES.map((c) => (
                    <button
                        key={c.id}
                        onClick={() => onChange(c.id)}
                        className={`group text-left flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-200 ${value === c.id
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-200 bg-white hover:border-gray-400'
                            }`}
                    >
                        <div>
                            <span className={`block text-lg font-semibold tracking-tight mb-1 ${value === c.id ? 'text-white' : 'text-gray-900'}`}>
                                {c.label}
                            </span>
                            <span className={`block text-sm ${value === c.id ? 'text-gray-300' : 'text-gray-500'}`}>
                                {c.desc}
                            </span>
                        </div>
                        <span className={`text-sm font-semibold whitespace-nowrap ml-6 px-3 py-1.5 rounded-full ${value === c.id ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-600'
                            }`}>
                            {c.est}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

// ─── Step 4: Timeline ─────────────────────────────────────
function StepTimeline({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 font-display mb-3 leading-tight">
                What's your timeline?
            </h2>
            <p className="text-gray-500 text-lg mb-10">When do you need the project completed?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TIMELINES.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => onChange(t.id)}
                        className={`group text-left flex items-center gap-5 p-6 rounded-2xl border-2 transition-all duration-200 ${value === t.id
                            ? 'border-gray-900 bg-gray-900'
                            : 'border-gray-200 bg-white hover:border-gray-400'
                            }`}
                    >
                        <span className="text-3xl flex-shrink-0">{t.icon}</span>
                        <div>
                            <span className={`block text-lg font-semibold tracking-tight ${value === t.id ? 'text-white' : 'text-gray-900'}`}>
                                {t.label}
                            </span>
                            <span className={`block text-sm mt-0.5 ${value === t.id ? 'text-gray-400' : 'text-gray-500'}`}>
                                {t.sub}
                            </span>
                        </div>
                        {value === t.id && (
                            <span className="ml-auto w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

// ─── Step 5: Budget ───────────────────────────────────────
function StepBudget({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 font-display mb-3 leading-tight">
                What's your budget?
            </h2>
            <p className="text-gray-500 text-lg mb-10">We respect every budget. This helps us tailor the right solution.</p>
            <div className="flex flex-col gap-3">
                {BUDGETS.map((b) => (
                    <button
                        key={b.id}
                        onClick={() => onChange(b.id)}
                        className={`group text-left flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-200 ${value === b.id
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-gray-200 bg-white hover:border-gray-400'
                            }`}
                    >
                        <div>
                            <span className={`block text-lg font-semibold tracking-tight ${value === b.id ? 'text-white' : 'text-gray-900'}`}>
                                {b.label}
                            </span>
                            <span className={`block text-sm ${value === b.id ? 'text-blue-100' : 'text-gray-500'}`}>
                                {b.sub}
                            </span>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${value === b.id ? 'border-white bg-white' : 'border-gray-300'
                            }`}>
                            {value === b.id && (
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

// ─── Step 6: Contact ──────────────────────────────────────
function StepContact({
    data,
    onChange,
}: {
    data: Pick<FormData, 'name' | 'email' | 'company' | 'message'>;
    onChange: (field: keyof FormData, value: string) => void;
}) {
    const inputClass =
        'w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/5 transition-all duration-200';

    return (
        <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 font-display mb-3 leading-tight">
                Last step — who are we talking to?
            </h2>
            <p className="text-gray-500 text-lg mb-10">We'll send you a personalised estimate to this email within 24 hours.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Full Name *</label>
                    <input
                        type="text"
                        placeholder="Ada Lovelace"
                        value={data.name}
                        onChange={(e) => onChange('name', e.target.value)}
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Email Address *</label>
                    <input
                        type="email"
                        placeholder="ada@company.com"
                        value={data.email}
                        onChange={(e) => onChange('email', e.target.value)}
                        className={inputClass}
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Company / Product Name</label>
                <input
                    type="text"
                    placeholder="Acme Corp"
                    value={data.company}
                    onChange={(e) => onChange('company', e.target.value)}
                    className={inputClass}
                />
            </div>
            <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Anything else to share?</label>
                <textarea
                    rows={4}
                    placeholder="Describe your project, share a reference, or ask us anything..."
                    value={data.message}
                    onChange={(e) => onChange('message', e.target.value)}
                    className={`${inputClass} resize-none`}
                />
            </div>
        </div>
    );
}

// ─── Summary Pill ─────────────────────────────────────────
function SummaryPill({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">{label}</span>
            <span className="text-sm font-semibold text-gray-900 truncate">{value}</span>
        </div>
    );
}

// ─── Success Screen ───────────────────────────────────────
function SuccessScreen({ onReset }: { onReset: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center text-center py-24 px-8">
            <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center mb-8">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 font-display mb-4">
                Estimate Request Sent!
            </h2>
            <p className="text-gray-500 text-lg max-w-md mb-10 leading-relaxed">
                Thanks for reaching out. Our team will review your project details and send you a personalised estimate within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
                <button
                    onClick={onReset}
                    className="px-7 py-3.5 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
                >
                    Start a new estimate
                </button>
                <a
                    href="#contact"
                    className="px-7 py-3.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all duration-200"
                >
                    Contact us directly
                </a>
            </div>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────
export default function ProjectCalculator() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState<FormData>({
        projectType: '',
        services: [],
        complexity: '',
        timeline: '',
        budget: '',
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const totalSteps = STEPS.length;

    const update = (field: keyof FormData, value: string | string[]) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    // Per-step validation
    const canProceed = (): boolean => {
        if (step === 1) return !!form.projectType;
        if (step === 2) return form.services.length > 0;
        if (step === 3) return !!form.complexity;
        if (step === 4) return !!form.timeline;
        if (step === 5) return !!form.budget;
        if (step === 6) return !!(form.name.trim() && form.email.trim());
        return true;
    };

    const next = () => { if (step < totalSteps) setStep((s) => s + 1); };
    const prev = () => { if (step > 1) setStep((s) => s - 1); };
    const submit = () => setSubmitted(true);
    const reset = () => { setStep(1); setSubmitted(false); setForm({ projectType: '', services: [], complexity: '', timeline: '', budget: '', name: '', email: '', company: '', message: '' }); };

    const estimate = getEstimate(form);

    // Label helpers
    const projectLabel = PROJECT_TYPES.find((t) => t.id === form.projectType)?.label ?? '—';
    const complexityLabel = COMPLEXITIES.find((c) => c.id === form.complexity)?.label ?? '—';
    const timelineLabel = TIMELINES.find((t) => t.id === form.timeline)?.label ?? '—';
    const budgetLabel = BUDGETS.find((b) => b.id === form.budget)?.label ?? '—';

    return (
        <div className="min-h-screen bg-[#f8f8f8]">

            {/* ── Top Header Bar ── */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <button
                        onClick={() => { window.location.hash = '#home'; }}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to site
                    </button>
                    {!submitted && (
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase hidden sm:block">
                                Step {step} of {totalSteps}
                            </span>
                            <ProgressBar step={step} total={totalSteps} />
                        </div>
                    )}
                </div>
            </div>

            {submitted ? (
                <SuccessScreen onReset={reset} />
            ) : (
                <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">

                        {/* ── Left: Form Panel ── */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-12 min-h-[560px] flex flex-col">

                            {/* Step label */}
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                                    {step}
                                </span>
                                <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                                    {STEPS[step - 1].label}
                                </span>
                            </div>

                            {/* Step content */}
                            <div className="flex-1">
                                {step === 1 && (
                                    <StepProjectType value={form.projectType} onChange={(v) => update('projectType', v)} />
                                )}
                                {step === 2 && (
                                    <StepServices value={form.services} onChange={(v) => update('services', v)} />
                                )}
                                {step === 3 && (
                                    <StepComplexity value={form.complexity} onChange={(v) => update('complexity', v)} />
                                )}
                                {step === 4 && (
                                    <StepTimeline value={form.timeline} onChange={(v) => update('timeline', v)} />
                                )}
                                {step === 5 && (
                                    <StepBudget value={form.budget} onChange={(v) => update('budget', v)} />
                                )}
                                {step === 6 && (
                                    <StepContact
                                        data={{ name: form.name, email: form.email, company: form.company, message: form.message }}
                                        onChange={(field, value) => update(field, value)}
                                    />
                                )}
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100">
                                <button
                                    onClick={prev}
                                    disabled={step === 1}
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 disabled:opacity-0 disabled:pointer-events-none transition-all duration-200"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </button>

                                {step < totalSteps ? (
                                    <button
                                        onClick={next}
                                        disabled={!canProceed()}
                                        className="flex items-center gap-3 bg-gray-900 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        Continue
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                ) : (
                                    <button
                                        onClick={submit}
                                        disabled={!canProceed()}
                                        className="flex items-center gap-3 bg-blue-600 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        Send My Estimate
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* ── Right: Summary Sidebar ── */}
                        <div className="flex flex-col gap-5 lg:sticky lg:top-24">

                            {/* Project Summary Card */}
                            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-5">Your estimate</p>
                                <div className="flex flex-col gap-4 divide-y divide-gray-100">
                                    {form.projectType && (
                                        <div className="pt-0">
                                            <SummaryPill label="Project Type" value={projectLabel} />
                                        </div>
                                    )}
                                    {form.services.length > 0 && (
                                        <div className="pt-4">
                                            <SummaryPill
                                                label="Services"
                                                value={form.services
                                                    .map((id) => SERVICES.find((s) => s.id === id)?.label ?? id)
                                                    .join(', ')}
                                            />
                                        </div>
                                    )}
                                    {form.complexity && (
                                        <div className="pt-4">
                                            <SummaryPill label="Complexity" value={complexityLabel} />
                                        </div>
                                    )}
                                    {form.timeline && (
                                        <div className="pt-4">
                                            <SummaryPill label="Timeline" value={timelineLabel} />
                                        </div>
                                    )}
                                    {form.budget && (
                                        <div className="pt-4">
                                            <SummaryPill label="Budget" value={budgetLabel} />
                                        </div>
                                    )}
                                    {!form.projectType && !form.services.length && (
                                        <p className="text-sm text-gray-400 py-4 text-center">
                                            Your selections will appear here.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Estimated duration card */}
                            {form.complexity && (
                                <div className="bg-gray-900 text-white rounded-3xl p-7">
                                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-5">Estimated Duration</p>
                                    <p className="text-3xl font-medium tracking-tighter font-display leading-tight mb-1">
                                        {estimate.weeks}
                                    </p>
                                    <p className="text-sm text-gray-400">Based on selected complexity</p>
                                </div>
                            )}

                            {/* Trust badge */}
                            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 tracking-tight">No commitment required</p>
                                    <p className="text-xs text-gray-500 mt-0.5">This is just an estimate. We'll align on scope together.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
