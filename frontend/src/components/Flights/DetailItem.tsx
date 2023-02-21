import React from 'react'
import styled from "styled-components";

import {  isMobile } from 'utils/rwd';
import Typography from '@mui/material/Typography';

interface Props {
    detailName: string;
    detailValue: string;
}

export const DetailItem = ({detailName, detailValue}: Props) => {
    let changedValue;
    if(typeof detailValue === 'boolean') {
        changedValue = detailValue ? "Yes" : "No"
    }
    return(
        <StyledWrapper>
            <Typography fontSize={isMobile() ? '13px' : '16px'}>{detailName}: {changedValue ? changedValue : detailValue}</Typography>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 10px 0;
`