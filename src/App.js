import React from 'react';
import './App.css';
import * as firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";
import firebaseConf from "./config/firebase.json"
const app = firebase.initializeApp(firebaseConf);


function App() {

  return (
    <div className="App">
    <h1>Welcome on Weird Expression</h1>
  </div>
  );
}

export default App;

