import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/header";
import Content from "./components/content/content";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
