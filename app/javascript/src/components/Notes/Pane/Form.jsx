import React from "react";

import { Form, Formik } from "formik";
import { Check } from "neetoicons";
import { Pane, Toastr } from "neetoui";
import { Button, Input, Select } from "neetoui/formik";

import {
  NOTES_FORM_INITIAL_VALUES,
  NOTES_FORM_VALIDATION_SCHEMA,
} from "components/Notes/constants";

const CreateForm = ({ setShowPane }) => (
  <Formik
    initialValues={NOTES_FORM_INITIAL_VALUES}
    validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
  >
    <Form>
      <Pane.Body>
        <Input
          required
          className="mt-5 w-full flex-grow-0"
          label="Title"
          name="title"
        />
        <Input
          required
          className="mt-5 w-full flex-grow-0"
          label="Description"
          name="description"
        />
        <Select
          isClearable
          isSearchable
          required
          className="mt-5 w-full flex-grow-0"
          label="Assigned Contact"
          name="assignedContact"
          placeholder="Select Role"
          options={[
            {
              label: "Value one",
              value: "value1",
            },
            {
              label: "Value two",
              value: "value2",
            },
            {
              label: "Value three",
              value: "value3",
            },
            {
              label: "Value four",
              value: "value4",
            },
            {
              label: "Value five",
              value: "value5",
            },
          ]}
        />
        <Select
          isClearable
          isSearchable
          required
          className="mt-5 w-full flex-grow-0"
          label="Tags"
          name="tag"
          placeholder="Select Role"
          options={[
            {
              label: "Value one",
              value: "value1",
            },
            {
              label: "Value two",
              value: "value2",
            },
            {
              label: "Value three",
              value: "value3",
            },
            {
              label: "Value four",
              value: "value4",
            },
            {
              label: "Value five",
              value: "value5",
            },
          ]}
        />
      </Pane.Body>
      <Pane.Footer className="flex items-center space-x-2">
        <Button
          icon={Check}
          label="Save Changes"
          onClick={() => {
            Toastr.success("Note has been added successfully");
            setShowPane(false);
          }}
        />
        <Button
          label="Cancel"
          style="text"
          onClick={() => setShowPane(false)}
        />
      </Pane.Footer>
    </Form>
  </Formik>
);

export default CreateForm;
