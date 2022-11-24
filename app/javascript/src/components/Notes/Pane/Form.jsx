import React from "react";

import { Form, Formik } from "formik";
import { Check } from "neetoicons";
import { Pane, Toastr } from "neetoui";
import { Button, Input, Select } from "neetoui/formik";

import {
  NOTES_FORM_CONTACT_DATA,
  NOTES_FORM_INITIAL_VALUES,
  NOTES_FORM_TAG_DATA,
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
          options={NOTES_FORM_CONTACT_DATA}
          placeholder="Select Contact"
        />
        <Select
          isClearable
          isMulti
          isSearchable
          required
          className="mt-5 w-full flex-grow-0"
          label="Tags"
          name="tags"
          options={NOTES_FORM_TAG_DATA}
          placeholder="Select Tag"
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
