import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TopList from "./Containers/TopList/TopList";
import { AppMockData } from "./AppMockData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopList {...AppMockData} />
      </div>
    );
  }
}

export default App;
