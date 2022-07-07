import { Assert } from "../../../@Shared/Helpers/assertion";
import { ValueObject } from "../../commons/value-object";

export class CheepMessage extends ValueObject {
  private readonly MAX_LENGTH = 260;

  constructor(private _message: string) {
    super();
    this.assertMessageIsValid(_message);
  }

  static write(message: string) {
    return new CheepMessage(message);
  }

  private assertMessageIsValid(message: string) {
    Assert.notEmpty(message);
    Assert.maxLength(message, this.MAX_LENGTH);
  }

  get message() {
    return this._message;
  }

  public equalsTo(other): boolean {
    return this._message === other.message;
  }
}
