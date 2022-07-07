import { AuthorId } from "../Author/value-objects/authorid";
import { TriggerEvents } from "../Events/trigger-event";
import { CheepId } from "./value-objects/cheep-id";
import { CheepMessage } from "./value-objects/cheep-message";

export class Cheep extends TriggerEvents {
  private _id: number;
  private _authorId: number;
  private _message: string;
  private _date: Date;

  private constructor(private _cheepId: number, _message: string) {
    super();
    this._id = _cheepId;
    this._date = new Date();
    this.setMessage(_message);
  }

  static hidrate(authorId, cheepId, message) {
    const cheep = new Cheep(cheepId, message);
    cheep.setAuthorId(authorId);
    return cheep;
  }

  static compose(authorId: AuthorId, cheepMessage: CheepMessage) {
    return new Cheep(authorId.id, cheepMessage.message);
  }

  private setMessage(message: string) {
    this._message = message;
  }

  private setAuthorId(authorId) {
    this._authorId = authorId;
  }

  public recomposeWith(cheepMessage: CheepMessage): void {
    this.setMessage(cheepMessage.message);
  }

  get message() {
    return this._message;
  }

  get id() {
    return this._id;
  }
  get authorId(): AuthorId {
    return AuthorId.fromNumber(this._authorId);
  }

  get date() {
    return this._date;
  }
}
