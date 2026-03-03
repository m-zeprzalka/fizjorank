import Link from "next/link";
import { ChevronLeft, Star, MapPin, ChevronRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import centersData from "@/data/centers.json";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "NDT-Bobath a Vojta – różnice i wskazania – FizjoRank",
    description:
        "Czym różni się metoda NDT-Bobath od metody Vojty? Kiedy stosować każdą z nich? Praktyczny przewodnik dla rodziców dzieci kierowanych na rehabilitację.",
    alternates: {
        canonical: "https://fizjorank.pl/baza-wiedzy/ndt-bobath-vs-vojta",
    },
};

const recommendedIds = [1, 2, 19];
const recommendedCenters = centersData.filter((c) => recommendedIds.includes(c.id));

export default function Article() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/baza-wiedzy"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-8"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Baza Wiedzy
                    </Link>

                    <div className="mb-8">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Metodologia · 8 min czytania
                        </span>
                        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-3 mb-4 leading-tight tracking-tight">
                            NDT-Bobath a Vojta – najważniejsze różnice
                        </h1>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            Dwie metody, jedno pytanie rodziców: którą wybrać dla mojego
                            dziecka? Wyjaśniamy różnice, wskazania i praktyczne aspekty obu podejść.
                        </p>
                    </div>

                    <div className="space-y-6 text-slate-700 leading-relaxed">
                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Co to jest NDT-Bobath?
                        </h2>
                        <p>
                            Metoda NDT-Bobath (Neurodevelopmental Treatment) to podejście
                            terapeutyczne opracowane przez Bertha i Karel Bobath w latach 40.
                            XX wieku. Opiera się na stymulowaniu prawidłowych wzorców ruchowych
                            poprzez handling – specyficzny sposób trzymania, prowadzenia i
                            stymulowania dziecka. Terapeuta aktywnie uczestniczy w ruchu, pomagając
                            dziecku odczuć prawidłowe wzorce.
                        </p>
                        <p>
                            NDT-Bobath jest niezwykle elastycznym podejściem – terapeuta dostosowuje
                            techniki do bieżącego stanu i potrzeb dziecka. Terapia jest dla dzieci
                            stosunkowo komfortowa, co sprzyja współpracy.
                        </p>
                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Co to jest metoda Vojty?
                        </h2>
                        <p>
                            Metoda Vojty (Terapia Vojty) to system diagnostyczno-terapeutyczny
                            stworzony przez czeskiego neurologa Václava Vojtę. Opiera się na
                            aktywacji wrodzonych, globalnych wzorców lokomocji (odruchów) poprzez
                            ucisk na precyzyjnie określone strefy ciała w pozycjach leżenia na
                            brzuchu, plecach lub na boku.
                        </p>
                        <p>
                            Metoda Vojty wymaga dużego wysiłku od dziecka – stymulacja bywa
                            intensywna i może wywoływać płacz. To normalna reakcja układu nerwowego,
                            a nie objaw bólu.
                        </p>
                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Porównanie metod
                        </h2>
                        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                            <div className="grid grid-cols-3 text-sm font-semibold text-slate-600 border-b border-slate-200">
                                <div className="p-3 border-r border-slate-200">Kryterium</div>
                                <div className="p-3 border-r border-slate-200 text-blue-700">NDT-Bobath</div>
                                <div className="p-3 text-emerald-700">Vojta</div>
                            </div>
                            {[
                                ["Podejście", "Handling, facilitacja", "Stymulacja odruchów lokomocji"],
                                ["Wiek", "Od noworodka do dorosłości", "Głównie niemowlęta i dzieci"],
                                ["Reakcja dziecka", "Zwykle spokojne", "Często płacz"],
                                ["Wskazania", "CP, opóźnienia ruchowe", "Neurologiczne, wady postawy"],
                                ["Ćwicz. domowe", "Zalecane, łatwe do nauki", "Wymagane, trudniejsze"],
                            ].map(([criterion, bobath, vojta]) => (
                                <div
                                    key={criterion}
                                    className="grid grid-cols-3 text-sm border-b border-slate-100 last:border-0"
                                >
                                    <div className="p-3 font-medium text-slate-700 border-r border-slate-200">
                                        {criterion}
                                    </div>
                                    <div className="p-3 text-slate-600 border-r border-slate-200">{bobath}</div>
                                    <div className="p-3 text-slate-600">{vojta}</div>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Którą metodę wybrać?
                        </h2>
                        <p>
                            Decyzja zawsze należy do doświadczonego specjalisty – neurologa
                            dziecięcego lub fizjoterapeuty po pełnej ocenie stanu dziecka.
                            W praktyce obie metody często stosuje się łącznie lub zmienia
                            w zależności od etapu terapii. Nie ma jednej &ldquo;lepszej&rdquo; metody –
                            jest metoda właściwa dla danego dziecka, w danym momencie jego rozwoju.
                        </p>
                    </div>

                    {/* POLECANE OŚRODKI */}
                    <div className="mt-16 pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                            Polecane ośrodki – NDT-Bobath i Vojta
                        </h2>
                        <p className="text-slate-500 text-sm mb-6">
                            Placówki z rankingu FizjoRank stosujące obie metody i posiadające
                            certyfikowanych terapeutów.
                        </p>
                        <div className="space-y-4">
                            {recommendedCenters.map((center) => (
                                <div
                                    key={center.id}
                                    className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all"
                                >
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                                        <div className="shrink-0">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-base text-slate-400 bg-slate-50 border border-slate-100">
                                                {center.id}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <a
                                                href={center.url}
                                                target="_blank"
                                                rel="noopener noreferrer nofollow"
                                                className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                                            >
                                                {center.name}
                                            </a>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 my-2">
                                                <div className="flex items-center gap-1.5">
                                                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                                    <span className="text-slate-700">{center.rating}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="w-4 h-4 text-slate-400" />
                                                    {center.address}
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {center.tags.map((tag: string) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-200"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <ul className="space-y-1.5 mb-4">
                                                {center.pros.slice(0, 2).map((pro: string) => (
                                                    <li key={pro} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0 stroke-[3]" />
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                            <a href={center.url} target="_blank" rel="noopener noreferrer nofollow">
                                                <Button
                                                    variant="ghost"
                                                    className="justify-between h-11 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50 font-medium transition-all"
                                                >
                                                    <span>Strona placówki</span>
                                                    <ChevronRight className="w-4 h-4 opacity-50 ml-2" />
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/#ranking"
                            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mt-6 font-medium"
                        >
                            Zobacz pełny ranking <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
