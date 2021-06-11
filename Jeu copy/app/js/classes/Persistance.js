export class Persistance {

    static instance;


    static racine; // Racine des fichiers
    static contexte;
    static page;

    state = {
        call: 0
    }

    constructor() {
        this.state.call++
    }

    static getInstance() {
        if (this.instance === undefined) {
            this.instance = new Persistance()
        } 
        return this.instance;
    }

    setRacine(r) {
        console.log('Etablir une racine au projet', r);
        try {
            if (r) this.racine = r;
        } catch (er) {
            console.log("Erreur dans la donnée", er);
        }
    };
}