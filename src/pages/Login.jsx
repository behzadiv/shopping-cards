import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Please Enter Your Email"),
  password: Yup.string().required("Please Enter Your Password"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input name="email" type="email" formik={formik} label="Email" />
        <Input
          name="password"
          type="password"
          formik={formik}
          label="Password"
        />
        <button type="submit" disabled={!formik.isValid}>
          Login
        </button>
        <Link to="/signup">
          <p style={{ marginTop: "10px" }}>Not signup yet?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
