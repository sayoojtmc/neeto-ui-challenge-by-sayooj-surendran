import * as yup from "yup";

const CONTACTS = [
  {
    id: 1,
    name: "Jacob Johns",
    email: "albert@borer.com",
    created_at: "Feb 5,2021",
  },
  {
    id: 2,
    name: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb 5,2021",
  },
  {
    id: 3,
    name: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb 5,2021",
  },
  {
    id: 4,
    name: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb 5,2021",
  },
  {
    id: 5,
    name: "Jacob Johns",
    email: "albert@borer.com",
    created_at: "Feb 5,2021",
  },
  {
    id: 6,
    name: "Jacob Johns",
    email: "albert@borer.com",
    created_at: "Feb 5,2021",
  },
  {
    id: 7,
    name: "Jacob Johns",
    email: "albert@borer.com",
    created_at: "Feb 5,2021",
  },
];

const CONTACT_FORM_ROLE_DATA = [
  {
    label: "Software Engineer",
    value: "software-engineer",
  },
  {
    label: "QA Engineer",
    value: "qa-engineer",
  },
  {
    label: "HR",
    value: "hr",
  },
  {
    label: "Product Designer",
    value: "product-designer",
  },
];

const CONTACT_FORM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Email is in invalid format")
    .required("Email is required"),
  role: yup
    .object()
    .required("Role is required")
    .nullable()
    .shape({
      label: yup.string().oneOf(
        CONTACT_FORM_ROLE_DATA.map(roleObject => roleObject.label),
        "Selected choice is invalid"
      ),
      value: yup.string().oneOf(
        CONTACT_FORM_ROLE_DATA.map(roleObject => roleObject.value),
        "Selected choice is invalid"
      ),
    }),
});
export {
  CONTACTS,
  CONTACT_FORM_ROLE_DATA,
  CONTACT_FORM_INITIAL_VALUES,
  CONTACT_FORM_VALIDATION_SCHEMA,
};
