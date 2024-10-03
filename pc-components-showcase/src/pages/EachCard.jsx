import React from "react";
import { useLocation } from "react-router-dom";

const EachCard = () => {
  const location = useLocation();
  const { title, sTitle } = location.state || {};

  const wikiUrl = `https://en.wikipedia.org/wiki/${sTitle.replace(/ /g, "_")}`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center bg-blue-900 p-2 text-white rounded-lg">
        {title}
      </h1>

      <iframe
        src={wikiUrl}
        title={sTitle}
        className="w-full h-screen border-0"
      ></iframe>
    </div>
  );
};
export default EachCard;
