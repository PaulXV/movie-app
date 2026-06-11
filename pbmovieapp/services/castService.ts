import { mockCastByMediaId, type CastMember } from "./mediaCatalog";

export function getCastByMediaId(mediaId: string): CastMember[] {
  return mockCastByMediaId[mediaId] ?? [];
}
// here will go the api and relative functions for fetching the data fetched from tmdb
// for actors and actresses
