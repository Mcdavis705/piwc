// src/pages/ContactPage.js
import React from 'react';
import ContactForm from '../../components/user/contact/ContactForm';
import DetailsCard from '../../components/user/contact/DetailsCard';
import StaffTeam from '../../components/user/contact/StaffTeam';
import ConnectSocials from '../../components/user/contact/ConnectSocials';
import LocationMap from '../../components/user/contact/LocationMap';

import backgroundImage from '../../assets/herobackground1.png';

const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  
function ContactPage() {
  return (
    <div className="contact-page min-h-screen pt-4" >
      {/* 1. Send Us a Message (Full Width) */}
      <section className="mb-16" style={backgroundImageStyle}>
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Send Us a Message</h2>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          We'd love to hear from you! Reach out through the form, connect with our staff, or find us on social media.
        </p>
        <div className="max-w-xl mx-auto p-8 rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </section>
      
      {/* 2. Get In Touch & Meet Our Team (Two Columns) */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Get In Touch & Meet Our Team</h2>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <DetailsCard />
          <StaffTeam />
        </div>
      </section>

      {/* 3. Find Us Online & In Person (Two Columns) */}
      <section className="py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Find Us Online & In Person</h2>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <ConnectSocials />
          <LocationMap />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
