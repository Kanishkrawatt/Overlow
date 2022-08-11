import firebase from "firebase/app";
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: NEXT_PUBLIC_FB_DatabaseUrl,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = firebase.database();
function writeNewPost(props) {
  // A post entry.
  var postData = {
    author: props.username,
    uid: props.uid,
    body: props.body,
    title: props.title,
    starCount: 0,
    authorPic: props.picture,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child("posts").push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/posts/" + newPostKey] = postData;
  updates["/user-posts/" + uid + "/" + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

export default writeNewPost;
