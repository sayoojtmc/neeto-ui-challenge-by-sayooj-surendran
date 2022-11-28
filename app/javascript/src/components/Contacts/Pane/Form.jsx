import React, { useState } from "react";

import { Form as FormikForm, Formik } from "formik";
import { Check } from "neetoicons";
import { Pane, Toastr } from "neetoui";
import { Button, Input, Select } from "neetoui/formik";

import {
  CONTACT_FORM_INITIAL_VALUES,
  CONTACT_FORM_ROLE_DATA,
  CONTACT_FORM_VALIDATION_SCHEMA,
} from "components/Contacts/constants";

const Form = ({ setShowPane }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    Toastr.success("Contact added successfully");
    setShowPane(false);
  };

  return (
    <Formik
      initialValues={CONTACT_FORM_INITIAL_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <Pane.Body>
            <div className="flex flex-row">
              <Input
                required
                className="mt-5 mr-5 flex-grow-0"
                label="First Name"
                name="firstName"
              />
              <Input
                required
                className="mt-5 flex-grow-0"
                label="Last Name"
                name="lastName"
              />
            </div>
            <Input
              required
              className="mt-5 w-full flex-grow-0"
              label="Email Address"
              name="email"
            />
            <Select
              isClearable
              isSearchable
              required
              className="mt-5 w-full flex-grow-0"
              label="Role"
              name="role"
              options={CONTACT_FORM_ROLE_DATA}
              placeholder="Select Role"
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
