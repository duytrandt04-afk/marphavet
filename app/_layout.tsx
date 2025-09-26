import { Stack } from "expo-router";
import './globals.css'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ 
      flex: 1,
    }}>
      <StatusBar/>
      <Stack screenOptions={{ animation: "fade" }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false, animation: "simple_push" }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />  
      </Stack>
    </SafeAreaView>
  );
}