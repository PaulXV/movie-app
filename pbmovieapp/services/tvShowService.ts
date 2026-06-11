import {
    mediaBucketOrder,
    mockMediaCatalog,
    type MediaBucket,
    type MediaItem,
} from "./mediaCatalog";

export function getTvShowsByBucket(bucket: MediaBucket): MediaItem[] {
  return mockMediaCatalog.filter(
    (item) => item.kind === "tv" && item.bucket === bucket,
  );
}

export function getLatestTvShows(limit = 4): MediaItem[] {
  return mockMediaCatalog
    .filter((item) => item.kind === "tv")
    .slice()
    .sort((left, right) => right.releaseDate.localeCompare(left.releaseDate))
    .slice(0, limit);
}

export function searchTvShows(query: string): MediaItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return mockMediaCatalog.filter((item) => {
    if (item.kind !== "tv") {
      return false;
    }

    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getTvShowById(id: string): MediaItem | undefined {
  return mockMediaCatalog.find((item) => item.kind === "tv" && item.id === id);
}

export function getTvShowSections() {
  return mediaBucketOrder.map((bucket) => ({
    bucket,
    items: getTvShowsByBucket(bucket),
  }));
}
// here will go the api and relative functions for fetching the data fetched from tmdb
// for tv shows
