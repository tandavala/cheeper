import { Author } from "../../../Domain/Author/author";
import { IAuthorRepository } from "../../../Domain/Author/repository/author.repository";
import { AuthorId } from "../../../Domain/Author/value-objects/authorid";
import { EmailAddress } from "../../../Domain/Author/value-objects/email-address";
import { UserName } from "../../../Domain/Author/value-objects/username";
import Database from "../../Config/knex";

export class AuthorRepository implements IAuthorRepository {
  async ofId(authorId: AuthorId): Promise<Author> {
    const data = await Database("authors")
      .where("id", authorId.toString())
      .first();
    return this.hidrateAuthor(data);
  }

  async ofUserName(userName: UserName): Promise<Author> {
    const data = await Database("authors")
      .where("username", userName.__toString())
      .first();
    return this.hidrateAuthor(data);
  }

  async add(author: Author): Promise<Author> {
    await Database("authors").insert({
      aggregate_id: author.authorid.toString(),
      username: author.userName,
      name: author.name,
      email: author.email,
      website: author.website,
      location: author.location,
      biography: author.biography,
      birth_date: author.birthDate,
    });
    return author;
  }

  private hidrateAuthor(data) {
    return Author.signUp(
      new AuthorId(data.aggregate_id),
      UserName.pick(data.username),
      EmailAddress.from(data.email),
      data.name,
      data.biography,
      data.location,
      data.website,
      data.birthDate
    );
  }
}
