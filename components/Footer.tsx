import Link from "next/link";
import { HouseHeart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Logo identyczne jak w navbarze */}
                <Link href="/" className="flex items-center gap-1">
                    <HouseHeart className="text-blue-600 w-5 h-5" />
                    <span className="font-semibold text-lg tracking-tight text-slate-900">
                        FizjoRank<span className="text-blue-600">.</span>
                    </span>
                </Link>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500 font-medium">
                    <Link href="/polityka-prywatnosci" className="hover:text-slate-900 transition-colors">Polityka Prywatności</Link>
                    <Link href="/dla-specjalistow" className="hover:text-slate-900 transition-colors">Dla Specjalistów</Link>
                    <Link href="/kontakt" className="hover:text-slate-900 transition-colors">Kontakt</Link>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 pb-8">
                <div className="border-t border-slate-100 pt-6 text-center">
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                        Ranking ma charakter wyłącznie informacyjny. Wszelkie niepokojące objawy u dziecka
                        należy konsultować z lekarzem pediatrą lub neurologiem.
                    </p>
                </div>
            </div>
        </footer>
    );
}
