import React, { useState } from 'react'

import styled from "styled-components";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FlightData } from "types/FlightData"

import { BoundItem } from './BoundItem';
import { FlightBook } from './FlightBook';
import { FlightDetails } from './FlightDetails';
import { text } from 'text';
import { colors } from 'theme';
import { breakpoints } from 'utils/rwd';

interface Props {
    flightData: FlightData;
}

export const FlightItem = ({flightData}: Props) => {
    const { uuid, airlineCode, bounds, price } = flightData;
    const [open, setOpen] = useState(false);

    return(
        <StyledWrapper>
            <BoundsWrapper>
                <ButtonWrapper>
                <Button variant="text" onClick={() => setOpen(true)}>{text.flightItem.detailsBtn}</Button>
                </ButtonWrapper>
                {bounds.map((boundData, index) => <BoundItem key={index} index={index} airlineCode={airlineCode} boundData={boundData} />)}
            </BoundsWrapper>
            <FlightBook price={price} uuid={uuid} />
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
             <ModalContent>
                <FlightDetails setClosed={() => setOpen(false)} bounds={bounds} airlineCode={airlineCode} uuid={uuid}/>
             </ModalContent>
            </Modal>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    box-shadow: ${colors.boxShadow};
    background-color: ${colors.white};
    margin: 10px 0;
    display: flex;
    max-width: 840px;
    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        max-width: 95vw;
    }
`
const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 400px;
    min-width: 250px;
    min-height: 250px;
    max-height: 95vh;
    background-color: ${colors.white};
    transform: translate(-50%, -50%);
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${breakpoints.tablet}) {
        padding: 30px
    }
`
const BoundsWrapper = styled.div`
    width: 100%;
    position: relative;
`
const ButtonWrapper = styled.div`
    position: absolute;
    cursor: pointer;
    top: 5px;
    right: 5px;
    z-index: 999;
`