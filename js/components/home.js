import { LitElement, html, css } from 'lit';
import tree from '../state.js';

export class Home extends LitElement{
    
    static get styles(){
        return css`
            :host {
                margin: 0;
                box-sizing: border-box;
                             
            }
            h1 {
                margin: 0;
            }
        `;
    }

    static get properties(){
        return {
            user: { type: Object }
        }
    }

    constructor(){
        super();

        tree.select('user').on('update',(e) => {
            this.user = e.data.currentData;
        });
    }

    render(){
        if (this.user) {
                return html`
                <app-todo-list></app-todo-list>
                `;
        } else {
            return html`
                <app-todo-index></app-todo-index>
                `;
        }
    }
}
