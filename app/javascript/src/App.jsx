import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import NoteListing from "components/NoteListing";
import Sidebar from "components/Sidebar";

const App = () => (
  <Router>
    <div className="flex flex-row items-start justify-start">
      <Sidebar />
      <div className="relative flex h-screen flex-grow flex-col overflow-auto">
        <Switch>
          <Route component={NoteListing} path="/" />
          <Route path="/form-elements" />
          <Route path="/formik" />
          <Route path="/overlays" />
          <Route path="/layouts" />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
