import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
  type Auth,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDALo9iaAouiwqG9Jxf-o-KFGhnVGHYvrY",
  authDomain: "marphavet-6fbe1.firebaseapp.com",
  projectId: "marphavet-6fbe1",
  storageBucket: "marphavet-6fbe1.firebasestorage.app",
  messagingSenderId: "132730498239",
  appId: "1:132730498239:web:07ee8b43b3522c0e882a0a",
  measurementId: "G-PLKHB1QX57",
};

export const FIREBASE_APP = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

let FIREBASE_AUTH: Auth;

try {
  FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e: any) {
  if (e.code === "auth/already-initialized") {
    FIREBASE_AUTH = getAuth(FIREBASE_APP);
  } else {
    throw e;
  }
}

export { FIREBASE_AUTH };
