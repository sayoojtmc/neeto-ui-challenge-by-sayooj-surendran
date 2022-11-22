import React from "react";

import { Typography } from "neetoui";

import SidePanelRow from "./SidePanelRow";

const SidePanel = ({ title }) => (
  <div className="flex-5 flex flex-row">
    <div className="h-100 flex w-auto flex-grow flex-col py-5">
      <Typography className="px-5 py-5" style="h2">
        {title}
      </Typography>
      <SidePanelRow count={100} label="All" />
      <SidePanelRow count={80} label="Users" />
      <SidePanelRow count={60} label="Leads" />
    </div>
  </div>
);

export default SidePanel;
