import { Author } from "../author";
import { AuthorId } from "../value-objects/authorid";
import { UserName } from "../value-objects/username";

export interface IAuthorRepository {
  ofId(authorId: AuthorId): Promise<Author>;
  ofUserName(userName: UserName): Promise<Author>;
  add(author: Author): Promise<Author>;
}
