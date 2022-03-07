import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/login-compo/Login";
import Register from "./Components/register-compo/Register";
import { FirebaseProvider } from "./Contexts/firebase-context";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* //!-----------------------------------------------------//> */}
      <FirebaseProvider>
        <Register />
      </FirebaseProvider>
    </div>
  );
}

export default App;
