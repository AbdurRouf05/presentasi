'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { INVOICES_DATA } from '@/lib/data';

export default function InvoicesDrawer({ isOpen, onClose }) {
    const [mounted, setMounted] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [viewMode, setViewMode] = useState('stack'); // 'stack' | 'grid'
    const [lightboxImage, setLightboxImage] = useState(null);
    const drawerRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Keyboard navigation (Escape to close, Arrows to cycle cards in stack mode)
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (lightboxImage) {
                    setLightboxImage(null);
                } else {
                    onClose();
                }
            } else if (viewMode === 'stack') {
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    setActiveIndex((prev) => (prev + 1) % INVOICES_DATA.length);
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    setActiveIndex((prev) => (prev - 1 + INVOICES_DATA.length) % INVOICES_DATA.length);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, viewMode, lightboxImage, onClose]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % INVOICES_DATA.length);
    }, []);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + INVOICES_DATA.length) % INVOICES_DATA.length);
    }, []);

    const currentInvoice = INVOICES_DATA[activeIndex];

    if (!isOpen || !mounted) return null;

    const drawerContent = (
        <div className="invoices-drawer-overlay" onClick={onClose} role="dialog" aria-modal="true">

            <div 
                className="invoices-drawer-panel"
                ref={drawerRef}
                onClick={(e) => e.stopPropagation()}
            >
                {/* 1. Header Bar */}
                <div className="invoices-drawer-header">
                    <div className="invoices-header-left">
                        <div className="invoices-header-badge">
                            <span className="badge-pulse-dot"></span>
                            <span className="badge-text">5 Faktur Tenant Terbaru &bull; Akselerasi P2MW</span>
                        </div>
                        <h3 className="invoices-drawer-title">
                            5 Faktur Tenant Terbaru KalibraOS
                        </h3>
                        <p className="invoices-drawer-subtitle">
                            Realisasi Omzet 5 Mitra Baru: <strong className="highlight-green">Rp 14.950.000</strong> (100% Lunas &bull; Akumulasi 7 Tenant: Rp 20.930.000)
                        </p>
                    </div>

                    <div className="invoices-header-actions">
                        {/* Switch View Mode: Stack vs Grid */}
                        <div className="invoices-view-switch" role="group" aria-label="Mode Tampilan">
                            <button
                                type="button"
                                className={`view-switch-btn ${viewMode === 'stack' ? 'active' : ''}`}
                                onClick={() => setViewMode('stack')}
                                title="Mode Kartu Bertumpuk (3D Stack)"
                            >
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="7" width="16" height="14" rx="2" />
                                    <path d="M6 3h14a2 2 0 0 1 2 2v12" />
                                </svg>
                                <span>Bertumpuk (3D)</span>
                            </button>
                            <button
                                type="button"
                                className={`view-switch-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                                title="Mode Galeri Rapi (Grid)"
                            >
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="14" width="7" height="7" rx="1" />
                                    <rect x="3" y="14" width="7" height="7" rx="1" />
                                </svg>
                                <span>Galeri Rapi</span>
                            </button>
                        </div>

                        {/* Close Button */}
                        <button
                            type="button"
                            className="invoices-close-btn"
                            onClick={onClose}
                            aria-label="Tutup Faktur"
                            title="Tutup (Esc)"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* 2. Main Content Body */}
                <div className="invoices-drawer-body">
                    {viewMode === 'stack' ? (
                        /* ================= MODE 1: KARTU BERTUMPUK (3D STACK) ================= */
                        <div className="invoices-stack-stage">
                            {/* Navigation Top Controller */}
                            <div className="stack-nav-bar">
                                <div className="stack-counter-pill">
                                    Faktur <strong>{activeIndex + 1}</strong> dari <strong>{INVOICES_DATA.length}</strong>
                                </div>

                                <div className="stack-arrows">
                                    <button 
                                        type="button" 
                                        className="stack-arrow-btn prev"
                                        onClick={handlePrev}
                                        aria-label="Faktur Sebelumnya"
                                        title="Sebelumnya (Panah Kiri)"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="19" y1="12" x2="5" y2="12" />
                                            <polyline points="12 19 5 12 12 5" />
                                        </svg>
                                        <span>Sebelumnya</span>
                                    </button>

                                    <button 
                                        type="button" 
                                        className="stack-arrow-btn next"
                                        onClick={handleNext}
                                        aria-label="Faktur Selanjutnya"
                                        title="Selanjutnya (Panah Kanan)"
                                    >
                                        <span>Selanjutnya</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* 3D Stack Container */}
                            <div className="invoices-stack-container">
                                {INVOICES_DATA.map((inv, idx) => {
                                    // Calculate relative position from activeIndex
                                    const diff = (idx - activeIndex + INVOICES_DATA.length) % INVOICES_DATA.length;
                                    const isFront = diff === 0;
                                    const isStacked = diff > 0 && diff <= 3;
                                    const isHidden = diff > 3;

                                    // Dynamic transform & styling for stacked cards
                                    let transform = '';
                                    let zIndex = INVOICES_DATA.length - diff;
                                    let opacity = 1;

                                    if (isFront) {
                                        transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
                                        zIndex = 30;
                                    } else if (isStacked) {
                                        const xOffset = diff * 22; // offset to right
                                        const yOffset = diff * 12; // offset down
                                        const rotation = diff * 2.8; // subtle playful tilt
                                        const scale = 1 - diff * 0.045; // slight shrink
                                        transform = `translate3d(${xOffset}px, ${yOffset}px, -${diff * 30}px) rotate(${rotation}deg) scale(${scale})`;
                                        opacity = 1 - diff * 0.18;
                                    } else {
                                        transform = 'translate3d(80px, 40px, -120px) rotate(8deg) scale(0.85)';
                                        opacity = 0;
                                    }

                                    return (
                                        <div
                                            key={inv.id}
                                            className={`invoice-card-stack-item ${isFront ? 'is-front' : 'is-stacked'} ${isHidden ? 'is-hidden' : ''}`}
                                            style={{
                                                transform,
                                                zIndex,
                                                opacity: isHidden ? 0 : opacity,
                                                pointerEvents: isFront ? 'auto' : isStacked ? 'auto' : 'none'
                                            }}
                                            onClick={() => {
                                                if (!isFront) setActiveIndex(idx);
                                            }}
                                        >
                                            <div className="invoice-paper-card">
                                                {/* Header of Invoice Card */}
                                                <div className="paper-card-header">
                                                    <div className="paper-tenant-info">
                                                        <span className="tenant-tag-pill">{inv.tag}</span>
                                                        <h4 className="paper-tenant-name">{inv.tenant}</h4>
                                                        <div className="paper-meta-row">
                                                            <span className="meta-number">{inv.invoiceNo}</span>
                                                            <span className="meta-bullet">&bull;</span>
                                                            <span className="meta-date">{inv.date}</span>
                                                        </div>
                                                    </div>

                                                    <div className="paper-status-wrap">
                                                        <span className="badge-lunas">
                                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                                <polyline points="20 6 9 17 4 12" />
                                                            </svg>
                                                            LUNAS
                                                        </span>
                                                        <span className="paper-amount">{inv.amountFormatted}</span>
                                                    </div>
                                                </div>

                                                {/* Invoice Image Preview */}
                                                <div 
                                                    className="paper-image-wrap" 
                                                    onClick={(e) => {
                                                        if (isFront) {
                                                            e.stopPropagation();
                                                            setLightboxImage(inv);
                                                        }
                                                    }}
                                                    title={isFront ? "Klik untuk memperbesar faktur" : "Klik untuk membuka kartu ini"}
                                                >
                                                    <img 
                                                        src={inv.image} 
                                                        alt={`Faktur ${inv.tenant} - ${inv.invoiceNo}`}
                                                        className="paper-preview-img"
                                                        loading="lazy"
                                                    />

                                                    {/* Hover zoom icon on front card */}
                                                    {isFront && (
                                                        <div className="paper-zoom-overlay">
                                                            <span className="zoom-chip">
                                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                    <circle cx="11" cy="11" r="8" />
                                                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                                    <line x1="11" y1="8" x2="11" y2="14" />
                                                                    <line x1="8" y1="11" x2="14" y2="11" />
                                                                </svg>
                                                                Perbesar Pratinjau
                                                            </span>
                                                        </div>
                                                    )}

                                                    {/* Official Stamp Watermark */}
                                                    <div className="paper-official-stamp">
                                                        <span>KALIBRAOS OFFICIAL</span>
                                                        <strong>PAID IN FULL</strong>
                                                    </div>
                                                </div>

                                                {/* Action Bar */}
                                                <div className="paper-card-footer">
                                                    <div className="paper-notes">
                                                        <span className="notes-icon">📌</span>
                                                        <span className="notes-text">{inv.notes}</span>
                                                    </div>

                                                    <div className="paper-action-buttons">
                                                        <button
                                                            type="button"
                                                            className="btn-paper-zoom"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setLightboxImage(inv);
                                                            }}
                                                        >
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                                <circle cx="11" cy="11" r="8" />
                                                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                            </svg>
                                                            Perbesar
                                                        </button>

                                                        <a
                                                            href={encodeURI(inv.pdf)}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn-paper-pdf"
                                                            onClick={(e) => e.stopPropagation()}
                                                            title="Buka dokumen PDF asli di tab baru"
                                                        >
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                                <polyline points="14 2 14 8 20 8" />
                                                                <line x1="16" y1="13" x2="8" y2="13" />
                                                                <line x1="16" y1="17" x2="8" y2="17" />
                                                                <polyline points="10 9 9 9 8 9" />
                                                            </svg>
                                                            Buka PDF Asli ↗
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Tenant Selector Thumbnails Ribbon */}
                            <div className="stack-tenant-selector">
                                <span className="selector-title">Pilih Cepat Tenant:</span>
                                <div className="selector-pills-row">
                                    {INVOICES_DATA.map((inv, idx) => (
                                        <button
                                            key={inv.id}
                                            type="button"
                                            className={`selector-pill-btn ${idx === activeIndex ? 'active' : ''}`}
                                            onClick={() => setActiveIndex(idx)}
                                        >
                                            <span className="pill-num">0{idx + 1}</span>
                                            <span className="pill-name">{inv.tenant}</span>
                                            {idx === activeIndex && <span className="pill-active-dot"></span>}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* ================= MODE 2: GALERI RAPI (GRID VIEW) ================= */
                        <div className="invoices-grid-stage">
                            <div className="invoices-grid-container">
                                {INVOICES_DATA.map((inv, idx) => (
                                    <div 
                                        key={inv.id} 
                                        className="invoice-grid-card"
                                        onClick={() => setLightboxImage(inv)}
                                    >
                                        <div className="grid-card-top">
                                            <div className="grid-badge-row">
                                                <span className="grid-index-badge">#{idx + 1}</span>
                                                <span className="badge-lunas-mini">LUNAS</span>
                                            </div>
                                            <h4 className="grid-tenant-name">{inv.tenant}</h4>
                                            <div className="grid-invoice-no">{inv.invoiceNo} &bull; {inv.date}</div>
                                        </div>

                                        <div className="grid-image-wrap">
                                            <img 
                                                src={inv.image} 
                                                alt={`Faktur ${inv.tenant}`}
                                                className="grid-thumbnail-img"
                                                loading="lazy"
                                            />
                                            <div className="grid-zoom-hint">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="11" cy="11" r="8" />
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="grid-card-bottom">
                                            <div className="grid-amount-row">
                                                <span className="grid-price-label">Nominal:</span>
                                                <span className="grid-price-value">{inv.amountFormatted}</span>
                                            </div>
                                            <a
                                                href={encodeURI(inv.pdf)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="grid-btn-pdf"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <span>PDF Asli</span>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="7" y1="17" x2="17" y2="7" />
                                                    <polyline points="7 7 17 7 17 17" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* 3. Footer Summary Strip */}
                <div className="invoices-drawer-footer">
                    <div className="footer-metric-pill">
                        <span className="metric-label">Omzet 5 Tenant Baru:</span>
                        <span className="metric-val text-green">Rp 14.950.000</span>
                    </div>
                    <div className="footer-metric-divider"></div>
                    <div className="footer-metric-pill">
                        <span className="metric-label">Total Omzet Kumulatif:</span>
                        <span className="metric-val">Rp 20.930.000 (7 Outlet)</span>
                    </div>
                    <div className="footer-metric-divider"></div>
                    <div className="footer-metric-pill">
                        <span className="metric-label">Rata-rata Nilai Kontrak:</span>
                        <span className="metric-val">Rp 2.990.000 / Outlet</span>
                    </div>
                    <div className="footer-metric-divider"></div>
                    <div className="footer-metric-pill">
                        <span className="metric-label">Status Tagihan:</span>
                        <span className="metric-val text-green">100% Lunas (0 Piutang)</span>
                    </div>
                </div>
            </div>

            {/* Lightbox Fullscreen Modal */}
            {lightboxImage && (
                <div 
                    className="invoice-lightbox-overlay" 
                    onClick={() => setLightboxImage(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div 
                        className="invoice-lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="lightbox-top-bar">
                            <div className="lightbox-title-box">
                                <span className="lightbox-badge">Pratinjau Resolusi Tinggi</span>
                                <h4>{lightboxImage.tenant} — {lightboxImage.invoiceNo}</h4>
                                <span className="lightbox-sub">{lightboxImage.client} &bull; {lightboxImage.amountFormatted} &bull; LUNAS</span>
                            </div>
                            <div className="lightbox-actions">
                                <a
                                    href={encodeURI(lightboxImage.pdf)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-lightbox-pdf"
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                    </svg>
                                    Buka PDF Asli ↗
                                </a>
                                <button
                                    type="button"
                                    className="btn-lightbox-close"
                                    onClick={() => setLightboxImage(null)}
                                    aria-label="Tutup Pratinjau"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="lightbox-image-container">
                            <img 
                                src={lightboxImage.image} 
                                alt={`Detail Faktur ${lightboxImage.tenant}`}
                                className="lightbox-full-img"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    return createPortal(drawerContent, document.body);
}

