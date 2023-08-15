/* eslint-disable no-case-declarations */
// import { ORDER } from "./types";
import {
  DELETE_ACTIVITY,
  // ADD_ACTIVITY,
  FILTER_BY_CONT,
  FILTER_BY_POPULATION,
  FILTER_BY_SEASON,
  GET_ACTIVITY,
  GET_COUNTRY,
  GET_COUNTRY_NAME,
  SORT_BY_NAME,
  SORT_BY_NAME_ACTIVITY,
} from "./types";
const initialState = {
  allCountries: [],
  countries: [],
  sortCountries: [],
  allActivities: [],
  activities: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
        sortCountries: [...action.payload].sort((a, b) => {
          return a.name.localeCompare(b.name);
        }),
      };

    case GET_COUNTRY_NAME:
      return {
        ...state,
        countries: [...action.payload],
      };

    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
        allActivities: action.payload,
      };
    case DELETE_ACTIVITY:
      const activitiesUpd = state.allActivities.filter(
        (activity) => activity.id !== action.payload
      )
      return {
        ...state,
        activities: activitiesUpd,
        allActivities: activitiesUpd
      }
    case SORT_BY_NAME:
      const noneChange = [...state.allCountries];
      let sortedCountries = [...state.countries]; // Crear una copia del array
      console.log(noneChange);
      sortedCountries.sort((a, b) => {
        if (action.payload === "asc") {
          return a.name.localeCompare(b.name);
        } else if (action.payload === "desc") {
          return b.name.localeCompare(a.name);
        }
      });
      return {
        ...state,
        countries:
          action.payload === "asc" || action.payload === "desc"
            ? sortedCountries
            : noneChange,
      };

    case FILTER_BY_CONT:
      //   const allCountries = state.countries;
      //   const filterCountries =
      //     action.payload === "ALL"
      //       ? allCountries
      //       : allCountries.filter((el) => el.continente === action.payload);
      //       console.log(filterCountries)
      return {
        ...state,
        countries:
          action.payload === "all"
            ? state.allCountries
            : state.allCountries.filter(
                (el) => el.continente === action.payload
              ),
      };

    case FILTER_BY_POPULATION:
      let population = [...state.countries]; // Crear una copia del array
      population.sort((a, b) => {
        if (action.payload === "MAYOR") {
          return b.poblacion - a.poblacion;
        } else {
          return a.poblacion - b.poblacion;
        }
      });
      return {
        ...state,
        countries:
          action.payload === "MAYOR" || action.payload === "MENOR"
            ? population
            : state.allCountries,
      };

    case SORT_BY_NAME_ACTIVITY:
      const noneChanges = [...state.allActivities];
      let sortedActivities = [...state.activities];
      sortedActivities.sort((a, b) => {
        if (action.payload === "asc") return a.name.localeCompare(b.name);
        else if (action.payload === "desc") return b.name.localeCompare(a.name);
      });
      
      return {
        ...state,
        activities:
          action.payload === "asc" || action.payload === "desc"
            ? sortedActivities
            : noneChanges,
      };
    case FILTER_BY_SEASON:
      return {
        ...state,
        activities:
          action.payload === "all"
            ? [...state.allActivities]
            : [...state.allActivities].filter(
                (el) => el.temporada === action.payload
              ),
      };
    case "FILTE":
      
        const filteredCountries = [...state.allCountries].filter((country) =>
          country.Activities.find((activity) => activity.id === action.payload)
        );
  
      return{
        ...state,
        countries: action.payload === "default" ? [...state.allCountries] : filteredCountries
      }

    default:
      return state;
  }
}
