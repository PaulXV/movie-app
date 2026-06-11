import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { type MediaItem } from "../../../services/mediaCatalog";
import { getLatestMovies, searchMovies } from "../../../services/movieService";
import {
    getLatestTvShows,
    searchTvShows,
} from "../../../services/tvShowService";
import BottomMenu from "../../components/bottomMenu";
import ItemCard from "../../components/itemCard";
import SearchBar from "../../components/searchBar";

function uniqueItems(items: MediaItem[]) {
  return items.filter(
    (item, index, list) =>
      list.findIndex((candidate) => candidate.id === item.id) === index,
  );
}

function Section({
  title,
  items,
  emptyText,
}: {
  title: string;
  items: MediaItem[];
  emptyText?: string;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionBody}>
        {items.length === 0 && emptyText ? (
          <Text style={styles.empty}>{emptyText}</Text>
        ) : null}
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            variant="search"
            onPress={() =>
              router.push({
                pathname: "/pages/detailPage",
                params: { id: item.id, kind: item.kind },
              })
            }
          />
        ))}
      </View>
    </View>
  );
}

export default function Search() {
  const [query, setQuery] = useState("");

  const latestItems = useMemo(() => {
    return [...getLatestMovies(2), ...getLatestTvShows(2)]
      .slice()
      .sort((left, right) => right.releaseDate.localeCompare(left.releaseDate))
      .slice(0, 4);
  }, []);

  const results = useMemo(
    () => uniqueItems([...searchMovies(query), ...searchTvShows(query)]),
    [query],
  );

  const handleSubmit = () => {
    const selected = results[0];

    if (!selected) {
      return;
    }

    router.push({
      pathname: "/pages/detailPage",
      params: { id: selected.id, kind: selected.kind },
    });
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.kicker}>Search</Text>
          <Text style={styles.title}>Trova qualcosa da vedere</Text>
          <Text style={styles.subtitle}>
            Cerca film e serie TV dentro il catalogo mock e apri subito la
            scheda dettaglio.
          </Text>
        </View>

        <SearchBar
          value={query}
          onChangeText={setQuery}
          onSubmit={handleSubmit}
        />

        <Section
          title="Risultati"
          items={results}
          emptyText={
            query.trim() ? "Nessun risultato per questa ricerca." : undefined
          }
        />
        <Section title="Ultimi usciti" items={latestItems} />
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
    marginBottom: 2,
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
    fontSize: 30,
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
  sectionBody: {
    gap: 12,
  },
  empty: {
    color: "#8F9DAE",
    fontSize: 13,
  },
});
