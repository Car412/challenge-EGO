import axios from "axios";

export const GET_MODELS = "GET_MODELS";
export const ORDER_MODELS = "ORDER_MODELS";
export const SEDAN_HATCHBACK = "SEDAN_HATCHBACK";
export const PICKUPS_COMERCIALES = "PICKUPS_COMERCIALES";
export const SUVS = "SUVS";

export function getModels() {
  return async function (dispatch) {
    let allModels = await axios.get(
      "https://challenge.agenciaego.tech/api/models/"
    );
    return dispatch({
      type: GET_MODELS,
      payload: allModels.data,
    });
  };
}

export function orderModels(payload) {
  return {
    type: ORDER_MODELS,
    payload,
  };
}

export function sedanHatchback() {
  return {
    type: SEDAN_HATCHBACK,
  };
}

export function pickupsComerciales() {
  return {
    type: PICKUPS_COMERCIALES,
  };
}

export function suvs() {
  return {
    type: SUVS,
  };
}
