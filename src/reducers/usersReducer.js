export default (state = [], action) => {
  switch (action.payload) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
