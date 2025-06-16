
import { useUser } from '../services/UserContext'
// ...existing code...
import React, { useState } from 'react'



const DashBoard = () => {
    const {user,login,logout} = useUser();
    const [username,setusername] =useState('');



  return (
    <div className='p-6 max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md'>
        <h1 className='text-2xl font-semibold mb-4'>Dashboard</h1>

    {user ? (<div className='mt-6'>   
        <p className='text-gray-700'>Welcome {user.name} to your dashboard!</p><br />
            <button className='ml-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 ' onClick={logout}>Logout</button>
        </div>):(
        
        <div>
            <input type="text" placeholder='enter name' className='px-3 py-2 w-full mb-3 rounded outline-0 border' onChange={(e) => setusername(e.target.value)} /><br/>
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'onClick={() => login(username)}>Login</button>
        </div>
    
    )}
    </div>
    
  )
}

export default DashBoard