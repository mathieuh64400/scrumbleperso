import Controller from "../core/Controller.js"
// import interact from '../node_modules/interactjs';
// import Sortable from "../component/Sortable.js";
export default class Etape3 extends Controller {
    constructor() {
        super();
        document.title = "Etape3:Backlog" ;
        //  const interact = require('interactjs') ;
        // console.log(this.state);

        // normalement URl est récupéré depuis le state
    //     let url = "http://localhost:3000/paquet1";
    //     const cadrillage = document.getElementById("ref");

    // let hpCharacters = [];


    // const loadCharacters = async () => {
    //   try {
    //     const res = await fetch(url);
    //     hpCharacters = await res.json();
        
    //     displayCharacters(hpCharacters);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // const displayCharacters = (characters) => {
    //   const htmlString = characters
    //     .map((character) => {
    //       return `
    //                     <div class="forme" id="sousref" data-position="${character.dposition}"data-id="${character.id}">
    //                             <h3> ${character.titre}</h3>
    //                             <p> ${character.contenu}</p>
    //                     </div>
    //                  `;
    //     })
    //     .join('');
    //   cadrillage.innerHTML = htmlString;
    //   console.log(cadrillage.innerHTML);
    // };



    // loadCharacters();
    // var sortable a mettre dans la class sortable
      let elementref = document.getElementById("ref");
        console.log(elementref);
       
        for (let i = 0; i < 25; i++) {
            let userstorie = document.createElement("div");
            let content = document.createElement("div");
            content.classList.add('content');
            userstorie.classList.add("forme");
            userstorie.setAttribute("data-position",i);
            userstorie.setAttribute("data-id",i+1);
            userstorie.id = "userstorie"; 
            userstorie.innerHTML = "";

            elementref.appendChild(userstorie);



            console.log(userstorie);
        }


    var Sortable = function (element) {
     
      var rect;
      let self =this;
      this.element=element;
      this.items=this.element.querySelectorAll(this.element.dataset.sortable);

      console.log( this.items);
      let x=this.items[0];
      console.log(x);
      rect=x.getBoundingClientRect();
      
      this.item_width=Math.floor(rect.width);
      this.item_height=Math.floor(rect.height);
      console.log(this.item_width,this.item_height);
      this.cols=Math.floor(this.element.offsetWidth/this.item_width);
      console.log(this.cols);

      for (let index = 0; index < this.items.length; index++) {
        const item = this.items[index];
        console.log(item);
        item.classList.add("position");
        var position= item.dataset.position;
        let p =this.getXY(position);
        // var larg= this.item_width*(position%this.cols)
        // var long= this.item_height*Math.floor(position/this.cols)
        item.style.transform="translate3D("+p.x+"px,"+p.y+"px,5px)";
        item.style.border="1px solid #475158";

      }
      interact(this.element.dataset.sortable,{
        context:this.element
      }).draggable({
        inertia:false,
        manualStart:false,
        onmove:function(e){
        console.log(e);
        self.move(e);
        }
      }).on('dragstart',function(e) {
        e.target.classList.add('drag');
      }).on('dragend',function (e) {
        e.target.classList.remove('drag');
        
      })
         
        // let items=document.querySelectorAll("div#sousref");
        // console.log(items);
        // items.style.border="1px solid green";
        //  console.log(this.element);
        // console.log(this.element.dataset.sortable);
        //  this.items = element.querySelectorAll("div[data-etat]");
        //  console.log(document.querySelectorAll("div[data-etat]"));
        //  console.log(this.items +" "+typeof(this.items));
        //  this.items= this.element.querySelectorAll(this.element.dataset.sortable);
        // console.log(this.element.dataset.sortable);
        // console.log(element.querySelectorAll(this.element.dataset.sortable));
        //  let collection = array(element.getElementsByClassName(y));
        //  console.log(collection);
        //  console.log(collection.length)
        //  // regular for loop
        //  for (let i = 0; i < collection.length; i++) {
        //      console.log(collection[i]);
        //  }
        //  console.log(element);
        // console.log(this.items);
        // let xy=document.getElementsByClassName("forme");
        // console.log(xy);
        // this.items=element.getElementsByClassName("forme");
        // console.log(this.items +""+this.items.length+this.items.item(0));
        // console.log(this.items +""+this.items.lenght);
        // this.items=element.querySelectorAll(this.element.getAttribute('data-sortable')); //this.element= element a réorganisé, queryselectorAll car plusieurs elts a sélectionné.
        // console.log(this.items);
        //  // 
        // let x=this.element.dataset.getAttribute('data-sortable');
        // console.log("x est égal a:" + x);
     

        // this.items=this.element.querySelectorAll(this.element.getAttribute('data-sortable'));
        // this.element.querySelectorAll(this.element.getAttribute('data-sortable'));
        
        // console.log( "this.elt="+ this.element.querySelectorAll(this.element.getAttribute('data-sortable')));
        // console.log(this.items.Values
        //     );
       
    };
    Sortable.prototype.move=function(e){
      var p= this.getXY(e.target.dataset.position);
      var x=p.x+(e.clientX-e.clientX0);
      var y=p.y+(e.clientY-e.clientY0);
      console.log(x,y);
      e.target.style.transform="translate3D("+x+"px,"+y+"px,0px)";
    }
    // pour que Sortable.prototype.move
    Sortable.prototype.getXY=function(position){
      var larg= this.item_width*(position%this.cols);
      var long= this.item_height*Math.floor(position/this.cols);
      return{
        x:larg,y:long
      }

    }

    let sortable= new Sortable(document.getElementById("ref"));
    console.log(sortable);


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

    




    }
}