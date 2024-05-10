// Import file 3-currency
import Currency from './3-currency';

export default class Pricing {
  // Gère les erreurs et initialise les attributs de la classe
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a currency');
    }

    // Les attributs de classe
    this._amount = amount;
    this._currency = currency;
  }

  // Getters et Setters pour les attributs

  // Amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
