const yup = require("yup");

const NewCustomUserSchema = new yup.ObjectSchema({
  name: yup.string().trim().min(1).required(),
  email: yup.string().email().trim().required(),
  password: yup.string().trim().min(6).required(),
  occupation: yup.string().trim().min(1).required(),
  phone: yup.string().trim().min(1).required(),
});
