import { useEffect } from 'react';

/**
 * Scans all [data-animate] elements in the document and adds
 * the `sr-visible` class when they enter the viewport.
 * Supports optional [data-delay="Nms"] for staggered reveals.
 */
export function useScrollReveal() {
    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll<HTMLElement>('[data-animate]')
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const delay = parseInt(el.dataset.delay ?? '0', 10);
                        setTimeout(() => {
                            el.classList.add('sr-visible');
                        }, delay);
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}
