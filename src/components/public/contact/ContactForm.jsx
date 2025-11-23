// src/components/contact/ContactForm.js
import React from 'react';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Placeholder)');
  };



  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white/30 backdrop-blur-lg p-5 rounded-md shadow-md">
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
        <input type="text" id="name" name="name" placeholder="John Doe" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
        <input type="email" id="email" name="email" placeholder="john.doe@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>

      <div className="space-y-1">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Inquiry about events" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Type your message here." className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required></textarea>
      </div>

      <button type="submit" className="w-full px-4 py-3 text-white font-semibold bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-150 shadow-md">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;