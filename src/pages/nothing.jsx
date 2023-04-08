import React, { useEffect } from "react";
import Layout from "./Layout";
import Register from "../components/Register";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isError, user } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    // if (user && user.role !== "admin") {
    //   navigate("/dashboard");
    // }
  }, [isError, navigate]);
  return (
    <body className="has-background-info">
    <Layout>
      <Register />
    </Layout>
    </body>
  );
};

export default Register;
