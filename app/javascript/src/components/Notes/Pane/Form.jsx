import React, { useState } from "react";

import { Form as FormikForm, Formik } from "formik";
import { Check } from "neetoicons";
import { Pane, Toastr } from "neetoui";
import { Button, Input, Select } from "neetoui/formik";

import {
  NOTES_FORM_CONTACT_DATA,
  NOTES_FORM_INITIAL_VALUES,
  NOTES_FORM_TAG_DATA,
  NOTES_FORM_VALIDATION_SCHEMA,
} from "components/Notes/constants";

const Form = ({ setShowPane }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    Toastr.success("Note has been added successfully");
    setShowPane(false);
  };

  return (
    <Formik
      initialValues={NOTES_FORM_INITIAL_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm>
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
              disabled={isSubmitting}
              icon={Check}
              label="Save Changes"
              loading={isSubmitting}
              type="submit"
              onClick={() => {
                setSubmitted(true);
              }}
            />
            <Button
              disabled={isSubmitting}
              label="Cancel"
              loading={isSubmitting}
              style="text"
              type="reset"
              onClick={() => {}}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
