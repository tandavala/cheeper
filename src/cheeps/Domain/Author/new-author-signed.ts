import IDomainEvent from "../Events/domain-event";
import { Author } from "./author";

export class NewAuthorSigned implements IDomainEvent {
  private constructor(private _authorId: string, private _occurredOn: Date) {}

  static fromAuthor(author: Author) {
    return new NewAuthorSigned(author.authorid.toString(), new Date());
  }

  get authorid(): string {
    return this._authorId;
  }

  get occurredOn() {
    return this._occurredOn;
  }
}
