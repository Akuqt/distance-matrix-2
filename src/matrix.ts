import {
  baseUrl,
  requestJson,
  stringifyQueryParams,
  DistanceMatrixOptions,
} from "./common";

export class DistanceMatrixService {
  private key: string | undefined;

  constructor(key?: string) {
    this.key = key;
  }

  public setKey(key: string) {
    this.key = key;
  }

  public getDistanceMatrix(options: DistanceMatrixOptions) {
    if (!this.key) throw new Error("There's no API key.");
    const query = stringifyQueryParams(options, this.key);
    return requestJson(baseUrl + query);
  }
}
