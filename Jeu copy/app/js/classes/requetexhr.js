import {Regles} from '../classes/pages/Regles.js'
window.addEventListener("load", function () {
    effectuerRequeteGet()
})
// je veux que l'affichage des données de ma classe s'effectue des le chargements (load) de la page window grace a:
//  un evenement et une fonction contenant une requete XMLHttpRequest

function effectuerRequeteGet() {
     let xhr = new XMLHttpRequest();// creation d'une requete XMLHttpRequest
     xhr.open("GET", './data/regles.json', true); // la requete est asynchrone et contient un fichier json ./data/regles.json et est de type GET
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
        } else {console.log("vous avez un pb")};
    }
    xhr.send(null);
}