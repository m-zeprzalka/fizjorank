"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Star,
    MapPin,
    Search,
    Stethoscope,
    ChevronRight,
    Check,
} from "lucide-react";

type Center = {
    id: number;
    name: string;
    rating: number;
    address: string;
    tags: string[];
    pros: string[];
    isPromoted: boolean;
    url: string;
    slug: string;
};

export default function RankingSection({ centers }: { centers: Center[] }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCenters = centers.filter((center) => {
        const s =
            `${center.name} ${center.address} ${center.tags.join(" ")} ${center.pros.join(" ")}`.toLowerCase();
        return s.includes(searchQuery.toLowerCase());
    });

    return (
        <div className="bg-white">
            {/* Search bar */}
            <div className="border-b border-slate-100 bg-slate-50/60">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                            id="search-input"
                            type="text"
                            aria-label="Szukaj ośrodka rehabilitacji"
                            placeholder="Szukaj metody, schorzenia lub miasta (np. NDT-Bobath, Warszawa)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 bg-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Listing */}
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                    <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
                        Wyniki rankingu
                    </h2>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {filteredCenters.length} placówek
                    </span>
                </div>

                <div className="space-y-4">
                    {filteredCenters.map((center) => {
                        const isGold = center.id === 1;
                        const isSilver = center.id === 2;
                        const isBronze = center.id === 3;

                        let cardBorder = "border-slate-200";
                        let rankBadge = "text-slate-400 bg-slate-50";

                        if (isGold) {
                            cardBorder = "border-blue-600 shadow-md shadow-blue-900/5 ring-1 ring-blue-600";
                            rankBadge = "text-blue-700 bg-blue-50";
                        } else if (isSilver) {
                            cardBorder = "border-slate-300 shadow-sm";
                            rankBadge = "text-slate-700 bg-slate-100";
                        } else if (isBronze) {
                            cardBorder = "border-amber-200 shadow-sm";
                            rankBadge = "text-amber-800 bg-amber-50";
                        }

                        return (
                            <div
                                key={center.id}
                                className={`group bg-white rounded-2xl border p-6 transition-all hover:border-blue-300 hover:shadow-md ${cardBorder}`}
                            >
                                {/* Górna sekcja: numer + info + CTA w jednym wierszu na desktop */}
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                                    {/* Lewa kolumna: numer + treść */}
                                    <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-5">
                                        {/* Numerek – na mobile wiersz (nad tytułem), na sm+ kolumna obok */}
                                        <div className="shrink-0">
                                            <div
                                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-semibold text-base sm:text-lg border border-slate-100 ${rankBadge}`}
                                            >
                                                {center.id}
                                            </div>
                                        </div>

                                        {/* Treść */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-3 mb-1">
                                                <a
                                                    href={center.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer nofollow"
                                                    className="text-lg sm:text-xl font-semibold text-slate-900 hover:text-blue-600 transition-colors tracking-tight"
                                                >
                                                    {center.name}
                                                </a>
                                                {center.isPromoted && (
                                                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm">
                                                        Rekomendacja
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4 font-medium">
                                                <div className="flex items-center gap-1.5">
                                                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                                    <span className="text-slate-700">{center.rating}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="w-4 h-4 text-slate-400" />
                                                    {center.address}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {center.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-200"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Prawa kolumna: atuty + CTA */}
                                    <div className="lg:w-72 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100 pt-5 lg:pt-0 lg:pl-8">
                                        <ul className="space-y-2.5 mb-6">
                                            {center.pros.map((pro, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-2.5 text-sm text-slate-600"
                                                >
                                                    <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 stroke-[3]" />
                                                    <span className="leading-snug">{pro}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href={center.url}
                                            target="_blank"
                                            rel="noopener noreferrer nofollow"
                                        >
                                            <Button
                                                variant="ghost"
                                                className={`w-full justify-between h-12 px-4 rounded-xl border font-medium transition-all ${isGold
                                                    ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600 hover:text-white"
                                                    : "bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                                    }`}
                                            >
                                                <span className="flex items-center gap-2">
                                                    Strona placówki
                                                </span>
                                                <ChevronRight className="w-4 h-4 opacity-50" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {filteredCenters.length === 0 && (
                        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                            <Stethoscope className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                            <p className="text-lg text-slate-600 font-medium mb-4">
                                Brak wyników w naszej bazie.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setSearchQuery("")}
                                className="bg-white"
                            >
                                Wróć do pełnej listy
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
