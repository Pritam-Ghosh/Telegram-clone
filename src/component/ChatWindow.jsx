import React from 'react'

function ChatWindow() {
    return (
        <>
            <div>
                <div>
                    <img src={profilePhoto} alt="telegram user" className='h-[3rem] w-[3rem] rounded-full' />
                    <p>User name</p>
                </div>
                <div>
                    <span>lastseen at</span> <span>-- -- --</span>
                </div>

            </div>
        </>
    )
}

export default ChatWindow