import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
};

export default function SearchBar({
  value,
  onChangeText,
  onSubmit,
}: SearchBarProps) {
  return (
    <View style={styles.shell}>
      <Pressable style={styles.iconButton}>
        <Text style={styles.icon}>+</Text>
      </Pressable>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="cerca qui film o serie tv"
        placeholderTextColor="#7A8796"
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Pressable style={styles.iconButton} onPress={onSubmit}>
        <Text style={styles.icon}>⌕</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: "75%",
    maxWidth: 720,
    minHeight: 54,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    backgroundColor: "#16202C",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    paddingHorizontal: 10,
  },
  iconButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
  },
  icon: {
    color: "#F8FAFC",
    fontSize: 18,
    fontWeight: "700",
  },
  input: {
    flex: 1,
    color: "#F8FAFC",
    fontSize: 15,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
