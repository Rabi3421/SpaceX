import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SelectSearch from "./SelectSearch";

function Search() {
  return (
    <div className="flex  py-3 px-6 bg-gray-50 border-b space-x-6">
      {/* <form action="" style={{display:"flex", justifyContent:"space-between"}} className="flex justify-between w-full max-w-md"> */}
      <div>

      <div className="relative  flex items-center text-gray-400 focus-within:text-gray-600">
          <select className="w-full pr-10 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2">          
            <option value="">Search by Status</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
          </select>
        </div>
        <div className="relative w-full flex mt-5 items-center text-gray-400 focus-within:text-gray-600">
          {/* <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none"/> */}
          <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
          <input
            type="text"
            name="search"
            placeholder="Search talk"
            autoComplete="off"
            aria-label="Search talk"
            className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          />
        </div>
      </div>
      <div>

        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          {/* <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none"/> */}
          <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
          <input
            type="text"
            name="search"
            placeholder="Search talk"
            autoComplete="off"
            aria-label="Search talk"
            className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          />
        </div>
        <div className="relative flex mt-5 items-center text-gray-400 focus-within:text-gray-600">
          {/* <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none"/> */}
          {/* <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none" /> */}
          <input
            type="submit"
            name="search"
            value="Search"
            placeholder="Search"
            autoComplete="off"
            aria-label="Search talk"
            cursor="pointer"
            className="w-full pr-10 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          />
        </div>
      </div>
      {/* </form> */}
    </div>
  );
}

export default Search;
