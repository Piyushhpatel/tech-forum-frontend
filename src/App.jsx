import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gradient-to-r h-[100vh] from-slate-500 to-slate-800 py-4 space-y-3 ">
      <Header />
      <Outlet/>
    </div>
  );
};

export default App;
