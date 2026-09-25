'use client';

import SvgSymbols from '@/components/SvgSymbols';
import Navbar from '@/components/Navbar';
import VimeoHero from '@/components/VimeoHero';
import HorizontalWords from '@/components/HorizontalWords';
import SaasErpSection from '@/components/SaasErpSection';
import MotionCards from '@/components/MotionCards';
import ServiceCards from '@/components/ServiceCards';
import Showreel from '@/components/Showreel';
import BusinessModelSection from '@/components/BusinessModelSection';
import TractionSection from '@/components/TractionSection';
import MarketSizingSection from '@/components/MarketSizingSection';
import ScrollVelocity from '@/components/ScrollVelocity';
import DoubleMarquee from '@/components/DoubleMarquee';
import BeforeAfterP2MWSection from '@/components/BeforeAfterP2MWSection';
import Footer from '@/components/Footer';
import TransitionScribble from '@/components/TransitionScribble';
import CursorBubble from '@/components/CursorBubble';
import SmoothScroll from '@/components/SmoothScroll';
import FullscreenToggle from '@/components/FullscreenToggle';

export default function Home() {
    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            
            {/* 1. Header / Hero: Identitas Produk & Visi Offline-First [Krem / Light] */}
            <header className="main-header">
                <Navbar />
                <VimeoHero />
            </header>

            {/* 2. Hook 3 Nilai Utama: Offline-First, Resep Sub-Gram, Beli Putus [Krem / Light] */}
            <HorizontalWords />

            {/* Velocity Scroll Banner: Mengikuti Kecepatan Scroll User [Ungu Royal] */}
            <ScrollVelocity 
                texts={[
                    "KALIBRA OS • 100% OFFLINE-FIRST • ZERO DOWNTIME DI JAM SIBUK • RESEP SUB-GRAM • BELI PUTUS TANPA SEWA ABADI •",
                    "TRAKSI BISNIS RIIL RP 20,9 JUTA • MARGIN LABA 89.8% • BIAYA SERVER VPS HEMAT • HAK CIPTA & MEREK RESMI DJKI •"
                ]}
                baseVelocity={1.6}
            />

            <main style={{ position: 'relative', width: '100%' }}>
                {/* 1. KONSEP: Memahami SaaS, ERP, dan Solusi KalibraOS [UNGU ROYAL] */}
                <div className="overlap-section overlap-layer-1" style={{ backgroundColor: '#7c3aed' }}>
                    <SaasErpSection />
                </div>

                {/* 2. MASALAH: 4 Masalah Riil UMKM Lapangan [PUTIH BERSIH] */}
                <div className="overlap-section overlap-card overlap-layer-2 motion-cards-wrapper" style={{ backgroundColor: '#ffffff' }}>
                    <MotionCards />
                </div>

                {/* 3. SOLUSI: 4 Pilar Arsitektur & Kasir KalibraOS [UNGU ROYAL] */}
                <div className="overlap-section overlap-card overlap-layer-3 content-section service-cards-wrapper" style={{ backgroundColor: '#7c3aed' }}>
                    <ServiceCards />
                </div>

                {/* 4. KEUNGGULAN KOMPETITIF: Tabel Komparasi Head-to-Head [PUTIH BERSIH, TABEL UNGU] */}
                <div className="overlap-section overlap-card overlap-layer-4" style={{ backgroundColor: '#ffffff' }}>
                    <Showreel />
                </div>

                {/* 5. MODEL BISNIS: Hybrid Revenue & Unit Economics (Setelah Tabel) [UNGU ROYAL] */}
                <div className="overlap-section overlap-card overlap-layer-5" style={{ backgroundColor: '#7c3aed' }}>
                    <BusinessModelSection />
                </div>

                {/* 6. TRAKSI BISNIS: Omzet Rp 20,9 Jt, 7 Tenant (+250%), Laba 49.8% [PUTIH BERSIH] */}
                <div className="overlap-section overlap-card overlap-layer-6" style={{ backgroundColor: '#ffffff' }}>
                    <TractionSection />
                </div>

                {/* 7. POTENSI PASAR: TAM - SAM - SOM Kuantitatif [UNGU ROYAL] */}
                <div className="overlap-section overlap-card overlap-layer-7" style={{ backgroundColor: '#7c3aed' }}>
                    <MarketSizingSection />
                </div>

                {/* 8. RINGKASAN TRANSFORMASI: Sebelum & Sesudah P2MW [PUTIH BERSIH] */}
                <div className="overlap-section overlap-card overlap-layer-8" style={{ backgroundColor: '#ffffff' }}>
                    <BeforeAfterP2MWSection />
                </div>
            </main>

            {/* Kesiapan Fitur: Marquee Lencana Teknologi Berjalan [Krem / Light] */}
            <section className="Double-marquee" style={{ position: 'relative', zIndex: 90 }}>
                <DoubleMarquee />
            </section>

            {/* Tim Founder, Roadmap 3 Tahun & Kontak Interaktif [Ungu Gelap / Slate] */}
            <footer className="main-footer" style={{ position: 'relative', zIndex: 95 }}>
                <Footer />
            </footer>

            <FullscreenToggle />
            <TransitionScribble />
        </>
    );
}
