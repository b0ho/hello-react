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

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" favoriteNumber="s">
          리액트
        </MyComponent>
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
