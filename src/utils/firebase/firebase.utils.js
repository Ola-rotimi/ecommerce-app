import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUQUjm2s258Lw5honWfFmLRb4jq4o4vyo",
  authDomain: "e-commerce-app-db-3a0bc.firebaseapp.com",
  projectId: "e-commerce-app-db-3a0bc",
  storageBucket: "e-commerce-app-db-3a0bc.appspot.com",
  messagingSenderId: "23133800993",
  appId: "1:23133800993:web:d45b7c7bd621a8f8ab3160",
};

const firebaseApp = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export default firebaseApp;

export const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    console.log("error creating user", error.message);
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log("error signing in user", error.message);
  }
};
