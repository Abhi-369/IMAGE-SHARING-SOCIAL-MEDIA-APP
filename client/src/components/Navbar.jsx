import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { BsPlusLg } from 'react-icons/bs';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  console.log("userp[rofile", user)

  if (user) {
    return (
      <div className="flex gap-2 md:gap-5 w-full items-center py-4">
        <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
            onFocus={() => navigate('/search')}
            className="p-2 w-full bg-white outline-none"
          />
        </div>
        <div className="flex gap-3">
          <Link to={`user-profile/${user?._id}`} className="hidden md:block">
            <img src={user?.image} onError={(ev) => ev.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} alt="user-pic" className="w-12 h-10 rounded-lg " />
          </Link>
          <Link to="/create-pin" className="bg-gray-200 text-black rounded-lg w-10 h-10 md:w-12 md:h-10 flex justify-center items-center">
            <BsPlusLg />
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default Navbar;
