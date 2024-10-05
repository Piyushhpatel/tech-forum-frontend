import React from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 h-[100vh] py-6 space-y-6 ">
      <Header />
      <Posts />
    </div>
  );
};

export default App;
