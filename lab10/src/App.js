import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from "./Components/Navbar";
import DistanceConverter from "./Views/DistanceConverter";
import TemperatureConverter from "./Views/TemperatureConverter";

function App() {
  return (
    <>
      <div className="taskTitle">This is Assignment 10!!</div>
      <div className="App">
        <Router>
          <NavBar />
          <Route
            exact
            path="/"
            render={(props) => <Redirect to="/temperature" />}
          />
          <Route path="/temperature" component={TemperatureConverter} />
          <Route path="/distance" component={DistanceConverter} />
        </Router>
      </div>
    </>
  );
}

export default App;
