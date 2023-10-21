import { LitElement, html, css } from 'lit';
import tree from '../state.js';


export class Nav extends LitElement{

    static get properties(){
        return {
            user:{ type: Object }
        }

    }

    static get styles(){
        return css`
            :host {
                margin: 0;
                box-sizing: border-box;
                color:#ffffff;
                
            }
        
            nav {
                height: 60px;
                position: sticky;
                top: 0px;
                z-index: 99;

                display: flex;
                align-items: center;
                justify-content: flex-end;
                
                background-image: radial-gradient( circle farthest-corner at -4% -12.9%,  #000000 0.3%, #0C4E52 90%);
                border-bottom: 1px solid #5ACAD0;
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                height: 50px;
                gap: 1em;
                list-style-type: none;
                align-items: center;
                justify-content: flex-end;
                margin: 0 1em;
                padding-inline-start: 0;
            }
            li {
                font-size: 0.875rem;
                font-weight: 300;
            }

            .img-profile > img {
                display: flex;
                height: 35px;
                width: 35px;
                border-radius: 50%;
                border: 1px solid #5ACAD0;
            }

            .logo-nav {
                flex-grow: 1;
                justify-self: start;
                padding: 20px;
                                
            }

            .logo-nav > img {
                height: 25px;
                                
            }

            button {
                padding: 0.6em 2em;
                background-color: #5ACAD0;
                border: 0;
                border-radius: 5px;
                font-size: 0.875rem;
                color: #0C4E52;
                text-align: center;
                font-weight: 400;
            }
            
            button:hover {
                background-color: #C78352;
                color: #ffffff;
                font-weight: 400;
            }

            .name {
                display: none;
            }

            @media (min-width: 500px) {
                .name {
                    display: flex;
                }
            }
        `; 
    }

    constructor(){
        super();
        this.user = null;
        import('../firebase/auth.js').then(({ login, logout, auth }) => {

            this.login = login;
            this.logout = logout;
        });

        tree.select('user').on('update',(e) => {
            this.user = e.data.currentData;
        });

    }

    userButtons(){
        if (this.user) {
            return html`
                <li>
                    <button @click=${ function(){ this.logout() } }>Cerrar sesión</button>
                </li>
                <li class="name"><p>${this.user.displayName}</p></li>
                <li><picture class="img-profile"><img src="${ this.user.photoURL }" alt="perfil de usuario"></picture></li>
                `;
        } else {
            return html`
                <li>
                    <button @click=${ function(){ this.login() } }>Iniciar sesión</button>
                </li>
                `;
        }
    }

    render(){
        if (this.user) {
            return html`
                <nav>
                    <div class="logo-nav"><img  src="./assets/svg/do_white.svg" alt="bentodo"/></div>
                    <ul>
                        ${ this.userButtons() }
                    </ul>
                </nav>
                `;
        } else {
            return html`
                <nav>
                    <div class="logo-nav"><img  src="./assets/svg/do_white.svg" alt="logotipo bentodo"/></div>
                    <ul>
                        ${ this.userButtons() }
                    </ul>
                </nav>
                `;
        }
    }
}