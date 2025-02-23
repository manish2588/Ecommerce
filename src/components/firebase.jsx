import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoZsoTYpIF1W0x9K0qyolXh_e6lj_FmcQ",
  authDomain: "ecommerceauth-21370.firebaseapp.com",
  projectId: "ecommerceauth-21370",
  storageBucket: "ecommerceauth-21370.appspot.com", // Fix the incorrect domain
  messagingSenderId: "904583054086",
  appId: "1:904583054086:web:ae3821e9029eed44429487"
};

// Initialize Firebase **before** calling getAuth()
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Pass the app instance to getAuth()
 const db = getFirestore(app);
// Export auth and app
 const googleProvider = new GoogleAuthProvider();
export { auth,db,googleProvider };
export default app;
