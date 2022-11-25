import React, { useState } from "react";

import Header from "components/Common/Header";

import CreateContactPane from "./Pane/Create";
import SidePanel from "./SidePanel";
import Table from "./Table";

const Contacts = () => {
  const [showPane, setShowPane] = useState(false);

  return (
    <div className="flex flex-row">
      <SidePanel title="Contacts" />
      <div className="flex flex-col">
        <Header setShowPane={setShowPane} type="Contact" />
        <CreateContactPane setShowPane={setShowPane} showPane={showPane} />
        <Table />
      </div>
    </div>
  );
};

export default Contacts;
