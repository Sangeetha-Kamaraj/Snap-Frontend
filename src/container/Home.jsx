import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import { getToken } from "../auth/auth";
import axios from "axios";

import Sidebar from "../components/Sidebar"; 
import UserProfile from "../components/UserProfile"// Correct import
import { logo } from "../assets";
import Pins from "../container/Pins";

const Home = () => {
  const [user, setUser] = useState(null);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = getToken();
        const config = { headers: { Authorization: token } };
        const res = await axios.get("http://localhost:3100/api/v1/user/user", config);
        setUser(res.data.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchUserData();
    scrollRef.current?.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>; // Loading state
  }

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar user={user} />
      </div>
      <div className='flex md:hidden flex-row'>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
          <HiMenu
            fontSize={40}
            className='cursor-pointer'
            onClick={() => setToggleSidebar(true)}
          />
          <Link to='/'>
            <img src={logo} alt='logo' className='w-28' />
          </Link>
          <Link to={`/user-profile/${user?._id}`}>
            <img src={user?.profilePic} alt='user profile' className='w-28' />
          </Link>
        </div>
        {toggleSidebar && (
          <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
            <div className='absolute w-full flex justify-end items-center p-2'>
              <AiFillCloseCircle
                fontSize={30}
                className='cursor-pointer'
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar user={user} closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
        <Routes>
          <Route path='/user-profile/:userId' element={<UserProfile />} />
          <Route path='/*' element={<Pins user={user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
