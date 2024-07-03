import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import './header.css'; // Assuming you have additional CSS styles

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-slate-700 hover:bg-blue-400 p-4 text-white transition duration-1000">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-lg font-ga-maamli-regular cursor-pointer headerName w-full">
          <Link to={"/"}>
            <div className='tooltip'>
              Tasky
              <span className='tooltiptext font-thin'>click to go to Home Page</span>
            </div>
          </Link>
        </div>
        <div className='md:flex items-end justify-between'>
          {user ? (
            <>
              <span className="text-red-950 mr-4 hidden sm:inline">Welcome, {user.username}</span>
              <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
            </>
          ) : (
            <div className='flex items-center'>
              <Link to="/signin" className="p-2 bg-orange-300 mr-3 rounded-lg hover:bg-orange-400">Sign In</Link>
              <Link to="/signup" className="p-2 bg-red-600 rounded-lg hover:bg-red-900">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
