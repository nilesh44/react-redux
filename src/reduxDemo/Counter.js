import React from "react";
import { increment, decrement, reset } from "./CounterAction";
import { useDispatch, useSelector } from "react-redux";

const getCount = (state) => state.value;
export const Counter = () => {
  //selector hook return updated state when ever the state in store has been change
  const updatedCount = useSelector(getCount);
  //dispatch hook
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{updatedCount}</h1>
      <button
        //dispatching event and passing action as an argument
        onClick={() => {
          dispatch(increment);
        }}
      >
        increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(decrement);
        }}
      >
        decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(reset);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
