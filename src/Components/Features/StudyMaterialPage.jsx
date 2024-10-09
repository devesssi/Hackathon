import React from 'react';
import { useParams } from 'react-router-dom';

// Define subjects and their study materials in a more concise manner
const subjects = [
  'Engineering Mathematics-I', 'Engineering Physics-I', 'Engineering Chemistry-I',
  'Engineering Mechanics', 'Basic Electrical Engineering', 'Engineering Mathematics II',
  'Engineering Physics-II', 'Engineering Chemistry-II', 'C Programming', 'Engineering Graphics',
  'Engineering Mathematics III', 'DLCA', 'Discrete Structure and Graph Theory',
  'Computer Graphics', 'Data Structures', 'Discrete Mathematics', 'Database Management Systems',
  'Software Engineering', 'Microprocessors', 'Theory of Computation',
  'Design and Analysis of Algorithms', 'Compiler Design', 'Artificial Intelligence',
  'Machine Learning', 'Web Technologies', 'Computers Graphics', 'Embedded Systems',
  'Cloud Computing', 'Big Data Analytics', 'Mobile App Development', 'IoT Systems',
  'Project Management', 'Cyber Security', 'Blockchain Technology', 'Final Year Project'
];

// Generate study materials for each subject
const studyMaterials = Object.fromEntries(
  subjects.map(subject => [
    subject,
    ['Lecture Notes', 'Practice Problems', 'Video Lectures']
  ])
);

const StudyMaterialPage = () => {
  const { subject } = useParams(); // Get the subject from the URL
  const materials = studyMaterials[subject] || []; // Get materials for the subject or an empty array

  const baseLink = `https://example.com/${subject.replace(/ /g, '-').toLowerCase()}`; // Base link structure

  return (
    <div className="min-h-screen bg-gray-100 mt-12">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">{subject} Study Material</h1>

        {materials.length > 0 ? (
          <div className="space-y-4">
            {materials.map((material, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <a
                  href={`${baseLink}-${material.replace(/ /g, '-').toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-500 hover:underline"
                >
                  {material}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No study materials available for this subject.</p>
        )}
      </div>
    </div>
  );
};

export default StudyMaterialPage;

