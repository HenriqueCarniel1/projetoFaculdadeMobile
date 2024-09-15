import { StatusBar, View, ActivityIndicator } from "react-native";
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
      {fontsLoaded ? (
        <Routes />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0d6efd" />
        </View>
      )}
    </>
  );
}
