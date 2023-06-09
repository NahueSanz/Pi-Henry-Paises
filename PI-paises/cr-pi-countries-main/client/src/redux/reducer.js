import {
  SORT_ALPHABETICALLY,
  FILTER_BY_CONTINENT,
  GET_COUNTRIES,
  SORT_BY_POPULATION,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
} from "./actionsType";

const initialState = {
  countries: [],
  filteredCountries: [],
  currentPage: 1,
  totalPages: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case FILTER_BY_CONTINENT:
      const filterCountries = state.countries.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        filteredCountries:
          action.payload === "none" ? [...state.countries] : filterCountries,
      };
    case SORT_ALPHABETICALLY:
      if (action.payload === "") {
        return {
          ...state,
          filteredCountries: [...state.countries],
        };
      } else {
        return {
          ...state,
          filteredCountries: [...state.filteredCountries].sort((a, b) =>
            action.payload === "A"
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name)
          ),
        };
      }
    case SORT_BY_POPULATION:
      if (action.payload === "") {
        return {
          ...state,
          filteredCountries: [...state.countries],
        };
      } else {
        return {
          ...state,
          filteredCountries: [...state.filteredCountries].sort((a, b) =>
            action.payload === "populationA"
              ? b.population - a.population
              : a.population - b.population
          ),
        };
      }
    default:
      return state;
  }
};

export default reducer;
