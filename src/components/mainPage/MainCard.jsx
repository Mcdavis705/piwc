import React from 'react';
import { motion } from 'framer-motion';

const MainCard = ({ image, title, description, buttonText, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 w-80"
    >
      <figure>
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48"
        />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={link} className="btn btn-outline btn-primary">
            {buttonText}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MainCard;
