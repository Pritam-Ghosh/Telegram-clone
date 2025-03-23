import { CircleFadingPlus, CircleUserRound, MessageSquarePlus, MessageSquareText, Search } from 'lucide-react'
import profilePhoto from '../assets/Pritam.jpg'
import React, { useState } from 'react'
import Profile from './Profile';
import Chat from './Chat';

//firebase







function Home({ isLoggedIn }) {

    const [showProfile, setShowProfile] = useState(false);

    const handleProfile = () => {
        setShowProfile(true); 
    }

    return (
        <>
        {!showProfile ? (
            <div>
            {/* <div className="bg-[#e7eaef] h-[100vh] flex flex-col items-center">
        <div className="bg-[#4f80a1] w-full h-[15rem] flex items-center justify-center"> */}


            
<Chat setShowProfile={setShowProfile} handleProfile={handleProfile}></Chat>



            {/* chat pannel and blank chat screen on this div*/}
            <div className='flex'>

           


                {/* Chat blank window */}
                {/* <div className='bg-[#eff2f5] flex flex-col items-center justify-center w-full h-full'>
                    <MessageSquareText size={80} strokeWidth={1.2} color='#9ca3af' />
                    <p className='text-[#9ca3af]'>
                        Select any contact to
                        <br />
                        start a chat with
                    </p> */}

                {/* </div> */}
                {/* chat pannel and blank chat screen on this div*/}
            </div>

            {/* <p>name: {isLoggedIn.displayName}</p>
            <p>email: {isLoggedIn.email}</p> */}

            {/* </div>
    </div> */}
           </div> ) : (<Profile setShowProfile={setShowProfile}></Profile>

            )}
       
       
        </>
    )
}

export default Home