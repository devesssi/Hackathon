import React from 'react';

const VirtualLabRedirect = () => {
  const redirectToLab = () => {
    window.location.href = "https://iitb.vlabs.co.in/";
  };
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to the Virtual Lab
        </h1>
        <p className="text-gray-600 mb-6">
          Experience hands-on learning by visiting the Virtual Lab platform, designed to provide interactive experiments and simulations.
        </p>
        <button 
          onClick={redirectToLab}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
          Go to Virtual Lab
        </button>
      </div>
    </div>
  );
};

export default VirtualLabRedirect;
