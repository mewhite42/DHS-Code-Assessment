export default (state, action) => {
  if (typeof state === "undefined") {
    state = [];
  }

  switch (action.type) {
    case "IMAGELIST":
      return action.payload;
    default:
      return state;
  }
};
