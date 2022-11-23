import React from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Card from "components/Notes/Card";
import { NOTES_LIST } from "components/Notes/constants";
import SidePanel from "components/Notes/SidePanel";

const NoteListing = () => (
  <div className="flex flex-row">
    <SidePanel title="Notes" />
    <div className="flex flex-col">
      <Header
        actionBlock={<Button className="mx-2" label="Add Note +" />}
        menuBarToggle={function noRefCheck() {}}
        title="All Notes"
        searchProps={{
          onChange: function noRefCheck() {},
          value: "",
        }}
      />
      <Container>
        {NOTES_LIST.map(card => (
          <Card
            description={card.description}
            key={card.id}
            title={card.title}
            type={card.type}
          />
        ))}
      </Container>
    </div>
  </div>
);

export default NoteListing;
