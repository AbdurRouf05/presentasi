"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROBLEM_CARDS } from "@/lib/data";

gsap.registerPlugin(InertiaPlugin, ScrollTrigger);

const PROBLEM_CARDS_DATA = [
    {
        id: 'problem-1',
        number: '01',
        title: 'Ketergantungan Internet',
        impact: '82% Kasir Lumpuh Saat Sinyal Drop',
        bgColor: '#FFAE9E',      // Soft Coral Peach
        accentColor: '#C83A22',   // Deep coral for icon and label
        icon: (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="1" x2="23" y2="23" />
                <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
                <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
        )
    },
    {
        id: 'problem-2',
        number: '02',
        title: 'Beban Sewa Abadi',
        impact: 'Menguras Kas Rp 3–6 Juta / Tahun',
        bgColor: '#FFD66B',      // Soft Sunny Honey
        accentColor: '#A15901',   // Deep amber for icon and label
        icon: (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 6v12" />
            </svg>
        )
    },
    {
        id: 'problem-3',
        number: '03',
        title: 'Kebocoran Stok (BOM)',
        impact: '15–22% Margin Menguap Tanpa Sadar',
        bgColor: '#92E6C9',      // Soft Fresh Mint
        accentColor: '#0A7B62',   // Emerald teal for icon and label
        icon: (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M7 21h10" />
                <path d="M12 3v18" />
                <path d="M3 7h18" />
            </svg>
        )
    },
    {
        id: 'problem-4',
        number: '04',
        title: 'Pembukuan Terpisah',
        impact: '2–3 Hari Rekonsiliasi Nota Manual',
        bgColor: '#C4B5FD',      // Soft Periwinkle Lilac
        accentColor: '#5E2ECC',   // Deep purple for icon and label
        icon: (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        )
    }
];

export default function MotionCards() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Inertia on cards
            const cards = document.querySelectorAll(".motion-card__card");
            cards.forEach((card) => {
                let lastX = 0;
                let lastY = 0;
                let speedX = 0;
                let speedY = 0;

                const startRotation = gsap.getProperty(card, "rotation");
                const startX = gsap.getProperty(card, "x");
                const startY = gsap.getProperty(card, "y");

                const onMove = (e) => {
                    speedX = e.clientX - lastX;
                    speedY = e.clientY - lastY;
                    lastX = e.clientX;
                    lastY = e.clientY;
                };

                const onEnter = (e) => {
                    speedX = 0;
                    speedY = 0;
                    lastX = e.clientX;
                    lastY = e.clientY;
                };

                const onLeave = () => {
                    gsap.to(card, {
                        inertia: {
                            x: { velocity: speedX * 20, end: startX },
                            y: { velocity: speedY * 20, end: startY },
                            rotation: { velocity: speedX * 1.5, end: startRotation },
                        },
                    });
                };

                card.addEventListener("mousemove", onMove);
                card.addEventListener("mouseenter", onEnter);
                card.addEventListener("mouseleave", onLeave);
            });

            // Entry Animations: Underline Draw
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            const underlinePath = sectionRef.current.querySelector(".motion-card__underline-path");
            if (underlinePath) {
                const pathLen = underlinePath.getTotalLength();
                gsap.set(underlinePath, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
                tl.to(underlinePath, { strokeDashoffset: 0, duration: 1.5, ease: "power2.out" }, 0.2);
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="motion-card-section" id="masalah">
            {/* ─── Part 1: Bold Heading Text with Underline ─── */}
            <div className="motion-card__heading">
                <h2 className="motion-card__title">
                    empat masalah nyata
                    <br />
                    umkm f&amp;b.
                </h2>
                <p className="motion-card__subtitle">
                    studi kendala &amp; realitas operasional.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 634 28" fill="none" className="motion-card__underline-svg">
                    <path className="motion-card__underline-path" d="M2 26C41.0237 23.1556 79.9927 19.9419 118.634 15.5521C169.106 9.98633 227.314 2.42393 275.206 2C280.46 2.57436 264.768 4.99488 262.462 5.55556C257.837 6.43078 252.529 7.47009 247.317 8.59146C239.594 10.3556 212.496 15.8393 226.932 19.8051C239.594 22.6359 263.663 21.9521 280.978 21.3504C314.817 19.9829 349.311 16.7419 383.204 14.7863C465.931 9.5077 549.191 10.547 632 14.1436" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* ─── Part 2: Clean Vector Icon Cards Area ─── */}
            <div className="motion-card__cards-area">
                <div ref={containerRef} className="motion-card__cards">
                    {PROBLEM_CARDS_DATA.map((item, idx) => (
                        <div key={item.id} className={`motion-card__card motion-card__card--${idx + 1}`}>
                            <div className="motion-card__card-content" style={{
                                width: '100%',
                                height: '100%',
                                background: item.bgColor,
                                borderRadius: '14px',
                                border: 'none',
                                padding: '18px 15px',
                                boxSizing: 'border-box',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                textAlign: 'left',
                                color: '#1a1a1a',
                                position: 'relative',
                                overflow: 'hidden',
                                userSelect: 'none'
                            }}>
                                {/* Top Header: Badge Number + Category Icon */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                                    <span style={{
                                        fontSize: '0.72rem',
                                        fontWeight: 800,
                                        letterSpacing: '0.06em',
                                        padding: '3px 10px',
                                        borderRadius: '999px',
                                        background: 'rgba(255, 255, 255, 0.75)',
                                        color: '#18181b',
                                        border: 'none'
                                    }}>
                                        {item.number}
                                    </span>
                                    <div style={{
                                        width: '34px',
                                        height: '34px',
                                        borderRadius: '10px',
                                        background: '#ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: item.accentColor,
                                        border: 'none',
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
                                    }}>
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Main Body: Big Title + Dampak Impact Badge Below */}
                                <div style={{ zIndex: 2 }}>
                                    <h4 style={{
                                        fontFamily: "'Epilogue', sans-serif",
                                        fontSize: '1.08rem',
                                        fontWeight: 800,
                                        color: '#18181b',
                                        lineHeight: 1.22,
                                        margin: 0
                                    }}>
                                        {item.title}
                                    </h4>

                                    {/* Dampak Nyata Block */}
                                    <div style={{
                                        marginTop: '12px',
                                        padding: '8px 10px',
                                        borderRadius: '9px',
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        border: 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '2px',
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
                                    }}>
                                        <span style={{
                                            fontSize: '0.62rem',
                                            fontWeight: 800,
                                            color: item.accentColor,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px'
                                        }}>
                                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: item.accentColor }} />
                                            Dampak Nyata:
                                        </span>
                                        <span style={{
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            color: '#18181b',
                                            lineHeight: 1.25
                                        }}>
                                            {item.impact}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── Part 3: Bottom Paragraph Text ─── */}
            <div className="motion-card__footer-text">
                <p className="motion-card__description">
                    UMKM kuliner Indonesia tidak butuh sekadar aplikasi kasir pencatat transaksi biasa.
                    Mereka butuh sistem operasional handal yang tahan banting tanpa internet,
                    kontrol resep dan bahan baku skala gram (BOM), serta kebebasan dari beban sewa berlangganan selamanya.
                </p>
            </div>
        </section>
    );
}
