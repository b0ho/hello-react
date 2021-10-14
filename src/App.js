import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import { Fragment } from "react/cjs/react.production.min";
import Say from "./Say";

const App = () => {
  return (
    <Fragment>
      <MyComponent name="React" favoriteNumber="s">
        리액트
      </MyComponent>
      <Counter></Counter>
      <Say></Say>
    </Fragment>
  );
};

export default App;
