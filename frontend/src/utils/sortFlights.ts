import { FlightData } from "types/FlightData"

export const sortByDate = (flightData: FlightData[]) => {
    const sortedData = flightData.sort((flight, nextFlight) => {
        const date1 = new Date(flight.bounds[0].departure.dateTime);
        const date2 = new Date(nextFlight.bounds[0].departure.dateTime);
        if(date1 === date2) return 0;
       return date2 < date1 ? 1 : -1;
    })
    return sortedData
}

export const sortByPrice = (flightData: FlightData[]) => {
    const sortedData = flightData.sort(({price: price1}, {price: price2}) => {
        //Obviously we would like to use param in api call to receive and therefor sort only one currency type
        return price1.amount - price2.amount
    } )
    return sortedData
}