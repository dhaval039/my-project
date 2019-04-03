import React, { Component } from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
// import Header from "./Components/Header";
import Components from "./Components";
// import DataList from "./Components/DataList";
// import Form from "./Components/Form";
import LoginForm from "./Components/LoginForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Header /> */}
          <Route exact path="/" component={LoginForm} />
          <Route path="/component" component={Components} />
          {/* <Route path="/datalist" component={DataList} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
