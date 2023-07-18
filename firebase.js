
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD2Yf1m62d8N98gfE_RQq_-EhTKf1kMj0w",
  authDomain: "notes-app-4cf65.firebaseapp.com",
  projectId: "notes-app-4cf65",
  storageBucket: "notes-app-4cf65.appspot.com",
  messagingSenderId: "750335072040",
  appId: "1:750335072040:web:5439a9cb6b8bd6d0ea621d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
