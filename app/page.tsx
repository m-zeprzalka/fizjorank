import centersData from "@/data/centers.json";
import RankingSection from "@/components/RankingSection";
import { Activity, ShieldCheck, BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";

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
    desc: "Wyjaśniamy protokoły obu metod rehabilitacji na podstawie najnowszych wytycznych.",
    time: "8 min czytania",
  },
  {
    slug: "integracja-sensoryczna-cwiczenia",
    category: "Praktyka domowa",
    title: "Integracja Sensoryczna: ćwiczenia w domu",
    desc: "Jak wspierać układ nerwowy dziecka w warunkach domowych. Instruktaż dla rodziców.",
    time: "6 min czytania",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ranking Ośrodków Rehabilitacji Dziecięcej w Polsce",
  description: "Obiektywny ranking najlepszych ośrodków rehabilitacji dzieci w Polsce.",
  url: "https://fizjorank.pl",
  numberOfItems: centersData.length,
  itemListElement: centersData.map((center, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "MedicalBusiness",
      "@id": `https://fizjorank.pl/osrodek/${center.slug}`,
      name: center.name,
      url: `https://fizjorank.pl/osrodek/${center.slug}`,
      address: { "@type": "PostalAddress", streetAddress: center.address, addressCountry: "PL" },
      ...(center.rating && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: center.rating,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 1,
        },
      }),
    },
  })),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            <Link href="/baza-wiedzy" className="hover:text-slate-900 transition-colors">Baza Wiedzy</Link>
            <a href="#" className="hover:text-slate-900 transition-colors">Dla Specjalistów</a>
          </div>
          <button className="rounded-full text-sm font-medium border border-slate-200 px-4 py-2 hover:bg-slate-50 transition-colors">
            Zgłoś placówkę
          </button>
        </div>
      </nav>

      {/* HERO – jedyny komponent z centrowaniem */}
      <header className="bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-8">
            <ShieldCheck className="w-4 h-4" />
            Zweryfikowane Medycznie · 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.15]">
            Znajdź sprawdzoną <br className="hidden md:block" />
            <span className="text-blue-600">rehabilitację</span> dla dziecka
          </h1>
          <p className="text-lg text-slate-500 mb-0 max-w-2xl mx-auto font-light leading-relaxed">
            Obiektywny ranking polskich placówek oparty na kwalifikacjach terapeutów,
            certyfikatach medycznych i zweryfikowanych opiniach pacjentów.
          </p>
        </div>
      </header>

      {/* RANKING */}
      <RankingSection centers={centersData} />

      {/* BAZA WIEDZY */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" /> Edukacja
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                Baza Wiedzy Rodzica
              </h2>
            </div>
            <Link
              href="/baza-wiedzy"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              Zobacz wszystkie artykuły <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <Link
                key={idx}
                href={`/baza-wiedzy/${article.slug}`}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 transition-all group shadow-sm hover:shadow-md block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{article.category}</span>
                  <span className="text-xs text-slate-400">{article.time}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">{article.desc}</p>
                <div className="flex items-center text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
                  Czytaj <ChevronRight className="w-4 h-4 ml-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Activity className="text-slate-400 w-5 h-5" />
            <span className="font-semibold text-lg tracking-tight text-slate-900">
              FizjoRank<span className="text-blue-600">.</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-slate-900 transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Dla Specjalistów</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Kontakt</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-8 border-t border-slate-50 pt-6 text-center">
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            Ranking ma charakter wyłącznie informacyjny. Wszelkie niepokojące objawy u dziecka należy
            w pierwszej kolejności konsultować z lekarzem pediatrą lub neurologiem.
          </p>
        </div>
      </footer>
    </div>
  );
}