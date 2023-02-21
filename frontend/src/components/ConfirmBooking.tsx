import React from 'react'
import styled from 'styled-components'

import { Typography } from '@mui/material'
import greenCheckmark from 'assets/icons/greenCheckmark.png'
import { text } from 'text'

export const ConfirmBooking = () => {

    return(
        <StyledWrapper>
            <div>
            <TransparentImg src={greenCheckmark} />
            </div>
            <Typography textAlign='center' fontSize='24px'>{text.booking.success}</Typography>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    max-width: 500px;
    margin: 50px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const TransparentImg = styled.img`
    width: 150px;
    height: 150px;
`