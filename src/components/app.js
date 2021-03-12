import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Weekly from "../routes/week";

const App = () => (
  <div id="app">
    <Header />
    <div className="container mx-auto">
      <Router>
        <Home path="/" />
        <Weekly path="/week" user="me" />
        {/* <Profile path="/profile/:user" /> */}
      </Router>
    </div>
  </div>
);

export default App;
