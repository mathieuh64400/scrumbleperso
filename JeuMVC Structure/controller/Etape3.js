import Controller from "../core/Controller.js"
// import Sortable from "../component/Sortable.js";
export default class Etape3 extends Controller {
    constructor() {
        super();
        document.title = "Etape3:Backlog"
        // console.log(this.state);

        // normalement URl est récupéré depuis le state
        let url = "http://localhost:3000/paquet1";
        const cadrillage = document.getElementById("ref");

    let hpCharacters = [];


    const loadCharacters = async () => {
      try {
        const res = await fetch(url);
        hpCharacters = await res.json();
        
        displayCharacters(hpCharacters);
      } catch (err) {
        console.error(err);
      }
    };
    const displayCharacters = (characters) => {
      const htmlString = characters
        .map((character) => {
          return `
                        <div class="forme" data-position="${character.dposition}"data-id="${character.id}">
                                <h3> ${character.titre}</h3>
                                <p> ${character.contenu}</p>
                        </div>
                     `;
        })
        .join('');
      cadrillage.innerHTML = htmlString;
    };



    loadCharacters();
    // var sortable a mettre dans la class sortable
    
    var Sortable =function (element) {
        
         this.element=element;//instancie et sauvegarde l'element que l'on veut réorganisé 
        
         console.log(this.element);
         let x =this.element;
         console.log(x);
        // instance des elements réorganisés
        let y=this.element.getAttribute('[data-sortable] = .forme');
        console.log(y);
         this.items=this.element.querySelectorAll(this.element.getAttribute('data-sortable =.forme')); //this.element= element a réorganisé, queryselectorAll car plusieurs elts a sélectionné.
        console.log(typeof(this.items)+" "+ this.items.length);
         // 
        // let x=this.element.dataset.getAttribute('data-sortable');
        // console.log("x est égal a:" + x);
     

        // this.items=this.element.querySelectorAll(this.element.getAttribute('data-sortable'));
        // this.element.querySelectorAll(this.element.getAttribute('data-sortable'));
        
        // console.log( "this.elt="+ this.element.querySelectorAll(this.element.getAttribute('data-sortable')));
        // console.log(this.items.Values
        //     );
        for (let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            console.log("list des item "+ item);
            
        }
    };

    let sortable= new Sortable(document.getElementById("ref"));
    


        // let elementref = document.getElementById("ref");
        // console.log(elementref);
       
        // for (let i = 0; i < 25; i++) {
        //     let userstorie = document.createElement("div");
        //     if (i % 2 == 1) {
        //         userstorie.classList.add("forme");
        //     } else {
        //         userstorie.classList.add("transparent");
        //     }
        //     userstorie.id = "userstorie" + i;
        //     userstorie.innerHTML = "";
        //     elementref.appendChild(userstorie);


        //     console.log(userstorie);
        // }

        // let hpCharacters = [];


        // const loadCharacters = async () => {
        //     try {
        //         const res = await fetch(url);
        //         hpCharacters = await res.json();
        //         console.log(res + "  " + hpCharacters);
        //         displayCharacters(hpCharacters);
        //     } catch (err) {
        //         console.error(err);
        //     }
        // };
        // const displayCharacters = (characters) => {
        //     const htmlString = characters
        //         .map((character) => {
        //             return `

        //                     <div class="box">
        //                         <img src=${character.img} alt="logo de la regle"class="img">
        //                             <h3> ${character.titre}</h3>
        //                             <p> ${character.contenu}</p>
        //                     </div>

        //             `;
        //         })
        //         .join('');
        //     cadrillage.innerHTML = htmlString;
        // };



        // loadCharacters();




    }
}