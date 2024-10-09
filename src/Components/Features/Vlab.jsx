import React from 'react';

const VirtualLabRedirect = () => {
  const redirectToLab = () => {
    window.location.href = "https://iitb.vlabs.co.in/";
  };

  return (
    <div className="virtual-lab-redirect">
      <h1>Welcome to the Virtual Lab</h1>
      <button 
        onClick={redirectToLab}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Go to Virtual Lab
      </button>
    </div>
  );
};

export default VirtualLabRedirect;
