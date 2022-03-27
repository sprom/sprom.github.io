const searchReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCHKEY":
        state = action.payload;
      return state;
    default:
      return state;
  }
}

export default searchReducer;
