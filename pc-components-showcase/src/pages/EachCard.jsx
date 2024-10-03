import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const EachCard = () => {
  const location = useLocation();
  const { title, sTitle } = location.state || {};

  const wikiUrl = `https://en.wikipedia.org/wiki/${sTitle.replace(/ /g, "_")}`;

  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center bg-blue-900 p-2 text-white rounded-lg">
        {title}
      </h1>

      {isLoading && (
        <div className="w-full h-screen bg-gray-200 rounded-lg animate-pulse flex items-center justify-center"></div>
      )}

      <iframe
        src={wikiUrl}
        title={sTitle}
        className={`w-full h-screen border-0 rounded-sm ${
          isLoading ? "hidden" : "block"
        }`}
        onLoad={handleIframeLoad}
      ></iframe>
    </div>
  );
};
export default EachCard;
