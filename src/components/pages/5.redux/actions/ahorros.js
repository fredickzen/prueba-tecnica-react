import { types } from "../types/types";

export const dineroAdd = (mount) => ({
  type: types.DINERO_ADD,
  payload: mount,
});

export const dineroRemove = (mount) => ({
  type: types.DINERO_REMOVE,
  payload: mount,
});
export const DolaresAdd = (mount) => ({
  type: types.DOLARES_ADD,
  payload: mount,
});
