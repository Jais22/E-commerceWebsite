import React from 'react'
import { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import shop from "../../assets/shop.jpeg"
import toast from 'react-hot-toast'
import{ signInWithEmailAndPassword} from"firebase/auth"
import { auth } from '../../firebase/FireBaseAuth'



const Login = () => {
  const NavigateHome= useNavigate();
  const [UserSignUp,SetUserSignUp]= useState({email:"",password:""})
  const handleChange=(e)=>{
    SetUserSignUp({...UserSignUp,[e.target.name]:e.target.value})
  //  console.log(UserSignUp);
  }

   const handleSubmit=(e)=>{
    e.preventDefault();
    if(! UserSignUp.email || !UserSignUp.password)
    {
      return toast.error("All Field are required");
    }
    else{
      signInWithEmailAndPassword(auth,UserSignUp.email,UserSignUp.password)
      .then(async(res)=>
      { 
        NavigateHome("/");
      })
      
      
      .catch((err)=>toast.error(err.message))
    }


  };
  return (
    <>
        <div>
            <div className='relative'>
                <img src={shop} alt='no' className='w-full object-cover object-center h-[500px]'/>
            
            <div className='w-full h-[500px] bg-black absolute top-0 left-0 opacity-[.4] '></div>
            <h2 className='absolute top-[60%] left-[10%] text-white font-semibold text-3xl md:text-5xl '>Login</h2>
            
            </div>


            <div className="container px-5 py-14 mx-auto flex">
    <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-8 md:mt-0 shadow-md text-white w-[500px]">
      <h2 className="text-white text-4xl mb-1 font-medium title-font">Login</h2>
           <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm">Email</label>
        <input type="email" 
        id="email"
         name="email" 
         value={UserSignUp.email}
         onChange={handleChange}
         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
     
      </div>
      <div className="relative mb-4">
        <label for="password" className="leading-7 text-sm">Password</label>
        <input type="password" 
        id="password" 
        name="password"
         value={UserSignUp.password}
         onChange={handleChange}
         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
     
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      onClick={handleSubmit}>Login</button>
      <p className="text-xs text-white mt-5">Don't have Account?
      <Link to='/signup'>
      <button className='cursor-pointer hover:text-blue-300'>Sign Up</button>
      </Link>
      
      </p>
    </div>
  </div>
        </div>
    </>
  )
}

export default Login