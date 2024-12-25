const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "RESET":
      return {
        ...state,
        count: state.count = 0,
      };
    case "MINUS":
      return {
        ...state,
        count: state.count - 1,
      };
    case "INCREMENT_BY_VALUE":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "MINUS_BY_VALUE":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}
