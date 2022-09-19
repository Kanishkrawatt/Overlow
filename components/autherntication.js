import React from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

import { signInWithGoogle, signOutWithGoogle } from "../firebase/Signin";
import { firebaseconfig } from "../firebase/firebaseconfig";
firebase.initializeApp(firebaseconfig);

const auth = firebase.auth();
// const firestore = firebase.firestore();

function autherntication() {
  //   const [user] = useAuthState(auth);

  return <SignIn />;
}

function SignIn() {
  const [user] = useAuthState(auth);
  const signIn = () => {
    signInWithGoogle();
  };
  const signOut = () => {
    signOutWithGoogle();
  };
  let photoURL;
  if (user !== null) {
    photoURL = user.photoURL;
  }
  return (
    <>
      <button
        className="hidden h-[40px] w-[40px] z-20 fixed rounded-full bg-black text-white right-[50px] top-3 border-black sm:block"
        onClick={user ? signOut : signIn}
      >
        {user ? (
          <img className="rounded-full " src={photoURL} alt="img" />
        ) : (
          "N/A"
        )}
      </button>
    </>
  );
}

export default autherntication;
