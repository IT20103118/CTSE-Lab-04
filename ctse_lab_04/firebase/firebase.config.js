import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOLhcAlRZMPSKv4lindwlhfpSKVTej80M",
  authDomain: "ctse-lab04-3fed9.firebaseapp.com",
  projectId: "ctse-lab04-3fed9",
  storageBucket: "ctse-lab04-3fed9.appspot.com",
  messagingSenderId: "735034493652",
  appId: "1:735034493652:web:e5f72ab2b9ad3e55538941",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export { firebase };
