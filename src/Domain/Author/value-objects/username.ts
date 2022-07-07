import { ValueObject } from "../../commons/value-object";

export class UserName extends ValueObject {
  private constructor(private _userName: string) {
    super();
    this.setUserName(_userName);
  }
  private setUserName(userName: string): void {
    this.assertNotEmpty(userName);
    this._userName = userName;
  }

  public static pick(userName) {
    return new UserName(userName);
  }

  public equalsTo(usernName: UserName): boolean {
    return this._userName === usernName._userName;
  }

  get name() {
    return this._userName;
  }
  private assertNotEmpty(str: string): void {
    if (!str) throw new Error("User name cannot be empty");
  }
  public __toString() {
    return this.name;
  }
}
