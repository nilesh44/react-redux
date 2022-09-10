import React from "react";
import { useDispatch, useSelector } from "react-redux";
//importing action from counterSlice
import { increment, decrement, reset } from "./CounterSlice";
const CounterSliceDemo = () => {
  const updatedCount = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{updatedCount}</h1>
      <button
        //dispatching event and passing action as an argument
        onClick={() => {
          dispatch(increment({ username: "anil" }));
        }}
      >
        increment
      </button>
      <br />
      <br />
      {/* passing payload to action */}
      <button
        onClick={() => {
          dispatch(decrement({ username: "sunil" }));
        }}
      >
        decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(reset({ username: "rahul" }));
        }}
      >
        reset
      </button>
    </div>
  );
};

export default CounterSliceDemo;
