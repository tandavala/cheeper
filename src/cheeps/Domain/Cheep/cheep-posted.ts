import IDomainEvent from "../Events/domain-event";
import { Cheep } from "./cheeps";
import { CheepId } from "./value-objects/cheep-id";

export class CheepPosted implements IDomainEvent {
  constructor(
    private _cheepId: number,
    private _authorId: number,
    private _cheepMessage: string,
    private _cheepDate: Date,
    private _occurredOn: Date
  ) {}

  static fromCheep(cheep: Cheep) {
    return new CheepPosted(
      cheep.id,
      cheep.authorId.id,
      cheep.message,
      cheep.date,
      cheep.date
    );
  }

  get cheepId() {
    return this._authorId;
  }

  get authorId() {
    return this._authorId;
  }

  get cheepMessage() {
    return this._cheepMessage;
  }

  get cheepDate() {
    return this._cheepDate;
  }

  get ocrurredOn() {
    return this._occurredOn;
  }
}
