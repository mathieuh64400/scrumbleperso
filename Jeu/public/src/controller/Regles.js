import Controller from "../core/Controller.js"
export default class Regles extends Controller {
    constructor() {
        super();
        document.title = "Regles du Jeu";

        const cadreref= document.getElementById("cadreregles");
        let hpCharacters = [];


        const loadCharacters = async () => {
            try {
                const res = await fetch('http://localhost:3003/regles');
                hpCharacters = await res.json();
                console.log(res+"  "+hpCharacters);
                displayCharacters(hpCharacters);
            } catch (err) {
                console.error(err);
            }
        };
        const displayCharacters = (characters) => {
            const htmlString = characters
                .map((character) => {
                    return `
                    <li>
                        <div class="rep">
                            <img src=${character.img} alt="logo de la regle"class="img">
                            <div>
                                <h2 class="titre"> ${character.titre}</h2>
                                <p class="description"> ${character.contenu}</p>
                                <boutton  class="btn4" > Voir </boutton>  
                            </div>
                        </div>
                    </li>
                `;
                })
                .join('');
            cadreref.innerHTML = htmlString;
        };



        loadCharacters();

        }}








