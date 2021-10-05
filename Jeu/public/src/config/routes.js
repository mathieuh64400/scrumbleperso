import Accueil from "../controller/Accueil.js";
import Connexion from "../controller/Connexion.js";
import Regles from "../controller/Regles.js";
import Etape1 from "../controller/Etape1.js";
import Etape2 from "../controller/Etape2.js";
import Etape3 from "../controller/Etape3.js";
import Etape4 from "../controller/Etape4.js";
import Jeu from "../controller/Jeu.js";
import FinduJeu from "../controller/FinduJeu.js";
import Createregles from "../controller/createregles.js";
import Administration from "../controller/administration.js";
import Administrationregles from "../controller/Administrationregles.js";
import Compte from "../controller/Compte.js";
import Authentification from "../controller/Authentification.js";
import Adminuserstories from "../controller/Adminuserstories.js"
import Administrationroles from "../controller/Administrationroles.js";
import Createroles from "../controller/Createroles.js";
import UserstoriesSelect from "../controller/userstoriesSelect.js"
export const routes = {
    "/": {
        controller: Accueil,
        view: "accueil"
    },
    "/administration": {
        controller: Administration,
        view: "administration"
    },
    "/administrationregles": {
        controller: Administrationregles,
        view: "administrationregles"
    },
    "/userstoriesSelect": {
        controller: UserstoriesSelect,
        view: "userstoriesSelect"
    },
    "/adminuserstories": {
        controller: Adminuserstories,
        view: "adminuserstories"
    },

    "/administrationroles": {
        controller: Administrationroles,
        view: "administrationroles"
    },
    "/connexion": {
        controller: Connexion,
        view: "connexion"
    },
    "/authentification": {
        controller: Authentification,
        view: "authentification"
    },
    "/compte": {
        controller: Compte,
        view: "compte"
    },
    "/createregles": {
        controller: Createregles,
        view: "createregles"
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