import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authSlice';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error); // Assuming error state is in auth slice

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
   
  };

  return (
    <>
      <div className="flex justify-center scroll-my-0">
        <form className="bg-white p-6 rounded shadow-2xl h-fit text-center font-bold capitalize my-28" onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-4">Sign In</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
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
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
