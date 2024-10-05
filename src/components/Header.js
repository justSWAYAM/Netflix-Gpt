import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { toggleRecommendations} from "../utils/RecommendSlice.js";

import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
// import user from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store =>store.user);

  const handleRecommend = () => {
     dispatch(toggleRecommendations());   
  }

  
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      
      console.log('User signed out!');
    })
    .catch((error) => {
      console.error('/error');
    });
   
    localStorage.removeItem('user');
  };

  
  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;

        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        // ...
        navigate("/browse");
       
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }

    });
    return () => unsubscribe();
    
  },[]);
  return (
    <div className='w-screen overflow-x-clip'>
    <div className=' w-screen absolute px-[95px] py-3 bg-gradient-to-b from-black z-10  flex justify-between '>
      <img 
      className='w-44 h-[4rem]'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo' />
     { user && ( <div className='flex py-3'>
        
         <button className='w-[100px] bg-red-600 rounded-lg text-white mr-5'onClick={handleRecommend}> Recommend </button>
       
        <img
        alt = "usericon"
        className='w-10 h-10 mx-4'
        src={require('../utils/Netflix-avatar.png')}/>
    
      <button className='Signout ml-4 bg-red-600 border border-red-600 px-3 rounded-lg text-white font-semibold'
      onClick={handleSignOut} >Sign Out</button>
    </div>)}
    </div>
    </div>

  )
}

export default Header