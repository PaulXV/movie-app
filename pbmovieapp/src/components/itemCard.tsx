import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { mediaKindLabel, type MediaItem } from "../../services/mediaCatalog";

type ItemCardProps = {
  item: MediaItem;
  variant?: "library" | "search";
  onPress?: () => void;
};

export default function ItemCard({
  item,
  variant = "library",
  onPress,
}: ItemCardProps) {
  if (variant === "search") {
    return (
      <Pressable style={[styles.card, styles.searchCard]} onPress={onPress}>
        <Image
          source={{ uri: item.posterUrl }}
          style={styles.searchPoster}
          contentFit="cover"
        />
        <View style={styles.searchBody}>
          <Text style={styles.searchTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.searchMeta} numberOfLines={1}>
            {mediaKindLabel[item.kind]} · {item.year}
          </Text>
        </View>
        <View style={styles.searchRatingWrap}>
          <Text style={styles.searchRating}>{item.rating.toFixed(1)}</Text>
          <Text style={styles.searchStar}>★</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable style={[styles.card, styles.libraryCard]} onPress={onPress}>
      <Image
        source={{ uri: item.posterUrl }}
        style={styles.poster}
        contentFit="cover"
      />
      <View style={styles.libraryRow}>
        <Text style={styles.libraryTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.libraryProgress}>{item.progress}%</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    backgroundColor: "#15202B",
    boxShadow: "0px 10px 16px rgba(0, 0, 0, 0.20)",
    elevation: 6,
  },
  libraryCard: {
    width: "48%",
    padding: 10,
  },
  poster: {
    width: "100%",
    aspectRatio: 0.68,
    borderRadius: 18,
    marginBottom: 10,
    backgroundColor: "#223143",
  },
  libraryRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },
  libraryTitle: {
    flex: 1,
    color: "#F8FAFC",
    fontSize: 14,
    fontWeight: "700",
  },
  libraryProgress: {
    color: "#9FB3C8",
    fontSize: 12,
    fontWeight: "700",
  },
  searchCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
  },
  searchPoster: {
    width: 52,
    height: 78,
    borderRadius: 14,
    backgroundColor: "#223143",
  },
  searchBody: {
    flex: 1,
    gap: 4,
  },
  searchTitle: {
    color: "#F8FAFC",
    fontSize: 15,
    fontWeight: "700",
  },
  searchMeta: {
    color: "#9FB3C8",
    fontSize: 12,
    fontWeight: "600",
  },
  searchRatingWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  searchRating: {
    color: "#F8FAFC",
    fontSize: 13,
    fontWeight: "700",
  },
  searchStar: {
    color: "#F5B301",
    fontSize: 14,
    fontWeight: "700",
  },
});
