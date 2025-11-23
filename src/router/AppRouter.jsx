import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../components/public/NavBar.jsx";
import Footer from "../components/public/Footer.jsx";

import HomePage from "../pages/public/HomePage.jsx";
import ServicesPage from "../pages/public/ServicePage.jsx";
import EventsPage from "../pages/public/EventsPage.jsx";
import SermonsPage from "../pages/public/SermonsPage.jsx";
import ContactPage from "../pages/public/ContactPage.jsx";
import AboutPage from "../pages/public/AboutPage.jsx";
import NotFound from "../pages/public/NotFound.jsx";
import LogIn from "../pages/public/LogIn.jsx";

import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import Members from "../pages/admin/Members.jsx";

function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="sermonsPage" element={<SermonsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="aboutUs" element={<AboutPage />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="services" element={<ServicesPage />} />

        {/* Admin Routes */}
        <Route path="adminDashboard" element={<AdminDashboard />} />
        <Route path="adminDashboard/members" element={<Members />} />
        <Route path="adminDashboard/events" element={<EventsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRouter;
