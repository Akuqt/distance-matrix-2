import { DistanceMatrixOptions } from "../src/common/types";

export const options: DistanceMatrixOptions = {
  destinations: [{ lat: 10.997265, lng: -74.814256 }],
  origins: [{ lat: 10.993805, lng: -74.808798 }],
  avoid: "ferries",
  arrival_time: 1010200101,
  departure_time: "now",
  language: "en",
  region: "us",
  mode: "driving",
  traffic_model: "best_guess",
  transit_mode: "bus",
  transit_routing_preference: "fewer_transfers",
  units: "metric",
};

export const query = (key: string) =>
  `?destinations=10.997265%2C-74.814256&origins=10.993805%2C-74.808798&avoid=ferries&arrival_time=1010200101&departure_time=now&language=en&region=us&mode=driving&traffic_model=best_guess&transit_mode=bus&transit_routing_preference=fewer_transfers&units=metric&key=${key}`;
