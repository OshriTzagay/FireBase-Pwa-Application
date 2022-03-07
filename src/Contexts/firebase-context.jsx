import { createContext } from "react";
import firebase from "firebase/compat/app";
import firebaseConfig from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();

export const FireBaseContext = createContext(firebaseAuth);

export const FirebaseProvider = ({ children }) => {
  const [user] = useAuthState(firebaseAuth);
  
  return <FireBaseContext.Provider>{children}</FireBaseContext.Provider>;
};
