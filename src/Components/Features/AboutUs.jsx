import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Dinesh Verma',
      role: 'Leader',
      about: 'Dinesh is the leader of this project',
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
      about: 'Pranay is the talented programmer without his skills the project wouldn’t have completed.',
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
    <div className="about-us mt-20">
      <style>{`
        .about-us {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f4;
          text-align: center;
        }
        .about-us h1 {
          font-size: 60px;
          font-weight: 200;
          margin: 20px 0;
        }
        .card-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          margin-top: 20px; /* Space for the heading */
        }
        .card {
          width: 250px;
          height: 350px;
          perspective: 1000px;
          margin: 20px;
        }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .card:hover .card-inner {
          transform: rotateY(180deg);
        }
        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .card-front {
          background-color: #fff;
        }
        .card-back {
          background-color: #007bff;
          color: white;
          transform: rotateY(180deg);
        }
        img {
          width: 100%;
          border-radius: 10px 10px 0 0;
        }
      `}</style>
      <h1>Meet Our Team</h1>
      <div className="card-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={member.imgSrc} alt={member.name} />
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
              <div className="card-back">
                <h2>About {member.name}</h2>
                <p>{member.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;