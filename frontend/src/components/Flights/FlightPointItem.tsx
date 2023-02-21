import React, { CSSProperties } from "react";
import styled from "styled-components";

import Typography from '@mui/material/Typography';
import { FlightPoint } from "types/FlightPoint";

interface Props {
    details: FlightPoint;
    align: CSSProperties['justifyContent']
}
interface FlightWrapperProps {
    align: CSSProperties['justifyContent']
}

const americanToNormalDate = (dateString: Date) => {
   const cutDate = dateString.toDateString().slice(4)
   const date = `${cutDate.slice(4, 7)}${cutDate.slice(0, 4)}${cutDate.slice(7)}`
   return date
}

export const FlightPointItem = ({details, align}: Props) => {
    const { code, dateTime } = details
    const date = new Date(dateTime)
    const flightDate = americanToNormalDate(date)
    const time = date.toTimeString().slice(0, 5)
    return(
        <StyledWrapper align={align}>
            <Typography>{code}</Typography>
            <StyledTime>{time}</StyledTime>
            <Typography align={align === 'flex-start' ? 'left' : 'right'}>{flightDate}</Typography>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div<FlightWrapperProps>`
    display: flex;
    flex-direction: column; 
    align-items: ${({align}) => align};
    margin: 0 5px;
`
const StyledTime = styled.div`
    font-size: 30px;
    font-weight: 700;
`