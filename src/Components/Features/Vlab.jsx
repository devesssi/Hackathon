import React from 'react';

// Example data for disciplines with redirect links and background images
const disciplines = [
  {
    title: 'Computer Science',
    description: 'Explore programming and algorithms.',
    link: 'https://iitb.vlabs.co.in/discipline.html?discipline=Computer_Science_%26_Engineering',
    image: 'https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/033e9988-2ac8-4cb9-8b9f-5bf05fb22dcb/gff.jpg',
  },
  {
    title: 'Electrical Engineering',
    description: 'Learn about circuits and electronics.',
    link: 'https://iitb.vlabs.co.in/discipline.html?discipline=Electrical_Engineering',
    image: 'https://www.zuken.com/us/wp-content/uploads/sites/12/2023/08/zuken-usa-Key-Elements-of-Electrical-Design.png',
  },
  {
    title: 'Mechanical Engineering',
    description: 'Dive into mechanics and thermodynamics.',
    link: 'https://iitb.vlabs.co.in/discipline.html?discipline=Mechanical_Engineering',
    image: 'https://www.accurate.in/img/college/1658318395-Mechanical-Engineering.jpg',
  },
  {
    title: 'Civil Engineering',
    description: 'Understand structures and materials.',
    link: 'https://iitb.vlabs.co.in/discipline.html?discipline=Civil_Engineering',
    image: 'https://t3.ftcdn.net/jpg/04/99/34/92/360_F_499349231_izQZKblFsusv5I2tvHokGl6zmGUZrOfE.jpg',
  },
  {
    title: 'Chemical Engineering',
    description: 'Explore processes and reaction engineering.',
    link: 'https://iitb.vlabs.co.in/discipline.html?discipline=Chemical_Engineering',
    image: 'https://snu.edu.in/site/assets/files/6903/teamwork-dim-modern-lab.1600x0.webp',
  },
];

const VirtualLabRedirect = () => {
  const redirectToLab = () => {
    window.location.href = "https://iitb.vlabs.co.in/"; // Redirects to the main lab site
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank'); // Opens the link in a new tab
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 mt-6">
      <h1 className="text-5xl font-bold mb-0">Welcome to the Virtual Lab</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6 mt-8">
        {disciplines.map((discipline, index) => (
          <div
            key={index}
            onClick={() => handleRedirect(discipline.link)}
            className="relative p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            style={{
              backgroundImage: `url(${discipline.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px',
              color: 'white',
              overflow: 'hidden', // Ensures text doesn't overflow
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 p-4">
              <h2 className="text-2xl font-bold mb-1">{discipline.title}</h2>
              <p className="text-lg">{discipline.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={redirectToLab}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg mb-6">
        Go to Virtual Lab
      </button>
    </div>
  );
};

export default VirtualLabRedirect;

