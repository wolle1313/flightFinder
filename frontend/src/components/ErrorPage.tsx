import React from 'react'
import styled from 'styled-components';

import { breakpoints } from 'utils/rwd';

import Typography from '@mui/material/Typography';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button } from '@mui/material';

import { text } from 'text';
import plane from 'assets/airplane.png'

interface Props {
    fetch: () => Promise<void>;
    errorText: string;
}

export const ErrorPage = ({ fetch, errorText }: Props) => {

    return(
        <StyledWrapper>
            <Typography textAlign='center' fontWeight='700' fontSize='24px'>{errorText}</Typography>
            <Button variant='contained' color='secondary'  startIcon={< ReplayIcon />} onClick={fetch}>
             <Typography fontSize='20px'>{text.errorPages.reload}</Typography>   
            </Button>
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
        height: 100vh;
        justify-content: center;
        margin: 0 10px;
    }
`
const StyledImg = styled.img`
    max-width: 100%;
`