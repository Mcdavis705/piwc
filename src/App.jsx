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
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
