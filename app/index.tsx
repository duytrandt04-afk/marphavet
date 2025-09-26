// app/index.tsx
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user: User | null) => {
      console.log("user:", user);
      if (user) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/login");
      }
      setLoading(false);
      SplashScreen.hideAsync();
    });

    return unsubscribe;
  }, [router]);

  if (loading) return null;
  return null;
}
