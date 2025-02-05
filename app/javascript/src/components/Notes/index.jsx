import React, { useState } from "react";

import { Container } from "neetoui/layouts";

import Header from "components/Common/Header";
import Card from "components/Notes/Card";
import { NOTES } from "components/Notes/constants";
import CreateNotePane from "components/Notes/Pane/Create";
import SidePanel from "components/Notes/SidePanel";

const NoteListing = () => {
  const [showPane, setShowPane] = useState(false);

  return (
    <div className="flex flex-row">
      <SidePanel title="Notes" />
      <div className="flex flex-col">
        <Header setShowPane={setShowPane} type="Note" />
        <CreateNotePane setShowPane={setShowPane} showPane={showPane} />
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
