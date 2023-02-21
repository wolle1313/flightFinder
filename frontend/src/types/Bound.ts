import { FlightPoint } from "./FlightPoint";

export interface Bound {
    departure: FlightPoint;
    destination: FlightPoint;
    duration: string;
}