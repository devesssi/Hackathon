import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Example images for subjects (replace with actual URLs or local assets)
const subjectImages = {
  'Engineering Mathematics-I': 'https://media.geeksforgeeks.org/wp-content/uploads/20230503013704/Mathematics-Banner.webp',
  'Engineering Physics-I': 'https://www.physicstutoronline.co.uk/wp-content/uploads/2019/05/physics1.jpg',
  'Engineering Chemistry-I': 'https://www.thoughtco.com/thmb/6MsMmUK27akFhb8i89kj95J5iko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg',
  'Engineering Mechanics': 'https://media.licdn.com/dms/image/D5612AQEO2QFsluSvdg/article-cover_image-shrink_720_1280/0/1678680187327?e=2147483647&v=beta&t=x_CAMtSB7ib9Za94ZVAr9_juVYYv3uNEP5nnhTKSsY8',
  'Basic Electrical Engineering': 'https://elecsafety.co.uk/wp-content/uploads/2022/10/Basic-electrical-course.jpg',
  'Engineering Mathematics II': 'https://media.geeksforgeeks.org/wp-content/uploads/20230503013704/Mathematics-Banner.webp',
  'Engineering Physics-II': 'https://www.physicstutoronline.co.uk/wp-content/uploads/2019/05/physics1.jpg',
  'Engineering Chemistry-II': 'https://www.thoughtco.com/thmb/6MsMmUK27akFhb8i89kj95J5iko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg',
  'C Programming': 'https://miro.medium.com/v2/resize:fit:1400/1*0D9zGIQXQEIZFYD9tpRXgQ.png',
  'Engineering Graphics': 'https://i0.wp.com/theconstructor.org/wp-content/uploads/2017/12/instruments-used-in-engineering-drawings.jpg?fit=614%2C374&ssl=1',
  
  'Engineering Mathematics III': 'https://media.geeksforgeeks.org/wp-content/uploads/20230503013704/Mathematics-Banner.webp',
  'DLCA': 'https://www.autodesk.com/products/fusion-360/blog/wp-content/uploads/2023/07/AdobeStock_613706823-1024x614.jpeg',
  'Discrete Structure and Graph Theory': 'https://i.ytimg.com/vi/TwLYYOMAK4o/hqdefault.jpg',
  'Computer Graphics': 'https://images.squarespace-cdn.com/content/v1/54851541e4b0fb60932ad015/1496645800597-N02J164ZYAE4X4PJZTKY/image-asset.png',
  'Data Structures': 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feb93edef-9bb2-45f5-a0cd-fd44f23e44f0_1728x1046.png',
  'Discrete Mathematics': 'https://via.placeholder.com/150?text=Discrete+Maths',
  'Database Management Systems': 'https://via.placeholder.com/150?text=DBMS',
  'Software Engineering': 'https://via.placeholder.com/150?text=Software+Eng',
  'Microprocessors': 'https://via.placeholder.com/150?text=Microprocessors',
  'Theory of Computation': 'https://via.placeholder.com/150?text=Theory+of+Computation',
  'Design and Analysis of Algorithms': 'https://via.placeholder.com/150?text=Algorithms',
  'Compiler Design': 'https://via.placeholder.com/150?text=Compiler+Design',
  'Artificial Intelligence': 'https://via.placeholder.com/150?text=AI',
  'Machine Learning': 'https://via.placeholder.com/150?text=ML',
  'Web Technologies': 'https://via.placeholder.com/150?text=Web+Technologies',
  'Computers Graphics': 'https://via.placeholder.com/150?text=Graphics',
  'Embedded Systems': 'https://via.placeholder.com/150?text=Embedded+Systems',
  'Cloud Computing': 'https://via.placeholder.com/150?text=Cloud+Computing',
  'Big Data Analytics': 'https://via.placeholder.com/150?text=Big+Data',
  'Mobile App Development': 'https://via.placeholder.com/150?text=Mobile+Apps',
  'IoT Systems': 'https://via.placeholder.com/150?text=IoT',
  'Project Management': 'https://via.placeholder.com/150?text=Project+Management',
  'Cyber Security': 'https://via.placeholder.com/150?text=Cyber+Security',
  'Blockchain Technology': 'https://via.placeholder.com/150?text=Blockchain',
  'Final Year Project': 'https://via.placeholder.com/150?text=Final+Year+Project',
};

const coursesData = [
  {
    semester: 'Semester 1',
    subjects: ['Engineering Mathematics-I', 'Engineering Physics-I', 'Engineering Chemistry-I', 'Engineering Mechanics', 'Basic Electrical Engineering'],
  },
  {
    semester: 'Semester 2',
    subjects: ['Engineering Mathematics II', 'Engineering Physics-II', 'Engineering Chemistry-II', 'C Programming', 'Engineering Graphics'],
  },
  {
    semester: 'Semester 3',
    subjects: ['Engineering Mathematics III', 'DLCA', 'Discrete Structure and Graph Theory', 'Computer Graphics', 'Data Structures'],
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
  const [expandedSemester, setExpandedSemester] = useState(null);

  const toggleSemester = (index) => {
    setExpandedSemester(expandedSemester === index ? null : index);
  };

  return (
    <div className="min-h-screen  bg-gray-300 mt-12">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-10">Explore Courses</h1>

        {coursesData.map((semester, index) => (
          <div key={index} className="mb-6">
            <div
              className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer flex justify-between items-center"
              onClick={() => toggleSemester(index)}
            >
              <h2 className="text-2xl font-semibold">{semester.semester}</h2>
              <span className="text-xl font-bold">
                {expandedSemester === index ? '-' : '+'}
              </span>
            </div>

            {expandedSemester === index && (
              <div className="mt-4 pl-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {semester.subjects.map((subject, idx) => (
                    <Link to={`/study-material/${subject}`} key={idx} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg text-center">
                      <img
                        src={subjectImages[subject] || 'https://via.placeholder.com/150'}
                        alt={subject}
                        className="w-full h-32 object-cover mb-4 rounded-lg"
                      />
                      <h3 className="text-lg font-semibold">{subject}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;


