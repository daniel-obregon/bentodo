import { html, LitElement, css } from 'lit';

export class TodoList extends LitElement{
    
    static get properties(){
        return {
            todos: { type: Array }
        }

    }

    static get styles(){
        return css`

        /* Estilos para motores Webkit y blink (Chrome, Safari, Opera... )*/

        ul::-webkit-scrollbar {
            -webkit-appearance: none;
        }
        
        ul::-webkit-scrollbar:vertical {
            width: 0px;
        }
        
        ul::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
            display: none;
        } 
        
        ul::-webkit-scrollbar:horizontal {
            height: 5px;
        }
        
        ul::-webkit-scrollbar-thumb {
            background-color: #C78352;
            border-radius: 20px;
            
        }
        
        ul::-webkit-scrollbar-track {
            border-radius: 10px;
            
        }

        :host {

        }
        


        ul {
            margin: 0;
            box-sizing: border-box;
            padding: 40px 20px;
            list-style-type: none;
            display: flex;
            flex-flow: column wrap;
            
            height: calc(90dvh - 60px);
            flex-wrap: wrap;
            gap: 20px;
            align-content: flex-start;
            overflow-x: scroll;
            background-image: url(./assets/img/bentodo-main-bg.webp);
            background-size: cover;
            background-position: center;
        }

        

        app-todo-item {
            margin: 0;
            flex-grow: 1;
            padding: 20px;
            width: clamp(10vw, 200px, 25vw);
            hyphens: auto;

            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 15px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        `;
    }

    constructor(){
        super();

        this.todos = [];

        import('../../firebase/todos.js').then(({ getTodos }) => {
            getTodos().then(todos => {
                this.todos = todos;
            });
            
        });
        
    }


    render(){
        return html`
            <ul id="scroll-h">
                ${this.todos.map(todo => html`<app-todo-item .todo=${todo}></app-todo-item>`)}
            </ul>
            <app-todo-form></app-todo-form>
            
                
        `;
    }

}
