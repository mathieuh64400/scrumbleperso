import Controller from "../core/Controller.js"
export default class Regles extends Controller {
  constructor() {
    super();
    document.title = "Regles du Jeu";

    const cadreref = document.getElementById("cadreregles");
    let hpCharacters = [];

    var myHeaders = new Headers({ 'Access-Control-Allow-Headers': "*", "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"});
    var myInit = { method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default' };
    let url = 'http://localhost:3050/api/regles';

    const loadCharacters = async () => {
      try {
        const res = await fetch(url,{method:'GET'});
        hpCharacters = await res.json();
        console.log(res + "  " + hpCharacters);
        displayCharacters(hpCharacters);
      } catch (err) {
        console.error(err);
      }
    };

    const displayCharacters = (characters) => {
      const htmlString = characters
        .map((character) => {
          return `
                    <div data-regles="${character._id}">
                        <div class="rep">
                            <img src= '../../assets/image/${character.img}' alt="logo de la regle"class="img">
                            <div>
                                <h2 class="titre"> ${character.titre}</h2>
                                <p class="description"> ${character.contenu}</p>
                                <button class="btn4" id="${character._id}" data-clicked="false"> Voir </button> 

                                <!-- The Modal -->
                                <div  id="modal${character._id}" class="modal">
                                    <!-- Modal content -->
                                    <div class="modal-content">
                                    <h2 class="titremodal">${character.titre}</h2>
                                    <div style="display:flex;flex-direction:row;">
                                        <p style="color:black;"> ${character.texte}</p>
                                        <video controls="controls">
                                        <source src="../../assets/video/${character.video}"></source>
                                        votre navigateur n'est pas a jour! mettez-le a jour!!!
                                        </video>
                                    </div>
                                        <span class="close" id="close${character._id}">&times;</span>
                                        
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                `;
        })
        .join('');
        console.log(htmlString);
      cadreref.innerHTML = htmlString;
      // Get the modal

      // Get the modal;
      //   let modal=["modal1","modal2","modal3","modal4","modal5","modal6","modal7","modal8","modal9","modal10","modal11","modal12","modal13","modal14"];
      console.log(document.querySelectorAll('.btn4'))
      let btnmodal=document.querySelectorAll('.btn4');
      btnmodal.forEach(element => {
        element.addEventListener("click",(e) => {
          e.preventDefault();
          element.dataset.clicked="true";
        let parent =element.closest('div[data-regles]');
       if(parent.dataregles === element._id){
         console.log(element);
        let modal = document.getElementById('modal'+element.id)
        console.log(modal);
        let btnref=document.getElementById(element.id);
        console.log(btnref);
        modal.style.display = "block";
            console.log('HIII');
            let span = document.getElementById('close'+element.id);
          span.onclick = function() {
              modal.style.display = "none";
            }
          
       }
        // ;
        // let modal = document.getElementById(element._id)
        // console.log(modal);
        // modal.onclick = function() {
        //   modal.style.display = "block";
        //   console.log('HIII');
        // }
        // console.log(modal);
        // if(parent.id==modal.id){
        //   console.log(modal);
        //}

        })
        

      });
      let x;
      let tabmodal = [];
      let listbtn = [];
      let span = [];
      // for (let i = 0; i < 50; i++) {
      //   tabmodal.push(document.getElementById("myModal" + i));
      //   listbtn.push(document.getElementById("myBtnmodal" + i));
      //   span.push(document.getElementById("close" + i));

      //   console.log(tabmodal[i], i, tabmodal[3]);
      //   console.log(listbtn[i], i);
      //   if (tabmodal[i] != undefined || listbtn[i] != undefined ) {
      //     console.log("dodo", i);
      //     listbtn[i].onclick = function () {
      //       tabmodal[i].style.display = "block";
         
      //     }
        
      //     console.log(span);
      //     // span[0].onclick = function () {
      //     //   tabmodal[i].style.display = "none";
      //     // }

      //     window.onclick = function (event) {

      //       if (event.target == tabmodal[i]) {
      //         tabmodal[i].style.display = "none";
      //       }
      //       console.log(listbtn[i], tabmodal[i], );

      //     }

      //     // console.log(modal);
      //   }
      // }


      //  console.log(tabmodal,listbtn);   
      // var modal = document.getElementById("myModal1");
      // console.log(modal);
      // // Get the button that opens the modal
      // var btn = document.getElementById("myBtnmodal1");
      // console.log(btn);


      // // Get the <span> element that closes the modal
      // var span = document.getElementsByClassName("close")[0];
      // console.log(span);

      // // When the user clicks on the button, open the modal
      // btn.onclick = function() {
      //   modal.style.display = "block";
      // }

      // // When the user clicks on <span> (x), close the modal
      // span.onclick = function() {
      //   modal.style.display = "none";
      // }

      // // When the user clicks anywhere outside of the modal, close it
      // window.onclick = function(event) {
      //   if (event.target == modal) {
      //     modal.style.display = "none";
      //   }
      // } 
      // var modal = document.getElementById("myModal");

      // Get the button that opens the modal


      // var btn = document.getElementById("myBtnmodal");


      // When the user clicks on the button, open the modal


      // When the user clicks on <span> (x), close the modal


      // When the user clicks anywhere outside of the modal, close it

    };



    loadCharacters();

  }
}