// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfAVBg8uKp6DwraoHaJPeCl-zV2kiTlhE",
  authDomain: "brand-shop-4b959.firebaseapp.com",
  projectId: "brand-shop-4b959",
  storageBucket: "brand-shop-4b959.appspot.com",
  messagingSenderId: "766836574807",
  appId: "1:766836574807:web:ee10dd93f29c79a7bbb112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;