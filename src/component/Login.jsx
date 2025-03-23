import React, { useState } from 'react'
import telegramLogo from '../assets/telegram.png'
import googleLogin from '../assets/google.png'
import { KeyRound } from 'lucide-react'

//react router DOM
import { useNavigate } from 'react-router-dom'

//firebase import
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db, doc, setDoc } from "../../firebase"; // Import Firestore functions

//------------------------------------------------------------



function Login({ setIsLoggedIn }) {
  const navigate = useNavigate()

const createUser = async (userData) => {
  //extract user data
  const userObj = userData.user;
  const id = userObj.uid;
  const photoURL = userObj.photoURL;
  const name = userObj.displayName;
  const email = userObj.email;

  console.log("id: ", id);
  console.log("photoURL: ", photoURL);
  console.log("name: ", name);
  console.log("email: ", email);

  //pushing user data to firestore
  await setDoc(doc(db, "users", userObj.uid), {
    uid: userObj.uid,
    displayName: userObj.displayName,
    email: userObj.email,
    photoURL: userObj.photoURL,
    // Add any other relevant user data
  });
  
}

  const handleGoogleLogin = () => {
  const userData =   signInWithPopup(auth, provider)
      .then((userData) => {
        console.log("user login: ", userData);
        setIsLoggedIn(true)
        navigate('/')
        createUser(userData)
      })
      .catch((error) => {
        console.error("Error signing in:", userData);
      });

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


// step 1 UI design and event handle
// step 2 protected route and Google authentication
// step 3 extract user data and push to firestore
// step 4 design profile component and upload file to firebase storage