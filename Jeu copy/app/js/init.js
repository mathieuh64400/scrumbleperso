import {Persistance} from "./classes/Persistance.js"
import { Menu } from './classes/Menu.js';
import {Regles} from './classes/pages/Regles.js'

window.addEventListener("load", function () {
    console.log('fenêtre prête');
    // Ecriture du menu
    let m = new Menu(document.querySelector('header>nav'),document.querySelector('body>section'));
    const {state} = Persistance.getInstance();
    

    console.log("state", state);

    const rules = new Regles()

    rules.fetchData()

    console.log("synchrone", rules.data)

});