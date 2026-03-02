import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_2yfAMSWDj4S5g6uuu58RgwNa4WAGL2I",
  authDomain: "fir-project-18aa1.firebaseapp.com",
  projectId: "fir-project-18aa1",
  storageBucket: "fir-project-18aa1.firebasestorage.app",
  messagingSenderId: "825389988024",
  appId: "1:825389988024:web:f8fa5b7668537a8b57dc4d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

// Inici de sessió
export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Afegir tasca
export const addTask = async (nomTasca) => {
  const tasquesRef = collection(db, "tasques");

  await addDoc(tasquesRef, {
    títol: nomTasca,
    completada: false,
    usuari: auth.currentUser.uid,
  });
};
