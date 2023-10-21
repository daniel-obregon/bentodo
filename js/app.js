import { initializeApp } from "firebase-app";
import { Nav } from "./components/nav.js";
import tree from './state.js';
import { Home } from "./components/home.js";
import { TodoForm } from "./components/todos/form.js";
import { TodoList } from "./components/todos/list.js";
import { TodoItem } from "./components/todos/todo.js";
import { TodoIndex } from "./components/index.js";


const firebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxxx",
  measurementId: "xxxxx"
};

export const app = initializeApp(firebaseConfig);

import('./firebase/auth.js').then(({ auth }) => {
  auth.onAuthStateChanged((user) => { 
      tree.select('user').set(
        JSON.parse(JSON.stringify(user))
      )
  });
});

import('./firebase/users.js').then(({ createUser }) => {
  tree.select('user').on('update',(e) => {
    let user = e.data.currentData;
    if(user){
      createUser(user);
    }
  });
})


customElements.define('app-nav', Nav);
customElements.define('app-home', Home);
customElements.define('app-todo-form', TodoForm);
customElements.define('app-todo-list', TodoList);
customElements.define('app-todo-item', TodoItem);
customElements.define('app-todo-index', TodoIndex);


navigator.serviceWorker.register('/sw.js');
