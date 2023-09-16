import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import "./Login.css";
import { useDispatch } from "react-redux";
import { setLogin } from "../../states";
const loginSchema = yup.object().shape({
  userName: yup.string().required("This Field is required").min(3),
  password: yup.string().required("This Field is required"),
});
const initialValueLogin = {
  userName: "",
  password: "",
};
export default function FormikLogin() {
  const dispatch = useDispatch();
  const login = async (values, onSubmitProps) => {
    const res = await axios.post(`http://localhost:3001/auth/login`, values);
    if (res.status == 200) {
      dispatch(setLogin({ user: res.data.user, token: res.data.token }));
    }
  };
  const handleFormSubmit = async (values, onSubmitProps) => {
    await login(values, onSubmitProps);
  };

  return (
    <Formik
      initialValues={initialValueLogin}
      onSubmit={handleFormSubmit}
      validationSchema={loginSchema}
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
          <input type="submit" className="submit" value={"Login"} />
        </form>
      )}
    </Formik>
  );
}
