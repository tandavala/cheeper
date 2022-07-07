import { InvalidArgumentException } from "../../Domain/commons/exception/invalid-argument.exception";

export class Assert {
  static notEmpty(str: string, field = "") {
    if (!str) throw new InvalidArgumentException(`${field} is required`);
    return false;
  }

  static maxLength(message: string, length: number) {
    if (message.length > length) {
      throw new InvalidArgumentException("message can not be greater than 260");
    }
  }
}
