import {
    mediaBucketOrder,
    mockMediaCatalog,
    type MediaBucket,
    type MediaItem,
} from "./mediaCatalog";

export function getMoviesByBucket(bucket: MediaBucket): MediaItem[] {
  return mockMediaCatalog.filter(
    (item) => item.kind === "movie" && item.bucket === bucket,
  );
}

export function getLatestMovies(limit = 4): MediaItem[] {
  return mockMediaCatalog
    .filter((item) => item.kind === "movie")
    .slice()
    .sort((left, right) => right.releaseDate.localeCompare(left.releaseDate))
    .slice(0, limit);
}

export function searchMovies(query: string): MediaItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return mockMediaCatalog.filter((item) => {
    if (item.kind !== "movie") {
      return false;
    }

    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getMovieById(id: string): MediaItem | undefined {
  return mockMediaCatalog.find(
    (item) => item.kind === "movie" && item.id === id,
  );
}

export function getMovieSections() {
  return mediaBucketOrder.map((bucket) => ({
    bucket,
    items: getMoviesByBucket(bucket),
  }));
}
// here will go the api and relative functions for fetching the data fetched from tmdb
// for movies
