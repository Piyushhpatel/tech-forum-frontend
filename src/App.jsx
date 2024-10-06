import React from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="bg-gradient-to-r h-[100vh] from-slate-500 to-slate-800 py-4 space-y-3 ">
      <Header />
      <Posts />
    </div>
  );
};

export default App;
