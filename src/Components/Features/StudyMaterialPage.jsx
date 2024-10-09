import React from 'react';
import { useParams } from 'react-router-dom';

// Define study materials for all subjects
const studyMaterials = {
  'Engineering Mathematics-I': {
    lectureNotes: 'https://drive.google.com/file/d/1Z1neBQEr9q8wy_DZwy-9IihBT3mER224/view?usp=drive_link',
    practiceProblems: 'https://example.com/eng-math1-practice-problems',
    videoLectures: 'https://example.com/eng-math1-video-lectures'
  },
  'Engineering Physics-I': {
    lectureNotes: 'https://drive.google.com/file/d/1qmUf930R9vHhpqHTZH-eG1EMjs4gp0gB/view?usp=drive_link',
    practiceProblems: 'https://example.com/eng-physics1-practice-problems',
    videoLectures: 'https://example.com/eng-physics1-video-lectures'
  },
  'Engineering Chemistry-I': {
    lectureNotes: 'https://drive.google.com/file/d/1ZNSfE15nchyh5PeHeKxV0Qd3htP7qBF_/view?usp=drive_link',
    practiceProblems: 'https://example.com/eng-chem1-practice-problems',
    videoLectures: 'https://example.com/eng-chem1-video-lectures'
  },
  'Engineering Mechanics': {
    lectureNotes: 'https://drive.google.com/file/d/1Y9SG_echLxNtF95JL3uBAXuFxhe74bVa/view?usp=drive_link',
    practiceProblems: 'https://example.com/eng-mechanics-practice-problems',
    videoLectures: 'https://example.com/eng-mechanics-video-lectures'
  },
  'Basic Electrical Engineering': {
    lectureNotes: 'https://drive.google.com/file/d/1Y7uxzon2k13-_n_l-9rEY86tFE4FaIGh/view?usp=drive_link',
    practiceProblems: 'https://example.com/bee-practice-problems',
    videoLectures: 'https://example.com/bee-video-lectures'
  },
  'Engineering Mathematics II': {
    lectureNotes: 'https://drive.google.com/file/d/10JvZog-rxHwoJUmhZB6erHS7NPK5Kwu7/view?usp=drive_link',
    practiceProblems: 'https://example.com/eng-math2-practice-problems',
    videoLectures: 'https://example.com/eng-math2-video-lectures'
  },
  'Engineering Physics-II': {
    lectureNotes: 'https://drive.google.com/file/d/1hJ7ZNFveC29Er-4z6GZMqt-PDVTCvNRS/view?usp=drive_link',
    practiceProblems: 'https://example.com/eng-physics2-practice-problems',
    videoLectures: 'https://example.com/eng-physics2-video-lectures'
  },
  'Engineering Chemistry-II': {
    lectureNotes: 'https://drive.google.com/file/d/16V4EhThUzjKVjjAQAa9-msbfCVcjANk-/view?usp=drive_link',
    practiceProblems: 'https://example.com/eng-chem2-practice-problems',
    videoLectures: 'https://example.com/eng-chem2-video-lectures'
  },
  'C Programming': {
    lectureNotes: 'https://drive.google.com/drive/folders/1PrNitxghOoqunwXy4jNec8YG-w9wU6pT?usp=drive_link',
    practiceProblems: 'https://example.com/c-programming-practice-problems',
    videoLectures: 'https://example.com/c-programming-video-lectures'
  },
  'Engineering Graphics': {
    lectureNotes: 'https://drive.google.com/file/d/1kxx06-oMRt5qGdSgchOG9txuFKLIbYlc/view?usp=drive_link',
    practiceProblems: 'https://example.com/eng-graphics-practice-problems',
    videoLectures: 'https://example.com/eng-graphics-video-lectures'
  },
  'Engineering Mathematics III': {
    lectureNotes: 'https://drive.google.com/file/d/1e110K9sNToxz9j_PkMZ-bxyxGzDfNbmj/view?usp=drive_link',
    practiceProblems: 'https://example.com/eng-math3-practice-problems',
    videoLectures: 'https://example.com/eng-math3-video-lectures'
  },
  'DLCA': {
    lectureNotes: 'https://drive.google.com/file/d/1cqo1JpR7_Dl3lbvK1mqUV3yC586GNM06/view?usp=drive_link',
    practiceProblems: 'https://example.com/dlca-practice-problems',
    videoLectures: 'https://example.com/dlca-video-lectures'
  },
  'Discrete Structure and Graph Theory': {
    lectureNotes: 'https://drive.google.com/file/d/1dSawu_FQNHPzah60PGIdWmXRXX-bsjOK/view?usp=drive_link',
    practiceProblems: 'https://example.com/dsgt-practice-problems',
    videoLectures: 'https://example.com/dsgt-video-lectures'
  },
  'Computer Graphics': {
    lectureNotes: 'https://drive.google.com/file/d/1dsRurcKUezY0SlArcjKxOTmFoyRRrg-G/view?usp=drive_link',
    practiceProblems: 'https://example.com/computer-graphics-practice-problems',
    videoLectures: 'https://example.com/computer-graphics-video-lectures'
  },
  'Data Structures': {
    lectureNotes: 'https://drive.google.com/file/d/1crjvkEEXMqBbzOdLsGHnIRo4eyddqC2y/view?usp=drive_link',
    practiceProblems: 'https://example.com/data-structures-practice-problems',
    videoLectures: 'https://example.com/data-structures-video-lectures'
  },
  'Discrete Mathematics': {
    lectureNotes: 'https://example.com/discrete-math-lecture-notes',
    practiceProblems: 'https://example.com/discrete-math-practice-problems',
    videoLectures: 'https://example.com/discrete-math-video-lectures'
  },
  'Database Management Systems': {
    lectureNotes: 'https://example.com/dbms-lecture-notes',
    practiceProblems: 'https://example.com/dbms-practice-problems',
    videoLectures: 'https://example.com/dbms-video-lectures'
  },
  'Software Engineering': {
    lectureNotes: 'https://example.com/se-lecture-notes',
    practiceProblems: 'https://example.com/se-practice-problems',
    videoLectures: 'https://example.com/se-video-lectures'
  },
  'Microprocessors': {
    lectureNotes: 'https://example.com/microprocessors-lecture-notes',
    practiceProblems: 'https://example.com/microprocessors-practice-problems',
    videoLectures: 'https://example.com/microprocessors-video-lectures'
  },
  'Theory of Computation': {
    lectureNotes: 'https://example.com/toc-lecture-notes',
    practiceProblems: 'https://example.com/toc-practice-problems',
    videoLectures: 'https://example.com/toc-video-lectures'
  },
  'Design and Analysis of Algorithms': {
    lectureNotes: 'https://example.com/daa-lecture-notes',
    practiceProblems: 'https://example.com/daa-practice-problems',
    videoLectures: 'https://example.com/daa-video-lectures'
  },
  'Compiler Design': {
    lectureNotes: 'https://example.com/compiler-design-lecture-notes',
    practiceProblems: 'https://example.com/compiler-design-practice-problems',
    videoLectures: 'https://example.com/compiler-design-video-lectures'
  },
  'Artificial Intelligence': {
    lectureNotes: 'https://example.com/ai-lecture-notes',
    practiceProblems: 'https://example.com/ai-practice-problems',
    videoLectures: 'https://example.com/ai-video-lectures'
  },
  'Machine Learning': {
    lectureNotes: 'https://example.com/ml-lecture-notes',
    practiceProblems: 'https://example.com/ml-practice-problems',
    videoLectures: 'https://example.com/ml-video-lectures'
  },
  'Web Technologies': {
    lectureNotes: 'https://example.com/web-tech-lecture-notes',
    practiceProblems: 'https://example.com/web-tech-practice-problems',
    videoLectures: 'https://example.com/web-tech-video-lectures'
  },
  'Computers Graphics': {
    lectureNotes: 'https://example.com/computer-graphics-lecture-notes',
    practiceProblems: 'https://example.com/computer-graphics-practice-problems',
    videoLectures: 'https://example.com/computer-graphics-video-lectures'
  },
  'Embedded Systems': {
    lectureNotes: 'https://example.com/embedded-systems-lecture-notes',
    practiceProblems: 'https://example.com/embedded-systems-practice-problems',
    videoLectures: 'https://example.com/embedded-systems-video-lectures'
  },
  'Cloud Computing': {
    lectureNotes: 'https://example.com/cloud-computing-lecture-notes',
    practiceProblems: 'https://example.com/cloud-computing-practice-problems',
    videoLectures: 'https://example.com/cloud-computing-video-lectures'
  },
  'Big Data Analytics': {
    lectureNotes: 'https://example.com/bda-lecture-notes',
    practiceProblems: 'https://example.com/bda-practice-problems',
    videoLectures: 'https://example.com/bda-video-lectures'
  },
  'Mobile App Development': {
    lectureNotes: 'https://example.com/mobile-app-dev-lecture-notes',
    practiceProblems: 'https://example.com/mobile-app-dev-practice-problems',
    videoLectures: 'https://example.com/mobile-app-dev-video-lectures'
  },
  'IoT Systems': {
    lectureNotes: 'https://example.com/iot-systems-lecture-notes',
    practiceProblems: 'https://example.com/iot-systems-practice-problems',
    videoLectures: 'https://example.com/iot-systems-video-lectures'
  },
  'Project Management': {
    lectureNotes: 'https://example.com/project-management-lecture-notes',
    practiceProblems: 'https://example.com/project-management-practice-problems',
    videoLectures: 'https://example.com/project-management-video-lectures'
  },
  'Cyber Security': {
    lectureNotes: 'https://example.com/cyber-security-lecture-notes',
    practiceProblems: 'https://example.com/cyber-security-practice-problems',
    videoLectures: 'https://example.com/cyber-security-video-lectures'
  },
  'Blockchain Technology': {
    lectureNotes: 'https://example.com/blockchain-tech-lecture-notes',
    practiceProblems: 'https://example.com/blockchain-tech-practice-problems',
    videoLectures: 'https://example.com/blockchain-tech-video-lectures'
  },
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


        <h1 className="text-4xl font-bold text-center mb-6">{subject} Study Material</h1>
            

        {materials ? (
          <div className="space-y-4 m-20">
            {/* Lecture Notes */}
            <div className="bg-white p-4 rounded-lg shadow-md">
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
            <div className="bg-white p-4 rounded-lg shadow-md">
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
            <div className="bg-white p-4 rounded-lg shadow-md">
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

             
            </div>
            <div className=''>
              <div className='m-6'>
              <iframe width="500" height="315" src="https://www.youtube.com/embed/LwCRRUa8yTU?si=57iMy3ATPViIwbV9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className='m-6'>
              <iframe width="500" height="315" src="https://www.youtube.com/embed/JnTa9XtvmfI?si=x84he9MSslbC8HN9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              
             
              
              
            </div>
          </div> 

        ) : (
          <p className="text-center text-gray-500">No study materials available for this subject.</p>
        )}
      </div>
    </div>
  );
};

export default StudyMaterialPage;


