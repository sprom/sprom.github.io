const weatherReducer = (state = '', action) => {
  switch (action.type) {
    case "SETWEATHER":
        state = (action.payload - 273.15).toFixed() ;
      return state;
    default:
      return state;
  }
}

export default weatherReducer;
