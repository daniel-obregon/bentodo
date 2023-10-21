import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, onSnapshot } from 'firebase-firestore';
import { app } from '../app.js';
import { TODO_STATUS } from './status.js';

export const db = getFirestore(app);

export function createTodo(title, description){
    const collectionRef = collection(db,"todos");

    addDoc(collectionRef, {
        title,
        status: TODO_STATUS.ACTIVE
    })
}

export async function getTodos(){
    const collectionRef = collection(db,"todos");
    const querySnapshot = await getDocs(collectionRef);

    const todos = [];

    querySnapshot.forEach((doc) => {
        let todoJSON = {
            id: doc.id,
            ...doc.data()
        }
        todos.push(todoJSON);
    });

    return todos;
}

export function deleteTodo(id){
    const docRef = doc(db,"todos", id);
    return deleteDoc(docRef);
}

export function updateTodo(id, data){
    const docRef = doc(db,"todos", id);
    return updateDoc(docRef, data);
}
