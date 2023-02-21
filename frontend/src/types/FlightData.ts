import { Bound } from "types/Bound";
import { Price } from "./Price";

export interface FlightData {
    airlineCode: string;
    uuid: string;
    bounds: Bound[];
    price: Price;
}