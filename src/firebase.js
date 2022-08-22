// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyClgtIQYy9mzcgJUv2jjJBkSLOpT9EYoqg",
authDomain: "shule-web-a339c.firebaseapp.com",
projectId: "shule-web-a339c",
storageBucket: "shule-web-a339c.appspot.com",
messagingSenderId: "621057097559",
appId: " 1:621057097559:web:3106bd8d1efa2560b0c812"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



