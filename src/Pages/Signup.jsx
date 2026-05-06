import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ validation
  const validate = () => {
    let newError = {};

    if (!form.name.trim()) {
      newError.name = "Name is required";
    }

    if (!form.email) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newError.email = "Invalid email format";
    }

    if (!form.password) {
      newError.password = "Password is required";
    } else if (form.password.length < 6) {
      newError.password = "Password must be at least 6 characters";
    }

    return newError;
  };

  // ✅ submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Signup successful 🎉");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-400">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}

          {/* Button */}
          <button className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Sign Up
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <NavLink to="/login">
            <span className="text-blue-600 cursor-pointer hover:underline">
              Login
            </span>
          </NavLink>
        </p>

      </div>
    </div>
  );
};

export default Signup;
