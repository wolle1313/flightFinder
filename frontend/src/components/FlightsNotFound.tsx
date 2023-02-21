import React from 'react'
import styled from 'styled-components'

import Typography from '@mui/material/Typography'

import plane from 'assets/airplane.png'
import { text } from 'text'
import { breakpoints, isMobile } from 'utils/rwd'

export const FlightsNotFound = () => {

    return(
        <StyledWrapper>
            <Typography textAlign='center' fontSize={isMobile() ? '16px' : '20px'} fontWeight='700'>{text.searchFlights.noFlightsFound}</Typography>
            <StyledImg src={plane} alt='plane' />
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    max-width: 500px;
    margin: 50px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width: ${breakpoints.mobile}) {
        justify-content: center;
        margin: 20px 10px;
    }
`
const StyledImg = styled.img`
    max-width: 100%;
`