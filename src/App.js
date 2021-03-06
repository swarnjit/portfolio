import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </div>
  );
}

export default App;
