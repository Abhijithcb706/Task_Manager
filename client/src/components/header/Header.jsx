import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold">Task Manager</Link>
        <div>
          {user ? (
            <>
              <span className="mr-4">Welcome, {user.username}</span>
              <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/signin" className="mr-4">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
