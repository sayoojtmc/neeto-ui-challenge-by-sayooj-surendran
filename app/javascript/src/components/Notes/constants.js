import * as yup from "yup";

const NOTES = [
  {
    id: 1,
    title: "Note 1",
    type: "Created",
    createdAt: "2022-11-22",
    description:
      "One of the most tragic things I know about human nature is that all of us tend to put off living. We are all dreaming of some magical rose garden over the horizon instead of enjoying the roses that are blooming outside our windows today.",
  },
  {
    id: 2,
    title: "Note 2",
    type: "Drafted",
    createdAt: "2022-11-21",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni",
  },
];

const NOTES_FORM_INITIAL_VALUES = {
  title: "",
  description: "",
};

const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup.object().required("Assigned Contact is required"),
  tag: yup.object().required("Tag is required"),
});

const NOTES_FORM_TAG_DATA = [
  {
    label: "Sales",
    value: "sales",
  },
  {
    label: "Finance",
    value: "finance",
  },
  {
    label: "User Experience",
    value: "ux",
  },
];

const NOTES_FORM_CONTACT_DATA = [
  {
    label: "Ronal Richards",
    value: "id_1",
  },
  {
    label: "Jacob Jones",
    value: "id_2",
  },
];
export {
  NOTES,
  NOTES_FORM_INITIAL_VALUES,
  NOTES_FORM_TAG_DATA,
  NOTES_FORM_VALIDATION_SCHEMA,
  NOTES_FORM_CONTACT_DATA,
};
