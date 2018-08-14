import React, { Component } from 'react';
import Login from "./containers/LoginContainer";
import { Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login}/>
      </div>
    );
  }
}


export default App;
