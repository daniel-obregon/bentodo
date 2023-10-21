import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase-auth";
import { app } from "../app.js";

export const auth = getAuth(app);

export function login(){
    const googleProvider = new GoogleAuthProvider();

    signInWithRedirect(auth, googleProvider);
    
}

export function logout(){
    auth.signOut()
        .then (()=> console.log("Adios"))
        .catch(err=> console.log(err));
}
