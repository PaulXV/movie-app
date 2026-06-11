import { ScrollView, StyleSheet, Text, View } from "react-native";

import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import {
    mediaBucketLabel,
    type MediaItem,
} from "../../../services/mediaCatalog";
import { getTvShowsByBucket } from "../../../services/tvShowService";
import BottomMenu from "../../components/bottomMenu";
import ItemCard from "../../components/itemCard";

function Section({
  title,
  items,
  onPress,
}: {
  title: string;
  items: MediaItem[];
  onPress: (item: MediaItem) => void;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.grid}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onPress={() => onPress(item)} />
        ))}
      </View>
    </View>
  );
}

export default function TvShows() {
  const router = useRouter();
  const inCorso = getTvShowsByBucket("inCorso");
  const daVedere = getTvShowsByBucket("daVedere");
  const giaViste = getTvShowsByBucket("giaViste");

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.kicker}>Library</Text>
          <Text style={styles.title}>Serie TV</Text>
          <Text style={styles.subtitle}>
            Le serie che stai seguendo, quelle in coda e quelle già concluse.
          </Text>
        </View>

        <Section
          title={mediaBucketLabel.inCorso}
          items={inCorso}
          onPress={(item) =>
            router.push({
              pathname: "/pages/detailPage" as never,
              params: { id: item.id, kind: item.kind },
            } as never)
          }
        />
        <Section
          title={mediaBucketLabel.daVedere}
          items={daVedere}
          onPress={(item) =>
            router.push({
              pathname: "/pages/detailPage" as never,
              params: { id: item.id, kind: item.kind },
            } as never)
          }
        />
        <Section
          title={mediaBucketLabel.giaViste}
          items={giaViste}
          onPress={(item) =>
            router.push({
              pathname: "/pages/detailPage" as never,
              params: { id: item.id, kind: item.kind },
            } as never)
          }
        />
      </ScrollView>
      <BottomMenu />
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
    paddingBottom: 12,
    gap: 22,
  },
  header: {
    gap: 6,
    marginBottom: 4,
  },
  kicker: {
    color: "#68D7FF",
    fontSize: 12,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    fontWeight: "800",
  },
  title: {
    color: "#F8FAFC",
    fontSize: 32,
    fontWeight: "900",
  },
  subtitle: {
    color: "#AAB8C7",
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    color: "#F8FAFC",
    fontSize: 18,
    fontWeight: "800",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
  },
});
