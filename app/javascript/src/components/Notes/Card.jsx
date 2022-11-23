import React from "react";

import { Clock } from "neetoicons";
import { Label, Typography, Tag, Avatar, Tooltip } from "neetoui";

import NoteDropDown from "components/Notes/NoteDropDown";
import {
  calculateCreatedAgo,
  getDateObject,
  getDayFromDate,
} from "utils/index";

const Card = ({ title, description, type }) => {
  const date = getDateObject("2022-11-22");
  const createdAgo = calculateCreatedAgo(date);
  const day = getDayFromDate(date);

  return (
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
          <Tooltip content={day} position="bottom">
            <Typography className="p-2" style="body3">
              {`${type} ${createdAgo} `}
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
};

export default Card;
