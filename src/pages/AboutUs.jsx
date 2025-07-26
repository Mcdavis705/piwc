import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <section className="min-h-screen w-full px-6 py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Image */}
          <div>
            <img
              src="/group.jpg"
              alt="Image of PIWC"
              className="w-full h-80 object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Mission Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center md:text-left">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-8 text-center md:text-left">
              We exist to establish responsible and self-sustaining churches that are grounded in biblical truth and led by committed, Spirit-filled Christians.
              These churches are built to thrive spiritually, socially, and structurally — equipping members to grow in faith, live with integrity, and actively serve their communities.
              By nurturing strong Christian character and leadership, we aim to create lasting impact—transforming lives, neighborhoods, and nations through the power of the Gospel.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Vision Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center md:text-left">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-8 text-center md:text-left">
              We envision becoming a global Pentecostal church that is culturally relevant and impactful in every context we serve.
              Through Spirit-led evangelism, intentional church planting, purposeful discipleship, and holistic ministry,
              we aim to reach diverse communities with the transformative message of Christ.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/group.jpg"
              alt="PIWC members"
              className="w-full h-80 object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-10 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-semibold text-gray-800">Want to learn more about PIWC Barcelona?</h3>
          <p className="text-gray-600 mt-3 mb-6">
            We'd love to welcome you to one of our services or connect with you online.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
