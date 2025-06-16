import React from 'react'
import DashBoard from './components/DashBoard'
import { UserProvider } from './services/UserContext' // <-- Add this line

const App = () => {
  return (
    <UserProvider>
      <div className="bg-gray-400 min-h-screen flex items-center justify-center">
        <DashBoard/>
      </div>
    </UserProvider>
  )
}

export default App