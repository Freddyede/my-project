import {server} from "../config/server.ts";

export default abstract class AbstractServices {
  _uri: string = '';
  private readonly _urlServer: string;
  protected constructor(uri: string) {
    this._urlServer = server.baseUrl;
    this._uri = this._urlServer + uri;
  }
  set uri(uri: string) {
    this._uri = this._urlServer + uri;
  }
  get uri(): string {
    return this._uri;
  }
}