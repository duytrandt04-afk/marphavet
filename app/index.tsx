import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { Redirect } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Index() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user:", user);
      setUser(user);
      setLoading(false);
    });

    return unsubscribe; // cleanup listener
  }, []);

  if (loading) {
    return null; // or a splash screen component
  }

  return user ? (
    <Redirect href="/(tabs)/home" />
  ) : (
    <Redirect href="/login" />
  );
}
