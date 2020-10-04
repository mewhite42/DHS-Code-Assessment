export default (state, action) => {
  if (typeof state === "undefined") {
    state = [];
  }
  switch (action.type) {
    case "RESULTS":
      return state.map((item, index) => {
        if (index !== action.index) {
          // Not the result we want to update
          return item;
        }
        // The result we want to update
        return {
          ...item,
          ...action.payload,
        };
      });

    case "RESULTSSIZE":
      //Update the result size
      let tempState = state.slice();
      tempState.length = action.payload;
      //Fill with empty strings to map works above
      tempState.fill("");
      return tempState;
    default:
      return state;
  }
};
