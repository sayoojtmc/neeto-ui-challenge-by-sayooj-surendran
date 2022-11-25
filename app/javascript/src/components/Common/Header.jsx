import React, { useState } from "react";

import { Button } from "neetoui";
import { Header as NeetoUIHeader } from "neetoui/layouts";

const Header = ({ type, setShowPane }) => {
  const [searchValue, setSearchValue] = useState("");

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
        onChange: e => setSearchValue(e.target.value),
        value: searchValue,
      }}
    />
  );
};

export default Header;
