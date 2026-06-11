import { StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import BottomMenu from "../../components/bottomMenu";

export default function Settings() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <View style={styles.container}>
        <Text style={styles.title}>Impostazioni</Text>
        <Text style={styles.subtitle}>
          Sezione lasciata vuota per ora, pronta per account, preferenze e
          sincronizzazione.
        </Text>
      </View>
      <BottomMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0B1117",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    color: "#F8FAFC",
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 10,
  },
  subtitle: {
    color: "#AAB8C7",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
});
