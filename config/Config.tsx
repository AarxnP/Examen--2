
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBXxWdemmfp6mFBad5vVzPGJCeUMx5CoM",
  authDomain: "ap-prueba-c14e6.firebaseapp.com",
  projectId: "ap-prueba-c14e6",
  storageBucket: "ap-prueba-c14e6.appspot.com",
  messagingSenderId: "112371917156",
  appId: "1:112371917156:web:24252bfd8e56243296da71"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const auth = getAuth();

