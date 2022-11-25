import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Sidebar from "components/Common/Sidebar";
import Contacts from "components/Contacts";
import NoteListing from "components/Notes";
import "lib/dayjs";

const App = () => (
  <Router>
    <ToastContainer />
    <div className="flex flex-row items-start justify-start">
      <Sidebar />
      <div className="relative flex h-screen flex-grow flex-col overflow-auto">
        <Switch>
          <Route exact component={NoteListing} path="/notes" />
          <Route exact component={Contacts} path="/contacts" />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
