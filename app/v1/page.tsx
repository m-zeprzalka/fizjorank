"use client";

import { useState } from 'react';
import centersData from '@/data/centers.json';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, CheckCircle2, Trophy, ArrowRight, ShieldCheck, Search, BookOpen } from "lucide-react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    // Wyszukiwarka Real-Time (filtruje po wszystkich tekstach: nazwa, adres, tagi, plusy)
    const filteredCenters = centersData.filter(center => {
        const searchString = `${center.name} ${center.address} ${center.tags.join(' ')} ${center.pros.join(' ')}`.toLowerCase();
        return searchString.includes(searchQuery.toLowerCase());
    });

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-200">

            {/* HERO SECTION */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white pt-24 pb-20 px-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative max-w-4xl mx-auto text-center">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-4 py-1.5 rounded-full mb-6 text-sm font-medium shadow-sm transition-all">
                        ✨ Aktualizacja: Luty 2026
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
                        Znajdź najlepszą <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            rehabilitację dla dziecka
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Niezależny ranking 20 najlepszych warszawskich ośrodków. Oparty na opiniach rodziców, certyfikatach i doświadczeniu terapeutów.
                    </p>

                    {/* WYSZUKIWARKA (Real-time) */}
                    <div className="max-w-2xl mx-auto relative mb-8">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="w-6 h-6 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Szukaj: Mokotów, Vojta, Asymetria..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-full border border-slate-200 shadow-xl shadow-blue-900/5 text-lg focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all bg-white"
                        />
                    </div>
                </div>
            </div>

            {/* METODOLOGIA */}
            <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-10 mb-12">
                <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <ShieldCheck className="text-emerald-600 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">Weryfikujemy jakość</h3>
                            <p className="text-slate-500 text-sm">Sprawdzamy certyfikaty (NDT-Bobath, Vojta) i opinie.</p>
                        </div>
                    </div>
                    <div className="h-12 w-px bg-slate-200 hidden md:block" />
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Star className="text-amber-600 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">100% Obiektywizmu</h3>
                            <p className="text-slate-500 text-sm">Ranking oparty na twardych danych i zadowoleniu pacjentów.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RANKING LIST */}
            <main className="max-w-5xl mx-auto px-4 pb-24">

                {/* Licznik wyników dla wyszukiwarki */}
                {searchQuery && (
                    <div className="mb-6 text-slate-600 font-medium bg-blue-50 p-4 rounded-xl border border-blue-100">
                        Znaleziono wyników: <span className="text-blue-700 font-bold">{filteredCenters.length}</span> dla "{searchQuery}"
                    </div>
                )}

                <div className="space-y-6">
                    {filteredCenters.map((center) => {
                        // Logika kolorów dla PODIUM
                        const isGold = center.id === 1;
                        const isSilver = center.id === 2;
                        const isBronze = center.id === 3;

                        let cardStyle = 'border border-slate-100 shadow-lg shadow-slate-200/40 bg-white';
                        let badgeColors = '';
                        let avatarStyle = 'bg-slate-100 text-slate-500';
                        let buttonStyle = 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50';

                        if (isGold) {
                            cardStyle = 'border-2 border-amber-300/50 shadow-xl shadow-amber-500/10 bg-gradient-to-br from-white to-amber-50/30';
                            badgeColors = 'from-amber-400 to-orange-400 text-white';
                            avatarStyle = 'bg-gradient-to-br from-yellow-300 to-amber-500 text-white';
                            buttonStyle = 'bg-amber-500 hover:bg-amber-600 text-white border-none shadow-amber-500/20';
                        } else if (isSilver) {
                            cardStyle = 'border-2 border-slate-300 shadow-xl shadow-slate-500/10 bg-gradient-to-br from-white to-slate-50/40';
                            badgeColors = 'from-slate-400 to-slate-500 text-white';
                            avatarStyle = 'bg-gradient-to-br from-slate-300 to-slate-400 text-white';
                            buttonStyle = 'bg-slate-500 hover:bg-slate-600 text-white border-none shadow-slate-500/20';
                        } else if (isBronze) {
                            cardStyle = 'border-2 border-orange-300/70 shadow-xl shadow-orange-500/10 bg-gradient-to-br from-white to-orange-50/30';
                            badgeColors = 'from-orange-400 to-amber-700 text-white';
                            avatarStyle = 'bg-gradient-to-br from-orange-300 to-orange-500 text-white';
                            buttonStyle = 'bg-orange-600 hover:bg-orange-700 text-white border-none shadow-orange-500/20';
                        }

                        return (
                            <div key={center.id} className={`relative group rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${cardStyle}`}>

                                {/* Odznaka Podium */}
                                {(isGold || isSilver || isBronze) && (
                                    <div className={`absolute -top-3 right-6 bg-gradient-to-r ${badgeColors} text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5`}>
                                        <Trophy className="w-3.5 h-3.5" /> Miejsce {center.id}
                                    </div>
                                )}

                                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                    {/* Lewa Kolumna */}
                                    <div className="flex-1">
                                        <div className="flex items-start gap-4 mb-4">

                                            {/* Avatar / Miejsce na LOGO */}
                                            <div className={`flex items-center justify-center w-14 h-14 rounded-2xl font-black text-2xl flex-shrink-0 shadow-inner overflow-hidden ${avatarStyle}`}>
                                                {/* W przyszłości tu wrzucisz: <img src={`https://logo.clearbit.com/${center.domain}`} alt="logo" className="w-full h-full object-cover" /> */}
                                                #{center.id}
                                            </div>

                                            <div className="pt-1">
                                                <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight pr-4 group-hover:text-blue-600 transition-colors">
                                                    {center.name}
                                                </h2>
                                                <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                                                    <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-lg">
                                                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                                        {center.rating} <span className="opacity-70"></span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-slate-500 bg-slate-50 px-2 py-1 rounded-lg">
                                                        <MapPin className="w-4 h-4 text-slate-400" />
                                                        {center.address}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-6 ml-0 md:ml-18">
                                            {center.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Prawa Kolumna */}
                                    <div className="md:w-72 flex flex-col justify-between bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                                        <ul className="space-y-3 mb-6">
                                            {center.pros.map((pro, index) => (
                                                <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                                    <span className="leading-snug">{pro}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a href={center.url} target="_blank" rel="noopener noreferrer" className="mt-auto">
                                            <Button className={`w-full rounded-xl h-11 font-semibold transition-all group-hover:shadow-md ${buttonStyle}`}>
                                                Sprawdź ofertę <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Ekran pustych wyników wyszukiwania */}
                    {filteredCenters.length === 0 && (
                        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
                            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <p className="text-xl text-slate-600 font-medium mb-6">Nie znaleźliśmy ośrodków spełniających te kryteria.</p>
                            <Button variant="outline" onClick={() => setSearchQuery("")}>Wyczyść wyszukiwanie</Button>
                        </div>
                    )}
                </div>
            </main>

            {/* SEKCJA BLOGA */}
            <section className="bg-slate-900 py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <BookOpen className="text-blue-400 w-8 h-8" />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Baza Wiedzy Rodzica</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                tag: "Niemowlęta",
                                title: "Kiedy udać się z niemowlakiem do fizjoterapeuty?",
                                desc: "Asymetria, prężenie ciała, trudności w karmieniu. Poznaj 5 wczesnych sygnałów ostrzegawczych u najmłodszych."
                            },
                            {
                                tag: "Metody",
                                title: "NDT-Bobath a Vojta - najważniejsze różnice",
                                desc: "Wyjaśniamy główne różnice w popularnych metodach rehabilitacji i podpowiadamy, na co zwrócić uwagę przy wyborze."
                            },
                            {
                                tag: "Porady domowe",
                                title: "Integracja Sensoryczna (SI) w Twoim salonie",
                                desc: "Jak wspierać rozwój zmysłów dziecka przez codzienną zabawę? Proste ćwiczenia, które wykonasz w domu."
                            }
                        ].map((article, idx) => (
                            <div key={idx} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all group cursor-pointer">
                                <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 mb-4 border-none">{article.tag}</Badge>
                                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                    {article.desc}
                                </p>
                                <div className="flex items-center text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                    Czytaj artykuł <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-white border-t border-slate-200 text-slate-500 py-12 text-center px-4">
                <div className="max-w-4xl mx-auto space-y-6">
                    <p className="font-bold text-slate-900 text-xl tracking-tight">FizjoRank.pl</p>
                    <div className="flex justify-center gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-blue-600 transition-colors">Polityka Prywatności</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Dla Właścicieli Ośrodków</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Kontakt</a>
                    </div>
                    <p className="text-xs max-w-2xl mx-auto opacity-70 pt-6 border-t border-slate-100 leading-relaxed">
                        Ranking ma charakter wyłącznie informacyjny i nie zastępuje profesjonalnej porady medycznej. Zawsze konsultuj stan zdrowia swojego dziecka z lekarzem.
                    </p>
                </div>
            </footer>
        </div>
    );
}