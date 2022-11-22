import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Label, Typography, Tag, Avatar, Tooltip } from "neetoui";

const Card = ({ title, description }) => (
  <div className="card flex flex-col border-2 p-3">
    <div className="flex flex-row">
      <Label>{title}</Label>
      <MenuVertical className="ml-auto p-1" />
    </div>
    <Typography style="body3">{description}</Typography>
    <hr className="my-2" />
    <div className="flex flex-row">
      <Tag label="Getting started" style="secondary" type="solid" />
      <Clock className="ml-auto mt-1 p-1" />
      <Tooltip content="Wednesday" position="bottom">
        <Typography className="p-2" style="body3">
          Created 2 hours ago
        </Typography>
      </Tooltip>
      <Avatar
        user={{
          imageUrl: "https://randomuser.me/api/portraits/women/43.jpg",
        }}
      />
    </div>
  </div>
);

export default Card;
