'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ScrollVelocity({
    texts = [
        "KALIBRA OS • 100% OFFLINE-FIRST • ZERO DOWNTIME DI JAM SIBUK • RESEP SUB-GRAM • BELI PUTUS TANPA SEWA ABADI •",
        "TRAKSI BISNIS RIIL RP 20,9 JUTA • MARGIN LABA 49.8% • BIAYA SERVER VPS RP 650K/BLN • HAK CIPTA & MEREK RESMI DJKI •"
    ],
    baseVelocity = 1.8,
    className = ""
}) {
    const rowRefs = useRef([]);

    useEffect(() => {
        let currentPos = [0, 0];
        let smoothedVelocity = 0;

        const updatePosition = (time, deltaTime) => {
            const rawVelocity = (typeof window !== 'undefined' && window.__lenis)
                ? window.__lenis.velocity
                : 0;

            // Damping lerp for organic spring feel
            smoothedVelocity += (rawVelocity - smoothedVelocity) * 0.12;
            const dtNorm = Math.min(deltaTime / 16.6, 2.5);

            rowRefs.current.forEach((rowEl, index) => {
                if (!rowEl) return;
                const direction = index % 2 === 0 ? -1 : 1;
                const speedModifier = 1 + Math.abs(smoothedVelocity) * 0.18;
                const scrollEffect = smoothedVelocity * 0.35 * (index % 2 === 0 ? 1 : -1);

                const moveStep = (direction * baseVelocity * speedModifier + scrollEffect) * dtNorm;
                currentPos[index] += moveStep;

                const halfWidth = rowEl.scrollWidth / 2;
                if (halfWidth > 0) {
                    if (currentPos[index] <= -halfWidth) {
                        currentPos[index] += halfWidth;
                    } else if (currentPos[index] >= 0) {
                        currentPos[index] -= halfWidth;
                    }
                }

                rowEl.style.transform = `translate3d(${currentPos[index]}px, 0, 0)`;
            });
        };

        gsap.ticker.add(updatePosition);
        return () => {
            gsap.ticker.remove(updatePosition);
        };
    }, [baseVelocity]);

    return (
        <div
            className={`scroll-velocity-wrapper ${className}`}
            style={{
                width: '100%',
                overflow: 'hidden',
                padding: '24px 0 20px',
                backgroundColor: '#070510',
                position: 'relative',
                zIndex: 35,
                borderTop: '1px solid rgba(139, 92, 246, 0.25)',
                borderBottom: '1px solid rgba(139, 92, 246, 0.25)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
            }}
        >
            {texts.map((text, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        margin: rowIndex === 0 ? '0 0 8px 0' : '0'
                    }}
                >
                    <div
                        ref={(el) => { rowRefs.current[rowIndex] = el; }}
                        style={{
                            display: 'inline-flex',
                            whiteSpace: 'nowrap',
                            willChange: 'transform'
                        }}
                    >
                        {[...Array(4)].map((_, i) => (
                            <span
                                key={i}
                                style={{
                                    fontFamily: "'Epilogue', sans-serif",
                                    fontSize: 'clamp(1.4rem, 2.4vw, 2.2rem)',
                                    fontWeight: rowIndex === 0 ? 900 : 700,
                                    letterSpacing: '-0.02em',
                                    color: rowIndex === 0 ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                                    paddingRight: '32px',
                                    textTransform: 'uppercase',
                                    WebkitTextStroke: rowIndex === 1 ? '1px rgba(255, 255, 255, 0.22)' : 'none'
                                }}
                            >
                                {text}{' '}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
