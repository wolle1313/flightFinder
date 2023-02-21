import React, { useState } from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { getCurrencySign } from 'utils/getCurrencySign';
import { Loader } from 'components/Loader';

import { Button } from '@mui/material';
import { text } from 'text';
import { colors } from 'theme'
import { Price } from 'types/Price';
import flights from 'api/flights';
import { ErrorPage } from 'components/ErrorPage';
import { breakpoints } from 'utils/rwd';

interface Props {
    price: Price;
    uuid: string;
}

export const FlightBook = ({ price, uuid }: Props) => {
    const [postStatus, setPostStatus] = useState({error: false, loading: false})
    const history = useHistory(); 

    const postBooking = async () => {
            setPostStatus({loading: false, error: false})
        try {
           await flights.postBookFlight({uuid: uuid})
           return(history.replace("/booking-confirm"))  
        }
        catch(err) {
            setPostStatus({loading: false, error: true})

        }
    }
    if(postStatus.loading) return <Loader />
    if(postStatus.error) return <ErrorPage errorText={text.errorPages.unsuccessfulBooking} fetch={postBooking} />

    return(
        <StyledWrapper>
            <Square />
            <FlightPrice>{getCurrencySign(price.currency)}{price.amount}</FlightPrice>
            <Button onClick={postBooking} variant='contained' type='button'>{text.flightItem.bookFlight}</Button>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    background-color: ${colors.golden};
    position: relative;
    width: 100%;
    align-self: stretch;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: row;
        justify-content: center;
        width: 95vw;
        padding: 20px 0;
    }
`
const Square = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(-45deg);
    background-color: ${colors.golden};
    height: 50px;
    width: 50px;
    @media (max-width: ${breakpoints.mobile}) {
        top: 0;
        left: 50%;
        transform: translateX(-50%) rotate(-45deg);
    }
`
const FlightPrice = styled.div`
    margin-right: 20px;
    font-size: 30px;
    z-index: 999;
    font-weight: 700;

`