import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle, TrendingUp, Users, BarChart3, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dla Specjalistów i Placówek – FizjoRank",
    description: "Dołącz do FizjoRank i zyskaj widoczność wśród rodziców szukających rehabilitacji dla swoich dzieci.",
    alternates: { canonical: "https://fizjorank.pl/dla-specjalistow" },
};

const benefits = [
    {
        icon: TrendingUp,
        title: "Zwiększ widoczność online",
        desc: "Twoja placówka pojawi się w wynikach Google dla fraz z wysoką intencją zakupu, takich jak \"rehabilitacja dziecięca Warszawa\".",
    },
    {
        icon: Users,
        title: "Docieraj do właściwych pacjentów",
        desc: "Rodzice, którzy trafiają na FizjoRank, aktywnie szukają pomocy dla swoich dzieci. To wysoko kwalifikowany ruch.",
    },
    {
        icon: BarChart3,
        title: "Zbuduj wiarygodność",
        desc: "Profil w obiektywnym rankingu buduje zaufanie bardziej niż reklama płatna. Pacjenci ufają rankingom.",
    },
    {
        icon: CheckCircle,
        title: "Prosty onboarding",
        desc: "Zgłoszenie zajmuje 5 minut. Weryfikujemy dane i dodajemy placówkę w ciągu 3 dni roboczych.",
    },
];

export default function DlaSpecjalistowPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />

            <header className="bg-slate-50/50 border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
                        Dla Placówek
                    </div>
                    <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4 leading-tight">
                        Zaistniej w rankingu najlepszych<br />ośrodków rehabilitacji dziecięcej
                    </h1>
                    <p className="text-lg text-slate-500 font-light max-w-2xl">
                        FizjoRank to miejsce, gdzie rodzice podejmują decyzje o wyborze terapeuty dla swojego
                        dziecka. Dołącz do katalogu zweryfikowanych placówek.
                    </p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-16">
                {/* Benefits grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-16">
                    {benefits.map(({ icon: Icon, title, desc }, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                                <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-lg font-semibold text-slate-900 mb-2">{title}</h2>
                            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-blue-600 rounded-2xl p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Gotowy, żeby dołączyć?</h2>
                        <p className="text-blue-100 text-sm">
                            Wyślij nam dane swojej placówki – bezpłatnie dodamy ją do bazy.
                        </p>
                    </div>
                    <a
                        href="mailto:m@zeprzalka.pl?subject=Zgłoszenie placówki – FizjoRank"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold text-sm rounded-xl px-6 py-3 hover:bg-blue-50 transition-colors whitespace-nowrap shrink-0"
                    >
                        Zgłoś placówkę <ChevronRight className="w-4 h-4" />
                    </a>
                </div>

                {/* FAQ mini */}
                <div className="mt-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-8">Często zadawane pytania</h2>
                    <div className="space-y-4 max-w-2xl">
                        {[
                            { q: "Czy dodanie placówki do katalogu jest płatne?", a: "Podstawowe dodanie do katalogu jest bezpłatne. Opcja wyróżnienia (Rekomendacja) jest płatna – skontaktuj się z nami, żeby poznać szczegóły." },
                            { q: "Jak weryfikujecie placówki?", a: "Weryfikujemy dane kontaktowe, adres oraz aktualne certyfikaty terapeutów. Nie akceptujemy placówek bez udokumentowanych kwalifikacji." },
                            { q: "Jak długo trwa dodanie?", a: "Po przesłaniu zgłoszenia dodajemy placówkę w ciągu 3 dni roboczych i informujemy mailowo." },
                        ].map(({ q, a }, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
