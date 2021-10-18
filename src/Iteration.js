import React from "react";

const Iteration = () => {
  const names = ["a", "b", "c", "d"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <div>
      <ul>
        <li> A </li>
        <li> B </li>
        <li> C </li>
        <li> D </li>
      </ul>
      <ul>{nameList}</ul>
    </div>
  );
};

export default Iteration;
