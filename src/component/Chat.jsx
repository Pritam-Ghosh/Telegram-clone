import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import profilePhoto from '../assets/Pritam.jpg'
import { CircleFadingPlus, CircleUserRound, MessageSquarePlus, Search } from 'lucide-react'

//firebase import
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Chat({handleProfile}) {
  const id = useParams()
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map((doc) => doc.data());
        setUsers(usersList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);


  return (
    <>
      {/* Home Manu */}
      <div className='flex items-center justify-between bg-[#f3f4f6] h-[60px] p-4'>
        <button onClick={handleProfile} className='flex items-center gap-4'>
          <img src={profilePhoto} alt="" className='h-[40px] w-[40px] rounded-full' />
        </button>
        <div className='flex gap-6'>
          <CircleFadingPlus />
          <MessageSquarePlus />
          <CircleUserRound />

        </div>
      </div>

      {/* Home search */}
      <div className='flex relative items-center m-4'>
        <Search className='absolute ml-2' size={15} />
        <input type="text" placeholder='Search' className='bg-[#eff2f5] pl-8 pr-5 py-1 text-black rounded-md' />
      </div>
      {/* Chat pannel */}
      {loading && <p>Loading...</p>}
      <div className='flex'>
      <ul>
        {users.map((user,index) => (
          <li key={index} className='flex items-center gap-4 m-4'>
            <img src={user.photoURL} alt="photo" className='rounded-full h-12 w-12'/>
            <p>{user.displayName}</p>
          </li>
        ))}
      </ul>
    </div>
    </>

  )
}

export default Chat