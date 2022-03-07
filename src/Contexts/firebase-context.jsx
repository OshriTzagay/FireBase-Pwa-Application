import { createContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import firebaseConfig from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";


firebase.initializeApp(firebaseConfig); // Initialize Connection to the Fire-base
const firebaseAuth = firebase.auth();// Create a firebase auth object. 

export const FireBaseContext = createContext(firebaseAuth); // Create - context //

export const FirebaseProvider = ({ children }) => {
  const [user] = useAuthState(firebaseAuth); // import a firebase user.//
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(user);
  }, []);
  return (
    <FireBaseContext.Provider value={{ user, auth }}>
      {children}
    </FireBaseContext.Provider>
  );
};
