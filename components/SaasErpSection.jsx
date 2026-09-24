'use client';

import KalibraLogo from './KalibraLogo';

export default function SaasErpSection() {
    return (
        <section id="saas-erp" className="saas-erp-section" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '95px 24px 35px', // Ample clearance beneath fixed navbar
            backgroundColor: '#7c3aed', // Solid Kalibra Lavender Purple
            color: '#ffffff',
            position: 'relative',
            boxSizing: 'border-box'
        }}>
            <div style={{ maxWidth: '1140px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                
                {/* ─── Compact Header ─── */}
                <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                    <h2 style={{
                        fontFamily: "'Epilogue', sans-serif",
                        fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.15,
                        color: '#ffffff',
                        maxWidth: '850px',
                        margin: '0 auto 12px auto'
                    }}>
                        Memahami SaaS, ERP, dan Solusi KalibraOS
                    </h2>

                    <p style={{
                        fontSize: '1rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        maxWidth: '740px',
                        margin: '0 auto',
                        lineHeight: 1.55
                    }}>
                        Dua kategori software yang selama ini terpisah: kemudahan kasir penjualan di meja depan dan ketelitian sistem manajemen operasional di belakang. KalibraOS hadir menyatukan keduanya.
                    </p>
                </div>

                {/* ─── 3 Compact Minimalist Cards (Fits 1 Screen) ─── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                    gap: '20px',
                    marginBottom: 0
                }}>
                    {/* Card 1: SaaS */}
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '24px',
                        color: '#0f172a',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <span style={{
                                    padding: '3px 8px',
                                    borderRadius: '5px',
                                    background: '#f1f5f9',
                                    color: '#64748b',
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase'
                                }}>
                                    Layanan Cloud
                                </span>
                                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
                                    Moka POS, Majoo
                                </span>
                            </div>

                            <h3 style={{
                                fontFamily: "'Epilogue', sans-serif",
                                fontSize: '1.28rem',
                                fontWeight: 800,
                                color: '#0f172a',
                                marginBottom: '8px'
                            }}>
                                SaaS <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#64748b' }}>(Software as a Service)</span>
                            </h3>

                            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                                Software siap pakai yang diakses via internet dengan sistem sewa berkala. Praktis, mudah dipakai di berbagai perangkat tanpa instalasi rumit, namun sangat bergantung pada kestabilan internet dan biaya langganan yang berjalan terus-menerus.
                            </p>
                        </div>

                        <div style={{
                            marginTop: '18px',
                            paddingTop: '12px',
                            borderTop: '1px solid #e2e8f0',
                            fontSize: '0.78rem',
                            color: '#64748b',
                            fontWeight: 600
                        }}>
                            Karakter: <strong>Praktis, Cepat Pakai &amp; Sewa Cloud</strong>
                        </div>
                    </div>

                    {/* Card 2: ERP */}
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '24px',
                        color: '#0f172a',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <span style={{
                                    padding: '3px 8px',
                                    borderRadius: '5px',
                                    background: '#f1f5f9',
                                    color: '#64748b',
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase'
                                }}>
                                    Sistem Terpadu
                                </span>
                                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
                                    Odoo, SAP
                                </span>
                            </div>

                            <h3 style={{
                                fontFamily: "'Epilogue', sans-serif",
                                fontSize: '1.28rem',
                                fontWeight: 800,
                                color: '#0f172a',
                                marginBottom: '8px'
                            }}>
                                ERP <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#64748b' }}>(Enterprise Resource Planning)</span>
                            </h3>

                            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                                Sistem menyeluruh yang mengelola seluruh roda operasional bisnis—mulai dari manajemen stok bahan, resep produksi, hingga pembukuan keuangan. Sangat mendalam dan teliti, namun umumnya kompleks dan membutuhkan biaya penerapan yang tinggi.
                            </p>
                        </div>

                        <div style={{
                            marginTop: '18px',
                            paddingTop: '12px',
                            borderTop: '1px solid #e2e8f0',
                            fontSize: '0.78rem',
                            color: '#64748b',
                            fontWeight: 600
                        }}>
                            Karakter: <strong>Kontrol Menyeluruh &amp; Rantai Pasok Terpadu</strong>
                        </div>
                    </div>

                    {/* Card 3: KalibraOS (Hybrid Bridge) */}
                    <div style={{
                        background: '#0f172a',
                        borderRadius: '16px',
                        padding: '24px',
                        color: '#ffffff',
                        boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <span style={{
                                    padding: '3px 8px',
                                    borderRadius: '5px',
                                    background: '#7c3aed',
                                    color: '#ffffff',
                                    fontSize: '0.72rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase'
                                }}>
                                    SaaS ERP Terintegrasi
                                </span>
                                <KalibraLogo size={22} showWordmark={true} />
                            </div>

                            <h3 style={{
                                fontFamily: "'Epilogue', sans-serif",
                                fontSize: '1.28rem',
                                fontWeight: 800,
                                color: '#ffffff',
                                marginBottom: '8px'
                            }}>
                                KalibraOS <span style={{ fontSize: '0.82rem', fontWeight: 500, color: '#c4b5fd' }}>(Jembatan Solusi)</span>
                            </h3>

                            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                                Menyatukan kecepatan operasional kasir di garda depan dengan kekuatan sistem ERP di dapur dan gudang. Menghitung pemotongan bahan baku per porsi menu dan HPP secara otomatis di setiap transaksi, menghadirkan kendali bisnis utuh yang tetap gesit dan mudah dijalankan.
                            </p>
                        </div>

                        <div style={{
                            marginTop: '18px',
                            paddingTop: '12px',
                            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                            fontSize: '0.78rem',
                            color: '#a78bfa',
                            fontWeight: 700
                        }}>
                            Hasil: <strong>Kecepatan Kasir + Ketelitian ERP</strong>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
