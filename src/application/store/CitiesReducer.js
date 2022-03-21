const initialStore = { cities: [] };

const types = { add: "add-city", delete: "delete-city" };

function citiesReducer(state, action) {
  switch (action.type) {
    case types.add:
      return { cities: state.cities.concat(action.payload.newCity) };
    case types.delete:
      return {
        cities: state.cities.filter(
          (item) => item.id !== action.payload.cityId
        ),
      };
    default:
      throw new Error();
  }
}

export { initialStore, types };
export default citiesReducer;
