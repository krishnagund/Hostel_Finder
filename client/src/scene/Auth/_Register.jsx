import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const registerSchema = yup.object().shape({
  userName: yup.string().required("This Field is required").min(3),
  firstName: yup.string().required("This Field is Required"),
  lastName: yup.string().required("This Field is Required"),
  email: yup.string().email("Invalid Email").required("This Field is required"),
  password: yup.string().required("This Field is required"),
});

const initalValueRegister = {
  userName: "",
  firstName: "",
  lastName: "",
  password: "",
  email: "",
};

export default function FormikRegister({ setPageType }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const register = async (values, onSubmitProps) => {
    const res = await axios.post("http://localhost:3001/auth/register", values);
    setStatus(res.status);
    if (status == 201) {
      setPageType("login");
    }
  };
  const handleFormSubmit = async (values, onSubmitProps) => {
    await register(values, onSubmitProps);
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      validationSchema={registerSchema}
      initialValues={initalValueRegister}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              className={
                Boolean(errors.firstName) && Boolean(touched.firstName)
                  ? "error"
                  : undefined
              }
            />
            <p className="errorText">
              {Boolean(errors.firstName) ? errors.firstName : ""}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              className={
                Boolean(errors.lastName) && Boolean(touched.lastName)
                  ? "error"
                  : undefined
              }
            />
            <p className="errorText">
              {Boolean(errors.lastName) ? errors.lastName : ""}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="UserName"
              name="userName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.userName}
              className={
                Boolean(errors.userName) && Boolean(touched.userName)
                  ? "error"
                  : undefined
              }
            />
            <p className="errorText">
              {Boolean(errors.userName) ? errors.userName : ""}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              className={
                Boolean(errors.email) && Boolean(touched.email)
                  ? "error"
                  : undefined
              }
            />
            <p className="errorText">
              {Boolean(errors.email) ? errors.email : ""}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={
                Boolean(errors.password) && Boolean(touched.password)
                  ? "error"
                  : undefined
              }
            />
            <p className="errorText">
              {Boolean(errors.password) ? errors.password : ""}
            </p>
          </div>
          <input type="submit" className="submit" value={"Register"} />
          <p className="status">
            {status == 201
              ? "Register Successful"
              : status == 403
              ? "User Already Exist"
              : status == 500
              ? "Server Error"
              : null}
          </p>
        </form>
      )}
    </Formik>
  );
}
