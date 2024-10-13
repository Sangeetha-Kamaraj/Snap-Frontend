import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Feed, PinDetail, CreatePin, Search } from "../components/index";

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Initialize as true

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data
      setLoading(true);
      // Fetch your data here, then:
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar search={searchTerm} setSearchTerm={setSearchTerm} user={user} />
      </div>
      <div className='h-full'>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <p>Loading...</p>
          </div>
        ) : (
          <Routes>
            <Route path='/' element={<Feed searchTerm={searchTerm} />} />
            <Route path='/category/:categoryId' element={<Feed searchTerm={searchTerm} />} />
            <Route path='/pin-detail/:pinId' element={<PinDetail user={user} />} />
            <Route path='/create-pin' element={<CreatePin user={user} />} />
            <Route path='/search' element={<Search searchTerm={searchTerm} />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default Pins;
