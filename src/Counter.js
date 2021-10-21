import React, { useReducer } from "react";

const reducerA = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducerA, { value: 0 });
  const { value } = state;

  return (
    <div>
      <p>
        현재 카운터 : <b>{value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({})}>0</button>
    </div>
  );
};

export default Counter;
