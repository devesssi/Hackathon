import React, { useState } from 'react';
import { FaPython, FaJava, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'; // Import icons
import { SiCplusplus, SiJavascript, SiDjango, SiTailwindcss, SiKubernetes } from 'react-icons/si'; // More icons

// Define skills with associated icons
const skillsData = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: <FaPython size={32} /> },
      { name: 'JavaScript', icon: <SiJavascript size={32} /> },
      { name: 'C++', icon: <SiCplusplus size={32} /> },
      { name: 'Java', icon: <FaJava size={32} /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: <FaReact size={32} /> },
      { name: 'Node.js', icon: <FaNodeJs size={32} /> },
      { name: 'Django', icon: <SiDjango size={32} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} /> },
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Git', icon: <FaGitAlt size={32} /> },
      { name: 'Docker', icon: <FaDocker size={32} /> },
      { name: 'Kubernetes', icon: <SiKubernetes size={32} /> },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Communication', icon: null },
      { name: 'Problem Solving', icon: null },
      { name: 'Teamwork', icon: null },
      { name: 'Time Management', icon: null },
    ],
  },
];

const SkillsPage = () => {
  // State to track progress for each skill
  const [progress, setProgress] = useState({
    Python: 80,
    JavaScript: 70,
    'C++': 50,
    Java: 60,
    React: 85,
    'Node.js': 65,
    Django: 40,
    'Tailwind CSS': 75,
    Git: 90,
    Docker: 55,
    Kubernetes: 45,
    Communication: 80,
    'Problem Solving': 85,
    Teamwork: 75,
    'Time Management': 70,
  });

  // Function to handle skill click and increment progress
  const handleSkillClick = (skill) => {
    setProgress((prevProgress) => {
      const newProgress = Math.min(prevProgress[skill] + 10, 100);
      return { ...prevProgress, [skill]: newProgress };
    });
  };

  return (
    <div className="min-h-screen bg-blue-100 mt-12">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-10">Develop Your Skills</h1>

        {/* Technical and Soft Skills Sections */}
        {skillsData.map((skillCategory) => (
          <div key={skillCategory.category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{skillCategory.category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillCategory.items.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                  onClick={() => handleSkillClick(skill.name)}
                >
                  {/* Display the logo next to the skill name */}
                  <div className="flex items-center space-x-3">
                    {skill.icon && <div>{skill.icon}</div>}
                    <h3 className="text-xl font-medium">{skill.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Progress: {progress[skill.name]}%</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Progress Bars Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Track Your Progress</h2>
          <div className="space-y-4">
            {Object.keys(progress).map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">{skill}</h3>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${progress[skill]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

