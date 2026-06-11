import { Pressable, StyleSheet, Text, View } from "react-native";

import { Link, usePathname } from "expo-router";

export default function BottomMenu() {
  const pathname = usePathname();

  const items = [
    { label: "Film", href: "/pages/movies" },
    { label: "Serie", href: "/pages/tvshows" },
    { label: "Cerca", href: "/pages/search" },
    { label: "Impostazioni", href: "/pages/settings" },
  ];

  return (
    <View style={styles.container}>
      {items.map((item) => {
        const active = pathname === item.href;

        return (
          <Link href={item.href as never} key={item.href} asChild>
            <Pressable
              style={StyleSheet.flatten([
                styles.item,
                active ? styles.itemActive : null,
              ])}
            >
              <Text
                style={StyleSheet.flatten([
                  styles.label,
                  active ? styles.labelActive : null,
                ])}
              >
                {item.label}
              </Text>
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 24,
    backgroundColor: "rgba(16, 24, 32, 0.92)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  item: {
    flex: 1,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  itemActive: {
    backgroundColor: "rgba(56, 189, 248, 0.18)",
  },
  label: {
    color: "#9FB3C8",
    fontSize: 12,
    fontWeight: "700",
  },
  labelActive: {
    color: "#F8FAFC",
  },
});
