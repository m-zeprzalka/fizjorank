"use client";

import Link from "next/link";
import { HouseHeart } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();

    const handleRankingClick = (e: React.MouseEvent) => {
        if (pathname === "/") {
            e.preventDefault();
            document.getElementById("ranking")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-1">
                    <HouseHeart className="text-blue-600 w-6 h-6" />
                    <span className="font-semibold text-xl tracking-tight text-slate-900">
                        FizjoRank<span className="text-blue-600">.</span>
                    </span>
                </Link>

                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Baza Wiedzy – ukryte na mobile */}
                    <Link
                        href="/baza-wiedzy"
                        className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50"
                    >
                        Baza Wiedzy
                    </Link>

                    {/* Zobacz ranking – kotwica na stronie głównej, link na pozostałych */}
                    <Link
                        href="/#ranking"
                        onClick={handleRankingClick}
                        className="inline-flex items-center rounded-full text-sm font-semibold bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                        Zobacz ranking
                    </Link>
                </div>
            </div>
        </nav>
    );
}
