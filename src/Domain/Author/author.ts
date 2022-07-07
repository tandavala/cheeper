import { InvalidArgumentException } from "../commons/exception/invalid-argument.exception";
import { TriggerEvents } from "../Events/trigger-event";
import { NewAuthorSigned } from "./new-author-signed";
import { AuthorId } from "./value-objects/authorid";
import { BirthDate } from "./value-objects/birthdate";
import { EmailAddress } from "./value-objects/email-address";
import { UserName } from "./value-objects/username";
import { Website } from "./value-objects/website";

export class Author extends TriggerEvents {
  constructor(
    private _authorId: string,
    private _userName: string,
    private _email: string,
    private _name?: string,
    private _biography?: string,
    private _location?: string,
    private _website?: string,
    private _birthDate?: Date
  ) {
    super();
    this.setName(_name);
    this.setBiography(_biography);
    this.setLocation(_location);
  }

  public buildNewAuthorSignedDomainEvent(): NewAuthorSigned {
    return NewAuthorSigned.fromAuthor(this);
  }

  static signUp(
    authorId: AuthorId,
    username: UserName,
    email: EmailAddress,
    name?: string,
    biography?: string,
    location?: string,
    website?: Website,
    birthDate?: BirthDate
  ) {
    return new Author(
      authorId.toString(),
      username.toString(),
      email.toString(),
      name,
      biography,
      location,
      website.__toString(),
      birthDate.date
    );
  }

  public setName(name?: string): void {
    this._name = this.checkIsNotNull(name);
  }

  public setBiography(bio?: string): void {
    this._biography = this.checkIsNotNull(bio);
  }

  public setLocation(location?: string): void {
    this._location = this.checkIsNotNull(location);
  }

  public authorid(): string {
    return AuthorId.fromString(this._authorId);
  }

  public userName(): UserName {
    return UserName.pick(this._userName);
  }

  public email(): EmailAddress {
    return EmailAddress.from(this._email);
  }

  public website(): Website {
    return this._website !== null ? Website.fromString(this._website) : null;
  }

  get name(): string {
    return this._name;
  }

  get biography() {
    return this._biography;
  }
  get location() {
    return this._location;
  }

  private checkIsNotNull(errorMessage: string, value?: string) {
    if (!value) throw new InvalidArgumentException(errorMessage);
    return value;
  }
}
