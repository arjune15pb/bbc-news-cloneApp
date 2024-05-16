import React from 'react'
import front from '../images/front.jpg'
import logo from '../images/logo.png'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import {auth, googleAuthProvider} from "../firebase/setup"
import {useNavigate} from 'react-router-dom'

function Signin(){

    const navigate= useNavigate()

    const googleSignin=async()=>{

        try{
            await signInWithPopup(auth, googleAuthProvider);
            auth.currentUser && navigate('/')

        }catch(err){
            console.error(err)
        }
       


    }
    return (
      <div className="grid grid-cols-2 bg-black h-screen">
        <div className='text-center'>
          <img src={logo} className="h-14 ml-60 mt-32" />
          <h1 className="text-white text-3xl font-semi-bold mt-7">Sign in</h1>
          <button onClick={googleSignin} class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-14 w-96 mt-14">
            Sign in
          </button>
          <h2 className='text-blue-500 underline mt-7'>Sign in now</h2>
        </div>
        <div>
          <img src={front} className="h-screen" />
        </div>
      </div>
    )
}

export default Signin