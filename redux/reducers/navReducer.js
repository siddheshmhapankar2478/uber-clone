const initialState = {
  source: null,
  destination: null,
  travelInformation: null,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SOURCE_INFO": {
      return { ...state, source: action.payload };
    }
    case "ADD_DESTINATION_INFO": {
      return { ...state, destination: action.payload };
    }
    default:
      return state;
  }
};
export default navReducer;
