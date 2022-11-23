import React from "react";

import { Clock } from "neetoicons";
import { Label, Typography, Tag, Avatar, Tooltip } from "neetoui";
import { getRelativeTimeFromNow, getDayAndTimeFromDate } from "utils";

import NoteDropDown from "components/Notes/NoteDropDown";

const Card = ({ title, description, type, createdAt }) => (
  <div className="my-2 flex flex-col border-2 p-3 shadow-md">
    <div className="flex flex-row">
      <Label>{title}</Label>
      <NoteDropDown />
    </div>
    <Typography style="body3">{description}</Typography>
    <hr className="my-2" />
    <div className="flex flex-row">
      <Tag label="Getting started" style="secondary" type="solid" />
      <div className="ml-auto flex flex-row">
        <Clock className="mt-1.5 flex p-1.5" />
        <Tooltip content={getDayAndTimeFromDate(createdAt)} position="bottom">
          <Typography className="p-2" style="body3">
            {`${type} ${getRelativeTimeFromNow(createdAt)} `}
          </Typography>
        </Tooltip>
      </div>
      <Avatar
        user={{
          imageUrl: "https://randomuser.me/api/portraits/women/43.jpg",
        }}
      />
    </div>
  </div>
);

export default Card;
