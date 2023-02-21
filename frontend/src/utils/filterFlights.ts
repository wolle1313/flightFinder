import { FlightData } from "types/FlightData"
import { FlightFilters } from "types/FlightFilters"

export const filterFlights = (unfilteredFlights: FlightData[], filters: FlightFilters) => {
    const filteredData = unfilteredFlights.filter(flight => {
      const filteredBounds = flight.bounds.filter(bound => {
         const isDepartureMatching = bound.departure.name.toLowerCase().includes(filters.departurePlace.toLowerCase())
         const isArrivalMatching = bound.destination.name.toLowerCase().includes(filters.arrivalPlace.toLowerCase())
         return isDepartureMatching && isArrivalMatching
       })
       return filteredBounds.length
     })
     return filteredData
   }