import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  Raleway_400Regular,
  Raleway_700Bold,
  useFonts,
} from "@expo-google-fonts/raleway";
import {
  Quicksand_400Regular,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
    Quicksand_400Regular,
    Quicksand_700Bold,
    Lato_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(0, 0, 0)",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}
