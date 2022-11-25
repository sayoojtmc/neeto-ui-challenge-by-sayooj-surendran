import React from "react";

import { Collapse, Text, User, UserCircle } from "neetoicons";
import { Label, Switch } from "neetoui";
import { Sidebar as NeetoUISidebar } from "neetoui/layouts";

const Sidebar = () => (
  <NeetoUISidebar
    appName="neetoUI"
    navLinks={[
      {
        description: "View Notes",
        icon: Text,
        label: "Notes",
        to: "/",
      },
      {
        description: "View Contacts",
        icon: UserCircle,
        label: "Contacts",
        to: "/contacts",
      },
    ]}
    profileInfo={{
      bottomLinks: [
        {
          icon: Collapse,
          label: "Logout",
          onClick: () => {},
        },
      ],

      customContent: (
        <div className="neeto-ui-border-gray-300 flex items-center justify-center gap-6 border-t py-4">
          <Label>Away</Label>
          <Switch checked />
          <Label>Active</Label>
        </div>
      ),
      email: "kieran.miller@email.com",
      imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
      name: "Kieran Miller",
      topLinks: [
        {
          icon: User,
          label: "Profile",
          onClick: () => {},
        },
      ],
    }}
    onAppSwitcherToggle={() => {}}
  />
);

export default Sidebar;
