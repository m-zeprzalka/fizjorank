import Link from "next/link";
import { Activity, ChevronLeft, Star, MapPin, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NDT-Bobath a Vojta – różnice i wskazania – FizjoRank",
    description:
        "Czym różni się metoda NDT-Bobath od metody Vojty? Kiedy stosować każdą z nich? Praktyczny przewodnik dla rodziców dzieci kierowanych na rehabilitację.",
    alternates: {
        canonical: "https://fizjorank.pl/baza-wiedzy/ndt-bobath-vs-vojta",
    },
};

const recommendedCenters = [
    {
        id: 1,
        name: "Ośrodek Intensywnej Rehabilitacji Dzieci OLINEK",
        rating: 4.9,
        address: "ul. Bobrowiecka 9, Warszawa",
        tags: ["NDT-Bobath", "Kombinezony TheraSuit"],
    },
    {
        id: 2,
        name: "Ośrodek Rehabilitacji Amicus",
        rating: 4.8,
        address: "ul. Słowackiego 12, Warszawa",
        tags: ["Metoda Vojty", "NDT-Bobath"],
    },
    {
        id: 19,
        name: "Centrum Medyczne NeuroTeam",
        rating: 4.8,
        address: "ul. Św. Wawrzyńca 3B/U1, Poznań",
        tags: ["Vojta", "NDT-Bobath Baby"],
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
        <div className="max-w-3xl">
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
                        dziecka? Wyjaśniamy różnice, wskazania i praktyczne aspekty obu
                        podejść.
                    </p>
                </div>

                <div className="space-y-6 text-slate-700 leading-relaxed">
                    <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                        Co to jest NDT-Bobath?
                    </h2>
                    <p>
                        Metoda NDT-Bobath (Neurodevelopmental Treatment) to podejście
                        terapeutyczne opracowane przez Bertha i Karel Bobath w latach 40.
                        XX wieku. Opiera się na stymulowaniu prawidłowych wzorców
                        ruchowych poprzez handling – specyficzny sposób trzymania,
                        prowadzenia i stymulowania dziecka. Terapeuta aktywnie uczestniczy
                        w ruchu, pomagając dziecku odczuć prawidłowe wzorce.
                    </p>
                    <p>
                        NDT-Bobath jest niezwykle elastycznym podejściem –
                        terapeuta dostosowuje techniki do bieżącego stanu i potrzeb
                        dziecka. Terapia jest dla dzieci stosunkowo komfortowa, co
                        sprzyja współpracy.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                        Co to jest metoda Vojty?
                    </h2>
                    <p>
                        Metoda Vojty (Terapia Vojty) to system diagnostyczno-terapeutyczny
                        stworzony przez czeskiego neurologa Václava Vojtę. Opiera się na
                        aktywacji wrodzonych, globalnych wzorców lokomocji (odruchów)
                        poprzez ucisk na precyzyjnie określone strefy ciała w pozycjach
                        leżenia na brzuchu, plecach lub na boku.
                    </p>
                    <p>
                        Metoda Vojty wymaga dużego wysiłku od dziecka – stymulacja bywa
                        intensywna i może wywoływać płacz. To normalna reakcja układu
                        nerwowego, a nie objaw bólu.
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
                        jest metoda właściwa dla danego dziecka, w danym momencie jego
                        rozwoju.
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
        </div>
    );
}
