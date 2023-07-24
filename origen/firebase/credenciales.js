import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDY1iVrrA0WPstnVdBzCeyHFguFvjwz1hU",
  authDomain: "proyectofianl-62793.firebaseapp.com",
  projectId: "proyectofianl-62793",
  storageBucket: "proyectofianl-62793.appspot.com",
  messagingSenderId: "466532332234",
  appId: "1:466532332234:web:2a9be9dfcb5456a8733a33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
