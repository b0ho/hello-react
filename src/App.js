import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import Event from "./Event";

const App = () => {
  return (
    <div>
      <MyComponent name="React" favoriteNumber="s">
        리액트
      </MyComponent>
      <Counter></Counter>
      <Say></Say>
      <Event></Event>
    </div>
  );
};

export default App;
