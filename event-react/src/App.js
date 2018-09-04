import React, { Component } from 'react';
import Login from "./containers/LoginContainer";
import EventApp from "./containers/event-appContainer";
import { Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={EventApp}/>
      </div>
    );
  }
}


export default App;
