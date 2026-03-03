import Link from "next/link";
import { ChevronLeft, Star, MapPin, ChevronRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import centersData from "@/data/centers.json";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Kiedy udać się z niemowlakiem do fizjoterapeuty? – FizjoRank",
    description:
        "Asymetria ciała, prężenie, trudności w karmieniu – poznaj objawy, które powinny skłonić rodziców do wizyty u fizjoterapeuty dziecięcego.",
    alternates: {
        canonical: "https://fizjorank.pl/baza-wiedzy/kiedy-do-fizjoterapeuty",
    },
};

const recommendedIds = [1, 8, 17];
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
                            Diagnostyka · 5 min czytania
                        </span>
                        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-3 mb-4 leading-tight tracking-tight">
                            Kiedy udać się z niemowlakiem do fizjoterapeuty?
                        </h1>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            Wczesna interwencja fizjoterapeutyczna może zadecydować o prawidłowym
                            rozwoju dziecka. Poznaj objawy, których nie należy bagatelizować.
                        </p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Pierwsze tygodnie życia – na co zwracać uwagę?
                        </h2>
                        <p>
                            Układ nerwowy noworodka jest wyjątkowo plastyczny. To oznacza, że
                            odpowiednio wcześnie podjęta terapia może skutecznie korygować
                            nieprawidłowe wzorce ruchowe. Rodzice często nie wiedzą, które
                            objawy są normalne, a które wymagają konsultacji ze specjalistą.
                        </p>
                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Sygnały alarmowe – kiedy bezzwłocznie umówić wizytę
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Asymetria ciała – dziecko preferuje odwracanie głowy wyłącznie w jedną stronę",
                                "Prężenie ciała – nadmierne napięcie mięśniowe, wyginanie się w łuk",
                                "Trudności w karmieniu piersią lub butelką, krztuszenie się",
                                "Słabe lub brak reakcji na bodźce dźwiękowe i wzrokowe",
                                "Opóźnione unoszenie główki w leżeniu na brzuchu (po 3. miesiącu)",
                                "Zaciśnięte piąstki po ukończeniu 3. miesiąca życia",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Kamienie milowe rozwoju ruchowego niemowlęcia
                        </h2>
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                {[
                                    ["1–2 miesiące", "Reaguje na dźwięk, unosi głowę na chwilę"],
                                    ["3–4 miesiące", "Unosi głowę i klatkę, obraca głową za bodźcem"],
                                    ["5–6 miesięcy", "Przewraca się z pleców na brzuch"],
                                    ["7–9 miesięcy", "Siedzi z podparciem, raczkuje"],
                                    ["10–12 miesięcy", "Wstaje przy meblach, pierwsze kroki"],
                                    ["12–18 miesięcy", "Samodzielny chód, wchodzi po schodach"],
                                ].map(([age, desc]) => (
                                    <div key={age} className="flex flex-col gap-1">
                                        <span className="font-semibold text-blue-700">{age}</span>
                                        <span className="text-slate-600">{desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Jak wygląda pierwsza wizyta u fizjoterapeuty dziecięcego?
                        </h2>
                        <p>
                            Pierwsza wizyta to przede wszystkim obserwacja i wywiad. Terapeuta
                            ocenia napięcie mięśniowe, odruchy, symetrię ułożenia i wzorce
                            ruchowe. Na tej podstawie decyduje o doborze metody terapii –
                            najczęściej NDT-Bobath lub metody Vojty, czasem Integracji Sensorycznej.
                        </p>
                        <p>
                            Pamiętaj: nie wymagaj od razu diagnozy. Celem pierwszej wizyty jest
                            ocena, nie wyrok.
                        </p>
                    </div>

                    {/* POLECANE OŚRODKI */}
                    <div className="mt-16 pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                            Polecane ośrodki do fizjoterapii niemowląt
                        </h2>
                        <p className="text-slate-500 text-sm mb-6">
                            Placówki z rankingu FizjoRank specjalizujące się w terapii niemowląt
                            i wczesnym wspomaganiu rozwoju.
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
