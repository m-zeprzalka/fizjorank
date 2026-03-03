import Link from "next/link";
import { Activity, ChevronLeft, Star, MapPin, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Kiedy udać się z niemowlakiem do fizjoterapeuty? – FizjoRank",
    description:
        "Asymetria ciała, prężenie, trudności w karmieniu – poznaj objawy, które powinny skłonić rodziców do wizyty u fizjoterapeuty dziecięcego.",
    alternates: {
        canonical:
            "https://fizjorank.pl/baza-wiedzy/kiedy-do-fizjoterapeuty",
    },
};

const recommendedCenters = [
    {
        id: 1,
        name: "Ośrodek Intensywnej Rehabilitacji Dzieci OLINEK",
        rating: 4.9,
        address: "ul. Bobrowiecka 9, Warszawa",
        tags: ["NDT-Bobath", "Integracja Sensoryczna"],
    },
    {
        id: 8,
        name: "Instytut Matki i Dziecka",
        rating: 4.6,
        address: "ul. Kasprzaka 17a, Warszawa",
        tags: ["Rehabilitacja neurologiczna", "Wcześniaki"],
    },
    {
        id: 17,
        name: "Klinika Smyka",
        rating: 4.9,
        address: "ul. Lucerny 117, Warszawa",
        tags: ["Fizjoterapia Niemowląt", "Integracja Sensoryczna"],
    },
];

export default function Article() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Activity className="text-blue-600 w-6 h-6" />
                        <span className="font-semibold text-xl tracking-tight text-slate-900">
                            FizjoRank<span className="text-blue-600">.</span>
                        </span>
                    </Link>
                </div>
            </nav>

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
                            Wczesna interwencja fizjoterapeutyczna może zadecydować o
                            prawidłowym rozwoju dziecka. Poznaj objawy, których nie należy
                            bagatelizować.
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
                            najczęściej NDT-Bobath lub metody Vojty, czasem Integracji
                            Sensorycznej.
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
                            Placówki z rankingu FizjoRank specjalizujące się w terapii
                            niemowląt i wczesnym wspomaganiu rozwoju.
                        </p>
                        <div className="space-y-4">
                            {recommendedCenters.map((center) => (
                                <Link
                                    key={center.id}
                                    href={`/osrodek/${center.id}`}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all group"
                                >
                                    <div>
                                        <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                                            {center.name}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                                {center.rating}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                                {center.address}
                                            </span>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mt-4 font-medium"
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
