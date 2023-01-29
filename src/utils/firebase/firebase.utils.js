import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default firebaseApp;

export const db = getFirestore();

export const createUserProfileDocument = async (userAuth) => {
    const userRef = doc(db, "users", userAuth.uid);
    const snapShot = await getDoc(userRef);
    console.log(snapShot.exists())
    

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
};