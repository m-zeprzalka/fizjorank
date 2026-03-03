import centersData from "@/data/centers.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Star, Check, ChevronLeft, ExternalLink, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return centersData.map((center) => ({ slug: center.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const center = centersData.find((c) => c.slug === slug);
    if (!center) return {};
    return {
        title: `${center.name} – FizjoRank`,
        description: `Profil placówki ${center.name}. Ocena: ${center.rating}/5. Metody: ${center.tags.join(", ")}. Adres: ${center.address}.`,
        alternates: { canonical: `https://fizjorank.pl/osrodek/${slug}` },
    };
}

export default async function CenterPage({ params }: { params: Params }) {
    const { slug } = await params;
    const center = centersData.find((c) => c.slug === slug);
    if (!center) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: center.name,
        url: center.url,
        address: { "@type": "PostalAddress", streetAddress: center.address, addressCountry: "PL" },
        ...(center.rating && {
            aggregateRating: { "@type": "AggregateRating", ratingValue: center.rating, bestRating: 5, worstRating: 1, ratingCount: 1 },
        }),
        medicalSpecialty: center.tags,
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <Navbar />

            {/* CONTENT */}
            <main className="max-w-6xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-8">
                    <ChevronLeft className="w-4 h-4" /> Wróć do rankingu
                </Link>

                {/* Zawartość w ograniczonej kolumnie dla czytelności */}
                <div className="max-w-2xl">
                    {/* HEADER CARD */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                            <div>
                                <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full w-fit mb-3">
                                    #{center.id} w rankingu FizjoRank
                                </div>
                                <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight">
                                    {center.name}
                                </h1>
                            </div>
                            {center.isPromoted && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-sm whitespace-nowrap">
                                    Rekomendacja FizjoRank
                                </span>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-5 text-sm text-slate-600 mb-6">
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                <span className="font-semibold text-slate-800">{center.rating}</span>
                                <span className="text-slate-400">/ 5.0</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-slate-400" />
                                <span>{center.address}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {center.tags.map((tag: string) => (
                                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-lg border border-slate-200">
                                    <Tag className="w-3 h-3 text-slate-400" />{tag}
                                </span>
                            ))}
                        </div>

                        <div className="border-t border-slate-100 pt-6">
                            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Wyróżniki placówki</h2>
                            <ul className="space-y-3">
                                {center.pros.map((pro: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 stroke-[3]" />{pro}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-blue-600 rounded-2xl p-8 text-white text-center mb-8">
                        <h2 className="text-xl font-semibold mb-2">Odwiedź stronę placówki</h2>
                        <p className="text-blue-100 mb-6 text-sm">Sprawdź terminy, ofertę i kontakt bezpośrednio u źródła.</p>
                        <a href={center.url} target="_blank" rel="noopener noreferrer nofollow">
                            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-xl px-6">
                                Strona placówki <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                    </div>

                    <Link href="/">
                        <Button variant="outline" className="rounded-xl">
                            <ChevronLeft className="w-4 h-4 mr-2" /> Zobacz pełny ranking
                        </Button>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
