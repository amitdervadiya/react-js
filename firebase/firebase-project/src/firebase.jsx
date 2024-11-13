import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD5Q1zOqBGVKRbdor1r9axAAxbpIQkxNhw",
  authDomain: "webstore1234-ae957.firebaseapp.com",
  projectId: "webstore1234-ae957",
  storageBucket: "webstore1234-ae957.firebasestorage.app",
  messagingSenderId: "1007373008716",
  appId: "1:1007373008716:web:441abbb2c48c13893899e9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };