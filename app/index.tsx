import { StatusBar, Text, View } from "react-native";
import { Routes } from "@/app/src/routes";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <>
      <StatusBar
        barStyle="default"
        backgroundColor={'#0d6efd'}
      />
      {fontsLoaded ? <Routes /> : null}
    </>
  );
}
