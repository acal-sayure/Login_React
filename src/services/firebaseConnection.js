import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDhH7SrYN8LkB_les81gx5oulNsU278tQA",
    authDomain: "tickets-6896f.firebaseapp.com",
    projectId: "tickets-6896f",
    storageBucket: "tickets-6896f.appspot.com",
    messagingSenderId: "121841866802",
    appId: "1:121841866802:web:ace68503c2fafccf5a442b"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export {auth, db, storage};