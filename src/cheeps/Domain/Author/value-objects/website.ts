import { ValueObject } from "../../commons/value-object";

export class Website extends ValueObject {
  private _uri: string;
  constructor(uri: string) {
    super();
    this.setUri(uri);
  }

  static fromString(value: string) {
    return new Website(value);
  }

  private setUri(uri) {
    this.assertValidUrl(uri);
  }
  private assertValidUrl(url: string) {
    // Validar url
    this._uri = url;
  }
  public __toString() {
    return this._uri;
  }
}
