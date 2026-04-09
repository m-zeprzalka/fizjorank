import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt – FizjoRank",
    description: "Skontaktuj się z nami w sprawie FizjoRank.pl – rankingu ośrodków rehabilitacji dziecięcej.",
    alternates: { canonical: "https://fizjorank.pl/kontakt" },
};

export default function KontaktPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />

            <header className="bg-slate-50/50 border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
                    <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Kontakt</h1>
                    <p className="text-lg text-slate-500 font-light max-w-2xl">
                        Pytania, propozycje współpracy lub zgłoszenia nowych placówek – pisz śmiało.
                    </p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="max-w-2xl">
                    <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-8 shadow-sm">
                        <h2 className="text-lg font-semibold text-slate-900 mb-6">Dane kontaktowe</h2>
                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Właściciel</p>
                                    <p className="text-slate-900 font-medium">Administrator</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">E-mail</p>
                                    <a href="mailto:kontakt@fizjorank.pl" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                                        kontakt@fizjorank.pl
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Telefon</p>
                                    <a href="tel:+48000000000" className="text-slate-900 font-medium hover:text-blue-600 transition-colors">
                                        000 000 000
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
                        <h2 className="text-lg font-semibold text-slate-900 mb-2">Zgłoś placówkę</h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                            Znasz ośrodek, który powinien znaleźć się w rankingu? Napisz do nas z nazwą,
                            adresem i krótkim opisem placówki. Po weryfikacji dodamy ją do bazy.
                        </p>
                        <a
                            href="mailto:kontakt@fizjorank.pl?subject=Zgłoszenie placówki – FizjoRank"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold rounded-xl px-5 py-3 hover:bg-blue-700 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Wyślij zgłoszenie
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
