import { AuthorId } from "../value-objects/authorid";
import { UserName } from "../value-objects/username";

export class AuthorDoesNotExist extends Error {
  constructor(authorName: string) {
    super(`Author ${authorName} does not existe`);
  }
  static withUserNameOf(userName: UserName) {
    return new AuthorDoesNotExist(userName.__toString());
  }
  static withAuthorIdOf(authorId: AuthorId) {
    return new AuthorDoesNotExist(authorId.toString());
  }
}
