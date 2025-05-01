import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDB-GLxCPzRxpi09hmlBQuGzGPsQ1ZddqI",
    authDomain: "fir-app-856fd.firebaseapp.com",
    projectId: "fir-app-856fd",
    storageBucket: "fir-app-856fd.firebasestorage.app",
    messagingSenderId: "63170366400",
    appId: "1:63170366400:web:54a853cf77bb0722ba9625",
    databaseURL: "https://fir-app-856fd-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig);
  export const db  = getFirestore(app);