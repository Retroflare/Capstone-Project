



 import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD-RkpUyelOqpoiCTCwkHFzgyGIcw4M2Rs",
    authDomain: "final-capstone-60846.firebaseapp.com",
    projectId: "final-capstone-60846",
    storageBucket: "final-capstone-60846.appspot.com",
    messagingSenderId: "957558572259",
    appId: "1:957558572259:web:e57e46b2c7117f75feb1d6",
    measurementId: "G-HQYVTGLY9P"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();


  export { db, auth };












// import firebase from 'firebase/app'; // Import the base module
// import 'firebase/auth'; // Import the authentication module
// import 'firebase/firestore'; // Import the Firestore module

// const firebaseConfig = {
//   apiKey: "AIzaSyD-RkpUyelOqpoiCTCwkHFzgyGIcw4M2Rs",
//   authDomain: "final-capstone-60846.firebaseapp.com",
//   projectId: "final-capstone-60846",
//   storageBucket: "final-capstone-60846.appspot.com",
//   messagingSenderId: "957558572259",
//   appId: "1:957558572259:web:e57e46b2c7117f75feb1d6",
//   measurementId: "G-HQYVTGLY9P"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig); // Correct method name

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
