export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a Number');
    }

    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a String');
    }

    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this._size : this._location;
  }
}
