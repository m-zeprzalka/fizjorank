"use client";

import { useState } from 'react';
import centersData from '@/data/centers.json';
import { Badge } from "@/components/ui/badge";
import {
    Star,
    MapPin,
    Search,
    ChevronRight,
    Check,
    Sparkles,
    ArrowUpRight,
    Fingerprint
} from "lucide-react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCenters = centersData.filter(center => {
        const searchString = `${center.name} ${center.address} ${center.tags.join(' ')} ${center.pros.join(' ')}`.toLowerCase();
        return searchString.includes(searchQuery.toLowerCase());
    });

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-black selection:text-white">

            {/* FLOATING CAPSULE NAVIGATION */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
                <nav className="bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-3 flex items-center gap-8 md:gap-12 transition-all">
                    <div className="flex items-center gap-2">
                        <Fingerprint className="text-slate-900 w-5 h-5" />
                        <span className="font-bold text-lg tracking-tighter text-slate-900">FR.</span>
                    </div>
                    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
                        <a href="#" className="hover:text-black transition-colors">Ranking</a>
                        <a href="#" className="hover:text-black transition-colors">Metodologia</a>
                        <a href="#" className="hover:text-black transition-colors">Baza Wiedzy</a>
                    </div>
                    <button className="text-sm font-semibold bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition-transform">
                        Dla klinik
                    </button>
                </nav>
            </div>

            {/* HERO SECTION - "Editorial Tech" */}
            <header className="relative pt-40 pb-24 px-6 overflow-hidden">
                {/* Subtelna aura w tle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-slate-200/50 to-transparent blur-3xl -z-10 rounded-full opacity-50" />

                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    <Badge variant="outline" className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border-slate-200 bg-white/50 backdrop-blur-sm mb-8">
                        <Sparkles className="w-3.5 h-3.5 mr-2" /> Warszawa 2026
                    </Badge>

                    <h1 className="text-[3.5rem] md:text-[5.5rem] font-medium tracking-tighter text-slate-900 leading-[0.9] mb-8">
                        Rehabilitacja dziecięca. <br />
                        <span className="text-slate-400">Wyselekcjonowana.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl font-light leading-relaxed">
                        Odrzucamy szum informacyjny. Prezentujemy 20 najlepszych, zweryfikowanych placówek w Warszawie. Oparte na twardych danych medycznych.
                    </p>

                    {/* MAC-OS SPOTLIGHT SEARCH */}
                    <div className="w-full max-w-2xl relative group">
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none transition-transform group-focus-within:scale-110">
                            <Search className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Wpisz schorzenie, metodę lub lokalizację..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-6 py-5 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl text-lg focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] placeholder:text-slate-400 font-medium"
                        />
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none hidden md:flex">
                            <kbd className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] font-medium text-slate-500 font-mono">
                                ⌘ K
                            </kbd>
                        </div>
                    </div>
                </div>
            </header>

            {/* DIRECTORY GRID - Spatial Bento Design */}
            <main className="max-w-6xl mx-auto px-6 pb-32">
                <div className="flex items-end justify-between mb-10">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-slate-400">
                        Katalog Placówek
                    </h2>
                    <span className="text-xs font-bold font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded">
                        {filteredCenters.length} WYNIKÓW
                    </span>
                </div>

                <div className="flex flex-col gap-6">
                    {filteredCenters.map((center) => {
                        const isGold = center.id === 1;
                        const isSilver = center.id === 2;
                        const isBronze = center.id === 3;

                        // Kolorystyka "Aury" dla TOP 3
                        let auraColor = "from-slate-100 to-slate-200 text-slate-500";
                        if (isGold) auraColor = "from-amber-200 to-amber-400 text-amber-900";
                        if (isSilver) auraColor = "from-slate-200 to-slate-400 text-slate-800";
                        if (isBronze) auraColor = "from-orange-200 to-orange-400 text-orange-950";

                        return (
                            <div
                                key={center.id}
                                className="group relative bg-white rounded-[2rem] p-2 border border-slate-200/60 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-slate-300"
                            >
                                <div className="flex flex-col lg:flex-row h-full">

                                    {/* Left Bento Zone - Identity & Stats */}
                                    <div className="bg-[#FAFAFA] rounded-[1.5rem] p-6 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
                                        <div className="flex items-start justify-between z-10 relative">
                                            {/* Spatial Rank Badge */}
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl bg-gradient-to-br ${auraColor} shadow-inner`}>
                                                {center.id}
                                            </div>

                                            {center.isPromoted && (
                                                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-900 bg-white px-3 py-1.5 rounded-full shadow-sm">
                                                    <Sparkles className="w-3 h-3" /> Promowane
                                                </span>
                                            )}
                                        </div>

                                        <div className="mt-12 z-10 relative">
                                            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4 leading-none group-hover:text-black">
                                                {center.name}
                                            </h3>
                                            <div className="flex flex-col gap-2 text-sm font-medium">
                                                <div className="flex items-center gap-2 text-slate-900">
                                                    <Star className="w-4 h-4 fill-slate-900 text-slate-900" />
                                                    <span>{center.rating}</span>
                                                    <span className="text-slate-400 font-normal">({center.reviewCount} weryfikacji)</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-500">
                                                    <MapPin className="w-4 h-4" />
                                                    {center.address}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Bento Zone - Data & Actions */}
                                    <div className="p-6 lg:w-3/5 flex flex-col justify-between">
                                        <div>
                                            {/* Tagi jako minimalistyczne pigułki */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {center.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-wider rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Editorial Pros List */}
                                            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                                                {center.pros.map((pro, index) => (
                                                    <div key={index} className="flex items-start gap-3">
                                                        <div className="mt-0.5 w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                                                            <Check className="w-2.5 h-2.5 text-slate-900 stroke-[3]" />
                                                        </div>
                                                        <span className="text-sm text-slate-600 leading-snug">{pro}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                                            <a href={center.url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-medium transition-colors">
                                                    Profil kliniki <ArrowUpRight className="w-4 h-4" />
                                                </button>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}

                    {filteredCenters.length === 0 && (
                        <div className="py-32 flex flex-col items-center justify-center border border-slate-200 border-dashed rounded-[2rem] bg-white">
                            <span className="text-4xl mb-4 opacity-20">📡</span>
                            <p className="text-lg font-medium text-slate-900">Brak wyników w bazie danych.</p>
                            <p className="text-slate-500 text-sm mt-1 mb-6">Zmień parametry wyszukiwania.</p>
                            <button onClick={() => setSearchQuery("")} className="text-sm font-semibold border-b-2 border-slate-900 pb-0.5 hover:opacity-70 transition-opacity">
                                Resetuj filtry
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* EDITORIAL BLOG SECTION */}
            <section className="bg-slate-900 text-white py-32 px-6 rounded-t-[3rem] mt-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-800 pb-8">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-none">
                            Edukacja.<br />
                            <span className="text-slate-500">Dla świadomych rodziców.</span>
                        </h2>
                        <button className="flex items-center gap-2 text-sm font-semibold hover:text-slate-300 transition-colors uppercase tracking-widest">
                            Wszystkie publikacje <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { num: "01", title: "Sygnały ostrzegawcze u niemowląt", desc: "Kiedy asymetria lub prężenie ciała wymaga natychmiastowej interwencji fizjoterapeutycznej." },
                            { num: "02", title: "Analiza porównawcza: NDT-Bobath vs Vojta", desc: "Obiektywne zestawienie dwóch dominujących protokołów rehabilitacyjnych na świecie." },
                            { num: "03", title: "Domowa Integracja Sensoryczna", desc: "Praktyczne sposoby stymulacji układu nerwowego w warunkach pozaklinicznych." }
                        ].map((article, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <span className="text-slate-600 font-mono text-sm block mb-4 border-b border-slate-800 pb-2">{article.num}</span>
                                <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-slate-300 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-400 font-light leading-relaxed text-sm">
                                    {article.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BRUTALIST FOOTER */}
            <footer className="bg-black text-white px-6 pt-20 pb-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-[15vw] leading-none font-bold tracking-tighter text-slate-800 mb-10 select-none">
                        FIZJORANK.
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10 border-t border-slate-800 pt-10">
                        <div className="flex flex-wrap gap-8 text-sm font-semibold uppercase tracking-widest text-slate-400">
                            <a href="#" className="hover:text-white transition-colors">Prywatność</a>
                            <a href="#" className="hover:text-white transition-colors">Dla Klinik</a>
                            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
                        </div>
                        <p className="text-xs font-mono text-slate-600 text-right max-w-sm">
                            © 2026 WARSZAWA. DANE MAJĄ CHARAKTER INFORMACYJNY. KONSULTUJ DECYZJE MEDYCZNE Z LEKARZEM.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}