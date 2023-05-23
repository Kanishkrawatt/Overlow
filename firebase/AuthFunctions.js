import firebase from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import auth from "./auth";

export const user = auth?.currentUser;
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

const signOutWithGoogle = () => {
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.log("An error happened.");
    });
};
function SignIn() {
  const user = auth?.currentUser;
  let userData = {};
  if (user) {
    userData = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
  }
  return <>{!user && signInWithGoogle()}</>;
}

export const CheckUser = () => {
  const [user] = auth?.currentUser;
  if (user) {
    return 1;
  }
  return 0;
};
export const UserInfo = () => {
  const user = auth?.currentUser;
  let userData = {};
  if (user) {
    userData = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userData;
  }
  return null;
};
export default SignIn;
export { signInWithGoogle, signOutWithGoogle };
