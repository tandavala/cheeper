import { Cheep } from "../../../Domain/Cheep/cheeps";
import { ICheepRepository } from "../../../Domain/Cheep/respository/cheep.repository";
import { CheepId } from "../../../Domain/Cheep/value-objects/cheep-id";
import Database from "../../Config/knex";

export class CheepRepository implements ICheepRepository {
  async add(cheep: Cheep): Promise<Cheep> {
    await Database("cheeps").insert({
      author_id: cheep.authorId,
      message: cheep.message,
    });
    return cheep;
  }
  async ofId(cheepId: CheepId): Promise<Cheep> {
    const data = await Database("cheeps").where("id", cheepId).first();
    return this.hidrateCheep(data);
  }

  private hidrateCheep(data) {
    return Cheep.hidrate(data.author_id, data.id, data.message);
  }
}
