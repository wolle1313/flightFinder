import React from "react";
import styled from "styled-components";

import useFlights from "hooks/useFlights";

import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import { ErrorPage } from "components/ErrorPage";
import { Loader } from "components/Loader";
import { text } from "text";
import { breakpoints } from "utils/rwd";
import { SortTypes } from "types/SortTypes";

import { FlightItem } from "./FlightItem";
import { SearchInputs } from "./SearchInputs";
import { FlightsNotFound } from "components/FlightsNotFound";

const sorts = ['price', 'date'] as const

const Flights = () => {
  const {flightsData, fetchingStatus, sort, fetchFlights, setSort, setFilters} = useFlights()

  if(fetchingStatus.error) return <ErrorPage errorText={text.errorPages.dataNotFound} fetch={fetchFlights} />
  if(fetchingStatus.loading) return <Loader />

  return (
    <StyledWrapper>
    <SearchInputs setFilters={setFilters} />
    <SelectWrapper>
    <Typography marginRight={1}>{text.sort.sortLabel}</Typography>
      <Select defaultValue={sorts[0]} value={sort} onChange={(e) => setSort(e.target.value as SortTypes)}>
        {sorts.map(sort => <MenuItem key={sort} value={sort}>{text.sort[sort]}</MenuItem>)}
      </Select>
    </SelectWrapper>
    {flightsData?.length ?
    (
      <FlightsWrapper>
      {flightsData?.map((flightData => <FlightItem key={flightData.uuid} flightData={flightData} />))}
      </FlightsWrapper>
    ) : (
      <FlightsNotFound />
      )
    }
    </StyledWrapper>
    )
};

const StyledWrapper = styled.div`
  max-width: 1240px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 10px;
  }
`
const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  max-width: 150px;
`
const FlightsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default Flights;
