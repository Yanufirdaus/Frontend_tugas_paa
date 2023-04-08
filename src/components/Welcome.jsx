import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <center><h2 className="subtitle">
        Welcome Back <strong>{user && user.name}</strong>
      </h2></center>
    </div>
  );
};

export default Welcome;
