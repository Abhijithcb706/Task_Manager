import React from 'react';
import '../home/Homepage.css'

const Home = () => {
  return (
    <>
    <div className='homePage h-screen w-screen text-base flex items-center'>
    <div className='bg-transparent  mx-2 rounded-sm w-max text-white'>
      <h1 className='font-bold  text-4xl mb-12'>Welcome to ... <span className='text-8xl text-lime-400  hover:text-rose-900 hover:text-9xl  transition duration-1000 ease-in-out'>TASKY</span> the Task Manager App</h1>
      <p className='text-2xl'>Please <span className='text-orange-500 font-bold capitalize'>signIn</span>  or <span className='text-red-700 font-bold capitalize'>signUp</span> to manage your tasks.</p>
    </div>
    </div>
    </>
  );
};

export default Home;
