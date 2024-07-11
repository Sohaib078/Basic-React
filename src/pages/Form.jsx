import { useFormik } from "formik";
import { signUpSchema } from "../schema.jsx";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    number: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div className="py-32">
      <div className=" w-[80%] lg:w-[40%] bg-gray-400 rounded-lg shadow-2xl mx-auto  border-black border">
        <div className=" text-2xl font-semibold ">
          <h1>Form Handling</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[80%] py-8 mx-auto gap-4"
        >
          <input
            type="text"
            id="name"
            name="name"
            className="outline-none p-2  rounded-md bottom-0"
            placeholder=" Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? <p>{errors.name}</p> : null}

          <input
            type="email"
            id="email"
            name="email"
            className="outline-none p-2  rounded-md bottom-0"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
          <input
            type="number"
            id="phone_number"
            name="number"
            className="outline-none p-2  rounded-md  bottom-0"
            placeholder="Phone Number"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.number && touched.number ? <p>{errors.number}</p> : null}
          <input
            type="password"
            id="password"
            name="password"
            className="outline-none p-2  rounded-md  bottom-0"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p>{errors.password}</p>
          ) : null}
          <div className="flex gap-16">
            <button
              type="submit"
              className="w-full px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 "
            >
              Submit
            </button>
            <button
              type="reset"
              className="w-full px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 "
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
