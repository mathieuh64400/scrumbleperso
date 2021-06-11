import {
    menu
} from '../config/menu.js';
import {
    Persistance
} from './Persistance.js'
import {
    Rendu
} from './Rendu.js';


export class Menu {
    menu;
    corps;
    rendu; // Classe utile pour rendre du contenu dans les pages
    constructor( el,c) {
        this.menu = menu;
        console.log(el);
        try {
            this.createMenu(el);

        } catch (error) {
            console.log("vous avez un probleme de chargement de la classe menu et une erreur du type:" + "" + error);
        };
        try {
            this.corps = c;

        } catch (er) {
            console.log("Erreur de chargement, merci de vérifier vos paramètres", er);
        }
    }
    createMenu(el) {
        let eltderef=document.querySelector("nav");
        
        let list = document.createElement('ul');
        // let image = document.createElement("img");
        // image.setAttribute("src", "./app/assets/img/logo_scrumble.png");
        // image.setAttribute("alt", "logo_scrumble");
        // image.style.marginLeft = "7%";
        // image.style.marginTop = "-1%";
        // image.style.height = "4em";

        menu.forEach(m => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            li.onclick = () => this.getTemplate(m);
            a.setAttribute("href", m.chemin);
            a.setAttribute('title', m.infos);
            a.textContent = m.lien;
            eltderef.appendChild(list);
            list.appendChild(li);
            // list.appendChild(image);
            li.appendChild(a);

        });
        el.appendChild(list);
        console.log(el);
    }
    getTemplate(p) {
        //  pas de  fs.readFile mais un fetch dans notre cas 
        console.log(p);
        fetch('./app/pages/' + p.chemin, 'utf-8', (err, html) => {
            if (err) {
                console.error(err)
                return
            };
            console.log(html.trim(), typeof html);
            this.corps.innerHTML = html.trim();
            Persistance.page = p.alias;
            this.rendu = new Rendu(p);
            // console.log(this, Persistance.page);
        })
    }
}