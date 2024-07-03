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
      <nav className="container mx-auto flex flex-wrap justify-between items-center sticky">
        <div className="text-lg font-ga-maamli-regular cursor-pointer headerName">
          <Link to={"/"}>
            <div className='tooltip'>
              <h1 className="text-5xl">Tasky</h1>
              <span className='tooltiptext font-thin'>Click to go to Home Page</span>
            </div>
          </Link>
        </div>
        <div className=''>
          {user ? (
            <div className='text-2xl'>
              <span className="text-green-400  font-semibold">Welcome..!</span><span className='font-bold text-amber-300 capitalize'>{user.username} </span>
              <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded text-sm">Logout</button>
            </div>
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
