import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
