import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4ucRYrupcD16dhSLVWZm1GIZ3sglXjDQ",
  authDomain: "form-d0a5c.firebaseapp.com",
  projectId: "form-d0a5c",
  storageBucket: "form-d0a5c.firebasestorage.app",
  messagingSenderId: "502414603867",
  appId: "1:502414603867:web:900693cb5076b73c23317e",
  measurementId: "G-BZ4ZRTLP2Q"
};

// Initialize Firebase

const analytics = getAnalytics(app);

import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";



// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
