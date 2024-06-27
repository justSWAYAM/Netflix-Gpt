import React, { useState } from 'react'
import Header from './Header.js'

const Login = () => {
  const[isSignInForm , setisSignInForm] = useState(true);

  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm)
  };

  return (
    <div>
    <Header />
    <div className=' bg-gradient-to-b from-black absolute'>

    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_large.jpg'
    alt='banner' />

    </div>

    <form className='p-12 absolute bg-black w-3/12 items-center   mx-auto right-0 left-0 my-36 text-white bg-opacity-80'>
      
      <h1 className='text-3xl pb-5 m-2 font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

      {isSignInForm && (
        <input type="text" placeholder='Full name' className='p-3 my-5 m-2 w-11/12 bg-gray-600' />
      )}
      
      <input type="text" placeholder='Email Address' className='p-3 my-5 m-2 w-11/12 bg-gray-600' />
      
      <input type="text" placeholder='Password' className='p-3 my-5 m-2 w-11/12 bg-gray-600'/>
      
      <button className='px-4 py-4 mx-2 my-8 bg-red-600 font-semibold w-11/12 text-center'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
      
      <div className='text-center font-semibold'>
      
        <p onClick={toggleSignIn} className='cursor-pointer'> {isSignInForm ? "New to Netflix ? Sign Up Now " : "Already registered ? Sign In now"}</p>
      
      </div>
    
    </form>
    </div>
  );
}

export default Login