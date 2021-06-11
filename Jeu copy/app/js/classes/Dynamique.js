
import {Accueil} from '../pages/Accueil.js';
 import {Regles}  from '../classes/pages/Regles.js';
// import {Connexion}  from '../classes/pages/Connexion.js';
// import{FinduJeu} from'../classes/pages/FinduJeu.js';
// import{Jeu} from '../classes/pages/Jeu.js';
// import{PreparerJeuEtape1} from '../classes/pages/PreparerJeuEtape1.js';
// import{PreparerJeuEtape2} from '../classes/pages/PreparerJeuEtape2.js';
// import{PreparerJeuEtape3} from '../classes/pages/PreparerJeuEtape3.js';
// import{PreparerJeuEtape4} from '../classes/pages/PreparerJeuEtape4.js';

//   Regles, Connexion,FinduJeu,Jeu,PreparerJeuEtape1,PreparerJeuEtape2,PreparerJeuEtape3,PreparerJeuEtape4 
const classes = { Accueil,Regles};


export class Dynamique {
    /**
     * Créer une classe dynamiquement
     * @param {string} c Nom de l'instance de la classe qui doit être créées 
     */
    constructor(c, d, i, el) {
        return new classes[c](d, i, el);
    }
}