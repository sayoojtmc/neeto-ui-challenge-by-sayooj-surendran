import React, { useState } from "react";

import { Button } from "neetoui";
import { Header as NeetoUIHeader } from "neetoui/layouts";

const Header = ({ type, setShowPane }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <NeetoUIHeader
      menuBarToggle={() => {}}
      title={`All ${type}s`}
      actionBlock={
        <Button
          className="mx-2"
          label={`Add ${type} +`}
          onClick={() => setShowPane(true)}
        />
      }
      searchProps={{
        onChange: e => setSearchTerm(e.target.value),
        value: searchTerm,
      }}
    />
  );
};

export default Header;
