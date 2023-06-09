import {
  FILTER_BY_CONTINENT,
  SORT_ALPHABETICALLY,
  GET_COUNTRIES,
  SORT_BY_POPULATION,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
} from "./actionsType";
import axios from "axios";

export const getCountries = (page, continent) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/countries/all?page=${page}` +
          (continent ? `&filters=continent=${continent}` : ``)
      );
      dispatch({ type: GET_COUNTRIES, payload: data.countries });
      dispatch({ type: SET_TOTAL_PAGES, payload: data.totalPages });
      dispatch({ type: SET_CURRENT_PAGE, payload: data.page });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};
export const filterCountryByContinent = (continent) => {
  return { type: FILTER_BY_CONTINENT, payload: continent };
};

export const orderCountry = (order) => {
  return { type: SORT_ALPHABETICALLY, payload: order };
};

export const sortByPopulation = (order) => {
  return { type: SORT_BY_POPULATION, payload: order };
};
