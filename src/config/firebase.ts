import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeT0TinNZMMMLAIUTDCpw_kXGmdWfxa-4",
    authDomain: "neocode-dm.firebaseapp.com",
    projectId: "neocode-dm",
    storageBucket: "neocode-dm.firebasestorage.app",
    messagingSenderId: "818314042337",
    appId: "1:818314042337:web:3f50cea6c2a6977c03d0a0",
    measurementId: "G-J83LLELH4Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
