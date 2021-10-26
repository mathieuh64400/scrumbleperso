import Accueil from "../controller/Accueil.js";
import Connexion from "../controller/Connexion.js";
import Administration from "../controller/administration.js";
import Administrationregles from "../controller/Administrationregles.js";
import Compte from "../controller/Compte.js";
import Authentification from "../controller/Authentification.js";
import Adminuserstories from "../controller/Adminuserstories.js"
import Administrationroles from "../controller/Administrationroles.js";

import UserstoriesSelect from "../controller/userstoriesSelect.js";
import Daylicartes from "../controller/Daylicartes.js";
import Revuecartes from "../controller/Revuecartes.js";
import Pbcartes from "../controller/Pbcartes.js"
export const routes = {
    "/": {
        controller: Accueil,
        view: "accueil"
    },
    "/daylicartes":{
        controller:Daylicartes,
        view:"daylicartes"
    },
    "/Pbcartes":{
        controller:Pbcartes,
        view:"pbcartes"
    },
    "/revuecartes":{
        controller:Revuecartes,
        view:"revuecartes"
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
    }
}