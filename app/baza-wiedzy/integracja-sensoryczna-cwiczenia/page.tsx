import Link from "next/link";
import { Activity, ChevronLeft, Star, MapPin, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Integracja Sensoryczna: ćwiczenia w domu – FizjoRank",
    description:
        "Jak wspierać układ sensoryczny dziecka na co dzień? Praktyczne ćwiczenia integracji sensorycznej dla rodziców – bez specjalistycznego sprzętu.",
    alternates: {
        canonical:
            "https://fizjorank.pl/baza-wiedzy/integracja-sensoryczna-cwiczenia",
    },
};

const recommendedCenters = [
    {
        id: 3,
        name: "Ośrodek Rehabilitacji Biomicus",
        rating: 4.8,
        address: "ul. Pańska 96, Warszawa",
        tags: ["Integracja Sensoryczna", "Logopedia"],
    },
    {
        id: 10,
        name: "Active Place – Klinika Rehabilitacji",
        rating: 4.8,
        address: "ul. Płochocińska 111, Warszawa",
        tags: ["Integracja Sensoryczna", "Terapia czaszkowo-krzyżowa"],
    },
    {
        id: 17,
        name: "Klinika Smyka",
        rating: 4.9,
        address: "ul. Lucerny 117, Warszawa",
        tags: ["Integracja Sensoryczna", "Fizjoterapia Niemowląt"],
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
                            Praktyka domowa · 6 min czytania
                        </span>
                        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-3 mb-4 leading-tight tracking-tight">
                            Integracja Sensoryczna: ćwiczenia, które możesz robić w domu
                        </h1>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            Terapia sensoryczna nie musi odbywać się wyłącznie w gabinecie. Oto
                            co możesz zrobić jako rodzic każdego dnia, żeby wspierać układ
                            nerwowy swojego dziecka.
                        </p>
                    </div>

                    <div className="space-y-6 text-slate-700 leading-relaxed">
                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Czym jest Integracja Sensoryczna?
                        </h2>
                        <p>
                            Integracja Sensoryczna (SI) to proces, dzięki któremu mózg
                            odbiera, przetwarza i organizuje informacje z zmysłów: dotyku,
                            równowagi, propriocepcji (czucia głębokiego), wzroku, słuchu,
                            smaku i węchu. Gdy ten proces przebiega nieprawidłowo, mówimy o
                            zaburzeniach integracji sensorycznej (SPD – Sensory Processing
                            Disorder).
                        </p>

                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Sygnały zaburzeń SI u dziecka
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Nadwrażliwość dotykowa – unika bycia dotykanym, nie lubi określonych faktur ubrań",
                                "Podwrażliwość – szuka intensywnych doznań, kręci się, skacze, nie czuje bólu",
                                "Problemy z równowagą i koordynacją",
                                "Trudności z koncentracją, łatwa rozpraszalność",
                                "Nadreaktywność na dźwięki lub światło",
                                "Problemy z jedzeniem – unikanie określonych tekstur",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">
                            Ćwiczenia, które możesz robić w domu
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "Tunel z koca (propriocepcja)",
                                    desc: "Zawiń dziecko szczelnie w koc i delikatnie przetaczaj po podłodze. Ucisk na ciało stymuluje czucie głębokie i pomaga regulować pobudzenie.",
                                    age: "od 2 lat",
                                },
                                {
                                    title: "Chodzenie po różnych fakturach (dotyk)",
                                    desc: "Ułóż ścieżkę z materiałów o różnych fakturach: dywan, folię bąbelkową, piasek w misce, papier. Dziecko przechodzi boso, opisując co czuje.",
                                    age: "od 18 miesięcy",
                                },
                                {
                                    title: "Huśtawka i kołysanie (układ przedsionkowy)",
                                    desc: "Regularne huśtanie – na huśtawce, kolanach rodzica lub specjalnej hamak-huśtawce – stymuluje układ przedsionkowy odpowiedzialny za równowagę.",
                                    age: "od urodzenia",
                                },
                                {
                                    title: "Masa plastyczna (dotyk + propriocepcja)",
                                    desc: "Ugniatanie ciastoliny, masy plastycznej lub mokrego piasku to doskonała stymulacja dłoni. Działa zarówno na nadwrażliwość, jak i podwrażliwość.",
                                    age: "od 2 lat",
                                },
                                {
                                    title: "Tor przeszkód (koordynacja + równowaga)",
                                    desc: "Zbuduj z poduszek, poduchy i taśmy przylepionej do podłogi prosty tor przeszkód. Przeskakiwanie, czołganie i balansowanie angażują wiele zmysłów jednocześnie.",
                                    age: "od 3 lat",
                                },
                            ].map((exercise) => (
                                <div
                                    key={exercise.title}
                                    className="bg-slate-50 rounded-xl p-5 border border-slate-200"
                                >
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <h3 className="font-semibold text-slate-900">
                                            {exercise.title}
                                        </h3>
                                        <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                                            {exercise.age}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {exercise.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-8">
                            <p className="text-sm text-amber-800 font-medium">
                                ⚠️ Ważne: Ćwiczenia domowe są uzupełnieniem, nie zastąpieniem
                                terapii specjalistycznej. Jeśli podejrzewasz u dziecka zaburzenia
                                SI – umów wizytę u certyfikowanego terapeuty integracji
                                sensorycznej.
                            </p>
                        </div>
                    </div>

                    {/* POLECANE OŚRODKI */}
                    <div className="mt-16 pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                            Polecane ośrodki terapii SI
                        </h2>
                        <p className="text-slate-500 text-sm mb-6">
                            Placówki z rankingu FizjoRank posiadające certyfikowanych terapeutów
                            Integracji Sensorycznej.
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
