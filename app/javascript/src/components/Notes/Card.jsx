import React, { useState } from "react";

import { Clock } from "neetoicons";
import {
  Label,
  Typography,
  Tag,
  Avatar,
  Tooltip,
  Alert,
  Toastr,
} from "neetoui";
import { getRelativeTimeFromNow, getDayAndTimeFromDate } from "utils";

import Dropdown from "components/Common/Dropdown";

const Card = ({ title, description, type, createdAt }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <div className="my-2 flex w-full flex-col border-2 p-3 shadow-md">
      <div className="flex flex-row">
        <Label>{title}</Label>
        <Dropdown setShowDeleteAlert={setShowDeleteAlert} />
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
      <Alert
        isOpen={showDeleteAlert}
        message="Are you sure you want to delete the note? This action cannot be undone."
        title="Delete Note"
        onClose={() => setShowDeleteAlert(false)}
        onSubmit={() => {
          Toastr.success("Note was deleted successfully");
          setShowDeleteAlert(false);
        }}
      />
    </div>
  );
};

export default Card;
