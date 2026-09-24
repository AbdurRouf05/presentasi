'use client';

import React from 'react';
import { BUSINESS_TRACTION } from '@/lib/data';

export default function TractionSection() {
    return (
        <section className="business-section traction-section" id="traksi-bisnis">
            <div className="business-container">
                {/* Header */}
                <div className="business-header">
                    <h2 className="business-title">{BUSINESS_TRACTION.title}</h2>
                    <p className="business-desc">{BUSINESS_TRACTION.desc}</p>
                </div>

                {/* Big Stats 4-Columns */}
                <div className="traction-stats-grid">
                    {BUSINESS_TRACTION.stats.map((stat, idx) => (
                        <div key={stat.label} className="traction-stat-card" style={{ '--stat-color': stat.color }}>
                            <div className="stat-card-header">
                                <span className="stat-label">{stat.label}</span>
                                <span className="stat-growth-badge">{stat.growth}</span>
                            </div>
                            <div className="stat-main-value">{stat.value}</div>
                            <div className="stat-subtext">{stat.subtext}</div>
                        </div>
                    ))}
                </div>

                {/* Before vs After P2MW Compact Matrix */}
                <div className="traction-comparison-banner">
                    <div className="comparison-col before">
                        <div className="comp-tag">SEBELUM P2MW</div>
                        <div className="comp-val">2 Tenant Awal</div>
                        <div className="comp-desc">Infrastruktur free-tier gratisan &bull; Omzet Rp 5.980.000 &bull; Validasi model awal</div>
                    </div>
                    <div className="comparison-divider">
                        <div className="growth-arrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                            <span>+250%</span>
                        </div>
                    </div>
                    <div className="comparison-col after">
                        <div className="comp-tag active">SESUDAH P2MW (MONEV)</div>
                        <div className="comp-val highlight">7 Tenant Aktif (+5 Baru)</div>
                        <div className="comp-desc">Omzet Rp 20.930.000 &bull; Serap Hibah P2MW Rp 10.500.000 &bull; Laba Bersih Rp 18.800.000 (Beban Server 1 Thn Rp 2,13 Jt)</div>
                    </div>
                </div>
            </div>
        </section>
    );
}