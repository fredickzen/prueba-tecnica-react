export const listToBuyReducers = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((toBuy) => toBuy.id !== action.payload);

    case "duplicate":
      return state.map((toBuy) =>
        toBuy.id !== action.payload
          ? toBuy
          : {
              id: toBuy.id,
              element: toBuy.element,
              quantity: toBuy.quantity < 10000 ? toBuy.quantity * 2 : 10000,
            }
      );

    default:
      return state;
  }
};
