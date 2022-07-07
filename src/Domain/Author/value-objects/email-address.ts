import { ValueObject } from "../../commons/value-object";

export class EmailAddress extends ValueObject {
  private _value: string;
  constructor(value: string) {
    super();
    this.assertEmailIsValid(value);
  }

  private assertEmailIsValid(value: string) {
    // validar email
    this._value = value;
  }
  static from(value: string) {
    return new EmailAddress(value);
  }

  get __toString() {
    return this._value;
  }
}
