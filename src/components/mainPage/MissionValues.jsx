import React from 'react';
import { ArrowRight } from 'lucide-react';
import groupImage from '../../assets/group.jpg';

function MissionValues() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            {/* Outer Card Container */}
            <div className=" bg-indigo-50 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">

                {/* Text Content Block */}
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                        Our Mission & Values
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        At Church Connect, we believe in fostering a community built on love, compassion, and service. Our mission is to inspire faith, encourage personal growth, and actively engage in improving the lives of those around us. We are dedicated to making a positive impact both locally and globally.
                    </p>
                    <a
                        href="#about-us"
                        className="flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150 w-fit"
                    >
                        Learn More About Us
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>

                {/* Image Placeholder Block */}
                <div className="lg:w-1/2  flex items-center justify-center p-6">
                    {/* Placeholder for the 3D hands image */}
                    <div className="w-full h-full min-h-[250px] bg-cover bg-center rounded-lg flex items-center justify-center text-indigo-400">
                        <img src={groupImage} alt="churchGropImage" className='rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionValues;