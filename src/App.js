import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

const App = () => {
  return (
    <div>
      <MyComponent name="React" favoriteNumber="s">
        리액트
      </MyComponent>
      <Counter></Counter>
      <Say></Say>
    </div>
  );
};

export default App;
