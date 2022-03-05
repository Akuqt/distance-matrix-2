import request from "https";

import { Coord, DistanceMatrixOptions, DistanceMatrixResponse } from "./types";
import { stringify } from "querystring";

export const baseUrl =
  "https://maps.googleapis.com/maps/api/distancematrix/json";

export const formatLocations = (locations: (string | Coord)[]) => {
  let res = "";
  for (let i = 0; i < locations.length; i++) {
    const location = locations[i];
    const last = i !== locations.length - 1 ? "|" : "";
    if (typeof location === "string") {
      res += location + last;
    } else {
      res += location.lat + "," + location.lng + last;
    }
  }
  return res;
};

export const throwLocationsErrror = (
  locations: (string | Coord)[],
  name: string
) => {
  if (!locations || locations.length === 0) {
    throw new Error(`Please provide a valid ${name} param.`);
  }
  for (let i = 0; i < locations.length; i++) {
    const location = locations[i];
    if (typeof location !== "string") {
      if (
        typeof location !== "object" ||
        typeof location.lat !== "number" ||
        typeof location.lng !== "number"
      ) {
        throw new Error(
          `Please provide a valid ${name} param (Position ${i}).`
        );
      }
    }
  }
};

export const stringifyQueryParams = (
  data: DistanceMatrixOptions,
  key: string
) => {
  throwLocationsErrror(data.origins, "origins");
  throwLocationsErrror(data.destinations, "destinations");
  return (
    "?" +
    stringify({
      ...data,
      origins: formatLocations(data.origins),
      destinations: formatLocations(data.destinations),
      key,
    })
  );
};

export const requestJson = (url: string) => {
  return new Promise<DistanceMatrixResponse>((resolve, reject) => {
    request.get(url, (res) => {
      let str = "";
      /* istanbul ignore next */
      res.on("error", (err) => {
        reject(err);
      });
      res.on("data", (data) => {
        str += data.toString();
      });
      res.on("end", () => {
        resolve(JSON.parse(str.toString()));
      });
    });
  });
};
