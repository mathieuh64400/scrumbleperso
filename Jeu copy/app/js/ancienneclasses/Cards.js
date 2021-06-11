class Cards {
    /**  
     * @param {string} titre
     * @param {string} contenu
     * @param {string} img
     */
    
    constructor(titre, contenu, img) {
        this.titre = titre;
        this.contenu = contenu;
        this.img = img;
    }
    createCards(){
        let containerglider = document.getElementById("glider");
        console.log(containerglider);

        let carte = document.createElement("div");
        console.log(carte);
        carte.classList.add("box");
        let image=document.createElement("img");
        image.setAttribute("src", this.img);
        image.classList.add("image");
        let titrecarte=document.createElement("h3");
        let contenucard=document.createElement("p");
        titrecarte.classList.add("titreCard");
        contenucard.classList.add("texteCard");
        titrecarte.innerHTML = this.titre;
        contenucard.innerHTML = this.contenu;

        containerglider.appendChild(carte);
        carte.appendChild(image);
        carte.appendChild(titrecarte);
        carte.appendChild(contenucard);
        
    }
}
let body = document.querySelector("body");
window.addEventListener("load", function () {
   requetage()
});
function requetage() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", './data/cards.json', true);
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            let datas = JSON.parse(xhr.response);
            datas.forEach(Elements => {
                    let regles = new Cards(Elements.titre, Elements.contenu, Elements.img);
                    regles.createCards();
            })
        }
        else if (xhr.readyState < 4) {
            console.log(xhr.readyState);
        } else(console.log("vous avez un pb"));
    } 
    xhr.send(null);

}