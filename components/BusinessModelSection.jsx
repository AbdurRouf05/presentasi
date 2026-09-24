'use client';

import React from 'react';
import { BUSINESS_MODEL } from '@/lib/data';

export default function BusinessModelSection() {
    return (
        <section className="business-section pricing-section" id="model-bisnis">
            <div className="business-container">
                {/* Header */}
                <div className="business-header">
                    <h2 className="business-title">{BUSINESS_MODEL.title}</h2>
                    <p className="business-desc">{BUSINESS_MODEL.desc}</p>
                </div>

                {/* Pricing 4-Tier Grid */}
                <div className="pricing-grid">
                    {BUSINESS_MODEL.pricing.map((tier) => (
                        <div 
                            key={tier.name} 
                            className={`pricing-card ${tier.isPopular ? 'pricing-popular' : ''}`}
                        >
                            {tier.isPopular && (
                                <div className="popular-ribbon" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span>{tier.badge}</span>
                                </div>
                            )}
                            <div className="pricing-card-header">
                                {!tier.isPopular && <span className="pricing-tier-tag">{tier.badge}</span>}
                                <h3 className="pricing-tier-name">{tier.name}</h3>
                                <p className="pricing-tier-desc">{tier.desc}</p>
                            </div>

                            <div className="pricing-price-wrap">
                                <span className="price-number">{tier.price}</span>
                                <span className="price-period">{tier.period}</span>
                                {tier.subPeriod && <span className="price-subperiod">{tier.subPeriod}</span>}
                            </div>

                            <ul className="pricing-feature-list">
                                {tier.features.map((feat, i) => (
                                    <li key={i}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pricing-cta-badge">
                                <span>{tier.cta}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}