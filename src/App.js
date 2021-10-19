import "./App.css";
import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import Event from "./Event";
import EventFunc from "./EventFunc";
import Validation from "./Validation";
import Ref from "./Ref";
import ScrollBox from "./ScrollBox";
import Iteration from "./Iteration";
import LifeCycle from "./LifeCycle";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>랜덤색상</button>
          <LifeCycle color={this.state.color}></LifeCycle>
        </div>
        <MyComponent name="React" favoriteNumber="s">
          리액트
        </MyComponent>
        <br />
        <Iteration></Iteration>
        <br />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로{" "}
        </button>
        <Ref></Ref>
        <Validation></Validation>
        <EventFunc></EventFunc>
        <Counter></Counter>
        <Say></Say>
        <Event></Event>
      </div>
    );
  }
}

export default App;
