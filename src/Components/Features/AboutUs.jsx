import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Dinesh Verma',
      role: 'Leader',
      about: 'Dinesh is the leader of this project.',
      imgSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
    {
      name: 'Devesh Tiwari',
      role: 'Member',
      about: 'Devesh is the backbone of this project.',
      imgSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
    {
      name: 'Pranay Verma',
      role: 'Member',
      about: "Pranay is the talented programmer without whose skills the project wouldn't have been completed.",
      imgSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
    {
      name: 'Shivam Tiwari',
      role: 'Member',
      about: 'Shivam drives our marketing strategies.',
      imgSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
    {
      name: 'Om Tiwari',
      role: 'Member',
      about: 'Om oversees daily operations.',
      imgSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <h1 className="text-5xl font-bold mb-10">Meet Our Team</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-60 h-80 perspective">
            <div className="relative w-full h-full group">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white shadow-lg rounded-lg backface-hidden transition-transform duration-500 group-hover:rotate-y-180 flex flex-col items-center justify-center">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-bold mt-4">{member.name}</h2>
                <p className="text-gray-600">{member.role}</p>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-blue-500 text-white shadow-lg rounded-lg backface-hidden rotate-y-180 flex flex-col items-center justify-center transition-transform duration-500 delay-150">
                <h2 className="text-xl font-bold">{`About ${member.name}`}</h2>
                <p className="mt-4 px-4 text-center">{member.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS for card flipping effect */}
      <style jsx>{`
        .perspective {
          perspective: 1000px; /* Perspective for 3D effect */
        }

        .backface-hidden {
          backface-visibility: hidden; /* Hide back side when not facing the viewer */
        }

        .group:hover .rotate-y-180 {
          transform: rotateY(180deg); /* Rotate the back side on hover */
        }

        /* Add transition for the card flipping */
        .group {
          transition: transform 1.5s; /* Transition for the whole card */
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
