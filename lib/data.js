// ─── lib/data.js — Data Terstruktur KalibraOS Pitching Web-Deck ─────────────

// 1. Ticker Brands / Value Proposition Badges
export const brands = [
    { name: "100% Offline-First", src: "/assets/icons/offline.svg", tag: "Local-Edge Engine" },
    { name: "Resep Sub-Gram", src: "/assets/icons/recipe.svg", tag: "BOM Presisi" },
    { name: "Opsi Beli Putus", src: "/assets/icons/lifetime.svg", tag: "Bebas Sewa Abadi" },
    { name: "Kasir Kilat < 5 Detik", src: "/assets/icons/pos.svg", tag: "Anti Antrean" },
    { name: "Multi-Outlet Ready", src: "/assets/icons/multi.svg", tag: "Skalabilitas Cepat" },
    { name: "Auto HPP & Margin", src: "/assets/icons/finance.svg", tag: "Transparan" },
    { name: "Kedaulatan Data 100%", src: "/assets/icons/data.svg", tag: "Milik Pengusaha" },
    { name: "Local-Edge IndexedDB", src: "/assets/icons/database.svg", tag: "Browser Native" }
];

// 2. Marquee Color Palette (Vibrant, Colorful & Modern Palette)
export const colors = [
    "#059669", // Emerald Green
    "#2563eb", // Ocean Blue
    "#ea580c", // Electric Orange
    "#7c3aed", // Royal Purple
    "#e11d48", // Crimson Rose
    "#0d9488", // Fresh Teal
    "#d97706", // Golden Amber
    "#4f46e5", // Electric Indigo
    "#0891b2", // Bright Cyan
    "#db2777"  // Vivid Magenta
];

// 3. Social / Contact Links
export const SOCIAL_ICONS = [
    {
        href: 'https://wa.me/6281234567890',
        label: 'WhatsApp',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>'
    },
    {
        href: 'mailto:kontak@kalibra-os.app',
        label: 'Email',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
    },
    {
        href: 'https://github.com/kotchicenter/kalibra',
        label: 'GitHub',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>'
    }
];

// 4. Empat Masalah Nyata UMKM (untuk MotionCards)
export const PROBLEM_CARDS = [
    {
        id: 'problem-1',
        number: '01',
        title: 'Ketergantungan Internet',
        subtitle: 'Kasir Cloud Lumpuh Total',
        stat: '82% Outlet Mengalami Gangguan',
        statColor: '#ef4444',
        desc: 'Saat koneksi WiFi drop di jam sibuk, kasir cloud mandek. Pesanan menumpuk dan pelanggan komplain karena nota tidak bisa dicetak.',
        floatingLabel: 'WiFi mati = kasir mogok!',
        labelColor: 'pink',
        image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'problem-2',
        number: '02',
        title: 'Beban Sewa Abadi',
        subtitle: 'Biaya Langganan Menguras Kas',
        stat: 'Rp 3jt – Rp 6jt per Tahun',
        statColor: '#f59e0b',
        desc: 'Sistem SaaS mewajibkan biaya bulanan terus menerus bahkan saat omzet sedang sepi. Pengusaha terancam kehilangan akses data jika telat bayar.',
        floatingLabel: 'Sewa abadi tanpa kepemilikan',
        labelColor: 'orange',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'problem-3',
        number: '03',
        title: 'Kebocoran Stok & HPP Buta',
        subtitle: 'Margin Menguap Tanpa Sadar',
        stat: '15% – 22% Margin Menguap',
        statColor: '#ef4444',
        desc: 'Tanpa takaran resep gramasi presisi (BOM), barista menuang bahan semaunya. Pemilik tidak tahu HPP aktual dan rugi diam-diam.',
        floatingLabel: 'Resep bocor = laba lenyap',
        labelColor: 'red',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'problem-4',
        number: '04',
        title: 'Pembukuan Terpisah',
        subtitle: 'Rekonsiliasi Manual Menjebak',
        stat: '2–3 Hari Rekonsiliasi Nota',
        statColor: '#6366f1',
        desc: 'Nota kasir dan faktur belanja bahan baku dicatat terpisah di buku atau Excel. Laba bersih riil sulit dihitung secara akurat.',
        floatingLabel: 'Rekonsiliasi nota berhari-hari',
        labelColor: 'orange',
        image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop'
    }
];

// 5. Tiga Pilar Solusi Kunci (untuk ServiceCards)
export const CARDS_DATA = [
    {
        color: 'green',
        sticker: 'offline',
        tag: 'Pilar 01 • Anti-Downtime',
        title: '100% Offline-First',
        headline: 'Kasir Tetap Gesit Meski Internet Padam Total',
        desc: 'Database lokal berjalan langsung di browser perangkat kasir (IndexedDB). Transaksi kilat di bawah 5 detik dan cetak struk lancar tanpa kuota internet.',
        services: [
            'Arsitektur Local-Edge tanpa ketergantungan server cloud',
            'Otomatis sinkronisasi data saat koneksi internet pulih',
            'Transaksi instan sub-detik tanpa loading spinner',
            'Nol downtime di jam sibuk pelanggan paling padat'
        ]
    },
    {
        color: 'darkblue',
        sticker: 'scale',
        tag: 'Pilar 02 • Presisi Margin',
        title: 'Resep Sub-Gram (BOM)',
        headline: 'Otomatis Potong Stok & Hitung HPP Riil per Cup',
        desc: 'Menghadirkan ketelitian ERP dalam genggaman kasir. Setiap penjualan menu otomatis mengkalkulasi bahan baku terpakai hingga 0.1 gram.',
        services: [
            'Manajemen Bill of Materials (BOM) multi-varian menu',
            'Kalkulasi otomatis HPP aktual & margin kotor transparan',
            'Peringatan dini batas minimum stok gudang (Reorder Point)',
            'Mencegah kebocoran takaran dan food waste bahan baku'
        ]
    },
    {
        color: 'orange',
        sticker: 'key',
        tag: 'Pilar 03 • Bebas Sewa',
        title: 'Opsi Beli Putus',
        headline: 'Kepemilikan Lisensi Sekali Bayar Selamanya',
        desc: 'Bebaskan kas UMKM dari beban sewa bulanan yang menjerat. Dapatkan kepemilikan lisensi seumur hidup dengan penghematan biaya software hingga 70%.',
        services: [
            'Skema Lifetime License hemat hingga 70% dalam 3 tahun',
            'Bebas risiko pemblokiran data saat omzet sedang turun',
            'Kedaulatan data transaksi 100% milik pengusaha penuh',
            'Tersedia opsi add-on cloud sync untuk multi-cabang'
        ]
    },
    {
        color: 'maroon',
        sticker: 'pos',
        tag: 'Pilar 04 • Kecepatan',
        title: 'Kasir POS Pintar',
        headline: 'Antarmuka Visual Intuitif, 5 Menit Mahir',
        desc: 'Didesain khusus untuk ritme cepat barista dan staf kasir. Tampilan sentuh ergonomis mempercepat antrean pesanan di meja depan.',
        services: [
            'Pencarian dan penambahan menu dalam 1 ketukan',
            'Mendukung Tunai, QRIS dinamis, dan Transfer Bank',
            'Cetak struk virtual & kompatibel printer Bluetooth/thermal',
            'Pencatatan shift kasir transparan dan anti-selisih'
        ]
    }
];

// 6. Komparasi Kompetitor (Head-to-Head)
export const COMPETITOR_COMPARISON = [
    {
        feature: 'Ketahanan Jaringan (Offline-First)',
        moka: { status: 'cross', text: 'Terbatas (Ketergantungan Cloud)' },
        odoo: { status: 'warning', text: 'Butuh Server Lokal Rumit' },
        kalibra: { status: 'check', text: '100% Offline-First Mandiri' }
    },
    {
        feature: 'Model Biaya Software',
        moka: { status: 'cross', text: 'Sewa Bulanan Wajib (Rp 3–6 Jt/thn)' },
        odoo: { status: 'cross', text: 'Biaya Konsultan Puluhan Juta' },
        kalibra: { status: 'check', text: 'Opsi Beli Putus (Sekali Bayar)' }
    },
    {
        feature: 'Manajemen Resep Sub-Gram (BOM)',
        moka: { status: 'cross', text: 'Terbatas (Hanya varian menu)' },
        odoo: { status: 'check', text: 'Ada (Namun setup kompleks)' },
        kalibra: { status: 'check', text: 'Presisi Sub-Gram Khusus F&B' }
    },
    {
        feature: 'Kecepatan Kasir di Jam Sibuk',
        moka: { status: 'check', text: 'Cepat (Hanya jika internet stabil)' },
        odoo: { status: 'cross', text: 'Lambat (Banyak form berbelit)' },
        kalibra: { status: 'check', text: 'Kilat (< 5 Detik per Transaksi)' }
    },
    {
        feature: 'Kemudahan Belajar (Learning Curve)',
        moka: { status: 'check', text: 'Cukup Mudah' },
        odoo: { status: 'cross', text: 'Sangat Sulit (Training lama)' },
        kalibra: { status: 'check', text: 'Sangat Intuitif (5 Menit Mahir)' }
    },
    {
        feature: 'Kedaulatan Kepemilikan Data',
        moka: { status: 'cross', text: 'Terkunci Vendor (Data di cloud pihak ke-3)' },
        odoo: { status: 'check', text: 'Mandiri' },
        kalibra: { status: 'check', text: '100% Berdaulat di Tangan Pemilik' }
    }
];

// 7. Profil Tim Founder & Dosen Pembimbing
export const TEAM_MEMBERS = [
    {
        name: 'Abdur Rouf',
        role: 'CEO & Project Manager',
        nim: 'Founder & Business Lead',
        initials: 'AR',
        color: '#059669',
        bio: 'Memimpin visi strategis produk, validasi model bisnis, dan kemitraan strategis outlet F&B.'
    },
    {
        name: 'Adam Paundra Mahmud',
        role: 'CTO / Tech Lead',
        nim: 'Full-Stack Architecture',
        initials: 'AP',
        color: '#7c3aed',
        bio: 'Merancang arsitektur Local-Edge IndexedDB, engine sinkronisasi data offline-first, dan keamanan sistem.'
    },
    {
        name: 'Wahyu Tegar Faidzin',
        role: 'CFO / Finance & Marketing',
        nim: 'Financial Modeling & GTM',
        initials: 'WT',
        color: '#8b5cf6',
        bio: 'Mengelola struktur biaya HPP, strategi pricing beli putus, proyeksi arus kas, dan penetrasi pasar UMKM.'
    },
    {
        name: 'Ahmad Rafi Hidayattullah',
        role: 'Product Lead & QA Tester',
        nim: 'UX Research & Quality',
        initials: 'RH',
        color: '#6d28d9',
        bio: 'Riset alur kerja kasir/barista lapangan, pengujian stabilitas offline sistem, dan optimasi kepuasan mitra.'
    }
];

export const MENTOR = {
    name: 'Via Lailatur Rizki, S.E., M.M.',
    role: 'Dosen Pembimbing & Konsultan Bisnis',
    institution: 'Pendampingan Inkubasi & Validasi Pasar'
};

// 8. Roadmap Pengembangan 4 Fase
export const ROADMAP_PHASES = [
    {
        phase: 'Fase 1 (Bulan 1–2)',
        title: 'Core Engine & Pilot Outlet',
        status: 'SELESAI',
        items: ['Arsitektur IndexedDB Local Edge', 'Modul Kasir POS Kilat & Struk', 'Validasi Pilot Test di Mitra Kotchi']
    },
    {
        phase: 'Fase 2 (Bulan 3–4)',
        title: 'BOM Engine & Auto HPP',
        status: 'SEDANG BERJALAN',
        items: ['Formula kalkulator gramasi resep', 'Otomatisasi pemotongan stok gudang', 'Dasbor analitik margin per cup']
    },
    {
        phase: 'Fase 3 (Bulan 5–6)',
        title: 'Cloud Sync & Lisensi Beli Putus',
        status: 'RENCANA',
        items: ['Engine auto-sync multi-perangkat', 'Portal aktivasi lisensi lifetime', 'Ekspansi ke 30+ outlet F&B']
    },
    {
        phase: 'Fase 4 (Bulan 7+)',
        title: 'Multi-Outlet & Ekosistem UMKM',
        status: 'RENCANA',
        items: ['Dasbor konsolidasi multi-cabang', 'Integrasi suplier bahan baku', 'Peluncuran nasional & B2B franchise']
    }
];

// Wiggle & Animation Config
export const WIGGLE_CONFIG = {
    logoTruus: 4,
    socials: 5,
    jobHeading: 1,
    googleMap: 1,
    email: 1,
    whatsapp: 1,
};

export const ANIMATION_CONFIG = {
    transitionScribble: {
        strokeWidthStart: "8%",
        strokeWidthMax: "31%",
        scale: 0.7,
        durationIn: 2.2,
        durationOut: 2.7
    }
};


// ─── 9. Market Sizing (TAM - SAM - SOM Kuantitatif) ─────────────────────────
export const MARKET_SIZING = {
    badge: "Analisis Pasar Kuantitatif",
    title: "Potensi & Ukuran Pasar F&B",
    desc: "Validasi pasar berbasis rujukan resmi data BPS Jawa Timur dan Dinas Koperasi & Usaha Mikro.",
    items: [
        {
            level: "TAM",
            scope: "Total Addressable Market",
            value: "240.133",
            unit: "UMK Kuliner",
            area: "Jawa Timur",
            source: "Rujukan Resmi BPS Jatim",
            desc: "Populasi agregat Usaha Mikro & Kecil sektor makanan & minuman di seluruh provinsi Jawa Timur.",
            color: "#8b5cf6",
            highlight: false
        },
        {
            level: "SAM",
            scope: "Serviceable Addressable Market",
            value: "3.000",
            unit: "Gerai Tetap",
            area: "Kab. Lumajang",
            source: "Data Dinas Koperasi & UKM",
            desc: "Unit usaha kafe, resto kasual, dan kedai olahan resep yang beroperasi dengan gerai fisik tetap di Lumajang.",
            color: "#7c3aed",
            highlight: false
        },
        {
            level: "SOM",
            scope: "Serviceable Obtainable Market",
            value: "200",
            unit: "Tenant Sasaran",
            area: "Konsolidasi Awal",
            source: "Target Penetrasi 6.6% SAM",
            desc: "Target realistis adopsi sistem fase pertama dengan penetrasi 6,6% dari populasi gerai tetap sasaran.",
            color: "#10b981",
            highlight: true
        }
    ]
};

// ─── 10. Traksi Bisnis & Penjualan Riil ─────────────────────────────────────
export const BUSINESS_TRACTION = {
    badge: "Traksi Riil & Pertumbuhan",
    title: "Traction Bisnis & Penjualan Riil",
    desc: "Rekapitulasi performa komersial dan validasi pasar riil dari kemitraan tenant UMKM aktif.",
    stats: [
        {
            label: "Total Omzet Penjualan",
            value: "Rp 20.930.000",
            growth: "+250% Pertumbuhan",
            subtext: "7 Tenant Paket Lifetime Deal",
            color: "#10b981",
            icon: "cash"
        },
        {
            label: "Tenant UMKM Aktif",
            value: "7 Outlet",
            growth: "+5 Tenant Baru",
            subtext: "Tumbuh dari 2 tenant awal",
            color: "#7c3aed",
            icon: "store"
        },
        {
            label: "Penyerapan Dana P2MW",
            value: "Rp 10.500.000",
            growth: "100% Efektif",
            subtext: "Fasilitasi SDM, HAKI & Kebutuhan P2MW",
            color: "#06b6d4",
            icon: "server"
        },
        {
            label: "Laba Bersih Usaha",
            value: "Rp 18.800.000",
            growth: "Net Margin 89.8%",
            subtext: "Beban Ops Server 1 Thn: Rp 2,13 Jt",
            color: "#f59e0b",
            icon: "chart"
        }
    ],
    growthPoints: [
        {
            title: "Stabilitas Stok HPP",
            detail: "0% kebocoran takaran pada barista tenant yang patuh SOP resep sub-gram."
        },
        {
            title: "Siklus Kas Sehat",
            detail: "Surplus kas bersih gabungan sebesar Rp 15.160.000 menjamin ketahanan operasional jangka panjang."
        },
        {
            title: "Konversi Fleksibel",
            detail: "Opsi pembayaran bertempo 3x cicilan terbukti mempermudah penutupan transaksi (closing) tenant baru."
        }
    ]
};

// ─── 11. Model Bisnis & Skema Harga ───────────────────────────────────────
export const BUSINESS_MODEL = {
    badge: "Model Bisnis & Strategi Monetisasi",
    title: "Hybrid Revenue & Skema Harga Fleksibel",
    desc: "Mengharmonisasikan pendapatan kas instan (Lifetime Deal) dengan aliran kas bulanan berulang yang fleksibel bagi UMKM.",
    pricing: [
        {
            name: "Starter",
            badge: "Uji Coba Gratis",
            price: "Gratis",
            period: "uji coba 1 bulan (30 hari)",
            subPeriod: "Tanpa risiko & komitmen awal",
            desc: "Uji coba sistem kasir offline-first mandiri bagi UMKM rintisan sebelum memilih modul atau lisensi tetap.",
            features: [
                "Kasir POS offline-first mandiri",
                "Katalog menu & pencatatan pesanan",
                "Laporan ringkasan penjualan harian",
                "Akses uji coba penuh selama 30 hari"
            ],
            cta: "Coba Gratis 30 Hari",
            isPopular: false
        },
        {
            name: "Rakitan",
            badge: "Modul Pilihan",
            price: "Rp 15k – 55k+",
            period: "/ modul / bulan",
            subPeriod: "Bebas pilih modul spesifik",
            desc: "Bebas memilih modul fitur tertentu sesuai kebutuhan operasional outlet, diperbarui per bulan.",
            features: [
                "Logo Perusahaan di Struk (Rp 15k/bln)",
                "CRM & Program Loyalitas (Rp 39k/bln)",
                "Manajemen Stok Lanjutan & Waste (Rp 49k/bln)",
                "Analisis Keuangan & Laba Rugi (Rp 49k/bln)",
                "Branding Kustom Aplikasi (Rp 55k/bln)"
            ],
            cta: "Rakit Modul Sendiri",
            isPopular: false
        },
        {
            name: "Fitur Pro",
            badge: "Solusi Lengkap",
            price: "Rp 99.000",
            period: "/ bulan",
            subPeriod: "atau Rp 990.000 / tahun (Hemat 2 Bulan)",
            desc: "Akses seluruh modul operasional F&B terlengkap untuk efisiensi bisnis maksimal.",
            features: [
                "Semua modul rakitan otomatis aktif",
                "Manajemen resep sub-gram & BOM presisi",
                "Kalkulasi HPP & margin otomatis per cup",
                "Laporan laba rugi lengkap & kasir kilat",
                "Dukungan teknis prioritas & pembaruan berkala"
            ],
            cta: "Paket Operasional Penuh",
            isPopular: false
        },
        {
            name: "Kalibra Lifetime Deal",
            badge: "Paling Diminati UMKM",
            price: "Rp 2.990.000",
            period: "sekali bayar selamanya",
            subPeriod: "Bebas biaya sewa seumur hidup",
            desc: "Pilihan utama mitra tenant. Kepemilikan software mandiri seumur hidup tanpa bayar iuran bulanan abadi.",
            features: [
                "Lisensi selamanya bebas biaya sewa",
                "Manajemen resep sub-gram (BOM presisi)",
                "Kalkulasi HPP & margin otomatis per cup",
                "Kedaulatan data transaksi 100% lokal",
                "Hemat biaya IT hingga 70% dalam 3 tahun"
            ],
            cta: "Driver Kas Utama",
            isPopular: true
        }
    ]
};

// ─── 12. Legalitas, Standarisasi & Kredibilitas ──────────────────────────────
export const TRUST_GOVERNANCE = {
    badge: "Legalitas & Tata Kelola",
    title: "Kredibilitas, Standarisasi & Kepatuhan",
    desc: "KalibraOS beroperasi di atas payung hukum formal, standar keamanan data independen teruji, dan sertifikasi profesi.",
    items: [
        {
            category: "Legalitas Usaha",
            title: "NIB (Nomor Induk Berusaha)",
            status: "Resmi Terbit",
            number: "KBLI Aktivitas Pengembangan Software",
            desc: "Izin operasional berusaha resmi terdaftar pada sistem OSS Kementerian Investasi / BKPM RI.",
            badgeColor: "#10b981"
        },
        {
            category: "Perlindungan HAKI",
            title: "DJKI Kemenkumham RI",
            status: "Terdaftar Resmi",
            number: "Merek Dagang & Hak Cipta Software",
            desc: "Permohonan perlindungan merek dagang 'Kalibra OS' dan hak cipta perangkat lunak terdaftar.",
            badgeColor: "#7c3aed"
        },
        {
            category: "Audit Keamanan",
            title: "Audit Keamanan Sagamuda",
            status: "Grade A+ Certified",
            number: "No. SAGAMUDA-REP-2025-KLB01",
            desc: "Pengujian penetrasi independen (Pentest) berstandar industri: 0 celah kritis dan proteksi 18+ RBAC slugs.",
            badgeColor: "#06b6d4"
        },
        {
            category: "Kompetensi SDM",
            title: "Sertifikasi Profesi BNSP",
            status: "Tersertifikasi Nasional",
            number: "Badan Nasional Sertifikasi Profesi",
            desc: "SDM tim pemodelan bisnis & pemasaran resmi mengantongi Sertifikat BNSP Digital Marketing.",
            badgeColor: "#f59e0b"
        }
    ]
};
