import React, { useRef, useState } from 'react'
import Header from './Header.js'
import validate from '../utils/validate.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase.js';
import { signInWithEmailAndPassword } from "firebase/auth";

import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';

const Login = () => {
  const[isSignInForm , setisSignInForm] = useState(true);
  const[ErrorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();
 
  const Email = useRef(null);
  const Password = useRef(null);
  const name = useRef(null);
  
  const handleButtonClick = () => {
     
    
    const message  = validate(Email.current.value, Password.current.value);
    if(message){
       return;
    }

    if(isSignInForm){
      createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          const {uid,email,displayName} = auth.currentUser;
          dispatch(
            addUser({uid: uid, email: email, displayName: displayName})
          );
         
        }).catch((error) => {
          setErrorMessage(error.message);
        });
        
        console.log(user);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage+" - " +errorCode);
        // ..
      });
    }

    else {
      // Sign In
      signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage+" - " +errorCode);
  });
    
    }

    setErrorMessage(message);

  };

  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm);
    
  };


  return (
    <div>
    <Header />
    <div className=' bg-gradient-to-b from-black absolute w-screen h-screen'>

    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_large.jpg'
    alt='banner' className='w-full ' />

    </div>

    <form 
    onSubmit={(e)=> e.preventDefault()}
    className='p-12 absolute bg-black w-3/12 items-center   mx-auto right-0 left-0 my-36 text-white bg-opacity-80'>
      
      <h1 className='text-3xl pb-5 m-2 font-bold'>{isSignInForm ? "Sign Up" : "Sign In"}</h1>

      {isSignInForm && (
        <input ref={name} type="text" placeholder='Full name' className='p-3 my-5 m-2 w-11/12 bg-gray-600' />
      )}
      
      <input ref={Email} type="text" placeholder='Email Address' className='p-3 my-5 m-2 w-11/12 bg-gray-600' />
      
      
      <input ref= {Password} type="text" placeholder='Password' className='p-3 my-5 m-2 w-11/12 bg-gray-600'/>
      
      <p className='text-pretty text-red-600 font-semibold text-center'>{ErrorMessage}</p>
      
      <button 
      onClick={handleButtonClick}
      className='px-4 py-4 mx-2 my-8 bg-red-600 font-semibold w-11/12 text-center border rounded-lg border-red-600 '>
      {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
      
      <div className='text-center font-semibold'>
      
        <p onClick={toggleSignIn} className='cursor-pointer'> {isSignInForm ? "Already registered ? Sign In now" : "New to Netflix ? Sign Up Now "}</p>
      
      </div>
    
    </form>
    </div>
  );
}

export default Login