import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown as NeetoUIDropdown } from "neetoui";

const { Menu, MenuItem } = NeetoUIDropdown;

const Dropdown = ({ setShowDeleteAlert }) => (
  <div className="ml-auto flex">
    <NeetoUIDropdown
      customTarget={<MenuVertical className="p-1" />}
      label="NeetoUIDropdown"
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
    </NeetoUIDropdown>
  </div>
);
export default Dropdown;
