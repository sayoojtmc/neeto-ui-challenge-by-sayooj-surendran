import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Sidebar from "components/Common/Sidebar";
import NoteListing from "components/Notes";
import "lib/day";

const App = () => (
  <Router>
    <div className="flex flex-row items-start justify-start">
      <Sidebar />
      <div className="relative flex h-screen flex-grow flex-col overflow-auto">
        <Switch>
          <Route component={NoteListing} path="/" />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
