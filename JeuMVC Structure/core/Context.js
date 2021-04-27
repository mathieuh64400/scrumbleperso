

class Context {
  static instance;

  state = {
      
     joueurs: []
  };

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new Context();
    }
    return this.instance;
  }
}

export default Context;