
const getProducts = async()=> {
    try{
        const response = await fetch("cikktorzs.json");
        const json = await response.json();
    } catch(err) {
        console.log(err);
    };
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOL56HrmrywK0YUQUKaaHAS5pKNQeCB2k",
  authDomain: "vizsgapopradypetra.firebaseapp.com",
  projectId: "vizsgapopradypetra",
  storageBucket: "vizsgapopradypetra.appspot.com",
  messagingSenderId: "264917354590",
  appId: "1:264917354590:web:8dbbb2eac866eaf31b8ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

