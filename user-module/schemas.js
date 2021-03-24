const yup = require("yup");

const NewCustomUserSchema = new yup.ObjectSchema({
  name: yup.string().trim().min(1).required(),
  email: yup.string().email().trim().required(),
  password: yup.string().trim().min(6).required(),
  occupation: yup.string().trim().min(1).required(),
  phone: yup.string().trim().min(1).required(),
  type: yup
    .string()
    .trim()
    .oneOf(["custom", "linkedin", "google", "facebook"])
    .required(),
});

const UserLoginSchema = new yup.ObjectSchema({
  email: yup.string().email().trim().required(),
  password: yup.string().trim().required(),
});

const LinkedInUserSchema = new yup.ObjectSchema({
  name: yup.string().trim().min(1).required(),
  id: yup.string().trim().min(1).required(),
  type: yup
    .string()
    .trim()
    .oneOf(["custom", "linkedin", "google", "facebook"])
    .required(),
});

module.exports = {
  NewCustomUserSchema: NewCustomUserSchema,
  UserLoginSchema: UserLoginSchema,
  LinkedInUserSchema: LinkedInUserSchema,
};
