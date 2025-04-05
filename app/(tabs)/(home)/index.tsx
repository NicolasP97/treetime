import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TreeTime - Reduce your screen time </Text>

      <Text style={styles.textNormal}>
        Das hier ist Lato, eine schöne Schrift
      </Text>
      <Text style={styles.textPersonal}>
        Das hier ist Quicksand, wahrscheinlich meine Lieblingsschrift
      </Text>
      <Link href="./mainDetails" asChild>
        <Text style={{ color: "blue" }}>View mainDetails</Text>
      </Link>

      <Link href="../settings">View Settings</Link>

      <Link href="./details/123" asChild>
        <Text style={{ color: "blue" }}>View Details of user</Text>
      </Link>

      <Link
        href={{
          pathname: "./details/[id]",
          params: { id: "bacon" },
        }}
      >
        View user "bacon enjoyer" details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "Raleway_400Regular",
    fontSize: 22,
  },
  textNormal: {
    fontFamily: "Lato_400Regular",
    fontSize: 20,
  },
  textPersonal: {
    fontFamily: "Quicksand_400Regular",
    fontSize: 20,
  },
});
