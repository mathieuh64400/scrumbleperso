class Regles {
    /**
     * @param {string} titre
     * @param {string} contenu
     * @param {string} img
     */


    constructor(titre, contenu, img) {
        this.titre = titre;
        this.contenu = contenu;
        this.img = img;
    }
    // creation d'un constructeur contenant un titre un contenu une image

    afficher() {//je crée une méthode contenant l'aspect de mes élements.
    //je crée les éléments ou selectione les elements en premier puis j'ajoute les valeurs HTML 
    // puis je les pace les uns par rapport aux autres

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
        let value = "image de l'element à étudier";
        img.setAttribute("alt", value);
        // cadrebox: je crée la partie immage que je defini grace à une classe et un attribut alt

        let partgauche = document.createElement("div");
        let titre = document.createElement("h2");
        let description = document.createElement("p");
        let bouton = document.createElement("button");
        bouton.classList.add("boutton");
        let lienbouton = document.createElement("a");
    
        lienbouton.setAttribute("href", "#");
        // je crée le texte et le lien/bouton puis j'aoute des classes grace a setAttributte

        titre.innerHTML = this.titre;
        description.innerHTML = this.contenu;
        description.style.marginLeft = "0%";
        lienbouton.innerHTML = "Voir";
        lienbouton.style.color = "white";
        // j'ajoute grace au innerhtml la valeur du titre et du contenu puis je mats un style sur le boutton
        box.appendChild(cadrebox);
        cadrebox.appendChild(img);
        cadrebox.appendChild(partgauche);
        partgauche.appendChild(titre);
        partgauche.appendChild(description);
        partgauche.appendChild(bouton);
        bouton.appendChild(lienbouton);
        // je place mes elements les un par rapport aux autres Box a 1 enfant cadrebox qui lui-meme a 2 enfants une image et un bloc
        // ce bloc partgauche a 3 enfants
    }
}


window.addEventListener("load", function () {
    effectuerRequeteGet()
})
// je veux que l'affichage des données de ma classe s'effectue des le chargements (load) de la page window grace a:
//  un evenement et une fonction contenant une requete XMLHttpRequest

function effectuerRequeteGet() {
     let xhr = new XMLHttpRequest();// creation d'une requete XMLHttpRequest
     xhr.open("GET", './data/regles.json', true); // la requete est asynchrone eet contient un fichier json ./data/regles.json et est de type GET
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);// verication de l'état de la requete
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {// Si l'etat est correct:
            let datas = JSON.parse(xhr.response);// Si l'etat est correct: je parse les données json pour les rendre utilisables
            datas.forEach(Element => {// je boucle sur mon tableau de données data
                let regles = new Regles(Element.titre, Element.contenu, Element.img);// je crée un objet régles grace a ma classe Régles
                regles.afficher();// j'affiche les données de mon objet régles avec la structure definie dans la méthode afficher
            })
        } else if (xhr.readyState < 4) {
            console.log(xhr.readyState);
        } else(console.log("vous avez un pb"));
    }
    xhr.send(null);
}