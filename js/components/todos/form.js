import { html, LitElement, css } from 'lit';

export class TodoForm extends LitElement{
    
    static get properties(){
        return {
            title: { },
            description: { }
        }

    }

    static get styles (){
        return css`

            :host {
                margin: 0;
                box-sizing: border-box;

                padding-left: 20px;
                padding-right: 20px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                
                height: 10dvh;
                z-index: 99;

                background-image: radial-gradient( circle farthest-corner at 10% 20%,  #5ACAD0 0%, rgba(4,0,4,1) 60% );
            }

            form {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                width: 100%;
                
            }

            input {
                padding: 0.8em 20px;
                background-color: rgba(4,0,4,0.5);
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 5px;
                font-size: 1rem;
                font-weight: 400;
                color: #ffffff;
                flex-grow: 1;
                
            }

            ::placeholder {
                color: #5ACAD0;
                opacity: 1;
            }
            

            button {
                background-color: transparent;
                padding: 0;
                border: 0;
                cursor: pointer;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            svg {
                fill: #ffffff;
            }

            svg:hover {
                fill: #C78352;
            }

            
        `;
    }

    constructor(){
        super();

        this.title = '';
        
        import('../../firebase/todos.js').then(({ createTodo }) => {
            this.createTodo = createTodo;
        });
    }

    create(e){
        e.preventDefault();
        this.createTodo(this.title);
    }

    

    render(){
        return html`
            
            <form @submit=${ (e) => this.create(e) }>
                <input type="text"
                placeholder="Nueva tarea"
                @input=${ (e) => { this.title = e.target.value } }>

                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M22.925 10.3575L13.205 0.6375C12.355 -0.2125 10.975 -0.2125 10.125 0.6375L0.405 10.3575C-0.135 10.8975 -0.135 11.7775 0.405 12.3175C0.675 12.5875 1.035 12.7275 1.385 12.7275C1.735 12.7275 2.095 12.5875 2.365 12.3175L10.275 4.4075V23.4975C10.275 23.8775 10.435 24.2275 10.685 24.4775C10.935 24.7275 11.285 24.8875 11.665 24.8875C12.435 24.8875 13.055 24.2675 13.055 23.4975V4.4075L20.965 12.3175C21.235 12.5875 21.595 12.7275 21.945 12.7275C22.295 12.7275 22.655 12.5875 22.925 12.3175C23.465 11.7775 23.465 10.8975 22.925 10.3575Z"/>
                    </svg>
                </button>

            </form>
                    
        `;
    }
}