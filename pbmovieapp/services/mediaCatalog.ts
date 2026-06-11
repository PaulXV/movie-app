export type MediaKind = "movie" | "tv";

export type MediaBucket = "inCorso" | "daVedere" | "giaViste";

export interface MediaItem {
  id: string;
  kind: MediaKind;
  title: string;
  year: string;
  releaseDate: string;
  description: string;
  bucket: MediaBucket;
  posterUrl: string;
  rating: number;
  progress: number;
}

export interface CastMember {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
}

const poster = (label: string, background = "122033") =>
  `https://placehold.co/600x900/${background}/F8FAFC/png?text=${encodeURIComponent(label)}`;

export const mediaBucketLabel: Record<MediaBucket, string> = {
  inCorso: "In corso",
  daVedere: "Da vedere",
  giaViste: "Già viste",
};

export const mediaKindLabel: Record<MediaKind, string> = {
  movie: "Film",
  tv: "Serie TV",
};

export const mediaBucketOrder: MediaBucket[] = [
  "inCorso",
  "daVedere",
  "giaViste",
];

export const mockMediaCatalog: MediaItem[] = [
  {
    id: "movie-1",
    kind: "movie",
    title: "The Last Signal",
    year: "2026",
    releaseDate: "2026-04-11",
    description:
      "Un tecnico radio scopre un messaggio che potrebbe cambiare il destino della citta.",
    bucket: "inCorso",
    posterUrl: poster("The Last Signal"),
    rating: 4.2,
    progress: 58,
  },
  {
    id: "movie-2",
    kind: "movie",
    title: "Midnight Harbor",
    year: "2025",
    releaseDate: "2025-11-07",
    description:
      "Un noir costiero tra segreti di porto, luci al neon e una sparizione insolita.",
    bucket: "daVedere",
    posterUrl: poster("Midnight Harbor", "3A4756"),
    rating: 4.6,
    progress: 0,
  },
  {
    id: "movie-3",
    kind: "movie",
    title: "After the Rain",
    year: "2024",
    releaseDate: "2024-08-23",
    description:
      "Un viaggio emotivo che racconta come ricostruirsi dopo una perdita improvvisa.",
    bucket: "giaViste",
    posterUrl: poster("After the Rain", "5C4B51"),
    rating: 4.8,
    progress: 100,
  },
  {
    id: "tv-1",
    kind: "tv",
    title: "Signal Room",
    year: "2026",
    releaseDate: "2026-05-19",
    description:
      "Una mini-serie sci-fi su una stazione di ascolto che intercetta vite parallele.",
    bucket: "inCorso",
    posterUrl: poster("Signal Room", "1F2937"),
    rating: 4.4,
    progress: 42,
  },
  {
    id: "tv-2",
    kind: "tv",
    title: "Northbound",
    year: "2025",
    releaseDate: "2025-12-01",
    description:
      "Una troupe documentaria segue una famiglia mentre attraversa il paese verso nord.",
    bucket: "daVedere",
    posterUrl: poster("Northbound", "315C61"),
    rating: 4.1,
    progress: 0,
  },
  {
    id: "tv-3",
    kind: "tv",
    title: "Paper City",
    year: "2024",
    releaseDate: "2024-10-15",
    description:
      "Un dramma urbano su architettura, politica e amicizie che resistono al tempo.",
    bucket: "giaViste",
    posterUrl: poster("Paper City", "7C6C8C"),
    rating: 4.7,
    progress: 100,
  },
];

export const mockCastByMediaId: Record<string, CastMember[]> = {
  "movie-1": [
    {
      id: "cast-1",
      name: "Marta Leone",
      role: "Lead",
      avatarUrl: poster("ML", "334155"),
    },
  ],
  "tv-1": [
    {
      id: "cast-2",
      name: "Edoardo Neri",
      role: "Lead",
      avatarUrl: poster("EN", "334155"),
    },
  ],
};
