import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";
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
        <SassComponent></SassComponent>
        <CSSModule></CSSModule>
      </div>
    );
  }
}

export default App;
