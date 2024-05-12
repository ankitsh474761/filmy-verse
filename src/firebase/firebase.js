import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APP_API_KEY,
  authDomain: "filmyverse-ff6e3.firebaseapp.com",
  projectId: "filmyverse-ff6e3",
  storageBucket: "filmyverse-ff6e3.appspot.com",
  messagingSenderId: "72410487791",
  appId: "1:72410487791:web:78db415c67ca285589f41a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
