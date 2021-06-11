export default class Usersstories{
      /**  
     * @param {string} titre
     * @param {string} contenu
     * @param {string} img
     */
    
constructor(titre, contenu,img){
    this.titre=titre;
    this.contenu=contenu;
    this.img=img;
    }
    createUserstories(){

        const cadreprojets = document.getElementById("paquet1");
        console.log(cadreprojets);
        
        const box = document.createElement("div");
        box.classList.add("box");
       
        const image = document.createElement("img");
        image.setAttribute("src", this.img);

        image.setAttribute("alt", "image du jeu");
        image.classList.add("image");

        let titrecarte=document.createElement("h3");
        let contenucard=document.createElement("p");

        titrecarte.innerHTML = this.titre;
        contenucard.innerHTML = this.contenu;
        console.log(titrecarte.innerHTML);


        cadreprojets.appendChild(box);
        box.appendChild(image);
        box.appendChild(titrecarte);
        box.appendChild(contenucard);
      

    }
}
    
