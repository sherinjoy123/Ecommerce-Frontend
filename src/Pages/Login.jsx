import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newError = {};

    if (!form.email) {
      newError.email = "Email Required";
    }

    if (!form.password) {
      newError.password = "Password Required";
    }

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = validate();
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      alert("Login successfully");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 ">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}

          <button className="bg-black text-white py-2 rounded-lg">
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-6"> Don’t have an account?{" "}  <NavLink to={"/signup"}>  <span className="text-blue-600 cursor-pointer hover:underline"> Sign up </span></NavLink> </p>
      </div>
    </div>
  );
};

export default Login;
