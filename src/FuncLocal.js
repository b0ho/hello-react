import React, { useRef } from "react";

const FuncLocal = () => {
  const id = useRef(1);

  const setId = (n) => {
    id.current = n;
  };

  const printId = () => {
    console.log(id.current);
  };

  return (
    <div>
      {id.current}
      FuncLocal
      {(printId(), setId(3), printId(), id.current)}
    </div>
  );
};

export default FuncLocal;
