
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCp5hRecFAyGtn06y7GudCUlNXyIPH2Ia8",
  authDomain: "react-notes-2eb3a.firebaseapp.com",
  projectId: "react-notes-2eb3a",
  storageBucket: "react-notes-2eb3a.appspot.com",
  messagingSenderId: "591001295771",
  appId: "1:591001295771:web:9bcb22fa913a3999c05f3e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")