import React, { useState } from "react";

import { Alert } from "neetoui";

const Delete = () => {
  const [open, setOpen] = useState(open);

  return (
    <Alert
      isOpen={open}
      message="Are you sure you want to delete the note? This action cannot be undone."
      title="Delete Note"
      onClose={() => setOpen(false)}
      onSubmit={() => setOpen(false)}
    />
  );
};

export default Delete;
