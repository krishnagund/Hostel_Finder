import "./Login.css";
import { useEffect, useState } from "react";
import { Formik, validateYupSchema } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../states";
import { useLocation, useNavigate } from "react-router-dom";
import FormikLogin from "./_Login";
import FormikRegister from "./_Register";
const loginSchema = yup.object().shape({
  userName: yup.string().required("This Field is required").min(3),
  password: yup.string().required("This Field is required"),
});
const registerSchema = yup.object().shape({
  userName: yup.string().required("This Field is required").min(3),
  firstName: yup.string().required("This Field is Required"),
  lastName: yup.string().required("This Field is Required"),
  email: yup.string().email("Invalid Email").required("This Field is required"),
  password: yup.string().required("This Field is required"),
});
const initialValueLogin = {
  userName: "",
  password: "",
};
const initalValueRegister = {
  userName: "",
  firstName: "",
  lastName: "",
  password: "",
  email: "",
};
export default function Login() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);
  const [pageType, setPageType] = useState(() =>
    location === "/login" ? "login" : "register",
  );
  const handleFormSubmit = async (values, onSubmitProps) => {
    pageType === "login"
      ? await login(values, onSubmitProps)
      : await register(values, onSubmitProps);
  };
  const login = async (values, onSubmitProps) => {
    const res = await axios.post("http://localhost:3001/auth/login", values);
    console.log(values);
    if (res.status == 200) {
      dispatch(setLogin({ user: res.data.user, token: res.data.token }));
    }
  };
  const register = async (values, onSubmitProps) => {
    const res = await axios.post("http://localhost:3001/auth/register", values);
    setPageType("login");
    console.log(res);
  };
  useEffect(() => {
    console.log(pageType);
  }, [pageType]);
  return (
    <div className="container">
      <div className="left">
        <div className="inner">
          <h1 className="heading">Hostel Finder.</h1>
          <p className="sub-text">
            Welcome.. you are just few seconds away to explore
          </p>
        </div>
      </div>
      <div className="right">
        <div>
          <h1 className="heading">
            {pageType === "login" ? "Login" : "SignUp"}
          </h1>
          {pageType === "login" ? (
            <p className="sub-text">
              Don't have an account?
              <span
                onClick={() => setPageType("register")}
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                Create Your Account
              </span>
              it takes less than a minute
            </p>
          ) : (
            <p className="sub-text">
              Already have an account? Login
              <span
                onClick={() => setPageType("login")}
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                Click here to Login
              </span>
            </p>
          )}
        </div>

        {pageType === "login" ? (
          <FormikLogin />
        ) : (
          <FormikRegister setPageType={setPageType} />
        )}
      </div>
    </div>
  );
}
