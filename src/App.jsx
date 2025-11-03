
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/mainPage/NavBar.jsx'
import Footer from './components/mainPage/Footer.jsx'

import UserContext from './context/userContext.js'

import './index.css'
import HomePage from './pages/user/HomePage.jsx'
import Events from './pages/user/Events.jsx'
import Sermons from './pages/user/Sermon.jsx'
import Gallery from './pages/user/Gallery.jsx'
import AboutUs from './pages/user/AboutUs.jsx'
import NotFound from './pages/user/NotFound.jsx'
import LogIn from './pages/user/LogIn.jsx'

import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import Members from './pages/admin/Members.jsx'
import EventsPage from './pages/admin/Events.jsx'


function App() {

  // retrieving the data from nocodb with the token
  const userData = {
    name: 'Mcdavis',
    token: 'omIVMg1s3VvQr4Nbe0CqK1W5fFWJHakGu4o0o-H2'
  }

  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="events" element={<Events />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="*" element={<NotFound />} />

          <Route path="adminDashboard" element={<AdminDashboard />} />
          <Route path="adminDashboard/members" element={<Members />} />
          <Route path="adminDashboard/events" element={<EventsPage />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App;
