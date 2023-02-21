import React from "react";
import styled from "styled-components";

import { useDetails } from "hooks/useDetails";

import { createAirlineLogoPath } from "utils/createAirlineLogoPath";
import { isSmallerThanDesktop } from "utils/rwd";
import Typography from '@mui/material/Typography';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Button from '@mui/material/Button';
import Icon from "@mui/material/Icon";

import { ErrorPage } from "components/ErrorPage";
import { Loader } from "components/Loader";
import { text } from "text";
import { Bound } from "types/Bound";

import { BoundDetails } from "./BoundDetails";
import { DetailItem } from "./DetailItem";

interface Props {
    bounds: Bound[];
    airlineCode: string;
    uuid: string;
    setClosed: () => void
}

export const FlightDetails = ({bounds, airlineCode, uuid, setClosed}: Props) => {
    const { details, fetchStatus, fetchFlightData } = useDetails(uuid);

    if(fetchStatus.error) return <ErrorPage fetch={fetchFlightData} errorText={text.errorPages.detailsNotFound} />
    if(fetchStatus.loading || !details?.length) return <Loader />

    return(
        <div>
            <Exit onClick={setClosed}>
                <Icon fontSize="large" component={DisabledByDefaultIcon} />
            </Exit>
            <LogoWrapper>
                <Logo  src={createAirlineLogoPath(airlineCode)} alt={`logo of ${airlineCode}`} />
            </LogoWrapper>
            <Typography variant={isSmallerThanDesktop() ? 'h4' : 'h2'}>{text.flightDetails.detailsTitle}</Typography>
            {bounds.map(bound => <BoundDetails bound={bound} />)}
            {details?.map(({name, value}) => <DetailItem key={name} detailName={name} detailValue={value} />)}
        </div>
    )
}

const LogoWrapper = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
`
const Logo = styled.img`
    max-width: 50px;
`
const Exit = styled.button`
    position: absolute;
    right: 5px;
    top: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    
`