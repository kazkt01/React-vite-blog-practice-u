import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_lL4uXIr1vq9C49FmXlnNlZ4fSHiuamE",
  authDomain: "blog-vite-practi.firebaseapp.com",
  projectId: "blog-vite-practi",
  storageBucket: "blog-vite-practi.appspot.com",
  messagingSenderId: "440021145133",
  appId: "1:440021145133:web:31f8c322fa68065fbc4aa4",
  measurementId: "G-JV5JF7VLF9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
