import React from "react";

import Header from "components/Common/Header";

import SidePanel from "./SidePanel";
import Table from "./Table";

const Contacts = () => (
  <div className="flex flex-row">
    <SidePanel title="Contacts" />
    <div className="flex flex-col">
      <Header type="Contact" />
      <Table />
    </div>
  </div>
);

export default Contacts;
