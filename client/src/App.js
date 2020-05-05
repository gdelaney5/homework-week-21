import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrap from "./components/Wrap";

import Search from "./pages/Search";
import Save from "./pages/Save";
import Fail from "./pages/Fail";

import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Header />
          <Wrap>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/save" component={Save} />
            <Route exact path="/fail" component={Fail} />
          </Wrap>
        </div>
      </Router>
    )
  }
}


export default App;
