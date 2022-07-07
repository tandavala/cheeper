import { Cheep } from "../cheeps";
import { CheepId } from "../value-objects/cheep-id";

export interface ICheepRepository {
  add(cheep: Cheep): Promise<Cheep>;
  ofId(cheepId: CheepId): Promise<Cheep>;
}
