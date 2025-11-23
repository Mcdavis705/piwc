// src/components/contact/ConnectSocials.js
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function ConnectSocials() {
  const socials = [
    { icon: Facebook, link: '#facebook', label: 'Facebook' },
    { icon: Twitter, link: '#twitter', label: 'Twitter' },
    { icon: Instagram, link: '#instagram', label: 'Instagram' },
    { icon: Youtube, link: '#youtube', label: 'YouTube' },
  ];

  return (
    <div className="flex flex-col justify-start">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
      <div className="flex space-x-6">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition duration-150" aria-label={social.label}>
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ConnectSocials;