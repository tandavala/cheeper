import { AuthorId } from "../value-objects/authorid";
import { UserName } from "../value-objects/username";

export class AuthorAlreadyExists extends Error {
  constructor(authorName: string, fieldName: string) {
    super(`Author with ${fieldName} "${authorName}" already exists`);
  }
  static withUserNameOf(userName: UserName) {
    return new AuthorAlreadyExists(userName.name, "name");
  }

  static withIdOf(authorId: AuthorId) {
    return new AuthorAlreadyExists(authorId.id, "id");
  }
}
