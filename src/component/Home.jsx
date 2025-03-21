import { CircleFadingPlus, CircleUserRound, MessageSquarePlus, MessageSquareText, Search } from 'lucide-react'
import profilePhoto from '../assets/Pritam.jpg'
import React from 'react'

import {auth} from '../../firebase'

function Home({user,setIsLoggedIn}) {
    return (
        <>
            {/* <div className="bg-[#e7eaef] h-[100vh] flex flex-col items-center">
        <div className="bg-[#4f80a1] w-full h-[15rem] flex items-center justify-center"> */}
            <div className='flex items-center justify-between bg-[#f3f4f6] h-[60px] p-4'>
            <h2>Welcome, {user.displayName}!</h2>
                <button>
                    <img src={profilePhoto} alt="" className='h-[40px] w-[40px] rounded-full' />
                </button>
                <div className='flex gap-6'>
                    <CircleFadingPlus />
                    <MessageSquarePlus />
                    <CircleUserRound />
                    
                </div>
            </div>

            <div className='flex relative items-center m-4'>
                <Search className='absolute ml-2' size={15} />
                <input type="text" placeholder='Search' className='bg-[#eff2f5] pl-8 pr-5 py-1 text-black rounded-md' />
            </div>



            {/* chat pannel and blank chat screen on this div*/}
            <div className='flex'>

                {/* Chat pannel */}
                <div className='w-[400px] bg-emerald-200'>
                    <button className='flex items-center gap-4 m-2'>
                        <img src={profilePhoto} alt="telegram user" className='h-[3rem] w-[3rem] rounded-full' />
                        <p>user name</p>
                    </button>
                    <button className='flex items-center gap-4 m-2'>
                        <img src={profilePhoto} alt="telegram user" className='h-[3rem] w-[3rem] rounded-full' />
                        <p>user name</p>
                    </button>
                    <button className='flex items-center gap-4 m-2'>
                        <img src={profilePhoto} alt="telegram user" className='h-[3rem] w-[3rem] rounded-full' />
                        <p>user name</p>
                    </button>
                    <button className='flex items-center gap-4 m-2'>
                        <img src={profilePhoto} alt="telegram user" className='h-[3rem] w-[3rem] rounded-full' />
                        <p>user name</p>
                    </button>
                </div>


                {/* Chat blank window */}
                <div className='bg-[#eff2f5] flex flex-col items-center justify-center w-full h-full'>
                    <MessageSquareText size={80} strokeWidth={1.2} color='#9ca3af' />
                    <p className='text-[#9ca3af]'>
                        Select any contact to
                        <br />
                        start a chat with
                    </p>

                </div>
                {/* chat pannel and blank chat screen on this div*/}
            </div>




            {/* </div>
    </div> */}
        </>
    )
}

export default Home