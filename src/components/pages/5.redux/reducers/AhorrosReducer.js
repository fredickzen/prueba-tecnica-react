import { types } from "../types/types";

const INIT_STATE = {
  dinero: 10000,
  dolares: 0,
};

export const AhorrosReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.DINERO_ADD:
      return { ...state, dinero: state.dinero + action.payload };
    case types.DINERO_REMOVE:
      return { ...state, dinero: state.dinero - action.payload };
    case types.DOLARES_ADD:
      return { ...state, dolares: state.dolares + action.payload };

    default:
      return state;
  }
};
