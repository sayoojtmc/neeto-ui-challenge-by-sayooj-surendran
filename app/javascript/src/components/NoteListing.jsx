import React from "react";

import { HamburgerMenu, Plus } from "neetoicons";
import { Typography, Input, Button } from "neetoui";

import Card from "components/Card";

import { NOTES_LIST } from "./constants";
import SidePanel from "./SidePanel";

const NoteListing = () => (
  <div className="flex flex-row">
    <SidePanel title="Notes" />
    <div className="flex flex-col">
      <div className="mt-5">
        <div className="flex flex-row">
          <HamburgerMenu className="mx-2 mt-1" />
          <Typography style="h2">All Notes</Typography>
          <div className="ml-auto flex  flex-row">
            <Input
              className="mx-5"
              placeholder="Search Name, Email, Phone Number, Etc."
              type="search"
            />
            <Button
              className="bg-black"
              icon={Plus}
              iconPosition="right"
              label="Add note"
            />
          </div>
        </div>
      </div>
      <div className="mx-2 mt-5 flex flex-col">
        {NOTES_LIST.map(card => (
          <Card
            description={card.description}
            key={card.id}
            title={card.title}
          />
        ))}
      </div>
    </div>
  </div>
);

export default NoteListing;
