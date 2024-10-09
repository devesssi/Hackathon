import React, { useState } from "react";

const GenderSelect = () => {
  // Step 1: Set up state to store the selected gender
  const [gender, setGender] = useState("");

  // Step 2: Handle changes in the dropdown
  const handleGenderChange = (e) => {
    setGender(e.target.value); // Update the state with selected value
  };

  return (
    <div>
      <label htmlFor="gender">Gender</label>
      <select id="gender" value={gender} onChange={handleGenderChange} className="border p-2 rounded-lg">
        <option value="" disabled>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>

      {/* Display selected gender (optional) */}
      <p>Selected Gender: {gender}</p>
    </div>
  );
};

export default GenderSelect;
