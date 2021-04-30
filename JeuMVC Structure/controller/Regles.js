import Controller from "../core/Controller.js"
export default class Regles extends Controller {
    constructor() {
        super();
        document.title = "Regles du Jeu";

        const cadreref= document.getElementById("cadreregles");
        let hpCharacters = [];


        const loadCharacters = async () => {
            try {
                const res = await fetch('http://localhost:3000/regles');
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
                                <boutton  class="btn4" ><a href="#">Voir</a></boutton>
                                    
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









        //         let affichage='<ul style="display:flex; flex-direction:column;>'
        //         for (let elt of data) {
        //             affichage +=`
        //         <li style="list-type:none>
        //         <div style="display:flex; flex-direction:row; border:solid 5px red;">
        //             <img src=${elt.img} alt="logo de la regle"class="img">
        //             <div>
        //                 <h2 style="border: solid 10px green;"> ${elt.titre}</h2>
        //                 <p> ${elt.contenu}</p>
        //                 <boutton class="boutton"><a href="#">
        //                     Voir</a>
        //                 </boutton>
        //             </div>
        //         </div></li>`
        //         }
        //         affichage +=`</ul>`
        //         document.querySelector("#cadreregles").innerHTML= affichage;

        //  )
          
