// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,getDocs
} from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk_3PwLwZdS5HZ6jJJ2QKQqyXd8pxkhpA",
  authDomain: "markplacereact.firebaseapp.com",
  projectId: "markplacereact",
  storageBucket: "markplacereact.appspot.com",
  messagingSenderId: "1099056107228",
  appId: "1:1099056107228:web:cabc4f93c8df65f7902e19",
  measurementId: "G-1WESSMK2SJ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addColletionAndDocuments = async (collectionKey, dataToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  dataToAdd.forEach((data) => {
    const docRef = doc(collectionRef, data.title.toLowerCase());
    batch.set(docRef, data);
  });

  await batch.commit();

  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((accumulator , docSnapshot ) =>{
    const {title , items} = docSnapshot.data();
    accumulator[title.toLowerCase()] = items;

    return accumulator;

  },{});

 return categoryMap;
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdDate,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("There is an error", error);
    }
  }

  return userDocRef;
};

// create function to user and password creation

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangeListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
