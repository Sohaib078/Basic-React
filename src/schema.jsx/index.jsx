import * as Yup from "Yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(20).required("Please Enter Your name"),
  email: Yup.string().email().required("Please Enter your Email"),
  number: Yup.string()
    .min(7)
    .max(15)
    .required("Please Enter Your Phone Number"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
});
