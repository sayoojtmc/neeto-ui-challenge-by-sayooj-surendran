import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Card from "components/Notes/Card";
import { NOTES } from "components/Notes/constants";
import SidePanel from "components/Notes/SidePanel";

const NoteListing = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex flex-row">
      <SidePanel title="Notes" />
      <div className="flex flex-col">
        <Header
          actionBlock={<Button className="mx-2" label="Add Note +" />}
          menuBarToggle={() => {}}
          title="All Notes"
          searchProps={{
            onChange: e => setSearchValue(e.target.value),
            value: searchValue,
          }}
        />
        <Container>
          {NOTES.map(note => (
            <Card
              createdAt={note.createdAt}
              description={note.description}
              key={note.id}
              title={note.title}
              type={note.type}
            />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default NoteListing;
