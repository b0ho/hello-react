import { useReducer } from "react";

function reducerA(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const useInput = (initialForm) => {
  const [state, dispatch] = useReducer(reducerA, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
};

export default useInput;
