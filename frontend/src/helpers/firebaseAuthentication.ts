import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqqiFlQUCb9_vtqnO7gHvX6OOSBltCPYM",
  authDomain: "products-management-syst-941b0.firebaseapp.com",
  projectId: "products-management-syst-941b0",
  storageBucket: "products-management-syst-941b0.firebasestorage.app",
  messagingSenderId: "432480033043",
  appId: "1:432480033043:web:8be3ad3bc7e3c7dcede2e6",
};

let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase app initialized");
} catch (error) {
  console.error("Error initializing Firebase app: ", error);
}

const auth = getAuth(app);

export class FirebaseAuthHelper {
  static async getAnonymousToken(): Promise<string | null> {
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;

      console.log("Anonymous user signed in:", user.uid);

      const idToken = await user.getIdToken();
      //console.log("Anonymous ID Token:", idToken);

      return idToken;
    } catch (error) {
      console.error("Error during anonymous authentication:", error);
      return null;
    }
  }
}
