import Controller from "../core/Controller.js";

export default class Compte extends Controller {
    
    constructor() {
     super();

     let user=this.state.user;
     console.log(user); 
     const entries= new Map([
       [ 'mail','mail'],
       ['password','...'],
       ['role','....'],
       ['statut','deconnecte']
     
     ]); 
     const obj=Object.fromEntries(entries);
     console.log(obj);
     user.push(obj);
     console.log(user,typeof(user));


    }

}