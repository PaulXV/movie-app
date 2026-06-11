import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { getCastByMediaId } from "../../../services/castService";
import {
    mediaBucketLabel,
    mediaKindLabel,
    type MediaItem,
    type MediaKind,
} from "../../../services/mediaCatalog";
import { getMovieById } from "../../../services/movieService";
import { getTvShowById } from "../../../services/tvShowService";

type DetailParams = {
  id?: string;
  kind?: MediaKind;
};

function getMedia(
  id: string | undefined,
  kind: MediaKind | undefined,
): MediaItem | undefined {
  if (!id) {
    return undefined;
  }

  if (kind === "movie") {
    return getMovieById(id);
  }

  if (kind === "tv") {
    return getTvShowById(id);
  }

  return getMovieById(id) ?? getTvShowById(id);
}

export default function DetailPage() {
  const params = useLocalSearchParams<DetailParams>();
  const media = getMedia(params.id, params.kind);

  if (!media) {
    return (
      <SafeAreaView style={styles.screen} edges={["top"]}>
        <View style={styles.emptyState}>
          <Text style={styles.title}>Contenuto non trovato</Text>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Torna indietro</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const cast = getCastByMediaId(media.id);

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>← Indietro</Text>
        </Pressable>

        <View style={styles.hero}>
          <Image
            source={{ uri: media.posterUrl }}
            style={styles.poster}
            contentFit="cover"
          />
          <View style={styles.heroMeta}>
            <Text style={styles.kicker}>{mediaKindLabel[media.kind]}</Text>
            <Text style={styles.detailTitle}>{media.title}</Text>
            <Text style={styles.detailLine}>
              {media.year} · {mediaBucketLabel[media.bucket]}
            </Text>
            <View style={styles.ratingRow}>
              <Text style={styles.rating}>{media.rating.toFixed(1)}</Text>
              <Text style={styles.star}>★</Text>
            </View>
            <Text style={styles.description}>{media.description}</Text>
          </View>
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Cast mock</Text>
          {cast.length === 0 ? (
            <Text style={styles.panelText}>
              Qui verranno mostrati i membri del cast quando collegheremo TMDB.
            </Text>
          ) : (
            cast.map((member) => (
              <View key={member.id} style={styles.castRow}>
                <Image
                  source={{ uri: member.avatarUrl }}
                  style={styles.castAvatar}
                  contentFit="cover"
                />
                <View style={styles.castMeta}>
                  <Text style={styles.castName}>{member.name}</Text>
                  <Text style={styles.castRole}>{member.role}</Text>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0B1117",
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 18,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: "#16202C",
  },
  backButtonText: {
    color: "#F8FAFC",
    fontSize: 13,
    fontWeight: "700",
  },
  hero: {
    gap: 16,
  },
  poster: {
    width: "100%",
    aspectRatio: 0.72,
    borderRadius: 28,
    backgroundColor: "#223143",
  },
  heroMeta: {
    gap: 8,
  },
  kicker: {
    color: "#68D7FF",
    fontSize: 12,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    fontWeight: "800",
  },
  detailTitle: {
    color: "#F8FAFC",
    fontSize: 30,
    fontWeight: "900",
  },
  detailLine: {
    color: "#AAB8C7",
    fontSize: 14,
    fontWeight: "600",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  rating: {
    color: "#F8FAFC",
    fontSize: 18,
    fontWeight: "800",
  },
  star: {
    color: "#F5B301",
    fontSize: 18,
    fontWeight: "800",
  },
  description: {
    color: "#D3DCE5",
    fontSize: 15,
    lineHeight: 22,
  },
  panel: {
    gap: 12,
    padding: 16,
    borderRadius: 24,
    backgroundColor: "#15202B",
  },
  panelTitle: {
    color: "#F8FAFC",
    fontSize: 18,
    fontWeight: "800",
  },
  panelText: {
    color: "#AAB8C7",
    fontSize: 14,
    lineHeight: 20,
  },
  castRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  castAvatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#223143",
  },
  castMeta: {
    gap: 2,
  },
  castName: {
    color: "#F8FAFC",
    fontSize: 14,
    fontWeight: "700",
  },
  castRole: {
    color: "#AAB8C7",
    fontSize: 12,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 24,
  },
  title: {
    color: "#F8FAFC",
    fontSize: 24,
    fontWeight: "900",
  },
});
