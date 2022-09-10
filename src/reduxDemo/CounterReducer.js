//initial stae
const initialState = { value: 0 };

//created reducer
//it takes state and action as an input and return new state
export function counterReducer(state = initialState, action) {
  switch (action.type) {
    //action increment
    case "increment":
      console.log("increment");
      console.log(state.value);
      console.log(action.payload);

      //returning new state
      return {
        ...state,
        value: state.value + 1,
      };
    //action decrement
    case "decrement":
      console.log("decrement");
      console.log(state.value);
      console.log(action.payload);
      //returning new state
      return {
        ...state,
        value: state.value - 1,
      };
    //action reset
    case "reset":
      console.log("reset");
      console.log(state.value);
      console.log(action.payload);
      //returning new state
      return {
        ...state,
        value: 0,
      };
    //action default
    default:
      console.log("default action");
      console.log(state.value);
      console.log(action.payload);
      return state;
  }
}
