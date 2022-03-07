import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "my-first-firebase-app-d49df.firebaseapp.com",
  projectId: "my-first-firebase-app-d49df",
  storageBucket: "my-first-firebase-app-d49df.appspot.com",
  messagingSenderId: "347217348918",
  appId: "1:347217348918:web:c01506dba6eb0dc0014b97",
};
export default firebaseConfig;

const app = initializeApp(firebaseConfig);
