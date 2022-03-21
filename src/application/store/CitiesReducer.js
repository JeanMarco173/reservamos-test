const initialStore = { cities: [] };

const types = { add: "add-city" };

function citiesReducer(state, action) {
  switch (action.type) {
    case types.add:
      const cities = state.cities.concat(action.payload);
      return { cities };
    default:
      throw new Error();
  }
}

export { initialStore, types };
export default citiesReducer;
