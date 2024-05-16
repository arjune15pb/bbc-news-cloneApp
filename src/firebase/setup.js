// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'


import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSnnMb3AyUuEPzpxi8OsL0Z5seMokyOl0',
  authDomain: 'bbc-clone-ad2f1.firebaseapp.com',
  projectId: 'bbc-clone-ad2f1',
  storageBucket: 'bbc-clone-ad2f1.appspot.com',
  messagingSenderId: '931815225450',
  appId: '1:931815225450:web:6b39ebe0f1b2a19e33b213',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleAuthProvider=new GoogleAuthProvider(app);
export const database=getFirestore(app);

