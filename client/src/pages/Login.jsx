import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", formData);
      console.log("User logged in successfully:", response.data);
      // Redirect to a success page or handle the login confirmation.
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login errors, e.g., display an error message to the user.
    }
  };

  return (
    <div className="h-screen flex justify-evenly items-center">
      <div className="img m-5">
        <img
          className="rounded-full h-[25rem] mr-5"
          src="https://images-platform.99static.com/aSqqkfNJuQfMzFE8rnsm-w81BNg=/124x124:1116x1116/500x500/top/smart/99designs-contests-attachments/127/127575/attachment_127575228"
          alt=""
        />
      </div>
      <div className="p-4 w-96 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              placeholder="Enter Your Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              placeholder="Enter Your Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
