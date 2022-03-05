export type TravelMode = "driving" | "bicycling" | "transit" | "walking";

export type Units = "metric" | "imperial";

export type Restrictions = "tolls" | "highways" | "ferries" | "indoor";

export type TrafficModel = "best_guess" | "pessimistic" | "optimistic";

export type TransitMode = "bus" | "subway" | "train" | "tram" | "rail";

export type TransitRoutingPreference = "less_walking" | "fewer_transfers";

export type Status =
  | "OK"
  | "NOT_FOUND"
  | "ZERO_RESULTS"
  | "MAX_ROUTE_LENGTH_EXCEEDED"
  | "REQUEST_DENIED"
  | "INVALID_REQUEST";

export interface Coord {
  lat: number;
  lng: number;
}

export interface DistanceMatrixOptions {
  origins: (string | Coord)[];
  destinations: (string | Coord)[];
  arrival_time?: number;
  avoid?: Restrictions;
  departure_time?: "now" | number;
  language?: string;
  mode?: TravelMode;
  region?: string;
  traffic_model?: TrafficModel;
  transit_mode?: TransitMode;
  transit_routing_preference?: TransitRoutingPreference;
  units?: Units;
}

export interface DistanceMatrixResponseElement {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
  status: Status;
}

export interface DistanceMatrixResponse {
  destination_addresses: string[];
  origin_addresses: string[];
  rows: { elements: DistanceMatrixResponseElement[] }[];
  status: Status;
  error_message?: string;
}
