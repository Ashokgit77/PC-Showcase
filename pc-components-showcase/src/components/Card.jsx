import React from "react";

const Card = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="bg-gray-900  shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48  object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-white">{description}</p>
        <button
          onClick={onButtonClick}
          className=" align-bottom mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
