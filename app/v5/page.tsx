"use client";

import { useState } from 'react';
import centersData from '@/data/centers.json';
import {
    Star,
    MapPin,
    Search,
    ChevronRight,
    CheckCircle2,
    ShieldCheck,
    Stethoscope,
    BookOpen,
    Activity
} from "lucide-react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCenters = centersData.filter(center => {
        const searchString = `${center.name} ${center.address} ${center.tags.join(' ')} ${center.pros.join(' ')}`.toLowerCase();
        return searchString.includes(searchQuery.toLowerCase());
    });

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">

            {/* SOLID, CLEAN NAVIGATION */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <Activity className="text-white w-5 h-5" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">
                            FizjoRank
                        </span>
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                        <a href="#" className="hover:text-blue-600 transition-colors">Ranking</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Edukacja</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Dla Specjalistów</a>
                    </div>
                    <button className="text-sm font-semibold bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                        Zgłoś błąd
                    </button>
                </div>
            </nav>

            {/* CLINICAL HERO SECTION */}
            <header className="bg-white border-b border-slate-200 pt-16 pb-20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-6">
                        <ShieldCheck className="w-4 h-4" /> Aktualizacja medyczna: Luty 2026
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Znajdź najlepszą rehabilitację <br className="hidden md:block" />
                        dla swojego dziecka
                    </h1>

                    <p className="text-lg text-slate-500 mb-10 leading-relaxed font-light">
                        Niezależny, weryfikowalny ranking warszawskich placówek. Oparty na analizie kompetencji terapeutów i doświadczeniach rodziców.
                    </p>

                    {/* ACCESSIBLE SEARCH BAR */}
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Szukaj metody (np. NDT-Bobath), schorzenia lub dzielnicy..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm text-base md:text-lg"
                        />
                    </div>
                </div>
            </header>

            {/* DIRECTORY LIST - High Legibility */}
            <main className="max-w-5xl mx-auto px-4 md:px-6 py-12">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-slate-900">Wyniki wyszukiwania</h2>
                    <span className="text-sm font-medium text-slate-500">
                        Znaleziono: {filteredCenters.length}
                    </span>
                </div>

                <div className="flex flex-col gap-4">
                    {filteredCenters.map((center) => {
                        // Med-Tech Subtle Podium
                        const isTop3 = center.id <= 3;
                        const rankBadgeColor =
                            center.id === 1 ? 'bg-blue-600 text-white' :
                                center.id === 2 ? 'bg-slate-700 text-white' :
                                    center.id === 3 ? 'bg-slate-500 text-white' :
                                        'bg-slate-100 text-slate-600';

                        return (
                            <div
                                key={center.id}
                                className={`bg-white rounded-2xl p-5 md:p-6 border transition-shadow duration-200 hover:shadow-md flex flex-col md:flex-row gap-6 ${isTop3 ? 'border-blue-100 shadow-sm' : 'border-slate-200'
                                    }`}
                            >
                                {/* Left: Identity & Key Info */}
                                <div className="flex-1 flex gap-4 md:gap-5">
                                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm ${rankBadgeColor}`}>
                                            {center.id}
                                        </div>
                                    </div>

                                    <div className="pt-0.5">
                                        <div className="flex items-center gap-3 mb-1.5">
                                            <h3 className="text-xl font-semibold text-slate-900 leading-tight">
                                                {center.name}
                                            </h3>
                                            {center.isPromoted && (
                                                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-100">
                                                    Rekomendacja
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 mb-4">
                                            <div className="flex items-center gap-1 font-medium text-slate-900">
                                                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                                {center.rating} <span className="text-slate-400 font-normal"></span>
                                            </div>
                                            <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block"></span>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4 text-slate-400" />
                                                {center.address}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5">
                                            {center.tags.map(tag => (
                                                <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-200">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Data & Action */}
                                <div className="md:w-72 flex flex-col justify-between pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                                    <ul className="space-y-2 mb-5">
                                        {center.pros.map((pro, index) => (
                                            <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                <span className="leading-snug">{pro}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a href={center.url} target="_blank" rel="noopener noreferrer" className="mt-auto">
                                        <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                                            Sprawdź placówkę <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        );
                    })}

                    {filteredCenters.length === 0 && (
                        <div className="py-20 flex flex-col items-center justify-center border-2 border-slate-200 border-dashed rounded-2xl bg-white">
                            <Stethoscope className="w-12 h-12 text-slate-300 mb-4" />
                            <p className="text-lg font-medium text-slate-900">Brak wyników</p>
                            <p className="text-slate-500 text-sm mt-1 mb-6">Spróbuj wpisać inną metodę lub dzielnicę.</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                            >
                                Wyczyść filtry
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* CLINICAL KNOWLEDGE BASE */}
            <section className="bg-white border-t border-slate-200 py-16 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-blue-50 p-2 rounded-lg">
                            <BookOpen className="text-blue-600 w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Edukacja Pacjenta</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                category: "Diagnostyka",
                                title: "Wczesne sygnały ostrzegawcze u niemowląt",
                                desc: "Kiedy asymetria, prężenie ciała lub problemy z karmieniem wymagają interwencji specjalisty."
                            },
                            {
                                category: "Porównanie metod",
                                title: "NDT-Bobath a Metoda Vojty",
                                desc: "Analiza dwóch najpopularniejszych protokołów rehabilitacyjnych. Różnice, wskazania i przebieg terapii."
                            },
                            {
                                category: "Profilaktyka",
                                title: "Integracja Sensoryczna w warunkach domowych",
                                desc: "Zestaw bezpiecznych ćwiczeń wspierających rozwój układu nerwowego do samodzielnego wykonywania w domu."
                            }
                        ].map((article, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer group">
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-3">
                                    {article.category}
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {article.desc}
                                </p>
                                <div className="flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    Czytaj artykuł <ChevronRight className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROFESSIONAL FOOTER */}
            <footer className="bg-slate-900 text-slate-400 py-12 px-4 md:px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-800 pb-8 mb-8">
                    <div className="flex items-center gap-2">
                        <Activity className="text-slate-500 w-5 h-5" />
                        <span className="font-bold text-xl tracking-tight text-white">FizjoRank</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-white transition-colors">O projekcie</a>
                        <a href="#" className="hover:text-white transition-colors">Regulamin</a>
                        <a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a>
                        <a href="#" className="hover:text-white transition-colors">Kontakt</a>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto text-center md:text-left text-xs leading-relaxed opacity-80">
                    <p className="mb-2">© 2026 FizjoRank. Wszelkie prawa zastrzeżone.</p>
                    <p>
                        Platforma FizjoRank ma charakter wyłącznie informacyjno-edukacyjny. Publikowane treści oraz rankingi nie zastępują profesjonalnej porady medycznej, diagnozy ani leczenia. W przypadku jakichkolwiek problemów zdrowotnych u dziecka, w pierwszej kolejności skonsultuj się z lekarzem specjalistą.
                    </p>
                </div>
            </footer>
        </div>
    );
}