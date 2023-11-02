import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrfyrbzqJnGHrkoUT18dibUjsxbvB-5Hs",
    authDomain: "crown-apparel-db-2eafb.firebaseapp.com",
    projectId: "crown-apparel-db-2eafb",
    storageBucket: "crown-apparel-db-2eafb.appspot.com",
    messagingSenderId: "128871751275",
    appId: "1:128871751275:web:2a92c4ea3b50a31cc49b2e"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);