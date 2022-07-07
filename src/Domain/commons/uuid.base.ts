import { v4 as uuid, validate } from "uuid";

export class UuidBaseIdentity {
  private _id: string;
  constructor(id: string) {
    this._id = id;
  }

  public static fromString(uuid: string) {
    if (!validate(uuid)) throw new Error("Not valid ID");
    return uuid;
  }

  public static nextIdentity(): string {
    return uuid();
  }

  public equals(other: any): boolean {
    return this._id == other.id;
  }
  public toString() {
    return this._id;
  }

  get id() {
    return this._id;
  }
}
