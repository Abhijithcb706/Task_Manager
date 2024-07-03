import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.auth.error); // Assuming error state is in auth slice

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validations
    if (!username) {
      alert('Username is required');
      return;
    }

    if (!email) {
      alert('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      alert('Enter a valid email address');
      return;
    }

    if (!password || password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Dispatch signup action
    await dispatch(signup({ username, email, password }));
    navigate('/signin'); // Redirect after successful signup
  };

  // Simple email validation function
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="flex justify-center scroll-my-0">
      <form className="bg-white p-6 rounded shadow-2xl h-fit text-center font-bold capitalize my-28" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
