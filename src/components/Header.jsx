import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <div className="flex justify-between max-w-[1200px] bg-slate-800 rounded-3xl  max-h-[80px] p-4 mx-10 lg:mx-auto">
        <div>
          <Link to="/">
            <p className="font-bold text-2xl select-none text-slate-100">
              Cracked Nerds
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-slate-500 p-2 rounded-xl">
            <BiSearchAlt2 className="h-6 w-6 text-white" />
          </button>
          {!isAuthenticated && <Link
            to="/login"
            className="bg-white px-4 py-2 text-lg font-semibold rounded-xl hover:scale-90 transition-all duration-300"
          >
            Login
          </Link>}
          {!isAuthenticated && <Link
            to="/signup"
            className="bg-white px-4 py-2 text-lg font-semibold rounded-xl hover:scale-90 transition-all duration-300"
          >
            SignUp
          </Link>}
          {isAuthenticated && <button
            onClick={() => {}}
            className="bg-white px-4 py-2 text-lg font-semibold rounded-xl hover:scale-90 transition-all duration-300"
          >
            Logout
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Header;
