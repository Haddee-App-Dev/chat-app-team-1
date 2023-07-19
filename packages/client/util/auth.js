import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

export const signUp = async (email, password) => {
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    }
}