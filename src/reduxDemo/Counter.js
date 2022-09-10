import React from "react";
import { increment, decrement, reset } from "./CounterAction";
import { useDispatch, useSelector } from "react-redux";

const getCount = (state) => state.value;
export const Counter = () => {
  //useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.
  const updatedCount = useSelector(getCount);
  //This hook returns a reference to the dispatch function from the Redux store.
  // You may use it to dispatch actions as needed.
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
