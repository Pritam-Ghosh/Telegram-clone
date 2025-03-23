import { MoveLeft } from 'lucide-react'
import React from 'react'

//firebase
import { storage, ref, uploadBytes, getDownloadURL, auth } from '../../firebase'
import { uploadBytesResumable } from 'firebase/storage'
import { signOut } from 'firebase/auth'

function Profile({ setShowProfile }) {


  const handleProfile = () => {
    setShowProfile(false); // Navigate back to the Home component
  }
  const handleProfilePhoto = async (e) => {
    const img = e.target.files[0]

    const storageRef = ref(storage, `images/${img.name}`); // Create a storage reference
    const snapshot = await uploadBytesResumable(storageRef, img); // Upload the file
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log(downloadURL);
  }
  return (
    <>

      {/* profile top bar */}
      <div>
        <button className='flex items-center bg-[#4f80a1] w-full text-white gap-4 p-4' onClick={handleProfile}>
          <MoveLeft />
          <p>Profile</p>
        </button>

        <div className='bg-white h-[120px] w-[120px] rounded-full m-4'>
          <input type="file" accept="image/png, image/jpg" className='' onChange={handleProfilePhoto} />
        </div>
      </div>


      {/* profile details */}
      <div>
        <div className='bg-white p-4 mb-4'>
          <p className='text-[#4f80a1]'>Your Name</p>
          <input type="text" placeholder='Your name...' />
        </div>
        <div className='bg-white p-4 mb-4'>
          <p className='text-[#4f80a1]'>Status</p>
          <input type="text" placeholder='Your status...' />
        </div>

        <button className='bg-[#4f80a1] p-[12px] px-4  text-white rounded-full' onClick={() => signOut(auth)}>Logout</button>

      </div>

    </>
  )
}

export default Profile