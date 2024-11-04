import React, { useState } from "react";
import authService from "../../services/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from "../../redux/slices/authSlice";

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const res = await authService.loginUser(formData);
        if(res) {
            const user = await authService.getUser();
            if(user) {
                dispatch(login(user));
                navigate("/");
            }
        }
    } catch (error) {
        console.log("Error in login", error.message);
    }
    setLoading(false);
    setFormData({
        email: "",
        password: "",
    })
  };

  return (
    <div className="bg-slate-200 max-h-[80vh] h-screen flex justify-center items-center max-w-[1200px] mx-10 lg:mx-auto p-4 rounded-xl">
      <div className="flex flex-col border border-slate-400 rounded-xl p-6 max-w-[400px] w-full m-2 shadow-lg items-center gap-4">
        <div>
          <h1 className="text-3xl text-slate-700 font-bold text-center mb-4">
            Login
          </h1>
          <img src="/login.png" alt="login" className="h-[100px] select-none" />
        </div>
        <form onSubmit={submitHandler} className="flex flex-col items-center gap-4 w-full">
          <label className="flex flex-col w-full gap-2">
            <p className="text-lg font-semibolds text-slate-600">Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="p-2 rounded-lg border border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
              required
            />
          </label>
          <label className="flex flex-col w-full gap-2">
            <p className="text-lg font-semibolds text-slate-600">Password</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
              className="p-2 rounded-lg border border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-slate-700 text-white px-10 py-1 font-semibold rounded-xl"
          >
            {loading ? "Loging..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
