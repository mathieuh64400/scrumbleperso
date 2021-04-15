
let header = document.getElementById("header");
let div = document.createElement("div");
div.setAttribute("class","topnav");

// let container=document.createElement("div");
// container.style.display="flex";
// container.style.flexDirection="row";

// let cercle = document.createElement("div");
// cercle.classList.add("rond");


let image = document.createElement("img");
image.setAttribute("src","./img/logo_scrumble.png");
image.setAttribute("alt","logo_scrumble");
image.style.marginLeft="7%";
image.style.marginTop="-1%";
image.style.height="4em";

let lien= document.createElement("a");
lien.style.marginLeft="5%";

let lien5=document.createElement("a");
lien5.setAttribute("href","index.html");
lien5.innerHTML="ACCUEIL";
lien5.style.marginRight="5%";

let lien4=document.createElement("a");
lien4.setAttribute("href","regles.html");
lien4.innerHTML="REGLES DU JEU";
lien4.style.marginRight="5%";

let lien3=document.createElement("a");
lien3.setAttribute("href","preparerJeuEtape1.html");
lien3.innerHTML="JOUER";
 lien3.style.marginRight="5%";

let lien2=document.createElement("a");
lien2.setAttribute("href","#");
lien2.innerHTML="FAQ";
lien2.style.marginRight="5%";

let lien1=document.createElement("a");
lien1.setAttribute("href","authentification.html");
lien1.innerHTML="CONNEXION";
 lien1.style.marginRight="5%";

header.appendChild(div);
// div.appendChild(container);
// div.appendChild(cercle);
div.appendChild(image);
// div.appendChild(lien);
div.appendChild(lien1);
div.appendChild(lien2);
div.appendChild(lien3);
div.appendChild(lien4);
div.appendChild(lien5);


