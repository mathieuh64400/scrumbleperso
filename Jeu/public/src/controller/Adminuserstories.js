// import { log } from "console";
import Controller from "../core/Controller.js";

export default class Adminuserstories extends Controller {

    constructor() {

        super();
        document.title = "gestion des usesrstories";


        let contenutable = document.getElementById("contenutable");
        console.log(contenutable);


        const cadreref = document.getElementById("cadreregles");
        let hpCharacters = [];

        var myHeaders = new Headers({
            'Access-Control-Allow-Headers': "*",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        });
        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };
        let url = 'http://localhost:3018/paquet1';

        const loadCharacters = async () => {
            try {
                const res = await fetch(url, {
                    method: 'GET'
                });
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
                        <tr data-regles="${character.id}">
                            <td>${character.id}</td>
                            <td id="titre">${character.body}</td>
                           
                            <td data-id="${character._id}"> <button class="edit" id="edit-post" data-id="${character._id}"> Edit </button> <button class="delete" id="${character._id}"> Delete</button> </td>
                        </tr>
                                
                    `;
                })
                .join('');
            contenutable.innerHTML = htmlString;

        }
        loadCharacters();
        let supp = document.querySelectorAll('.delete');
    // console.log(supp);
      console.log(supp[0]);
      supp.forEach(element => {
        element.addEventListener("click", (e) => {
          e.preventDefault()


          fetch('http://localhost:3018/paquet1/' + element.id, {
            method: 'DELETE'
          })

          loadCharacters()
        })
      });
    }
}