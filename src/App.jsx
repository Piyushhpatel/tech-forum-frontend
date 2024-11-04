import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authService from "./services/auth";
import { login, logout } from "./redux/slices/authSlice";
import MainLoader from "./components/Loaders/MainLoader";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const userData = await authService.getUser();
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
        dispatch(logout());
      }
      setLoading(false);
    };

    checkAuthentication();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <MainLoader/>
      ) : (
        <div className="bg-gradient-to-r h-[100vh] from-slate-500 to-slate-800 py-4 space-y-3 ">
          <Header />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default App;
