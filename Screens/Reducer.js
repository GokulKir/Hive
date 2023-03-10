const Reducer = (state, action) => {
    switch (action.type) {
      case "SET_SESSION":
        return {
          ...state,
          sessionData: action.payload,
        };

      case "SET_MODE":
      return {
        ...state,
        mode: action.payload,
      };
      case "SET_PROFILE":
      return {
        ...state,
        userProfile: action.payload,
      };

      default:
        return state;
    }
  };
  
  export default Reducer;