import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Polityka Prywatności – FizjoRank",
    description: "Polityka prywatności serwisu FizjoRank.pl",
    alternates: { canonical: "https://fizjorank.pl/polityka-prywatnosci" },
};

const sections = [
    {
        title: "1. Administrator danych osobowych",
        content:
            "Administratorem danych osobowych jest Michał Zeprzałka, prowadzący serwis FizjoRank.pl. Kontakt: m@zeprzalka.pl, tel. 668 184 614.",
    },
    {
        title: "2. Zakres zbieranych danych",
        content:
            "Serwis FizjoRank.pl nie rejestruje użytkowników ani nie zbiera danych osobowych w sposób aktywny. Dane mogą być zbierane wyłącznie przez narzędzia analityczne (np. Google Analytics) w sposób anonimowy. Szczegółowe informacje o cookies dostępne są w ustawieniach przeglądarki użytkownika.",
    },
    {
        title: "3. Pliki cookies",
        content:
            "Serwis może używać plików cookies w celu zapamiętania preferencji użytkownika oraz analizy ruchu. Użytkownik może w każdej chwili wyłączyć obsługę cookies w ustawieniach przeglądarki, co może ograniczyć funkcjonalność serwisu.",
    },
    {
        title: "4. Zewnętrzne linki",
        content:
            "Serwis zawiera linki do zewnętrznych stron internetowych (stron ośrodków rehabilitacji). FizjoRank.pl nie ponosi odpowiedzialności za treści ani polityki prywatności zewnętrznych serwisów.",
    },
    {
        title: "5. Prawa użytkownika",
        content:
            "Zgodnie z RODO każdy użytkownik ma prawo do dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz przenoszenia. W celu realizacji tych praw skontaktuj się z administratorem.",
    },
    {
        title: "6. Zmiany polityki prywatności",
        content:
            "Polityka prywatności może być aktualizowana. O istotnych zmianach będziemy informować na stronie głównej serwisu. Data ostatniej aktualizacji: marzec 2026.",
    },
];

export default function PolitykaPrywatnosci() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />

            <header className="bg-slate-50/50 border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
                    <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-3">
                        Polityka Prywatności
                    </h1>
                    <p className="text-slate-500 text-sm">Obowiązuje od marca 2026 roku</p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="max-w-2xl space-y-8">
                    {sections.map(({ title, content }, idx) => (
                        <div key={idx}>
                            <h2 className="text-lg font-semibold text-slate-900 mb-3">{title}</h2>
                            <p className="text-slate-600 leading-relaxed text-sm">{content}</p>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
