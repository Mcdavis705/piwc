import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";


import './index.css'
import App from './App.jsx'
import Home from './pages/user/Home.jsx'
import Events from './pages/user/Events.jsx'
import Sermons from './pages/user/Sermon.jsx'
import Gallery from './pages/user/Gallery.jsx'
import AboutUs from './pages/user/AboutUs.jsx'
import NotFound from './pages/user/NotFound.jsx'
import LogIn from './pages/user/LogIn.jsx'

import Admin from './pages/admin/AdminMainPage.jsx'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="admin" element={<Admin />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="*" element={<NotFound  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
