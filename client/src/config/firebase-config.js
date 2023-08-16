import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCyKjC34zrCmZfK9LgQOT3oiWqVcTuRJdU",
  authDomain: "minerdorm.firebaseapp.com",
  projectId: "minerdorm",
  storageBucket: "minerdorm.appspot.com",
  messagingSenderId: "266665157551",
  appId: "1:266665157551:web:11ad3d371437af6492055a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);