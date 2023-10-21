import { html, LitElement, css } from 'lit';

export class TodoIndex extends LitElement{
    
    static get properties(){
        
        return {
            todos: { type: Array }
        }
        
    }

    static get styles(){
        return css`   
        
            * {
            margin: 0;
            box-sizing: border-box;
            }
            
            body {
                font-family: 'Noto Sans', sans-serif;
                font-size: 16px;
                background-color: #000000;
                color: #ffffff;
            }
            
            p {
                margin-top: 0;
                margin-bottom: 0;
                font-weight: 300;
                text-wrap: balance;
                font-size: 14px;
            }
            
            img {
                max-width: 100%;
            }
            
            
            .container {
                background-color: #000000;
                width: 1200px;
                max-width: 95%;
                margin-right: auto;
                margin-left: auto;
            }
            
            .text-center {
                text-align: center;
            }
            
            
            .main-content {
                height: 860px;
                max-height: 90vh;
                
                
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 2vh;
                
                background:
                linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),
                linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),
                url(./assets/img/bentodo-main-bg.webp);
                background-size: cover; 
                background-repeat: no-repeat;
            
            }
            
            .bentodo-logo-main {
                max-width: 90vw;
            }
            
            .title-main-h1 {
                font-size: 2rem;
                margin-top: 10vh;
                width: 720px;
                max-width: 90vw;
                text-wrap: balance;
            }
            
            .text-main {
                width: 720px;
                max-width: 90vw;
                text-wrap: balance;
            }
            
            
            .section-2-col {
                display: flex;
                flex-direction: column-reverse;
                align-items: center;
                margin: 80px auto;
                text-align: center;
                gap: 50px;
            }
            
            
            .title-h2 {
                font-size: 1.625rem;
                text-wrap: balance;
            }
            
            .text-2-col {
                margin-top: 1.5rem;
            }
            
            .img-2-col {
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.30);
                width: clamp(200px,100vw,600px);
            }
            
            
            .section-specs {
                padding: 100px 0 200px;
                background-image:
                radial-gradient(circle at bottom, rgba(12, 79, 82, 1) -80%, rgba(12, 79, 82, 0) 30%),
                radial-gradient(circle at bottom, rgba(12, 79, 82, 1) -80%, rgba(12, 79, 82, 0) 30%);
                
            }
            
            .bento-grid {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                gap: 15px;
                margin-top: 100px;
                max-height: 100%;
            
                background-color: transparent;
                
            }
            
            .card {
                background: linear-gradient(0deg, #142829 0%, #031011 100%);
                border-radius: 20px;
                border: 1px solid #4d4d4d;
            }
            
            .one {
                height: 300px;
            
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                padding: 20px;
                text-wrap: balance;
            
            }
            
            .task-img {
                width: 30%;
                max-width: 200px;
            }
            
            .two {
                height: 300px;
            
                background:
                linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),
                url(./assets/img/bento-box.webp);
                background-size: cover;
                background-repeat: no-repeat;
            
            }
            
            .three {
                height: 400px;
                padding: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .bear-logo {
                width: 80%;
                max-width: 236px;
            }
            
            .four {
                height: 200px;
                padding: 20px;
                text-wrap: balance;
            
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                padding: 20px;
                text-wrap: balance;
            }
            
            .five {
                height: 615px;
            
                display: flex;
                justify-content: center;
                align-items: flex-end;
                padding: 20px;
                text-wrap: balance;
            
                background:
                linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),
                url(./assets/img/bento-city.webp);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
              
                        
            .footer {
                border-top: 1px solid rgba(255, 255, 255, 0.30);
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .text-footer {
                color: #C78352;
            
                max-width: 90vw;
            }
            
            .text footer, span {
                color: #ffffff;
            }
            
            
            @media (min-width: 900px) {
            
                p {
                    font-size: 16px;
                }
            
                .title-main-h1 {
                    font-size: 3rem;
                }
            
                .title-h2 {
                    font-size: 2.25rem;
                }
                
                .task-img {
                    width: 50%;
                }
            
                .bento-grid {
                    flex-wrap: wrap;
                    max-height: 650px;
                }
            
                .card {
                    width: clamp(200px,30vw,390px);
                }
            
                .section-2-col {
                    flex-direction: row;
                    gap: 0;
                    text-align: left;
                }
            
                .content-2-col {
                    padding-right: min(10vw, 120px);
                
                }
            
                .img-2-col {
                    width: clamp(350px,40vw,600px);
                }
                
                
            
            }
        


        `;
    }

    constructor(){
        super();

        this.todos = [];

        }


    render(){
        return html`

            <main class="main-content">

            <img class="bentodo-logo-main" src="./assets/svg/bentodo-logo.svg" title="Ben'toDo 弁当" alt="logotipo bentodo">

            <h1 class="title-main-h1 text-center">Tus tareas diarias al más puro estilo japonés</h1>

            <p class="text-main text-center">
                Crea tu propio Bento con todas las tareas que debes completar para tus estudios,
                tu trabajo o tu día a día. Visualiza todas tus tareas rapidamente y ¡olvidate de listas interminables!
            </p>

            </main>

            <section class="section-2-col container">
                
                <article class="content-2-col">
                    <h2 class="title-h2">Ben'toDo para llevar</h2>

                    <p class="text-2-col">
                        Organiza todas tus tareas en un divertido Bento redimensionable,
                        completa y elimina y siempre quedaran organizadas perfectamente.
                    </p>
                    <p class="text-2-col">
                        El primer paso para tu organización personal.
                    </p>
                </article>

                <img class="img-2-col" src="./assets/img/street_food.webp" alt=puesto de comidas japonés">

            </section>

            <section class="section-specs">

                <header>
                    <h2 class="title-h2 text-center">Características</h2>
                </header>

                <div class="bento-grid container">
                    <article class="card one">
                        <img class="task-img" src="./assets/svg/task-sample.svg" alt="detalle de tarjeta de tarea">
                        <h3 class="title-h3 text-center">Tarjetas para tus tareas con botones de acción</h3>
                    </article>
                    
                    <article class="card two"></article>

                    <article class="card three">
                        <img class="bear-logo" src="./assets/svg/do_bear_white.svg" title="hi!" alt="oso bento feliz">
                    </article>
                    
                    <article class="card four">
                        <h3 class="title-h3 text-center">Para todos tus dispositivos</h3>
                        <p class="text-card text-center">
                            Empieza una lista en tu movil, y completalá en tu laptop. ¡O como quieras!
                             Esta disponible para todos tus dispositivos.
                        </p>
                    </article>

                    <article class="card five">
                        <h3 class="title-h3 text-center">Inspirado en las noches niponas</h3>
                    </article>

                    
                </div>

            </section>

            <footer class="footer text-center">
                <p class="text-footer">2023  |  <span>Ben'toDo 弁当</span>  |  Daniel Obregón Curiel - Código Facilito</p>
            </footer>

        `;
    }

}