'use client';

import React from 'react';

export default function BeforeAfterP2MWSection() {
    return (
        <section className="p2mw-summary-section" id="ringkasan-p2mw">
            <div className="p2mw-summary-container">
                {/* Header */}
                <div className="p2mw-summary-header">
                    <h2 className="p2mw-summary-title">
                        Ringkasan Transformasi: <span>Sebelum &amp; Sesudah P2MW</span>
                    </h2>
                    <p className="p2mw-summary-desc">
                        Lompatan nyata kapabilitas teknis, kehandalan infrastruktur, sertifikasi tim, dan kesiapan sistem KalibraOS dari tahap prototipe awal menuju ekosistem teruji di pasar.
                    </p>
                </div>

                {/* 2-Columns Side-by-Side Grid */}
                <div className="p2mw-comparison-grid">
                    {/* ─── KOTAK 1: SEBELUM P2MW ─── */}
                    <div className="p2mw-column-card before-card">
                        <div className="p2mw-card-header">
                            <span className="p2mw-badge-tag">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                                <span>Sebelum P2MW</span>
                            </span>
                            <span className="p2mw-phase-label">Fase Validasi Awal</span>
                        </div>

                        <h3 className="p2mw-card-subtitle">
                            Infrastruktur Gratisan &amp; Fitur Sangat Terbatas
                        </h3>

                        {/* Mockup Browser Gambar Sebelum */}
                        <div className="p2mw-browser-mockup">
                            <div className="p2mw-browser-bar">
                                <div className="p2mw-browser-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="p2mw-browser-url">kalibra-demo.free-tier.app</div>
                            </div>
                            <div className="p2mw-browser-img-wrap">
                                <img 
                                    src="/assets/landing_page_sebelum_update.png" 
                                    alt="Landing Page KalibraOS Sebelum P2MW" 
                                    className="p2mw-browser-img"
                                />
                                <div className="p2mw-browser-caption">Landing Page Awal (Kasir Sederhana)</div>
                            </div>
                        </div>

                        {/* 4 Card Evaluasi Kritis */}
                        <div className="p2mw-points-list">
                            {/* Poin 1 */}
                            <div className="p2mw-point-card">
                                <div className="p2mw-point-icon">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                                    </svg>
                                </div>
                                <div className="p2mw-point-content">
                                    <div className="p2mw-point-title">Opsi Gratisan Hosting, Database &amp; Domain</div>
                                    <div className="p2mw-point-desc">
                                        Bergantung penuh pada layanan free-tier tanpa garansi SLA uptime, rentan limit kuota server, dan menggunakan subdomain gratisan.
                                    </div>
                                </div>
                            </div>

                            {/* Poin 2 */}
                            <div className="p2mw-point-card">
                                <div className="p2mw-point-icon">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                </div>
                                <div className="p2mw-point-content">
                                    <div className="p2mw-point-title">Celah Keamanan &amp; Kebocoran Data Belum Diketahui</div>
                                    <div className="p2mw-point-desc">
                                        Belum pernah melalui security audit atau uji penetrasi. Kerentanan kebocoran data dan celah keamanan transaksi tenant berisiko tinggi.
                                    </div>
                                </div>
                            </div>

                            {/* Poin 3 */}
                            <div className="p2mw-point-card">
                                <div className="p2mw-point-icon">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <line x1="18" y1="8" x2="23" y2="13"></line>
                                        <line x1="23" y1="8" x2="18" y2="13"></line>
                                    </svg>
                                </div>
                                <div className="p2mw-point-content">
                                    <div className="p2mw-point-title">Belum Ada Tim yang Tersertifikasi Resmi</div>
                                    <div className="p2mw-point-desc">
                                        Proses riset dan coding berjalan secara otodidak tanpa lisensi kompetensi profesi formal (BNSP) atau audit standar software engineering.
                                    </div>
                                </div>
                            </div>

                            {/* Poin 4 */}
                            <div className="p2mw-point-card">
                                <div className="p2mw-point-icon">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                                        <line x1="8" y1="6" x2="16" y2="6"></line>
                                        <line x1="16" y1="14" x2="16" y2="18"></line>
                                        <path d="M16 10h.01"></path>
                                        <path d="M12 10h.01"></path>
                                        <path d="M8 10h.01"></path>
                                        <path d="M12 14h.01"></path>
                                        <path d="M8 14h.01"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M8 18h.01"></path>
                                    </svg>
                                </div>
                                <div className="p2mw-point-content">
                                    <div className="p2mw-point-title">Nol Fitur Keuangan &amp; Perhitungan Auto HPP</div>
                                    <div className="p2mw-point-desc">
                                        Hanya aplikasi kasir dasar tanpa engine pemotongan stok bahan baku per resep saji (BOM) dan tanpa laporan akuntansi standar PSAK.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── KOTAK 2: SESUDAH P2MW (LAWAN DARI SEBELUM) ─── */}
                    <div className="p2mw-column-card after-card">
                        <div className="p2mw-card-header">
                            <span className="p2mw-badge-tag">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Sesudah P2MW (Monev)</span>
                            </span>
                            <span className="p2mw-phase-label">Fase Produksi &amp; Komersial</span>
                        </div>

                        <h3 className="p2mw-card-subtitle">
                            Infrastruktur Mandiri, Teruji Aman &amp; Terakreditasi
                        </h3>

                        {/* Mockup Browser Gambar Sesudah */}
                        <div className="p2mw-browser-mockup">
                            <div className="p2mw-browser-bar">
                                <div className="p2mw-browser-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="p2mw-browser-url">
                                    🔒 https://kalibra.id &bull; Resmi Didukung P2MW
                                </div>
                            </div>
                            <div className="p2mw-browser-img-wrap">
                                <img 
                                    src="/assets/landing_page_sesudah_update.png" 
                                    alt="Landing Page KalibraOS Sesudah P2MW" 
                                    className="p2mw-browser-img"
                                />
                                <div className="p2mw-browser-caption">Landing Page Modern (POS &amp; ERP F&amp;B Terpadu)</div>
                            </div>
                        </div>

                        {/* 4 Card Pencapaian Nyata (Lawan Langsung) */}
                        <div className="p2mw-points-list">
                            {/* Poin 1 */}
                            <div className="p2mw-point-card">
                                <div className="p2mw-point-icon">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div className="p2mw-point-content">
                                    <div className="p2mw-point-title">VPS Produksi Mandiri &amp; Domain Resmi Berbayar</div>
                                    <div className="p2mw-point-desc">
                                        Server VPS mandiri berkecepatan tinggi, domain kalibra.id resmi, garansi uptime 99.9%, dan arsitektur Local-First hemat biaya (Rp 2,13 Jt/tahun).
                                    </div>
                                </div>
                            </div>

                            {/* Poin 2 */}
                            <div className="p2mw-point-card">
                                <div className="p2mw-point-icon">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        <polyline points="9 12 11 14 15 10"></polyline>
                                    </svg>
                                </div>
                                <div className="p2mw-point-content">
                                    <div className="p2mw-point-title">Lolos Uji &amp; Audit Celah Keamanan (Zero Vulnerability)</div>
                                    <div className="p2mw-point-desc">
                                        Lolos penetration test ketat, database lokal terenkripsi aman di perangkat browser kasir (Dexie/IndexedDB), bebas risiko kebocoran data.
                                    </div>
                                </div>
                            </div>

                            {/* Poin 3 */}
                            <div className="p2mw-point-card">
                                <div className="p2mw-point-icon">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="8" r="7"></circle>
                                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                    </svg>
                                </div>
                                <div className="p2mw-point-content">
                                    <div className="p2mw-point-title">Tim Pengembang Tersertifikasi Resmi BNSP</div>
                                    <div className="p2mw-point-desc">
                                        SDM mengantongi Sertifikasi Kompetensi Nasional BNSP bidang Software Engineering &amp; Cyber Security, serta didampingi praktisi reviewer P2MW.
                                    </div>
                                </div>
                            </div>

                            {/* Poin 4 */}
                            <div className="p2mw-point-card">
                                <div className="p2mw-point-icon">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="1" x2="12" y2="23"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </div>
                                <div className="p2mw-point-content">
                                    <div className="p2mw-point-title">Fitur Akuntansi PSAK &amp; Perhitungan Auto HPP Resep BOM</div>
                                    <div className="p2mw-point-desc">
                                        Otomasi potong bahan presisi 0,1 gram per porsi, kalkulasi HPP riil otomatis, neraca dan laba rugi standar PSAK, serta diagram arus kas visual.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
