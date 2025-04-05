// app/(tabs)/(home)/details/[id].tsx
import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DetailsScreen() {
  // Hole die ID aus den URL-Parametern
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Details für ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
