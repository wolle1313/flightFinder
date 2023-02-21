import { useEffect, useState } from "react"

import flights from "api/flights"
import { FlightDetailsType } from "types/FlightDetails"
import { detailStrings } from "data/detailStrings"

interface DetailPairs {
    name: string;
    value: string
}

export const useDetails = (uuid: string) => {
    const [details, setDetails] = useState<DetailPairs[]>();
    const [fetchStatus, setFetchStatus] = useState({loading: false, error: false})

    const fetchFlightData = async () => {
        setFetchStatus({loading: true, error: false})
        try {
            const flightDetails = await flights.getFlight({uuid: uuid})
            findDetails(flightDetails)
            setFetchStatus({loading: false, error: false})

        }
        catch(err) {
        setFetchStatus({loading: false, error: true})
        }
    }

    const findDetails = (flightDetails: FlightDetailsType) => {
        const currentDetails = []

        for (const [detailKey, detailValue] of Object.entries(flightDetails)) {
            //@ts-ignore ts is confused since keys do match type of flightDetails keys but it always reads keys as just strings and values as any
           currentDetails.push({name: detailStrings[detailKey], value: detailValue})
        }
        setDetails(currentDetails)
    }
    
    useEffect(() => {
        fetchFlightData()
    }, [])

    return({
        details,
        fetchStatus,
        fetchFlightData
    })
}