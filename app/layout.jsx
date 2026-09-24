import './globals.css';

export const metadata = {
    title: 'KalibraOS — Kasir & ERP 100% Offline-First | Presentation Deck',
    description: 'Operating System Kasir & ERP Terpadu untuk UMKM F&B Indonesia. Resep sub-gram presisi (BOM), 100% offline-first tanpa internet, dan opsi beli putus bebas sewa abadi.',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="id" suppressHydrationWarning>
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
