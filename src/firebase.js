// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Yp9i4FO8euTvsCot4MyJFSY36DHCV34",
  authDomain: "tvl-svelte-csr.firebaseapp.com",
  projectId: "tvl-svelte-csr",
  storageBucket: "tvl-svelte-csr.appspot.com",
  messagingSenderId: "1062920624277",
  appId: "1:1062920624277:web:dd2eee5e55db6095e3a39c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);