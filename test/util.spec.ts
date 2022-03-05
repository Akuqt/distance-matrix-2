import {
  baseUrl,
  formatLocations,
  requestJson,
  stringifyQueryParams,
  throwLocationsErrror,
} from "../src/common/util";
import { options, query } from "./helper";

describe("Format Locations", () => {
  it("should format locations", () => {
    const res = formatLocations(["some street", { lat: 10, lng: -74 }]);
    expect(res).toBe("some street|10,-74");
  });
});

describe("Throw Locations Error", () => {
  it("should throw locations errors", () => {
    expect(() => throwLocationsErrror([212121] as any, "origins")).toThrow();
    expect(() => throwLocationsErrror([] as any, "origins")).toThrow();
    expect(() =>
      throwLocationsErrror([{ lat: "121", lng: 221 }] as any, "origins")
    ).toThrow();
    expect(() =>
      throwLocationsErrror([{ lat: 21212, lng: "221" }] as any, "origins")
    ).toThrow();
  });
});

describe("Format Stringify Query Params", () => {
  it("should stringify query params", () => {
    const res = stringifyQueryParams(options, "sample-key");
    expect(res).toBe(query("sample-key"));
  });

  it("should fail stringify query params", () => {
    expect(() =>
      stringifyQueryParams({ ...options, origins: [212121] as any }, "")
    ).toThrow();
    expect(() =>
      stringifyQueryParams({ ...options, destinations: [212121] as any }, "")
    ).toThrow();
  });
});

describe("Request JSON", () => {
  it("should get json", async () => {
    const res = await requestJson(baseUrl);
    expect(res.status).toBe("REQUEST_DENIED");
  });

  it("should fail get json", async () => {
    try {
      await requestJson("218212891");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
