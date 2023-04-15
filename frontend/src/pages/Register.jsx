import React from "react";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Create an Account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              className="form-control"
              placeholder="Create Username"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              className="form-control"
              placeholder="Enter Email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              className="form-control"
              placeholder="Create Password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              className="form-control"
              placeholder="Confirm Password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
