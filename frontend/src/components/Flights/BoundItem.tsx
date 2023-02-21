import React from "react"
import styled from "styled-components";

import Typography from '@mui/material/Typography';
import { createAirlineLogoPath } from "utils/createAirlineLogoPath"
import { formatDuration } from "utils/duration";
import { Bound } from "types/Bound"
import connectIcon from 'assets/icons/connect.svg'

import { FlightPointItem } from "./FlightPointItem";
import { breakpoints } from "utils/rwd";

interface Props {
    boundData: Bound;
    airlineCode: string;
    index: number;
}

interface StyledWrapperProps {
    index: number;
}

export const BoundItem = ({boundData, airlineCode, index}: Props) => {
    const { departure, destination, duration } = boundData

    return(
    <StyledWrapper index={index}>
        <AirlineLogo src={createAirlineLogoPath(airlineCode)}  alt={`airline with code ${airlineCode}`}/>
        <ConnectionWrapper>
        <FlightPointItem details={departure} align='flex-end' />
        <TimeWrapper>
            <Typography>{formatDuration(duration)}</Typography>
            <StyledConnectIcon src={connectIcon} alt='connect icon' />
        </TimeWrapper>
        <FlightPointItem details={destination} align='flex-start' />
        </ConnectionWrapper>
    </StyledWrapper>
    )
}

const StyledWrapper = styled.div<StyledWrapperProps>`
    display: flex;
    position: relative;
    align-items: center;
    margin: 0 20px;
    padding: 30px 0;
    box-sizing: border-box;
    border-top: ${({index}) => index === 1 ? '1px solid black' : ''};
    @media (max-width: ${breakpoints.mobile}) {
        margin: 0 10px;
        justify-content: center;
    }
`
const ConnectionWrapper = styled.div`
    margin: 0 70px;
    display: flex;
    @media (max-width: ${breakpoints.tablet}) {
        margin: 0 30px;
    }
    @media (max-width: ${breakpoints.mobile}) {
        margin: 20px 5px 0 5px;
    }
`
const TimeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledConnectIcon = styled.img`
    width: 100px;
`
const AirlineLogo = styled.img`
    max-height: 40px;
    @media (max-width: ${breakpoints.tablet}) {
        position: absolute;
        top: 5px;
        left: 5px;
    }
`