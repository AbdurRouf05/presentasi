import { 
  WifiOff, 
  CloudOff, 
  Zap, 
  Smartphone, 
  Globe2, 
  Coins, 
  Trophy, 
  Rocket 
} from "lucide-react";

export interface SlideData {
  id: number;
  category: string;
  title: string;
  description: string;
  points: string[];
  image: string | null;
  orientation: 'portrait' | 'landscape';
  icon?: any; // Fallback icon
}

export const slides: SlideData[] = [
  {
    id: 1,
    category: "PROFIL & OVERVIEW",
    title: "Sinergo.ID",
    description: "Sistem Absensi Offline-First dengan Keamanan Tingkat Militer & Integrasi AI.", // Combined description
    points: [
      "Built by: Abdur Rouf (Mahasiswa Widyagama Lumajang Smt 6)",
      "10+ Modul Utama: Absensi, Cuti, Lembur, Admin Dashboard, dll.",
      "15+ Layanan Cerdas: AI Analysis, Auto-Sync, Geofencing, Device Binding.",
      "Keamanan Ekstrem: Anti-Mock Location, Anti-Emulator & Enkripsi DB."
    ],
    image: "/images/actionable_copilot.png",
    orientation: 'portrait',
    icon: Rocket
  },
  {
    id: 2,
    category: "THE PAIN",
    title: "12.000 Desa Tanpa Sinyal",
    description: "Bisnis dan NGO di pelosok kesulitan mengelola SDM secara akurat.",
    points: [
      "Absensi Kertas = Rawan Manipulasi",
      "Tidak Ada Data Real-time",
      "Ghost Workers (Karyawan Fiktif)"
    ],
    image: "/images/absen_maps.png",
    orientation: 'portrait',
    icon: WifiOff
  },
  {
    id: 3,
    category: "THE SOLUTION",
    title: "Hybrid Architecture",
    description: "Kombinasi teknologi terbaik untuk performa tanpa kompromi.",
    points: [
      "Flutter: Interfaz Halus & Responsif",
      "Isar Database: Penyimpanan Lokal Cepat",
      "PocketBase: Backend Ringan & Scalable"
    ],
    image: "/images/database.png",
    orientation: 'landscape',
    icon: Zap
  },
  {
    id: 4,
    category: "DEMO FLOW",
    title: "Seamless Experience",
    description: "Bekerja di mana saja, sinkronisasi saat Anda siap.",
    points: [
      "1. Login Aman (Biometrik/PIN)",
      "2. Absen Tanpa Internet",
      "3. Auto-Sync saat Sinyal Kembali",
      "4. AI Memberikan Insight Kinerja"
    ],
    image: "/images/login.png",
    orientation: 'portrait',
    icon: Smartphone
  },
  {
    id: 5,
    category: "MARKET SIZE",
    title: "Target SDG 8 & 9",
    description: "Menyasar sektor vital yang sering terabaikan teknologi.",
    points: [
      "64 Juta UMKM di Indonesia",
      "Perkebunan Sawit & Karet",
      "Pertambangan Remote Area"
    ],
    image: "/images/analitik.png",
    orientation: 'portrait',
    icon: Globe2
  },
  {
    id: 6,
    category: "BUSINESS MODEL",
    title: "Scalable Revenue",
    description: "Model fleksibel untuk adopsi massal hingga korporasi.",
    points: [
      "Community Edition: Gratis (Self-Hosted)",
      "Enterprise Cloud: Langganan per User",
      "Premium AI Report: Add-on Berbayar"
    ],
    image: "/images/titik_absen.png",
    orientation: 'portrait',
    icon: Coins
  },
  {
    id: 7,
    category: "ADVANTAGE",
    title: "Why We Win",
    description: "Keunggulan kompetitif yang nyata di lapangan.",
    points: [
      "Kompetitor Mati Tanpa Internet, Kita Hidup",
      "Arsitektur Hemat Resource (Baterai & Data)",
      "Integrasi AI Generatif"
    ],
    image: "/images/beranda.png",
    orientation: 'portrait',
    icon: Trophy
  },
  {
    id: 8,
    category: "VISION",
    title: "Demokratisasi Teknologi",
    description: "Membawa teknologi Enterprise ke pelosok desa.",
    points: [
      "Menghilangkan Kesenjangan Digital",
      "Memberdayakan Tenaga Kerja Lokal",
      "Keputusan Berbasis Data untuk Semua"
    ],
    image: "/images/splash_sync.png",
    orientation: 'portrait',
    icon: Rocket
  }
];
