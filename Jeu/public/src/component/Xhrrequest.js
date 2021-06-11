import  Usersstories from './Usersstories.js';

window.addEventListener("load", function () {
   requetage();
});

export default function requetage() {
   let xhr = new XMLHttpRequest();
   xhr.open("GET", '../assets/data/userstories.json', true);
   xhr.onreadystatechange = function () {
       console.log(xhr.readyState);
       if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
           let datas = JSON.parse(xhr.response);
           console.log(datas);
           datas.forEach(Elements => {
               console.log(Elements);
                   let userstories = new Usersstories(Elements.paquet1.titre, Elements.paquet1.contenu, Elements.paquet1.img);
                  console.log(Elements.userstories.paquet1.titre);
                   userstories.createUserstories();
           })
       }
       else if (xhr.readyState < 4) {
           console.log(xhr.readyState);
       } else(console.log("vous avez un pb"));
   } 
   xhr.send(null);

}