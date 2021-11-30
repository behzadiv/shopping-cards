import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuthActions } from "../provider/AuthProvider";
import { useQuery } from "../hooks/useQuery";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Please Enter Your Email"),
  password: Yup.string().required("Please Enter Your Password"),
});

const Login = () => {
  const navigate = useNavigate()
  const query = useQuery()
  const redirect = query.get("redirect") || "/"
  
  const setAuth = useAuthActions()
  const[error,setError]=useState(null)
  const onSubmit =async (values) => {
    await axios.post("http://localhost:5000/api/user/login",values)
    .then((response)=>{
      setError(null)
      console.log(response.data);
      setAuth(response.data)
     // localStorage.setItem("authState",JSON.stringify(response.data))
     console.log(redirect); 
     navigate(redirect)
    })
    .catch((error)=>{
      console.log(error.response.data)
      if(error.response && error.response.data.message){
        setError(error.response.data.message)
      }
    })
  };
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
        <button type="submit" disabled={!formik.isValid} className="formBtn">
          Login
        </button>
        {error && <p style={{color:"red" , marginTop:"10px"}}>{error}</p>}
        <Link to={`/signup?redirect=${redirect}`}>
          <p style={{ marginTop: "10px" }}>Not signup yet?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
