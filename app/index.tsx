import { StatusBar, Text, View } from "react-native";
import { Routes } from "@/routes";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function HomeScreen() {

  return (
    <>
    <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Routes />
  </>
  );
}
