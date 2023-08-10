import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../lib/firebase";

export const signUp = async (email, password) => {
    try {
        return await createUserWithEmailAndPassword(auth, email, password).then(function (data) {
            return data.user.uid;
        }).catch(function (err) {
            console.log(err);
        });
    }
    catch (err) {
        console.log(err);
    }
}

export const signIn = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
        console.log(err);
    }
}