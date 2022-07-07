import { ValueObject } from "../../commons/value-object";

export class BirthDate extends ValueObject {
  private _date: Date;

  constructor(date: Date) {
    super();
    this.setDate(date);
  }

  private setDate(date: Date) {
    // Validar a data
    this._date = date;
  }

  get date() {
    return this._date;
  }
}
