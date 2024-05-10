import Building from './5-building';

export default class SkyHighBuilding extends Building {
  //
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a Number');
    }
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a Number');
    }

    //
    super(sqft);
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }

  //
  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    this._floors = floors;
  }
}
