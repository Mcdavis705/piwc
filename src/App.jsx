import { useState, useContext } from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

import UserContext from './context/UserContext.js'

import './index.css'
import Home from './pages/user/Home.jsx'
import Events from './pages/user/Events.jsx'
import Sermons from './pages/user/Sermon.jsx'
import Gallery from './pages/user/Gallery.jsx'
import AboutUs from './pages/user/AboutUs.jsx'
import NotFound from './pages/user/NotFound.jsx'
import LogIn from './pages/user/LogIn.jsx'

import Admin from './pages/admin/AdminMainPage.jsx'



function App() {

  // retrieving the data from nocodb with the token
  const userData = {
    name: 'Mcdavis',
    token: 'omIVMg1s3VvQr4Nbe0CqK1W5fFWJHakGu4o0o-H2'
  }


  return (
    <>
      <h1>Test</h1>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="admin" element={<Admin />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App;
