import { FlightData } from "types/FlightData";
import { FlightDetailsType } from "types/FlightDetails";
import { getFlightPayload } from "types/payloads/getFlightPayload";
import axiosInstance from "./axiosInstance";


const flights = {
    getAllFlights: () => axiosInstance.get<FlightData[]>('/flights'),

    getFlight: ({uuid}: getFlightPayload) => axiosInstance.get<FlightDetailsType>(`/flights/${uuid}`),

    postBookFlight: ({uuid}: getFlightPayload) => axiosInstance.post('/flights', {uuid: uuid})
}
export default flights