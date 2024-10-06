import React from "react"
import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-[1200px] bg-slate-800 rounded-3xl  max-h-[80px] p-4 mx-10 lg:mx-auto">
        <p className="font-bold text-2xl text-slate-100">
            Cracked Nerds
        </p>
        <div className="lg:max-w-[400px] lg:w-full">
            <form className="hidden lg:flex w-full">
                <input
                    type="text" 
                    name="search"
                    placeholder="Search"
                    className="rounded-2xl focus:outline-none outline-none w-full p-1 px-4 rounded-r-none"
                />
                <button type="submit" className="bg-slate-500 p-2 rounded-r-2xl">
                    <BiSearchAlt2 className="h-6 w-6 text-white" />
                </button>
            </form>
            <button className="lg:hidden bg-slate-500 p-2 rounded-xl">
                    <BiSearchAlt2 className="h-6 w-6 text-white" />
              </button>
        </div>
      </div>
    </div>
  )
};

export default Header;
