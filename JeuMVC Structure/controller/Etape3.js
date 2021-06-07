import Controller from "../core/Controller.js";
//  const interact = require('..node_modules/interactjs') ;
// import  interact from './interactjs';
// import Sortable from "../component/Sortable.js";
export default class Etape3 extends Controller {
    constructor() {
        super();
        document.title = "Etape3:Backlog" ;
         
        console.log(this.state);

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
    // var sortable a mettre dans la class sortable
      let elementref = document.getElementById("ref");
        // console.log(elementref);
       
        for (let i = 0; i < 25; i++) {
            let userstorie = document.createElement("div");
           
            
            userstorie.classList.add("forme");
            userstorie.setAttribute("data-position",i);
            userstorie.setAttribute("data-id",i+1);
            userstorie.id = "userstorie"; 
            let titre=document.createElement("h3");
            let contenu=document.createElement("p");
            
           if (i<15) {
             titre.innerText="Titre"+" "+(i+1);
             contenu.innerText="Lorem ipsum dolor sit amet. Ut voluptas quia et quod voluptatem est recusandae ducimus aut earum et nihil fuga aut officiis consequuntur et voluptas optio. "
              
            }
            if (i>14) {
              userstorie.classList.remove("forme");
            }
          
            elementref.appendChild(userstorie);
            userstorie.appendChild(titre);
            userstorie.appendChild(contenu);
           

        }


    var Sortable = function (element, scrollable) {
     
      var rect;
      let self =this;
      if (scrollable ==null) {
        scrollable=document.getElementById("ref");
      }
      this.scrollable =scrollable;
      this.element=element;
      this.items=this.element.querySelectorAll(this.element.dataset.sortable);

      console.log( this.items);
      let x=this.items[0];
      // console.log(x);
      rect=x.getBoundingClientRect();
      
      this.item_width=Math.floor(rect.width);
      this.item_height=Math.floor(rect.height);
      // console.log(this.item_width,this.item_height);
      this.cols=Math.floor(this.element.offsetWidth/this.item_width);
      // console.log(this.cols);

      for (let index = 0; index < this.items.length; index++) {
        const item = this.items[index];
        // console.log(item);
        item.classList.add("position");
        var position= item.dataset.position;
        this.moveItem(item,item.dataset.position);
        // let p =this.getXY(position);
        // item.style.transform="translate3D("+p.x+"px,"+p.y+"px,0px)";
        item.style.border="1px solid #475158";
         // var larg= this.item_width*(position%this.cols)
        // var long= this.item_height*Math.floor(position/this.cols)
      }

      interact(this.element.dataset.sortable,{
        context:this.element
      }).draggable({
        inertia:false,
        manualStart:false,
        autoScoll:{
            container:scrollable,
            margin:10,
            speed:600
        },
        onmove:function(e){
        // console.log(e);
        self.move(e);
        }
      }).on('dragstart',function(e) {
        var r= e.target.getBoundingClientRect();
        console.log(r.left);
        e.target.classList.add('drag');
        self.startPosition=e.target.dataset.position;
        self.offset={
          x:e.clientX-r.left,
          y:e.clientY-r.top
        };console.log(x);
        self.scrollTopStart=self.scrollable.scrollTop;
      }).on('dragend',function (e) {
        e.target.classList.remove('drag');
        self.moveItem(e.target,e.target.dataset.position);
      })
         
      
       
    };
    Sortable.prototype.move=function(e){
      var p= this.getXY(this.startPosition);
      var x=p.x+(e.clientX-e.clientX0);
      var y=p.y+(e.clientY-e.clientY0);
      // console.log(x,y);
      e.target.style.transform="translate3D("+x+"px,"+y+"px,0px)";
     var oldposition=e.target.dataset.position;
     var newPosition=this.guessPosition(x+this.offset.x,y+this.offset.y);
     if(oldposition!=newPosition){
      //  console.log(oldposition);
      this.swap(oldposition,newPosition);
      e.target.dataset.position=newPosition;
     }
      this.guessPosition(x,y);
    }
    // pour que Sortable.prototype.move
    Sortable.prototype.getXY=function(position){
      var larg= this.item_width*(position%this.cols);
      var long= this.item_height*Math.floor(position/this.cols);
      return{
        x:larg,
        y:long
      }

    }
    Sortable.prototype.guessPosition=function(x,y){
      let col= Math.floor(x/this.item_width);
      if (col >= this.cols) {
        col= this.cols-1
      }
      if (col<=0) {col=0;} 
      
      console.log(col);
      let row= Math.floor(y/this.item_height);
     if(row<0){row=0}
      var position= col +row *this.cols;
      if (position >= this.items.lenght) {
        return this.items.lenght-1;}
        return position;
      
    }
    Sortable.prototype.swap=function (oldPosition,endPosition) {
      for (let index = 0; index < this.items.length; index++) {
        const item = this.items[index]; 
         if(!item.classList.contains('drag')){
           var position= parseInt(item.dataset.position,10);
        if(position>=endPosition && position <oldPosition && endPosition<oldPosition){
          this.moveItem(item,position+1)
        }else if(position<endPosition && position>oldPosition && oldPosition<endPosition){
          this.moveItem(item,position-1);
        }
      }
     
        
      }
    };
    Sortable.prototype.moveItem=function (item,position) {
    
      let p =this.getXY(position);
        item.style.transform="translate3D("+p.x+"px,"+p.y+"px,0px)";
        item.dataset.position=position;
    };

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