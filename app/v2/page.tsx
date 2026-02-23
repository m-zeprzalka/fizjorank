"use client";

import { useState } from 'react';
import centersData from '@/data/centers.json';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Star,
    MapPin,
    Search,
    Stethoscope,
    Activity,
    ShieldCheck,
    ChevronRight,
    Check,
    Award,
    BookOpen
} from "lucide-react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCenters = centersData.filter(center => {
        const searchString = `${center.name} ${center.address} ${center.tags.join(' ')} ${center.pros.join(' ')}`.toLowerCase();
        return searchString.includes(searchQuery.toLowerCase());
    });

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">

            {/* HEADER / NAVIGATION (Minimalist) */}
            <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Activity className="text-blue-600 w-6 h-6" />
                        <span className="font-semibold text-xl tracking-tight text-slate-900">FizjoRank<span className="text-blue-600">.</span></span>
                    </div>
                    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
                        <a href="#" className="hover:text-slate-900 transition-colors">Ranking</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Baza Wiedzy</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Dla Specjalistów</a>
                    </div>
                    <Button variant="outline" className="rounded-full text-sm font-medium border-slate-200">
                        Zgłoś placówkę
                    </Button>
                </div>
            </nav>

            {/* HERO SECTION - Clinical & Clean */}
            <header className="bg-slate-50/50 pt-20 pb-16 px-6 border-b border-slate-100">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-8">
                        <ShieldCheck className="w-4 h-4" />
                        Zweryfikowane Medycznie · 2026
                    </div>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.15]">
                        Znajdź sprawdzoną <br className="hidden md:block" />
                        <span className="text-blue-600">rehabilitację</span> dla dziecka
                    </h1>
                    <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Obiektywny ranking warszawskich placówek oparty na kwalifikacjach terapeutów, certyfikatach medycznych i zweryfikowanych opiniach pacjentów.
                    </p>

                    {/* MED-TECH SEARCH BAR */}
                    <div className="max-w-2xl mx-auto relative">
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Szukaj metody, schorzenia lub dzielnicy (np. NDT-Bobath, Mokotów)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 bg-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
                        />
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT - Directory Style */}
            <main className="max-w-6xl mx-auto px-6 py-12">

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
                        // Subtelne oznaczenia podium (Med-Tech Style)
                        const isGold = center.id === 1;
                        const isSilver = center.id === 2;
                        const isBronze = center.id === 3;

                        let cardBorder = 'border-slate-200';
                        let rankBadge = 'text-slate-400 bg-slate-50';
                        let rankIconColor = 'text-slate-400';

                        if (isGold) {
                            cardBorder = 'border-blue-600 shadow-md shadow-blue-900/5 ring-1 ring-blue-600';
                            rankBadge = 'text-blue-700 bg-blue-50';
                            rankIconColor = 'text-blue-600';
                        } else if (isSilver) {
                            cardBorder = 'border-slate-300 shadow-sm';
                            rankBadge = 'text-slate-700 bg-slate-100';
                            rankIconColor = 'text-slate-500';
                        } else if (isBronze) {
                            cardBorder = 'border-amber-200 shadow-sm';
                            rankBadge = 'text-amber-800 bg-amber-50';
                            rankIconColor = 'text-amber-600';
                        }

                        return (
                            <div
                                key={center.id}
                                className={`group bg-white rounded-2xl border p-6 transition-all hover:border-blue-300 hover:shadow-md flex flex-col lg:flex-row gap-8 ${cardBorder}`}
                            >
                                {/* Kolumna 1: Informacje Główne */}
                                <div className="flex-1 flex flex-col sm:flex-row gap-3 sm:gap-5">
                                    {/* Piktogram / Numer */}
                                    <div className="flex flex-row sm:flex-col items-center sm:items-center gap-2">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-semibold text-lg border border-slate-100 ${rankBadge}`}>
                                            {center.id}
                                        </div>
                                        {isGold && <Award className={`w-5 h-5 ${rankIconColor}`} />}
                                    </div>

                                    <div className="sm:pt-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                                                {center.name}
                                            </h3>
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
                                                <span className="text-slate-400 font-normal">({center.reviewCount} opinii)</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4 text-slate-400" />
                                                {center.address}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {center.tags.map(tag => (
                                                <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-200">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Kolumna 2: Atuty (Clinical style) */}
                                <div className="lg:w-72 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100 pt-5 lg:pt-0 lg:pl-8">
                                    <ul className="space-y-2.5 mb-6">
                                        {center.pros.map((pro, index) => (
                                            <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600">
                                                <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 stroke-[3]" />
                                                <span className="leading-snug">{pro}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a href={center.url} target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="ghost"
                                            className={`w-full justify-between h-12 px-4 rounded-xl border font-medium transition-all ${isGold
                                                ? 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 hover:bg-slate-50'
                                                : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                                }`}
                                        >
                                            Profil placówki <ChevronRight className="w-4 h-4 text-current opacity-70" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        );
                    })}

                    {filteredCenters.length === 0 && (
                        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                            <Stethoscope className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                            <p className="text-lg text-slate-600 font-medium mb-4">Brak wyników w naszej bazie.</p>
                            <Button variant="outline" onClick={() => setSearchQuery("")} className="bg-white">
                                Wróć do pełnej listy
                            </Button>
                        </div>
                    )}
                </div>
            </main>

            {/* BAZA WIEDZY - Clean & Authoritative */}
            <section className="bg-slate-50 py-20 border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                                <BookOpen className="w-4 h-4" /> Edukacja
                            </div>
                            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Baza Wiedzy Rodzica</h2>
                        </div>
                        <Button variant="link" className="text-blue-600 px-0 hover:text-blue-700">
                            Zobacz wszystkie artykuły <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                category: "Diagnostyka",
                                title: "Kiedy udać się z niemowlakiem do fizjoterapeuty?",
                                desc: "Asymetria, prężenie ciała, trudności w karmieniu. Poznaj wczesne sygnały ostrzegawcze.",
                                time: "5 min czytania"
                            },
                            {
                                category: "Metodologia",
                                title: "NDT-Bobath a Vojta - najważniejsze różnice",
                                desc: "Wyjaśniamy protokoły obu metod rehabilitacji na podstawie najnowszych wytycznych.",
                                time: "8 min czytania"
                            },
                            {
                                category: "Praktyka domowa",
                                title: "Integracja Sensoryczna: ćwiczenia w domu",
                                desc: "Jak wspierać układ nerwowy dziecka w warunkach domowych. Instruktaż dla rodziców.",
                                time: "6 min czytania"
                            }
                        ].map((article, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 transition-all cursor-pointer group shadow-sm hover:shadow-md">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{article.category}</span>
                                    <span className="text-xs text-slate-400">{article.time}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                                    {article.desc}
                                </p>
                                <div className="flex items-center text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
                                    Czytaj <ChevronRight className="w-4 h-4 ml-0.5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER - Minimalist */}
            <footer className="bg-white border-t border-slate-100 py-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Activity className="text-slate-400 w-5 h-5" />
                        <span className="font-semibold text-lg tracking-tight text-slate-900">FizjoRank<span className="text-blue-600">.</span></span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500 font-medium">
                        <a href="#" className="hover:text-slate-900 transition-colors">Polityka Prywatności</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Dla Specjalistów</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Kontakt</a>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-50 text-center">
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                        Ranking ma charakter wyłącznie informacyjny. Wszelkie niepokojące objawy u dziecka należy w pierwszej kolejności konsultować z lekarzem pediatrą lub neurologiem.
                    </p>
                </div>
            </footer>
        </div>
    );
}