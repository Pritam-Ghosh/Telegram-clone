import React, { useState } from 'react'
import telegramLogo from '../assets/telegram.png'
import googleLogin from '../assets/google.png'
import { KeyRound } from 'lucide-react'


//firebase import
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

function Login() {
  const navigate = useNavigate();

const [isLoggedIn,setIsLoggedIn] = useState(false)

  const handleGoogleLogin = async () => {
    //firebase login
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Google Login Error:", error);
    }

    navigate('/')
  }
  return (
    <>

      <div className="bg-[#e7eaef] h-[100vh] flex flex-col items-center">
        <div className="bg-[#4f80a1] w-full h-[14rem] relative">
          <div className='flex gap-2 items-center top[80%] absolute top-[40px] left-[230px]'>
            <img src={telegramLogo} alt="" className='w-[30px] h-[30px] ' />
            <p className='text-white font-semibold uppercase'>Telegram</p>
          </div>
        </div>

        <div className='bg-[#ffffff] w-[450px] h-[380px] absolute bottom-[100px] flex flex-col justify-evenly items-center rounded-sm shadow-lg shadow-gray-400/50'>
          <KeyRound size={90} style={{ marginBottom: 40 }} strokeWidth={1.2} color='#4f80a1' className='' />
          <button className=' px-7 py-2 flex items-center justify-between min-w-[230px] h-[43px] rounded-full border-2 border-gray-400' onClick={handleGoogleLogin}>
            <img src={googleLogin} alt="Google Logo" className="w-5 h-5" />
            Sign in with Google</button>
        </div>




      </div>

    </>
  )
}

export default Login