import {
  GET_MODELS,
  ORDER_MODELS,
  SEDAN_HATCHBACK,
  PICKUPS_COMERCIALES,
  SUVS,
} from "./actions";

const initialState = {
  models: [],
  allModels: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MODELS:
      return {
        ...state,
        models: action.payload,
        allModels: action.payload,
      };
    case ORDER_MODELS:
      let sortPriceYear =
        action.payload === "Mayor precio"
          ? state.models.sort(function (a, b) {
              if (a.price > b.price) return 1;
              if (a.price < b.price) return -1;
              return 0;
            })
          : action.payload === "Menor precio"
          ? state.models.sort(function (a, b) {
              if (a.price > b.price) return -1;
              if (a.price < b.price) return 1;
              return 0;
            })
          : action.payload === "Mas nuevos primero"
          ? state.models.sort(function (a, b) {
              if (a.year > b.year) return -1;
              return 0;
            })
          : action.payload === "Mas viejos primero"
          ? state.models.sort(function (a, b) {
              if (a.year > b.year) return 1;
              if (a.year < b.year) return -1;
              return 0;
            })
          : state.models.sort(function (a, b) {
              if (a.id > b.id) return 1;
              if (a.id < b.id) return -1;
              return 0;
            });
      return {
        ...state,
        models: sortPriceYear,
      };
    case SEDAN_HATCHBACK:
      let cars = state.allModels.filter(
        (el) => el.segment === "Sedan" || el.segment === "Hatchback"
      );
      return {
        ...state,
        models: cars,
      };
    case PICKUPS_COMERCIALES:
      let pickups = state.allModels.filter(
        (el) => el.segment === "Pickups y Comerciales"
      );
      return {
        ...state,
        models: pickups,
      };
    case SUVS:
      let suvs = state.allModels.filter((el) => el.segment === "SUVs");
      return {
        ...state,
        models: suvs,
      };

    default:
      return state;
  }
}
