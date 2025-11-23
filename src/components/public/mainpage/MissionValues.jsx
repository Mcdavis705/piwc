import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import groupImageUrl from '../../../assets/images/group.jpg';


function MissionValues() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className="bg-indigo-50 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100"
            >
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                        Our Mission & Values
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        PIWC Barcelona is a vibrant Pentecostal church dedicated to transforming lives through the power of the Holy Spirit. Our mission is to build self-sustaining, Spirit-filled communities of believers who live with integrity and positively impact society. We envision a global church that is culturally relevant and passionate about evangelism, discipleship, church planting, and holistic ministry, guided by our core values of faith, integrity, service, community, and growth.
                    </p>

                    <Link
                        to="/aboutus"
                        className="flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150 w-fit"
                    >
                        Learn More About Us
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <div className="lg:w-1/2 flex items-center justify-center p-6">
                    <div className="w-full h-full min-h-[250px] bg-cover bg-center rounded-lg flex items-center justify-center text-indigo-400">
                        <img src={groupImageUrl} alt="churchGropImage" className='rounded-lg w-full h-full object-cover' />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default MissionValues;
