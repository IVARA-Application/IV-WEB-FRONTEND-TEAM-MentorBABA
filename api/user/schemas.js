const yup = require("yup");

const newUserRegistrationSchema = new yup.ObjectSchema({
  name: yup.string().trim().min(1).required(),
  occupation: yup
    .string()
    .oneOf(["investor", "student", "founder", "working professional"])
    .required(),
  email: yup.string().email().required(),
  password: yup.string().trim().min(6).required(),
  phone: yup.string().trim().min(10).required(),
});

module.exports = { newUserRegistrationSchema };
