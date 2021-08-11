import Controller from "../core/Controller.js";
// import Joueur from '../model/Joueur.js';
export default class Etape1 extends Controller {
    constructor (){
        super();
        document.title="Etape du jeu 1";

      const form = document.getElementById("formJoueur")
      
      form.addEventListener("submit", e => {
          e.preventDefault()

          new FormData(form);
      })

      form.addEventListener("formdata",(e)=>{
        const data = e.formData;
       if (data.get("name")===" " && (data.get("statut")==="statut"||data.get("statut")==="")) return;
        
        console.log(data.entries());

        const joueurs = [];
        
        for (const item of data) {
            console.log(item);
            const info = item[0].split('#');
            console.log("item:"+item[0]);
            const key = info[0];
             console.log( "info:"+info[0])
            const id = info[1];
            console.log("id:"+id);
            const value = item[1];

            joueurs[id] = {
                ...joueurs[id],
                [key]: value
            }
        }

        this.state.joueurs = joueurs
        console.log(this.state.joueurs);

        this.go("/etape2");
    })

        // partie gauche recuperer la valeur du champs nbre de joueur nbrejouer.value
        let nbrejouer= document.getElementById("valeurjoueur");
        this.creerInputJoueur(form,  nbrejouer.value)
        // evenement listener change pour modifier le nombre de champs du formulaire form, en fonction du nombre de joueur taper dans creerInputJoueur
        nbrejouer.addEventListener("change", e => {
            this.creerInputJoueur(form,  e.target.value);
        })
        
    }

    creerInputJoueur(form, nombreDeJoueur) {
        let html = "";
        for (let index = 0; index < nombreDeJoueur; index++) {
            html += this.rendreInputBloc(`name#${index}`, `statut#${index}`)                
        }
        html+="<button style='background-color: rgb(77, 200, 52);color:white; margin-left:25%;padding: 25px 75px;border-radius: 50px;'>Passez a l'Etape Suivante</button>"
        form.innerHTML = html;
    }

    rendreInputBloc(nomAtr, statutAtr) {
        return  `
        <div class="repartition" style="width:100%; margin-right:3%;">
            <input class="inputtext" type="text" name="${nomAtr}" Value="Beta">
            <select name="${statutAtr}" class="select">
                <option>Responsabilité</option>
                <option value="Scrum Master">Scrum Master</option>
                <option value="ProductOwner"> Product Owner</option>
                <option value="Developpeur">Dévéloppeur</option>
            </select>
        </div>
      `
    }
}