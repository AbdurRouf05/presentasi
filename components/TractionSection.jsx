'use client';

import React, { useState } from 'react';
import { BUSINESS_TRACTION } from '@/lib/data';
import InvoicesDrawer from './InvoicesDrawer';

export default function TractionSection() {
    const [isInvoicesOpen, setIsInvoicesOpen] = useState(false);

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

                {/* Primary Interactive CTA: Buka 5 Bukti Faktur Tenant Terbaru */}
                <div className="traction-invoices-cta-wrap">
                    <button 
                        type="button" 
                        className="btn-open-invoices"
                        onClick={() => setIsInvoicesOpen(true)}
                        aria-label="Lihat 5 Faktur Penjualan Tenant Terbaru"
                    >
                        <div className="btn-invoices-glow"></div>
                        <div className="btn-invoices-content">
                            <div className="btn-invoices-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                            </div>
                            <div className="btn-invoices-text">
                                <span className="btn-invoices-label">BUKTI VALIDASI PASAR & REALISASI MONEV</span>
                                <span className="btn-invoices-heading">Lihat 5 Arsip Faktur Tenant Terbaru (Akselerasi P2MW)</span>
                            </div>
                            <div className="btn-invoices-badge">
                                <span>5 Faktur Terbaru Lunas</span>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>
                        </div>
                    </button>
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
                        <button
                            type="button"
                            className="comp-faktur-trigger"
                            onClick={() => setIsInvoicesOpen(true)}
                        >
                            <span>📄 Buka 5 Faktur Terbaru</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Side Drawer with 3D Stacked Cards Deck & Grid View */}
            <InvoicesDrawer 
                isOpen={isInvoicesOpen} 
                onClose={() => setIsInvoicesOpen(false)} 
            />
        </section>
    );
}