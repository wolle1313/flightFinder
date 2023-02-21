import React from 'react'
import styled from "styled-components";

import { Bound } from 'types/Bound'
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { formatDuration } from 'utils/duration';
import { text } from 'text';
import { isMobile } from 'utils/rwd';

interface Props {
    bound: Bound;
}

export const BoundDetails = ({ bound }: Props) => {
    const { departure, destination, duration } = bound

    const departureTime = new Date(departure.dateTime).toLocaleString()
    const arrivalTime = new Date(destination.dateTime).toLocaleString()
    const durationOfFlight = formatDuration(duration)
    return(
        <StyledWrapper>
            <PointWrapper>
            <Icon component={FlightTakeoffIcon} />
            <Typography fontSize={isMobile() ? '12px' : '16px'}>{text.flightDetails.from} {departure.name}</Typography>
            <Typography fontSize={isMobile() ? '12px' : '16px'}>{text.flightDetails.DepartureTime} {departureTime}</Typography>
            </PointWrapper>
            <PointWrapper>
            <Icon component={FlightLandIcon} />
            <Typography fontSize={isMobile() ? '12px' : '16px'}>{text.flightDetails.to} {destination.name}</Typography>
            <Typography fontSize={isMobile() ? '12px' : '16px'}>{text.flightDetails.arrivalTime} {arrivalTime}</Typography>
            </PointWrapper>
            <Typography fontSize={isMobile() ? '12px' : '16px'}>{text.flightDetails.flightDuration} {durationOfFlight}</Typography>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 20px 0;
    border-bottom: 1px solid black;
`
const PointWrapper = styled.div`
    margin: 20px 0;
`