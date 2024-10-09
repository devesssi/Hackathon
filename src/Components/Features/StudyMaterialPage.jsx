import React from 'react';
import { useParams } from 'react-router-dom';

// Define study materials for all subjects
const studyMaterials = {
  'Engineering Mathematics-I': {
    lectureNotes: 'https://drive.google.com/file/d/1Z1neBQEr9q8wy_DZwy-9IihBT3mER224/view?usp=drive_link',
    practiceProblems: 'https://example.com/eng-math1-practice-problems',
    videoLectures: 'https://example.com/eng-math1-video-lectures'
  },
  // ... other subjects
  'Final Year Project': {
    lectureNotes: 'https://example.com/final-year-project-lecture-notes',
    practiceProblems: 'https://example.com/final-year-project-practice-problems',
    videoLectures: 'https://example.com/final-year-project-video-lectures'
  }
};

// Component for Study Material Page
const StudyMaterialPage = () => {
  const { subject } = useParams(); // Get the subject from the URL
  const materials = studyMaterials[subject]; // Get the specific materials for the subject

  return (
    <div className="min-h-screen bg-gray-100 mt-12">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6 mt-4">{subject} Study Material</h1>

        {materials ? (
          <div className="space-y-4 m-6 md:m-12 lg:m-20">
            {/* Lecture Notes */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <a
                href={materials.lectureNotes}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-500 hover:underline"
              >
                Reference Notes
              </a>
            </div>

            {/* Practice Problems */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <a
                href={materials.practiceProblems}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-500 hover:underline"
              >
                Practice Problems
              </a>
            </div>

            {/* Video Lectures */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <a
                href={materials.videoLectures}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-500 hover:underline"
              >
                Video Lectures
              </a>
            </div>
          </div>

        ) : (
          <p className="text-center text-gray-500">No study materials available for this subject.</p>
        )}

        {/* YouTube Videos Section */}
        <div className="flex flex-col items-center space-y-6 my-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/LwCRRUa8yTU?si=57iMy3ATPViIwbV9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/JnTa9XtvmfI?si=x84he9MSslbC8HN9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-lg mt-4 md:mt-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialPage;
