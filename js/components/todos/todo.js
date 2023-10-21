import { html, LitElement, css } from 'lit';
import { TODO_STATUS } from '../../firebase/status.js';

export class TodoItem extends LitElement{

    static get styles(){

        return css`

            h2 {
                marging: 0;
                color: #ffffff;
                box-sizing: border-box;
                font-size: clamp(1vw, 1.125rem, 3.5vw);
                text-wrap: balance;
            }

            .buttons {
                display: flex;
                justify-content: space-between

            }
             
            button {
                background-color: transparent;
                padding: 0;
                border: 0;
                cursor: pointer;
            }

            svg {
                fill: #5ACAD0;
            }

            svg:hover {
                fill: #C78352;
            }

            .task-completed {
                opacity: 20%;
            }
        `;

        
    }
    
    static get properties(){
        return {
            todo: { type: Object }
        }

    }

    constructor(){
        super();

        import('../../firebase/todos.js').then(({ deleteTodo, updateTodo }) => {
            this.deleteTodo = deleteTodo;
            this.updateTodo = updateTodo
        });

    }

    check(e){

        if(this.todo.status == 'active') {

            this.updateTodo(this.todo.id,{
                status: TODO_STATUS.COMPLETED
            })
        }else{
            this.updateTodo(this.todo.id,{
                status: TODO_STATUS.ACTIVE
            })
        }

    }

    render(){

        console.log()

        if(this.todo.status == 'completed') {
            return html`
                <li class="task-completed">
                    <div class="buttons">

                        <button @click=${ () => this.deleteTodo(this.todo.id) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path d="M13.4381 11.5014L22.5976 2.34079C23.1341 1.80419 23.1341 0.939055 22.5976 0.402452C22.0611 -0.134151 21.196 -0.134151 20.6595 0.402452L11.5 9.56303L2.34051 0.402452C1.80398 -0.134151 0.938943 -0.134151 0.402404 0.402452C-0.134135 0.939055 -0.134135 1.80419 0.402404 2.34079L9.56189 11.5014L0.402404 20.6619C-0.134135 21.1985 -0.134135 22.0637 0.402404 22.6003C0.670674 22.8686 1.02107 23 1.37146 23C1.72185 23 2.07224 22.8686 2.34051 22.6003L11.5 13.4397L20.6595 22.6003C20.9278 22.8686 21.2781 23 21.6285 23C21.9789 23 22.3293 22.8686 22.5976 22.6003C23.1341 22.0637 23.1341 21.1985 22.5976 20.6619L13.4381 11.5014Z"/>
                            </svg>
                        </button>

                        <button @click=${ () => this.check() }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.5 25C5.60556 25 0 19.3944 0 12.5C0 5.60556 5.60556 0 12.5 0C19.3944 0 25 5.60556 25 12.5C25 19.3944 19.3944 25 12.5 25Z"/>
                            </svg>
                        </button>

                    </div>
                    <h2>${ this.todo.title }</h2>
                    
                </li>
            
            `;
        } else {
            return html`
                <li>
                    <div class="buttons">

                        <button @click=${ () => this.deleteTodo(this.todo.id) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path d="M13.4381 11.5014L22.5976 2.34079C23.1341 1.80419 23.1341 0.939055 22.5976 0.402452C22.0611 -0.134151 21.196 -0.134151 20.6595 0.402452L11.5 9.56303L2.34051 0.402452C1.80398 -0.134151 0.938943 -0.134151 0.402404 0.402452C-0.134135 0.939055 -0.134135 1.80419 0.402404 2.34079L9.56189 11.5014L0.402404 20.6619C-0.134135 21.1985 -0.134135 22.0637 0.402404 22.6003C0.670674 22.8686 1.02107 23 1.37146 23C1.72185 23 2.07224 22.8686 2.34051 22.6003L11.5 13.4397L20.6595 22.6003C20.9278 22.8686 21.2781 23 21.6285 23C21.9789 23 22.3293 22.8686 22.5976 22.6003C23.1341 22.0637 23.1341 21.1985 22.5976 20.6619L13.4381 11.5014Z"/>
                            </svg>
                        </button>

                        <button @click=${ () => this.check() }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.5 25C5.60556 25 0 19.3944 0 12.5C0 5.60556 5.60556 0 12.5 0C19.3944 0 25 5.60556 25 12.5C25 19.3944 19.3944 25 12.5 25ZM12.5 2.77778C7.13889 2.77778 2.77778 7.13889 2.77778 12.5C2.77778 17.8611 7.13889 22.2222 12.5 22.2222C17.8611 22.2222 22.2222 17.8611 22.2222 12.5C22.2222 7.13889 17.8611 2.77778 12.5 2.77778Z"/>
                            </svg>
                        </button>

                    </div>
                    <h2>${ this.todo.title }</h2>
                    
                </li>
            `;
        }


    }
}