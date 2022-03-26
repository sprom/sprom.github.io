const weatherReducer = (state = '', action) => {
  switch (action.type) {
    case "SETWEATHER":
        state = (action.payload - 273.15).toFixed() ;
      return state;
    // case "DECRIMENT":
    //   return state - action.payload;
    default:
      return state;
  }
}

export default weatherReducer;
