import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const NoteDropDown = ({ setShowDeleteAlert }) => {
  const { Menu, MenuItem } = Dropdown;

  return (
    <div className="ml-auto flex">
      <Dropdown
        customTarget={<MenuVertical className="p-1" />}
        label="Dropdown"
      >
        <Menu>
          <MenuItem.Button>Edit</MenuItem.Button>
          <MenuItem.Button
            style="danger"
            onClick={() => setShowDeleteAlert(true)}
          >
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};
export default NoteDropDown;
