
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/user/NavBar.jsx'
import Footer from './components/user/Footer.jsx'

import UserContext from './contexts/userContext.js'

import './index.css'
import HomePage from './pages/user/HomePage.jsx'
import ServicesPage from './pages/user/ServicePage.jsx'
import EventsPage from './pages/user/EventsPage.jsx'
import SermonsPage from './pages/user/SermonsPage.jsx'
import ContactPage from './pages/user/ContactPage.jsx'
import AboutPage from './pages/user/AboutPage.jsx'
import NotFound from './pages/user/NotFound.jsx'
import LogIn from './pages/user/LogIn.jsx'


import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import Members from './pages/admin/Members.jsx'



function App() {

  //data from nocodb with the token
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
          <Route path="events" element={<EventsPage />} />
          <Route path="sermonsPage" element={<SermonsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="aboutUs" element={<AboutPage />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="services" element={<ServicesPage />} />
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
