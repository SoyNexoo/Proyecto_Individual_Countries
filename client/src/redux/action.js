/* eslint-disable no-unused-vars */
import axios from "axios";
import {
    DELETE_ACTIVITY,
  FILTER_BY_CONT,
  FILTER_BY_POPULATION,
  FILTER_BY_SEASON,
  GET_ACTIVITY,
  GET_COUNTRY,
  GET_COUNTRY_NAME,
  SORT_BY_NAME,
  SORT_BY_NAME_ACTIVITY,
} from "./types";

export const getCountry = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/countries");
      return dispatch({
        type: GET_COUNTRY,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getCountriesByName = (countryName) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/countries/name?pais=${countryName}`
    );
    dispatch({
      type: GET_COUNTRY_NAME,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching countries by name:", error);
  }
};

export const addActivity = (datos) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/activities", datos);
      alert("Creado con exito!");
    } catch (error) {
      console.log(error);
    }
  };
};

export const getActivity = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/activities");
      return dispatch({
        type: GET_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteActivity = (id) => {
    return async (dispatch) =>{
        try {
            await axios.delete(`http://localhost:3001/activities/delete/${id}`)
            dispatch({
                type: DELETE_ACTIVITY,
                payload:id
            })
        } catch (error) {
            console.log("Errorsito delete")
        }
    }
}

export const sortedByName = (payload) => {
  return {
    type: SORT_BY_NAME,
    payload,
  };
};

export const filterByCont = (payload) => {
  return {
    type: FILTER_BY_CONT,
    payload,
  };
};
export const filterByPopu = (payload) => {
  return {
    type: FILTER_BY_POPULATION,
    payload,
  };
};
export const sortActivity = (payload) => {
  return {
    type: SORT_BY_NAME_ACTIVITY,
    payload,
  };
};
export const filterBySeason = (payload) => {
  return {
    type: FILTER_BY_SEASON,
    payload,
  };
};
export const filterByActivity = payload => {
  return {
    type: "FILTE",
    payload
  }
}
