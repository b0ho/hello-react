import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import { Fragment } from "react/cjs/react.production.min";

const App = () => {
  return (
    <Fragment>
      <MyComponent name="React" favoriteNumber="s">
        리액트
      </MyComponent>
      <Counter></Counter>
    </Fragment>
  );
};

export default App;
