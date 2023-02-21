import React from "react";
import styled from "styled-components";

import loadingPlane from 'assets/loadingPlane.gif'

export const Loader = () => (
    <StyledWrapper />
)

const StyledWrapper = styled.div`
    background: url(${loadingPlane});
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 300px;
    min-width: 300px;
    height: 100%;
    z-index: 999;
`