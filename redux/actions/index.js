export const addSourceInfo = (payload) => {
  return {
    type: "ADD_SOURCE_INFO",
    payload: payload,
  };
};

export const addDestinationInfo = (payload) => {
  return {
    type: "ADD_DESTINATION_INFO",
    payload: payload,
  };
};
