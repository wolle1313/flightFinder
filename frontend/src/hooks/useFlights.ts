import { useEffect, useState } from "react"

import flights from "api/flights";
import { sortByDate, sortByPrice } from "utils/sortFlights";
import { filterFlights } from "utils/filterFlights";

import { FlightFilters } from "types/FlightFilters";
import { FlightData } from "types/FlightData";
import { SortTypes } from "types/SortTypes";



const useFlights = () => {
    const [flightsData, setFlightsData] = useState<FlightData[] | null>();
    const [sort, setSort] = useState<SortTypes>("price");
    const [filters, setFilters] = useState<FlightFilters>({departurePlace: '', arrivalPlace: ''})
    const [fetchingStatus, setFetchingStatus] = useState({error: false, loading: false})

    const sortFlights = (unsortedFlights: FlightData[]) => {
      let sortedData;
      if(unsortedFlights?.length) {
        switch(sort) {
          case "price":
            sortedData = sortByPrice(unsortedFlights);
            break;
          case "date":
            sortedData = sortByDate(unsortedFlights);
            break;
          default:
            const exhCheck: never = sort
            return exhCheck
          }
      }
      setFlightsData(sortedData)
    }

    const fetchFlights = async () => {
      setFetchingStatus({error: false, loading: true})
        try {
            const fetchFlights = await flights.getAllFlights()
             const filteredData = filterFlights(fetchFlights, filters)
              sortFlights(filteredData)
              setFetchingStatus({error: false, loading: false})
          }
          catch(err) {
            setFetchingStatus({error: true, loading: false})
          }        
    }

  //while the most optimal would be to run sort/filter without fetch currently commonly main data is refetched whenever stored data is being manipulated 
    useEffect( () => {
      setFetchingStatus({error: false, loading: true})
        fetchFlights();
      }, [sort, filters])

    return({
        flightsData,
        fetchingStatus,
        sort,
        fetchFlights,
        setSort,
        setFilters,
    })
}

export default useFlights