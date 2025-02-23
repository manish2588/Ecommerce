import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import searchReducer from "./ValueSlice"
import userReducer from './UserSlice'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/firebase";
import { setUser } from "./UserSlice";
export const store = configureStore({
    reducer: {
     cart:cartReducer,
     search:searchReducer,
     user:userReducer
    },
  });
  onAuthStateChanged(auth, (user) => {
    store.dispatch(setUser(user ? { uid: user.uid, email: user.email } : null));
  });
  