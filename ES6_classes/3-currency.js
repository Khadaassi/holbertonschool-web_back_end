export default class Currency {
    // Le constructeur pour initialiser les attributs de la classe
    constructor(code, name) {
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      // Les attributs de classe
      this._code = code;
      this._name = name;
    }
  
    // Getters et Setters pour les attributs
  
    // code
    get code() {
      return this._code;
    }
  
    set code(code) {
      this._code = code;
    }
  
    // name
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    //
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
