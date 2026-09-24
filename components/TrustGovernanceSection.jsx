'use client';

import React from 'react';
import { TRUST_GOVERNANCE } from '@/lib/data';

export default function TrustGovernanceSection() {
    return (
        <section className="business-section trust-section" id="legalitas">
            <div className="business-container">
                {/* Header (Badge removed per user request) */}
                <div className="business-header">
                    <h2 className="business-title">{TRUST_GOVERNANCE.title}</h2>
                    <p className="business-desc">{TRUST_GOVERNANCE.desc}</p>
                </div>

                {/* 4 Cards Grid */}
                <div className="trust-grid">
                    {TRUST_GOVERNANCE.items.map((item, idx) => (
                        <div key={item.title} className="trust-card" style={{ '--badge-color': item.badgeColor }}>
                            <div className="trust-card-top">
                                <span className="trust-category">{item.category}</span>
                                <span className="trust-status-badge">
                                    <span className="status-dot"></span>
                                    {item.status}
                                </span>
                            </div>

                            <h3 className="trust-title">{item.title}</h3>
                            <div className="trust-number">{item.number}</div>
                            <p className="trust-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
