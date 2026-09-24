'use client';

import React from 'react';
import { COMPETITOR_COMPARISON } from '@/lib/data';

function renderComparisonCell(cell, isKalibra = false) {
    if (!cell) return null;

    let status = 'neutral';
    let text = '';

    if (typeof cell === 'object') {
        status = cell.status || 'neutral';
        text = cell.text || '';
    } else {
        text = String(cell);
    }

    return (
        <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '9px', lineHeight: 1.35 }}>
            {status === 'check' && (
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: isKalibra ? 'rgba(16, 185, 129, 0.25)' : 'rgba(16, 185, 129, 0.2)',
                    color: isKalibra ? '#34d399' : '#10b981',
                    flexShrink: 0,
                    marginTop: '1px'
                }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </span>
            )}
            {status === 'cross' && (
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    color: '#f87171',
                    flexShrink: 0,
                    marginTop: '1px'
                }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </span>
            )}
            {status === 'warning' && (
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    color: '#fbbf24',
                    flexShrink: 0,
                    marginTop: '1px'
                }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                </span>
            )}
            <span style={{ color: isKalibra ? '#ffffff' : '#e2e8f0' }}>{text}</span>
        </div>
    );
}

export default function Showreel() {
    return (
        <section className="showreel-section" id="showreel-section" style={{
            minHeight: '100vh',
            padding: '75px 24px 30px',
            backgroundColor: '#ffffff', // Background section PUTIH murni
            color: '#0f172a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '18px',
            boxSizing: 'border-box',
            overflow: 'hidden'
        }}>
            {/* Header (Teks Gelap Bersih di Atas Latar Putih) */}
            <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{
                    fontFamily: "'Epilogue', sans-serif",
                    fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    color: '#0f172a',
                    margin: '0 0 8px 0'
                }}>
                    Mengapa KalibraOS Lebih Unggul?
                </h2>
                <p style={{
                    fontSize: '0.88rem',
                    color: '#475569',
                    maxWidth: '640px',
                    margin: '0 auto',
                    lineHeight: 1.5
                }}>
                    Bandingkan langsung arsitektur KalibraOS dengan sistem kasir cloud konvensional dan ERP korporat yang rumit dan mahal.
                </p>
            </div>

            {/* Container Tabel: Diwarnai UNGU ROYAL & DEEP VIOLET dengan Border Ungu Glowing */}
            <div style={{
                width: '100%',
                maxWidth: '990px',
                margin: '0 auto',
                overflowX: 'auto',
                background: '#1b0d3d', // Deep royal violet card
                border: '2px solid rgba(124, 58, 237, 0.45)',
                borderRadius: '20px',
                boxShadow: '0 20px 45px rgba(124, 58, 237, 0.22), 0 8px 24px rgba(0, 0, 0, 0.12)',
                padding: '16px 22px 14px',
                color: '#ffffff',
                boxSizing: 'border-box'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '620px' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid rgba(167, 139, 250, 0.35)' }}>
                            <th style={{ padding: '11px 14px', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#c4b5fd', fontWeight: 800 }}>Fitur / Kriteria</th>
                            <th style={{ padding: '11px 14px', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#cbd5e1', fontWeight: 800 }}>Moka POS (Cloud)</th>
                            <th style={{ padding: '11px 14px', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#cbd5e1', fontWeight: 800 }}>Odoo ERP</th>
                            <th style={{
                                padding: '11px 16px',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                color: '#ffffff',
                                fontWeight: 900,
                                background: 'linear-gradient(180deg, #7c3aed 0%, #6d28d9 100%)',
                                borderRadius: '10px 10px 0 0',
                                boxShadow: '0 -4px 12px rgba(124, 58, 237, 0.35)'
                            }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span>KalibraOS</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {COMPETITOR_COMPARISON.map((row, idx) => (
                            <tr key={idx} style={{
                                borderBottom: idx === COMPETITOR_COMPARISON.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                                backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)'
                            }}>
                                <td style={{ padding: '11px 14px', fontWeight: 700, color: '#ffffff', fontSize: '0.84rem' }}>
                                    {row.feature}
                                </td>
                                <td style={{ padding: '11px 14px', fontSize: '0.8rem' }}>
                                    {renderComparisonCell(row.moka, false)}
                                </td>
                                <td style={{ padding: '11px 14px', fontSize: '0.8rem' }}>
                                    {renderComparisonCell(row.odoo, false)}
                                </td>
                                <td style={{
                                    padding: '11px 16px',
                                    color: '#ffffff',
                                    fontWeight: 800,
                                    fontSize: '0.84rem',
                                    backgroundColor: 'rgba(124, 58, 237, 0.38)',
                                    borderLeft: '1px solid rgba(167, 139, 250, 0.3)',
                                    borderRight: '1px solid rgba(167, 139, 250, 0.3)'
                                }}>
                                    {renderComparisonCell(row.kalibra, true)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
