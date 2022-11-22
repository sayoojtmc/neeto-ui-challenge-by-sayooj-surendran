import React from "react";

import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

import Card from "components/Card";

import { NOTES_LIST } from "./constants";
import SidePanel from "./SidePanel";

const NoteListing = () => (
  <div className="flex flex-row">
    <SidePanel title="Notes" />
    <div className="flex flex-col">
      <Header
        actionBlock={<Button label="Add Note" />}
        menuBarToggle={function noRefCheck() {}}
        title="Layouts"
        searchProps={{
          onChange: function noRefCheck() {},
          value: "",
        }}
      />
      <div className="mx-2 mt-5 flex flex-col">
        {NOTES_LIST.map(card => (
          <Card
            description={card.description}
            key={card.id}
            title={card.title}
          />
        ))}
      </div>
    </div>
  </div>
);

export default NoteListing;
