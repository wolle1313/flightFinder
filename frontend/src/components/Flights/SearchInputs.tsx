import React from "react";
import styled from "styled-components";
import { useFormik } from 'formik'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FlightIcon from '@mui/icons-material/Flight';

import { FlightFilters } from "types/FlightFilters";
import { text } from "text";
import { breakpoints } from "utils/rwd";

interface Props {
   setFilters: React.Dispatch<React.SetStateAction<FlightFilters>>
}

export const SearchInputs = ({setFilters}: Props) => {

    const formik = useFormik({
        initialValues: {
            departurePlace: '',
            arrivalPlace: ''
        },
        onSubmit: values => setFilters(values)
    })

    return(
    <StyledWrapper>
        <form onSubmit={formik.handleSubmit}>
         <StyledWrapper>
            <MarginWrapper>
            <StyledTextField 
            id="departurePlace" 
            name="departurePlace"
            value={formik.values.departurePlace} 
            onChange={formik.handleChange}
            label={text.searchInputs.departure} 
            variant="filled"
            color="primary"
            />
            </MarginWrapper>
            <MarginWrapper>
            <StyledTextField
                variant='filled'
                color='primary'
                id="arrivalPlace" 
                name="arrivalPlace"
                value={formik.values.arrivalPlace}
                onChange={formik.handleChange} 
                label={text.searchInputs.arrival}
                />
            </MarginWrapper>
            <Button type="submit" variant="contained" endIcon={<FlightIcon />}>{text.searchInputs.searchBtn}</Button>
         </StyledWrapper>
        </form>
    </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
    }
`
const MarginWrapper = styled.div`
    margin: 15px;
`
const StyledTextField = styled(TextField)`
    background-color: #fff;
    border-radius: 10px;
`
