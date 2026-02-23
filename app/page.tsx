import centersData from '@/data/centers.json';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, CheckCircle2, Trophy, ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-200">

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white pt-24 pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-4 py-1.5 rounded-full mb-6 text-sm font-medium shadow-sm transition-all">
            ✨ Aktualizacja: Luty 2026
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
            Znajdź najlepszą <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              rehabilitację dla dziecka
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Niezależny ranking 20 najlepszych warszawskich ośrodków. Oparty na opiniach rodziców, certyfikatach i doświadczeniu terapeutów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1">
              Zobacz Ranking wyników
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-slate-200 hover:bg-slate-50 transition-all">
              Zgłoś swój ośrodek
            </Button>
          </div>
        </div>
      </div>

      {/* METODOLOGIA */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-10 mb-16">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="text-emerald-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Weryfikujemy jakość</h3>
              <p className="text-slate-500 text-sm">Sprawdzamy certyfikaty (NDT-Bobath, Vojta) i realne opinie z Google.</p>
            </div>
          </div>
          <div className="h-12 w-px bg-slate-200 hidden md:block" />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Star className="text-amber-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">100% Obiektywizmu</h3>
              <p className="text-slate-500 text-sm">Nasz ranking opiera się na twardych danych i zadowoleniu pacjentów.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RANKING LIST */}
      <main className="max-w-5xl mx-auto px-4 pb-24">
        <div className="space-y-6">
          {centersData.map((center) => (
            <div
              key={center.id}
              className={`relative group bg-white rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${center.isPromoted
                  ? 'border-2 border-amber-300/50 shadow-xl shadow-amber-500/10 bg-gradient-to-br from-white to-amber-50/30'
                  : 'border border-slate-100 shadow-lg shadow-slate-200/40'
                }`}
            >
              {/* Odznaka Wyróżnienia */}
              {center.isPromoted && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" /> Polecany Ośrodek
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-6 md:gap-8">

                {/* Lewa Kolumna */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-2xl font-black text-2xl flex-shrink-0 shadow-inner ${center.id === 1 ? 'bg-gradient-to-br from-yellow-300 to-amber-500 text-white' :
                        center.id === 2 ? 'bg-gradient-to-br from-slate-300 to-slate-400 text-white' :
                          center.id === 3 ? 'bg-gradient-to-br from-orange-300 to-orange-400 text-white' :
                            'bg-slate-100 text-slate-500'
                      }`}>
                      #{center.id}
                    </div>

                    <div className="pt-1">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight pr-4 group-hover:text-blue-600 transition-colors">
                        {center.name}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                        <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-lg">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          {center.rating} <span className="opacity-70">({center.reviewCount})</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 bg-slate-50 px-2 py-1 rounded-lg">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          {center.address}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 ml-0 md:ml-18">
                    {center.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prawa Kolumna */}
                <div className="md:w-72 flex flex-col justify-between bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <ul className="space-y-3 mb-6">
                    {center.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{pro}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={center.url} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button
                      className={`w-full rounded-xl h-11 font-semibold transition-all group-hover:shadow-md ${center.isPromoted
                          ? "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20 border-none"
                          : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm"
                        }`}
                    >
                      Sprawdź ofertę <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 text-slate-500 py-12 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-bold text-slate-900 text-xl tracking-tight">FizjoRank.pl</p>
          <div className="flex justify-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Regulamin</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Dla Właścicieli Ośrodków</a>
          </div>
          <p className="text-xs max-w-2xl mx-auto opacity-70 pt-6 border-t border-slate-100 leading-relaxed">
            Ranking ma charakter wyłącznie informacyjny i nie zastępuje profesjonalnej porady medycznej. Zawsze konsultuj stan zdrowia swojego dziecka z wykwalifikowanym lekarzem.
          </p>
        </div>
      </footer>
    </div>
  );
}