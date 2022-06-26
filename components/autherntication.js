import React from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";



const firebaseconfig={ 
  apiKey: process.env.NEXT_PUBLIC_FB_apikey,
  authDomain: process.env.NEXT_PUBLIC_FB_authDomain,
  databaseURL:process.env.NEXT_PUBLIC_FB_databaseURL,
  projectId: process.env.NEXT_PUBLIC_FB_projectId,
  storageBucket:process.env.NEXT_PUBLIC_FB_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FB_appId,
  measurementId: process.env.NEXT_PUBLIC_FB_measurementId,}
firebase.initializeApp(firebaseconfig);

const auth = firebase.auth();
// const firestore = firebase.firestore();

function autherntication() {
  //   const [user] = useAuthState(auth);

  return <SignIn />;
}

function SignIn() {
  const [user] = useAuthState(auth);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const signOutWithGoogle=()=>{
    auth.signOut()
  }
  let photoURL;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
  return (
    <>
      <button
        className="block h-[40px] w-[40px] rounded-full bg-black text-white absolute right-[50px] top-3 border-black"
        onClick={user?signOutWithGoogle:signInWithGoogle}
      >
        {user ? <img className="rounded-full " src={photoURL} alt="img"/> : "N/A"}
      </button>
    </>
  );
}

export default autherntication;
