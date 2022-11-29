import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({});
  const [status, setStatus] = useState(false);
  const [timing, setTiming] = useState(false);
  const [type, setType] = useState(false);

  const [newData, setNewData] = useState([]);
  const showData = () => {
    console.log(status);
    if (status === false && type === false && timing === false) {
      axios
        .get("https://api.spacexdata.com/v3/capsules")
        .then((res) => setData(res.data));
    } else {
      if (search.status !== "") {
        //https://api.spacexdata.com/v3/capsules?status=active
        axios
          .get(`https://api.spacexdata.com/v3/capsules?status=${search.status}`)
          .then((res) => setData(res.data));
      } else if (search.date !== "") {
        axios
          .get(
            `https://api.spacexdata.com/v3/capsules?original_launch=${search.date}`
          )
          .then((res) => setData(res.data));
      } else if (search.type !== "") {
        axios
          .get(`https://api.spacexdata.com/v3/capsules?type=${search.type}`)
          .then((res) => setData(res.data));
      }
    }
  };
  // console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setSearch({ ...search, [name]: value });
    if (name == "status") {
      setStatus(false);
      setTiming(true);
      setType(true);
    } else if (name == "date") {
      setStatus(true);
      setTiming(false);
      setType(true);
    }
    if (name == "type") {
      setStatus(true);
      setTiming(true);
      setType(false);
    }
  };

  const handleSearch = () => {
    showData();
  };
  useEffect(() => {
    showData();
  }, [status, timing, type]);

  return (
    <>
      <div className="flex  py-3 px-6 bg-gray-50 border-b space-x-6">
        <div>
          <div className="relative  flex items-center text-gray-400 focus-within:text-gray-600">
            <select
              onChange={handleChange}
              name="status"
              disabled={status}
              className="w-full pr-10 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            >
              <option value="">Search by Status</option>
              <option value="active">active</option>
              <option value="destroyed">destroyed</option>
              <option value="unknown">unknown</option>
              <option value="retired">retired</option>
            </select>
          </div>
          <div className="relative w-full flex mt-5 items-center text-gray-400 focus-within:text-gray-600">
            <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
            <input
              onChange={handleChange}
              disabled={type}
              type="text"
              name="type"
              placeholder="Search by type"
              autoComplete="off"
              aria-label="Search talk"
              className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
          </div>
        </div>
        <div>
          <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
            <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
            <input
              onChange={handleChange}
              disabled={timing}
              type="date"
              name="date"
              placeholder="Search by original_launch"
              autoComplete="off"
              aria-label="Search talk"
              className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
          </div>
          <div className="relative flex mt-5 items-center text-gray-400 focus-within:text-gray-600">
            <input
              onClick={handleSearch}
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
      </div>
      <div
        className="grid grid-cols-2 gap-1 border-2"
        style={{ width: "100vw" }}
      >
        {data &&
          data.map((e) => (
            <div>
              <Card key={e.capsule_serial} e={e} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Search;
