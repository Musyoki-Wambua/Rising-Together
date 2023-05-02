import React from "react";



const Card = ({ title, image, children }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
      
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-white text-2xl font-bold absolute bottom-0 left-0 p-4">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;