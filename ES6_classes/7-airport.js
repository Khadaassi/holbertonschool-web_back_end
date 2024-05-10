export default class Airport {
    constructor(name, code) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a String');
      }
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a String');
      }
  

      this._name = name;
      this._code = code;
    }
  

    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    // Code
    get code() {
      return this._code;
    }
  
    set code(value) {
      this._code = value;
    }
  

    toString() {
      return `[object ${this._code}]`;
    }
  }
