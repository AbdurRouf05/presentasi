'use client';

import React from 'react';
import { MARKET_SIZING } from '@/lib/data';

export default function MarketSizingSection() {
    return (
        <section className="business-section market-sizing-section" id="market-sizing">
            <div className="business-container">
                {/* Header (Badge removed per user request) */}
                <div className="business-header">
                    <h2 className="business-title">{MARKET_SIZING.title}</h2>
                    <p className="business-desc">{MARKET_SIZING.desc}</p>
                </div>

                {/* Cards Grid */}
                <div className="market-grid">
                    {MARKET_SIZING.items.map((item, idx) => (
                        <div 
                            key={item.level} 
                            className={`market-card ${item.highlight ? 'highlight-card' : ''}`}
                            style={{ '--card-accent': item.color }}
                        >
                            <div className="market-card-top">
                                <span className="market-level-tag">{item.level}</span>
                                <span className="market-scope">{item.scope}</span>
                            </div>

                            <div className="market-value-wrap">
                                <span className="market-value">{item.value}</span>
                                <span className="market-unit">{item.unit}</span>
                            </div>

                            <div className="market-meta">
                                <div className="market-area-pill">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                    <span>{item.area}</span>
                                </div>
                                <span className="market-source">{item.source}</span>
                            </div>

                            <p className="market-card-desc">{item.desc}</p>

                            
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
