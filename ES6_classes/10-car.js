export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Brand must be a String');
    }

    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Motor must be a String');
    }

    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Color must be a String');
    }

    this._color = value;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
