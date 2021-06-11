import { response } from "express";

export class Regles{
    data

    /**
     * @param {string}img
     * @param {string} titre
     * @param {string} contenu
     */
    constructor(img,titre,contenu){
       this.img=img;
       this.tire=titre;
       this.contenu=contenu;
       this.data=null;
    }
    createRules(){
      let box = document.getElementById("cadreregles");
      console.log(box);

      // box: boite correspond au cadre contenant une regle

      let cadrebox = document.createElement("div");
      console.log(cadrebox);
      cadrebox.classList.add("rep");
      // cadrebox: element permettant de repartir en deux sous box  l'image et le texte

      let img = document.createElement("img");
      img.setAttribute("src", this.img);

      img.classList.add("img");
      console.log(img);
      let value = "image de l'element à étudier";
      img.setAttribute("alt", value);
      // cadrebox: je crée la partie image que je defini grace à une classe et un attribut alt

      let partgauche = document.createElement("div");
      let titre = document.createElement("h2");
      let description = document.createElement("p");
      // description.style.fontSize="0.8em";
      let bouton = document.createElement("button");
      bouton.classList.add("boutton");
      let lienbouton = document.createElement("a");

      lienbouton.setAttribute("href", "#");
      // je crée le texte et le lien/bouton puis j'aoute des classes grace a setAttributte

      titre.innerHTML = this.titre;
      description.innerHTML = this.contenu;

      lienbouton.innerHTML = "Voir";
      // lienbouton.style.color = "white";
      // j'ajoute grace au innerhtml la valeur du titre et du contenu puis je mats un style sur le boutton
      //  box.appendChild(cadrebox);
      cadrebox.appendChild(img);
      cadrebox.appendChild(partgauche);
      partgauche.appendChild(titre);
      partgauche.appendChild(description);
      partgauche.appendChild(bouton);
      bouton.appendChild(lienbouton);
      // je place mes elements les un par rapport aux autres Box a 1 enfant cadrebox qui lui-meme a 2 enfants une image et un bloc
      // ce bloc partgauche a 3 enfants
    }
    
    fetchData() {
        fetch("http://127.0.0.1:3000/regles")
        .then(raw => raw.json())
        .then(data => {
          this.data = data;  
          console.log("asynchrone", this.data);


      
        })
        .catch(err=>console.error(err))

        console.log("synchrone", this.data)

    }
}

