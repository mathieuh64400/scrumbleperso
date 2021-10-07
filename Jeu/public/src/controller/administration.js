import Controller from "../core/Controller.js";

export default class Administration extends Controller {

    constructor() {

        super();
        document.title = "gestion du jeu";

        let user = this.state.user;
        console.log(user);

       


        let adminvison = document.getElementById("gestion");
        console.log(user.role);


        if (user.statut == "connecte") {
            if (user.role === "ADMIN") {

                adminvison.innerHTML = `
        <div class='repartition'>
        <div>
        <button class="btn3"> <a href="/administrationregles" data-link="/administrationregles"> Gestion des regles </a></button>
        <button class="btn3"> <a href="/daylicartes" data-link="/daylicartes"> Gestion des cartes Dayli </a></button>
        <button class="btn3"> <a href="/revuecartes" data-link="/revuecartes"> Gestion des cartes revues </a></button>
        <button class="btn3"> <a href="/Pbcartes" data-link="/Pbcartes"> Gestion des cartes problèmes </a></button>
        </div>
        <div>
        <button class="btn3"> <a href="/userstoriesSelect" data-link="/userstoriesSelect">Gestion des userstories</a></button>
        <button class="btn3"> <a href="/administrationroles" data-link="/administrationroles"> Droits d'Administration</a></button>
        <button class="btn3" id="deconnexion0"> <a href="/" data-link="/">Deconnexion</a></button>
        </div>
        </div>`
            }
            if (user.role === "USER") {
                adminvison.innerHTML = `
        <button class="btn3"> <a href="/regles" data-link="/regles"> voir les regles </a></button>
        <button class="btn3"> <a href="/" data-link="/"> retour a l'accueil </a></button>
        <button class="btn3" id="deconnexion1"> <a href="/" data-link="/">deconnexion</a></button>
        `
            }
        }
        else{
            adminvison.innerHTML=`connectez-vous pour poursuivre!!` 
        }
        let deconnexion1=document.getElementById('deconnexion1');
        deconnexion1.addEventListener('click',deconnexion());
        deconnexion0.addEventListener('click',deconnexion());
       function deconnexion(){
        Object.defineProperty(user, "statut", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: "deconnecte"
        });
       }
    }

}