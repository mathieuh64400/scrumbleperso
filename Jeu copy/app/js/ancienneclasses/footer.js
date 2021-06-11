

let footer = document.querySelector("footer");
console.log(footer);
let para1 =document.createElement("p");
let para2 =document.createElement("p");
let logo=document.createElement("img");
let cercle=document.createElement("div");

cercle.setAttribute("class","cercle");
logo.setAttribute("src","./img/Logo_FabriqueNumerique_blanc_96.png");
logo.style.marginLeft="1%";
logo.setAttribute("alt","logo Fabrique Numérique");
para1.classList.add("para1");
para2.classList.add("para2");

para1.innerHTML="Mentions légales | RGPD | une réalisation Pyxis.com/Fabriquenumerique.fr ";
para2.innerHTML="Le serveur est prêt à jouer... la balle est dans votre camp. ";

footer.appendChild(logo);
footer.appendChild(para1);
footer.appendChild(para2);
footer.appendChild(cercle);

