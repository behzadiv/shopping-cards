import { useFormik } from "formik";
import Input from "../common/Input";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required(<FontAwesomeIcon icon={faTimes} />)
    .min(6, "Enter at least 6 char"),
  email: Yup.string()
    .email("Invalid Email")
    .required(<FontAwesomeIcon icon={faTimes} />),
  phoneNumber: Yup.string()
    .required(<FontAwesomeIcon icon={faTimes} />)
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  password: Yup.string()
    .required(<FontAwesomeIcon icon={faTimes} />)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string()
    .required(<FontAwesomeIcon icon={faTimes} />)
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const onSubmit = (values, actions) => {
  console.log(values);
  // axios
  //   .post("http://localhost:3003/users/", values)
  //   .then(() =>
  //     {actions.resetForm({
  //       name: "",
  //       email: "",
  //       phoneNumber: "",
  //       password: "",
  //       passwordConfirmation: "",

  //     }
  //     )
  //     toast.success("Your signUp is complete")})
  //   .catch((err) => console.log(err));
};
const Signup = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input name="name" label="Name" formik={formik} />
        <Input
          name="phoneNumber"
          label="PhoneNumber"
          formik={formik}
          type="tel"
        />
        <Input name="email" label="Email" formik={formik} type="email" />
        <Input
          name="password"
          label="Password"
          type="password"
          formik={formik}
        />
        <Input
          name="passwordConfirmation"
          label="Password confirm"
          type="password"
          formik={formik}
        />
        <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
        <Link to="/login">
          <p style={{ marginTop: "10px" }}>Already login?</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
