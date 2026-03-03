import { MetadataRoute } from "next";
import centersData from "@/data/centers.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://fizjorank.pl";

    const centerPages = centersData.map((center) => ({
        url: `${baseUrl}/osrodek/${center.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    const articles = [
        "kiedy-do-fizjoterapeuty",
        "ndt-bobath-vs-vojta",
        "integracja-sensoryczna-cwiczenia",
    ].map((slug) => ({
        url: `${baseUrl}/baza-wiedzy/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${baseUrl}/baza-wiedzy`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        ...centerPages,
        ...articles,
    ];
}
