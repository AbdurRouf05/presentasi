'use client';

import { useState, useEffect } from 'react';

export default function FullscreenToggle() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const toggleFullscreen = () => {
            if (!document.fullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen().catch((err) => {
                        console.warn('Fullscreen request failed:', err);
                    });
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen().catch((err) => {
                        console.warn('Exit fullscreen failed:', err);
                    });
                }
            }
        };

        const handleKeyDown = (e) => {
            // Abaikan jika user sedang mengetik di input / textarea
            const targetTag = e.target?.tagName?.toUpperCase();
            if (targetTag === 'INPUT' || targetTag === 'TEXTAREA' || e.target?.isContentEditable) {
                return;
            }

            // Tombol 'F' atau 'f' (standar YouTube / slide presentation)
            // ATAU Shift + F / Alt + Shift + F
            if (e.key === 'f' || e.key === 'F' || e.code === 'KeyF') {
                // Hindari bentrok dengan Ctrl+F (browser search)
                if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    toggleFullscreen();
                }
            }
        };

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    // 100% Bersih: Tidak ada tombol apapun di UI
    return null;
}
