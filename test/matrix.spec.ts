import DistanceMatrixService from "../src";
import { options } from "./helper";

describe("Distance matrix service", () => {
  const service = new DistanceMatrixService(process.env.API_KEY);
  it("should get results", async () => {
    const res = await service.getDistanceMatrix(options);
    expect(res.destination_addresses).toBeInstanceOf(Array);
    expect(res.origin_addresses).toBeInstanceOf(Array);
    expect(res.destination_addresses.length).toBeGreaterThan(0);
    expect(res.origin_addresses.length).toBeGreaterThan(0);
    expect(res.rows).toBeInstanceOf(Array);
    expect(res.rows.length).toBeGreaterThan(0);
    expect(res.rows[0].elements).toBeInstanceOf(Array);
    expect(res.rows[0].elements.length).toBeGreaterThan(0);
    expect(res.status).toBe("OK");
  });

  it("should get REQUEST_DENIED status", async () => {
    service.setKey(" ");
    const res = await service.getDistanceMatrix(options);
    expect(res.status).toBe("REQUEST_DENIED");
  });

  it("should throw no api key error", () => {
    service.setKey("");
    expect(() => service.getDistanceMatrix(options)).toThrow();
  });
});
