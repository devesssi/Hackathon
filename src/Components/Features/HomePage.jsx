// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import '../Backgroundcss/Background.css'; // Import the CSS for the animation and styling

// const HomePage = () => {
//   return (
//     <div className="home-page-container">
//       {/* Snake-like Background Animation */}
//       <div className="snake-animation"></div>

//       {/* Foreground content */}
//       <div className="content-container">
//         {/* Text Section */}
//         <div className="text-section">
//           <h1 className="main-heading">
//             <Typewriter
//               words={['Welcome to the Learning Platform', 'Your Journey Begins Here']}
//               loop={false}
//               cursor
//               cursorStyle="_"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </h1>
//           <p className="subtext">
//             Our platform provides top-notch resources, interactive courses, and an engaging community to help engineering students excel in their studies and future careers.
//           </p>
//           <button className="cta-button">Get Started</button>
//         </div>

//         {/* Image Section */}
//         <div className="image-section  rounded-full" style={{borderRadius : "50%"}}>
//           <img style={{borderRadius : "50%"}}
//             src="https://thumbs.dreamstime.com/b/minimalist-college-logo-design-suitable-online-learning-platform-simple-icon-modern-vector-315290373.jpg"
//             alt="Engineering illustration"
//             className="illustration-image"
//           />
           
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../Backgroundcss/Background.css'; // Import the CSS for the animation and styling

const HomePage = () => {
  return (
    <div className="home-page-container">
      {/* Snake-like Background Animation */}
      <div className="snake-animation"></div>

      {/* Foreground content */}
      <div className="content-container flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-section">
          <h1 className="main-heading">
            <Typewriter
              words={['Welcome to the Learning Platform', 'Your Journey Begins Here']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="subtext">
            Our platform provides top-notch resources, interactive courses, and an engaging community to help engineering students excel in their studies and future careers.
          </p>
          <button className="cta-button">Get Started</button>
        </div>

        {/* Image Section - Hidden on mobile view */}
        <div className="image-section ">
          <img 
            src="https://thumbs.dreamstime.com/b/minimalist-college-logo-design-suitable-online-learning-platform-simple-icon-modern-vector-315290373.jpg"
            alt="Engineering illustration"
            className="illustration-image rounded-full hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

