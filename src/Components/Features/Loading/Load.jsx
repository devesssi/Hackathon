import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from '../HomePage';

const Load = () => {
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate(); // React Router's navigate function

  useEffect(() => {
    // Set interval to increment percentage
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Navigate to the HomePage after loading completes
          navigate('/home'); // Or whatever route leads to HomePage
          return prev;
        }
      });
    }, 20); // Adjust this interval for faster or slower countdown

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.loaderContainer}>
        <div style={styles.circle}></div>
        <div
          style={{
            ...styles.fill,
            transform: `rotate(${percentage * 3.6}deg)`, // Rotate fill based on percentage
          }}
        ></div>
        <div style={styles.percentage}>{percentage}%</div>
      </div>
    </div>
  );
};

// CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
  },
  loaderContainer: {
    position: 'relative',
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'conic-gradient(#ff0000 0%, #ff7f00 16%, #ffff00 33%, #00ff00 50%, #0000ff 66%, #4b0082 83%, #8b00ff 100%)',
    mask: 'radial-gradient(farthest-side, transparent calc(100% - 10px), white 0)',
    transform: 'rotate(-90deg)', // Start from top
  },
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    clip: 'rect(0, 200px, 200px, 100px)',
    backgroundColor: 'white', // Inner fill color
    transform: 'rotate(0deg)',
    transition: 'transform 0.2s linear',
  },
  percentage: {
    position: 'absolute',
    fontSize: '2rem',
    color: '#333333',
  },
};

export default Load;
