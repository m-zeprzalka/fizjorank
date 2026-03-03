import Link from "next/link";
import { Activity, ChevronLeft, Star, MapPin, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Baza Wiedzy Rodzica – FizjoRank",
    description: "Artykuły i przewodniki dla rodziców dzieci wymagających rehabilitacji. Dowiedz się kiedy szukać pomocy, jak wybrać metodę terapii i jak ćwiczyć w domu.",
    alternates: { canonical: "https://fizjorank.pl/baza-wiedzy" },
};

const articles = [
    {
        slug: "kiedy-do-fizjoterapeuty",
        category: "Diagnostyka",
        title: "Kiedy udać się z niemowlakiem do fizjoterapeuty?",
        desc: "Asymetria, prężenie ciała, trudności w karmieniu. Poznaj wczesne sygnały ostrzegawcze.",
        time: "5 min czytania",
    },
    {
        slug: "ndt-bobath-vs-vojta",
        category: "Metodologia",
        title: "NDT-Bobath a Vojta – najważniejsze różnice",
        desc: "Dwie najpopularniejsze metody rehabilitacji dzieci. Czym się różnią i jak wybrać właściwą.",
        time: "8 min czytania",
    },
    {
        slug: "integracja-sensoryczna-cwiczenia",
        category: "Praktyka domowa",
        title: "Integracja Sensoryczna: ćwiczenia, które możesz robić w domu",
        desc: "Jak wspierać układ nerwowy dziecka codziennymi aktywnościami bez specjalistycznego sprzętu.",
        time: "6 min czytania",
    },
];

export default function BazaWiedzyPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* NAV */}
            <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Activity className="text-blue-600 w-6 h-6" />
                        <span className="font-semibold text-xl tracking-tight text-slate-900">
                            FizjoRank<span className="text-blue-600">.</span>
                        </span>
                    </Link>
                    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
                        <Link href="/" className="hover:text-slate-900 transition-colors">Ranking</Link>
                        <Link href="/baza-wiedzy" className="text-slate-900 font-semibold">Baza Wiedzy</Link>
                    </div>
                </div>
            </nav>

            {/* HEADER */}
            <header className="bg-slate-50/50 border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
                    <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                        Baza Wiedzy Rodzica
                    </h1>
                    <p className="text-lg text-slate-500 font-light max-w-2xl">
                        Merytoryczne przewodniki dla rodziców dzieci wymagających rehabilitacji.
                    </p>
                </div>
            </header>

            {/* ARTICLES */}
            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="space-y-6">
                    {articles.map((article, idx) => (
                        <Link
                            key={idx}
                            href={`/baza-wiedzy/${article.slug}`}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all group block"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{article.category}</span>
                                    <span className="text-xs text-slate-400">·</span>
                                    <span className="text-xs text-slate-400">{article.time}</span>
                                </div>
                                <h2 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                                    {article.title}
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed">{article.desc}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />
                        </Link>
                    ))}
                </div>
            </main>

            {/* FOOTER */}
            <footer className="bg-white border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
                    <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Wróć do rankingu
                    </Link>
                    <span className="text-xs text-slate-400">FizjoRank © 2026</span>
                </div>
            </footer>
        </div>
    );
}
