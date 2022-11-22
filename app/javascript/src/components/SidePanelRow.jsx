import React from "react";

const SidePanelRow = ({ label, count }) => (
  <div className="ml-6 flex flex-row justify-between px-2 py-2">
    <div>{label}</div>
    <div>{count}</div>
  </div>
);

export default SidePanelRow;
