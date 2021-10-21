import "./App.css";
import React, { Component, useState } from "react";
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
import ErrorBoundary from "./ErrorBoundary";
import Info from "./Info";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const App = () => {
  // state = {
  //   color: "#000000",
  // };

  // handleClick = () => {
  //   this.setState({
  //     color: getRandomColor(),
  //   });
  // };

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Counter></Counter>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {<Info />}
      {/* <div>
          <button onClick={this.handleClick}>랜덤색상</button>
           <ErrorBoundary>
            <LifeCycle color={this.state.color}></LifeCycle>
          </ErrorBoundary> 
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
        <Event></Event> */}
    </div>
  );
};

export default App;
