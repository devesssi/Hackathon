import React, { useState } from "react";
import Dropdown from "./Dropdown";

const ProfilePage = () => {
  // Step 1: Initialize state with profile data
  const [profileData, setProfileData] = useState({
    name: "Deveshtiwari",
    phone: "8169587125",
    email: "sandhyatik@gmail.com",
    dob: "29-01-2005",
    gender: "male",
    city: "Mira Bhayandar",
  });

  // Step 2: Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData, // Keep existing data
      [name]: value, // Update the specific field being changed
    });
  };

  // Step 3: Display the profile page with editable fields
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full p-4">
      <div className="bg-white p-6 md:p-12 rounded-lg shadow-lg w-full max-w-6xl h-auto md:h-screen mx-0">
        <div className="flex flex-col md:flex-row h-full">
          {/* Profile Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center mb-6 md:mb-0">
            <div className="relative">
              <img
                src="https://placehold.co/150x150"
                alt="Profile"
                className="rounded-full w-32 h-32 md:w-40 md:h-40"
              />
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                <i className="fas fa-pen text-purple-500"></i>
              </div>
            </div>
            <h2 className="mt-4 text-xl font-bold">{profileData.name}</h2>
            <p className="text-gray-600">{profileData.city}, India</p>
            <div className="mt-4 w-full">
              <div className="border rounded-lg p-2 text-center">
                12th Pass - NEET
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full">
                No Subscriptions
              </button>
            </div>
            <div className="mt-2">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full">
                Request a Callback
              </button>
            </div>
          </div>

          {/* Editable Fields Section */}
          <div className="w-full md:w-2/3 pl-0 md:pl-6 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <div className="flex items-center border rounded-lg p-2 mt-1">
                  <span className="mr-2">
                    <img 
                      src="src/assets/india.webp" 
                      alt="India Flag" 
                      className="h-4" // Adjust height as needed
                    />
                  </span>
                  <span className="mr-2">+91</span>
                  <input
                    type="text"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    className="w-full border-none outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Date of Birth</label>
                <div className="flex items-center border rounded-lg p-2 mt-1">
                  <input
                    type="date"
                    name="dob"
                    value={profileData.dob}
                    onChange={handleInputChange}
                    className="w-full border-none outline-none"
                  />
                  <i className="fas fa-calendar-alt text-gray-500"></i>
                </div>
              </div>
              <div>
                <Dropdown />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={profileData.city}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
            </div>
            <div className="mt-6 md:mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full md:w-auto">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
