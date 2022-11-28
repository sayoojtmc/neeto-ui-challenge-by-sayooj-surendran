import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const Create = ({ showPane, setShowPane }) => (
  <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
    <Pane.Header>
      <Typography style="h2" weight="semibold">
        Add New Note
      </Typography>
    </Pane.Header>
    <Form setShowPane={setShowPane} />
  </Pane>
);

export default Create;
