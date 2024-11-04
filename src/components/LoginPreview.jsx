import React from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const LoginPreview = ({setShowForm}) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 bg-white max-w-[300px] w-full rounded-lg p-6">
      <div onClick={() => setShowForm(false)} className="absolute top-2 cursor-pointer rounded-full p-1 right-2 bg-slate-400">
        <RxCross2 className="text-white text-xl" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center text-slate-700">Cracked Nerds</h1>
        <IoIosChatbubbles className="text-4xl text-slate-600"/>
        <p className="text-md text-light text-slate-500s">Login or Signup to continue</p>
      </div>
      <div className="flex w-full justify-between max-w-[80%]">
        <Link to="/login" className="bg-slate-500 text-white py-2 px-4 rounded-xl">
          Login
        </Link>
        <Link to="/signup" className="bg-slate-500 text-white py-2 px-4 rounded-xl">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginPreview;
