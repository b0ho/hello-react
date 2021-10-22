import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code>
          </p>
          <a href="http://reactjs.org" target="" rel="">
            Learn
          </a>
        </header>
      </div>
    );
  }
}

export default App;
