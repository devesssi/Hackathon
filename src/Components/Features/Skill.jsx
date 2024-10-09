import React, { useState } from 'react'; 
import { FaPython, FaJava, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'; 
import { SiCplusplus, SiJavascript, SiDjango, SiTailwindcss, SiKubernetes } from 'react-icons/si';

const skillsData = [
  {
    category: 'Programming Languages',
    items: [
      { 
        name: 'Python', 
        icon: <FaPython size={32} />,
        link: 'https://www.python.org/doc/'
      },
      { 
        name: 'JavaScript', 
        icon: <SiJavascript size={32} />,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      { 
        name: 'C++', 
        icon: <SiCplusplus size={32} />,
        link: 'https://en.cppreference.com/w/'
      },
      { 
        name: 'Java', 
        icon: <FaJava size={32} />,
        link: 'https://docs.oracle.com/en/java/'
      },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { 
        name: 'React', 
        icon: <FaReact size={32} />,
        link: 'https://reactjs.org/docs/getting-started.html'
      },
      { 
        name: 'Node.js', 
        icon: <FaNodeJs size={32} />,
        link: 'https://nodejs.org/en/docs/'
      },
      { 
        name: 'Django', 
        icon: <SiDjango size={32} />,
        link: 'https://docs.djangoproject.com/en/stable/'
      },
      { 
        name: 'Tailwind CSS', 
        icon: <SiTailwindcss size={32} />,
        link: 'https://tailwindcss.com/docs'
      },
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      { 
        name: 'Git', 
        icon: <FaGitAlt size={32} />,
        link: 'https://git-scm.com/doc'
      },
      { 
        name: 'Docker', 
        icon: <FaDocker size={32} />,
        link: 'https://docs.docker.com/'
      },
      { 
        name: 'Kubernetes', 
        icon: <SiKubernetes size={32} />,
        link: 'https://kubernetes.io/docs/home/'
      },
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

  const handleSkillClick = (skill, link) => {
    // Update progress
    setProgress((prevProgress) => {
      const newProgress = Math.min(prevProgress[skill] + 10, 100);
      return { ...prevProgress, [skill]: newProgress };
    });
    
    // Redirect to the respective documentation
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen mt-12" style={{ background: '#1E3A8A' }}>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-white text-center mb-10">Develop Your Skills</h1>

        {/* Technical and Soft Skills Sections */}
        {skillsData.map((skillCategory) => (
          <div key={skillCategory.category} className="mb-8">
            <h2 className="text-2xl text-white font-semibold mb-4">{skillCategory.category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillCategory.items.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                  onClick={() => handleSkillClick(skill.name, skill.link)}  // Pass link to the click handler
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
