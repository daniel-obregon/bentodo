import { getFirestore, doc, setDoc } from 'firebase-firestore';
import { app } from '../app.js';

export const db = getFirestore(app);

export function createUser(user){
    const docRef = doc(db, "users", user.uid);
    return setDoc(docRef, {
        displayName: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid
    });
}