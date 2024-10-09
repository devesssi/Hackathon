import React, { useState } from 'react';

const coursesData = [
  {
    semester: 'Semester 1',
    subjects: ['Mathematics I', 'Physics I', 'Introduction to Programming', 'Engineering Mechanics'],
  },
  {
    semester: 'Semester 2',
    subjects: ['Mathematics II', 'Chemistry', 'Data Structures', 'Digital Electronics'],
  },
  {
    semester: 'Semester 3',
    subjects: ['Mathematics III', 'Object-Oriented Programming', 'Computer Networks', 'Operating Systems'],
  },
  {
    semester: 'Semester 4',
    subjects: ['Discrete Mathematics', 'Database Management Systems', 'Software Engineering', 'Microprocessors'],
  },
  {
    semester: 'Semester 5',
    subjects: ['Theory of Computation', 'Design and Analysis of Algorithms', 'Compiler Design', 'Artificial Intelligence'],
  },
  {
    semester: 'Semester 6',
    subjects: ['Machine Learning', 'Web Technologies', 'Computer Graphics', 'Embedded Systems'],
  },
  {
    semester: 'Semester 7',
    subjects: ['Cloud Computing', 'Big Data Analytics', 'Mobile App Development', 'IoT Systems'],
  },
  {
    semester: 'Semester 8',
    subjects: ['Project Management', 'Cyber Security', 'Blockchain Technology', 'Final Year Project'],
  },
];

const CoursesPage = () => {
  // State to track which semesters are expanded
  const [expandedSemester, setExpandedSemester] = useState(null);

  // Toggle the selected semester
  const toggleSemester = (index) => {
    // If the clicked semester is already expanded, collapse it, otherwise expand it
    setExpandedSemester(expandedSemester === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-12">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-10">Explore Courses</h1>

        {/* Semester List */}
        {coursesData.map((semester, index) => (
          <div key={index} className="mb-6">
            {/* Semester Card */}
            <div
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer flex justify-between items-center"
              onClick={() => toggleSemester(index)}
            >
              <h2 className="text-2xl font-semibold">{semester.semester}</h2>
              <span className="text-xl font-bold">
                {expandedSemester === index ? '-' : '+'} {/* Toggle icon */}
              </span>
            </div>

            {/* Subjects for the selected semester */}
            {expandedSemester === index && (
              <div className="mt-4 pl-6">
                <ul className="space-y-2">
                  {semester.subjects.map((subject, idx) => (
                    <li key={idx} className="bg-gray-50 p-2 rounded-lg shadow-sm">
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
