import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9QeXSxdwOOV5vz1cWzI-sxqU3TWcDNCs",
  authDomain: "clone-challenge-b0c53.firebaseapp.com",
  projectId: "clone-challenge-b0c53",
  storageBucket: "clone-challenge-b0c53.appspot.com",
  messagingSenderId: "995426234832",
  appId: "1:995426234832:web:af853723f2a672d9dd89d5",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.fireStore();
const auth = firebaseApp.auth();

export { db, auth };
