import React, { useState } from "react";

import Logo from "images/Subtract";
import { Text, Group, LeftArrow, RightArrow, Down } from "neetoicons";
import { Avatar, Label, Typography } from "neetoui";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div
      className={`flex flex-col ${
        expanded ? "sidebar-expanded" : "sidebar"
      } ease-in`}
    >
      <div
        className={`mt-2 flex flex-col ${
          expanded ? "mx-3" : "mx-2 items-center"
        }`}
      >
        <img className="logo" src={Logo} />
      </div>
      <div className="mt-5 ">
        <div
          className={
            expanded
              ? "mx-2 flex flex-col justify-evenly"
              : "mx-2 flex flex-col items-center justify-evenly"
          }
        >
          <div className="selected flex flex-row">
            <Text className="m-2" />
            {expanded && <Label className="mx-2">Notes</Label>}
          </div>
          <div className="flex flex-row">
            <Group className="m-2" />
            {expanded && <Label className="mx-2">Contacts</Label>}
          </div>
        </div>
      </div>
      <div className={`mt-auto mb-5 flex flex-col items-center `}>
        <div
          className={`my-3 flex flex-row ${expanded ? "profile-expanded" : ""}`}
        >
          <Avatar
            user={{
              imageUrl: "https://randomuser.me/api/portraits/women/43.jpg",
            }}
          />
          {expanded && (
            <>
              <div className="flex flex-col">
                <Label>Oliver Smith</Label>
                <Typography style="body2">oliver.smith@gmail.com</Typography>
              </div>
              <Down className="ml-auto" />
            </>
          )}
        </div>
        {expanded ? (
          <LeftArrow onClick={toggleExpanded} />
        ) : (
          <RightArrow onClick={toggleExpanded} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
