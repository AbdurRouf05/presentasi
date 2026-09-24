'use client';

import { useEffect, useRef } from 'react';

export default function VimeoHero() {
    const titleRef = useRef(null);

    return (
        <section
            className="vimeo-hero"
            style={{
                backgroundColor: '#7c3aed', // Solid Kalibra Lavender Purple
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            {/* ① Headline — centered logo & text */}
            <div className="home-header__title">
                {/* Centered Kalibra Logo Vector Emblem in Frosted Glass Ring */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '30px',
                    pointerEvents: 'auto',
                }}>
                    <div style={{
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 'clamp(94px, 9vw, 122px)',
                        height: 'clamp(94px, 9vw, 122px)',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.14)',
                        border: '1.5px solid rgba(255, 255, 255, 0.35)',
                        backdropFilter: 'blur(16px)',
                        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
                    }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12174 11398"
                            fill="#ffffff"
                            style={{
                                width: 'clamp(54px, 5.2vw, 70px)',
                                height: 'auto',
                                display: 'block',
                                filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.18))'
                            }}
                            aria-label="Kalibra Logo Emblem"
                        >
                            <path d="M15 437c83,75 95,94 156,113 117,29 251,55 403,85l0 1c78,13 151,26 226,45l62 13c916,190 1311,1307 1758,2567 238,675 493,1393 848,2011 7,-2148 8,-4802 -39,-4933 -122,-343 -384,-340 -634,-339l-1920 4c-978,0 -887,-74 -860,433zm1988 2359c7,901 -12,2119 -13,2778 -1,593 -5,1186 -5,1779 -1,544 120,1324 -256,1757 -509,586 -1313,338 -1471,450 -277,195 40,733 260,809 348,93 1652,39 2108,38 669,-1 1491,42 2141,-8 305,-46 661,-578 403,-817 -159,-147 -683,83 -1209,-232 -467,-280 -506,-739 -505,-1432 1,-233 5,-958 9,-1872 -574,-752 -922,-1736 -1244,-2644 -74,-208 -145,-411 -218,-606z" />
                            <path d="M3937 4685l-18 155c-14,286 23,920 208,1096 1006,-1897 1846,-2919 3425,-4150 -655,846 -2771,3049 -2970,4266 4329,-68 3032,-4645 5290,-5739 -2240,-297 -5472,1971 -5935,4372z" />
                            <path d="M4476 6458c349,642 736,494 1683,641 2756,556 1520,1936 810,2964 -264,382 -333,359 -440,720 455,-280 954,-885 1273,-1263 518,-614 514,-620 723,-1399 1448,1934 650,1194 1122,3277l269 -1777c1101,466 1608,747 2258,1514 -323,-1112 -1002,-1134 -1685,-1723 -1233,-1065 -511,-2201 -3460,-3177 -208,-69 -398,-121 -572,-173 -637,307 -1284,385 -1981,396z" />
                        </svg>
                    </div>
                </div>

                <h1 className="vimeo-hero__title" ref={titleRef} style={{ color: '#ffffff' }}>

                    {/* "kalibra" */}
                    <span className="vimeo-hero__word">kalibra </span>

                    {/* "os" */}
                    <span className="vimeo-hero__word">os </span>

                    {/* "kasir & ERP" italic */}
                    <span className="vimeo-hero__word"><em>kasir &amp; ERP </em></span>

                    {/* "offline-first" */}
                    <span className="vimeo-hero__word">offline-first </span>

                    <div style={{ flexBasis: '100%', height: 0 }} />

                    <span className="vimeo-hero__word">untuk </span>
                    <span className="vimeo-hero__word">bisnis </span>

                    {/* "f&b modern" + oval underline */}
                    <span className="vimeo-hero__word is--relative">
                        {/* Oval underline */}
                        <img
                            src="/assets/VimeoHero SVG/oval-underline.svg"
                            alt=""
                            className="home-header__title-line-svg"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                        <span>f&amp;b modern</span>
                    </span>

                </h1>
            </div>
        </section>
    );
}