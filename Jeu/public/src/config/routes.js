import Accueil from "../controller/Accueil.js";
import Authentification  from "../controller/Authentification.js";
import Regles from "../controller/Regles.js";
import  Etape1 from "../controller/Etape1.js";
import  Etape2 from "../controller/Etape2.js";
import  Etape3 from "../controller/Etape3.js";
import  Etape4 from "../controller/Etape4.js";
import  Jeu from "../controller/Jeu.js";
import  FinduJeu from "../controller/FinduJeu.js";

export const routes = {
    "/": {
        controller: Accueil,
        view: "accueil"
    },
    "/authentification": {
        controller: Authentification,
        view: "authentification"
    },
    "/regles": {
        controller: Regles,
        view: "regles"
    },
    "/etape1": {
        controller: Etape1,
        view: "preparerJeuEtape1"
    },
    "/etape2": {
        controller: Etape2,
        view: "preparerJeuEtape2"
    },
    "/etape3": {
        controller: Etape3,
        view: "preparerJeuEtape3"
    },
    "/etape4": {
        controller: Etape4,
        view: "preparerJeuEtape4"
    },
    "/jeu": {
        controller: Jeu,
        view: "jeu"
    },
    "/finDuJeu": {
        controller: FinduJeu,
        view: "slidefinale"
    }
}