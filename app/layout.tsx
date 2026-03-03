import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FizjoRank – Ranking Ośrodków Rehabilitacji Dziecięcej 2026",
  description:
    "Obiektywny ranking najlepszych ośrodków rehabilitacji dzieci w Polsce. Porównaj placówki, metody terapii (NDT-Bobath, Vojta, SI) i opinie pacjentów.",
  keywords: [
    "rehabilitacja dziecięca",
    "fizjoterapia dzieci",
    "NDT-Bobath",
    "metoda Vojty",
    "integracja sensoryczna",
    "ranking ośrodków rehabilitacji",
    "rehabilitacja Warszawa",
    "rehabilitacja Kraków",
    "rehabilitacja Poznań",
    "fizjoterapia niemowlaka",
  ],
  authors: [{ name: "FizjoRank" }],
  creator: "FizjoRank",
  publisher: "FizjoRank",
  openGraph: {
    title: "FizjoRank – Ranking Ośrodków Rehabilitacji Dziecięcej 2026",
    description:
      "Obiektywny ranking najlepszych ośrodków rehabilitacji dzieci w Polsce. Porównaj metody terapii i znajdź najlepszą placówkę.",
    url: "https://fizjorank.pl",
    siteName: "FizjoRank",
    images: [
      {
        url: "https://fizjorank.pl/og.png",
        width: 1200,
        height: 630,
        alt: "FizjoRank – Ranking Ośrodków Rehabilitacji Dziecięcej",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FizjoRank – Ranking Ośrodków Rehabilitacji Dziecięcej",
    description:
      "Obiektywny ranking najlepszych ośrodków rehabilitacji dzieci w Polsce.",
    images: ["https://fizjorank.pl/og.png"],
  },
  alternates: {
    canonical: "https://fizjorank.pl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
