import {
  FaChartLine,
  FaCertificate,
  FaListCheck,
  FaBuilding,
  FaTemperatureHalf,
  FaRecycle,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa6';

export const CoursesAndCertifications = () => {
  const courses = [
    {
      title: "Business and Data Analysis Skills",
      provider: "edX",
      icon: <FaChartLine />,
      tags: ['Data Analysis', 'Business Intelligence', 'SQL', 'Data Visualization', 'Business Strategy'] // Added Tags
    },
    {
      title: "ISO 9001:2015 Quality Management System (QMS)",
      provider: "Alison",
      icon: <FaCertificate />,
      tags: ['Quality Management', 'ISO 9001', 'QMS', 'Auditing', 'Process Improvement'] // Added Tags
    },
    {
      title: "Project Management Essentials",
      provider: "Howard University, Coursera",
      icon: <FaListCheck />,
      tags: ['Project Management', 'Agile', 'Scrum', 'Project Planning', 'Risk Management'] // Added Tags
    },
    {
      title: "Autodesk Certified Professional: Revit for Architectural Design",
      provider: "Coursera",
      icon: <FaBuilding />,
      tags: ['Revit', 'BIM', '3D Modeling', 'Architectural Design', 'Construction Documentation'] // Added Tags
    },
    {
      title: "IABP Summer School on Building Physics",
      provider: "Budapest",
      icon: <FaTemperatureHalf />,
      tags: ['Building Physics', 'Thermal Analysis', 'Energy Efficiency', 'Sustainability'] // Added Tags
    },
    {
      title: "Circular Economy and Sustainability Management (CESM)",
      provider: "Managing the transition towards circular economy",
      icon: <FaRecycle />,
      tags: ['Circular Economy', 'Sustainability', 'Waste Reduction', 'Eco-Design', 'Resource Management'] // Added Tags
    },
    {
      title: "Managing the unknown – Design theory and methods for innovation",
      provider: "Paris Mines-PSL, Paris",
      icon: <FaLightbulb />,
      tags: ['High Uncertainty', 'Innovation', 'Strategic Thinking', 'Adaptability', 'Design Theory'] // Added Tags
    },
    {
      title: "Introduction to Entrepreneurship",
      provider: "Munich University of Applied Sciences (MUAS)",
      icon: <FaRocket />,
      tags: ['Entrepreneurship', 'Business Strategy', 'Innovation', 'Startup', 'Management']
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-4">
            Courses & Certifications
          </h2>
          <div className="w-24 h-1 bg-forest-green mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development to stay ahead in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-forest-green-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>

              <div className="relative z-10 mb-4">
                <div className="w-12 h-12 bg-forest-green-50 rounded-xl flex items-center justify-center group-hover:bg-forest-green transition-colors duration-300 shadow-sm">
                  <span className="text-xl text-forest-green group-hover:text-white transition-colors duration-300">
                    {course.icon}
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-forest-green transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-xs font-medium text-forest-green-600 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-green"></span>
                  {course.provider}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                  {course.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-0.5 bg-gray-50 text-gray-600 rounded-full text-[10px] font-medium border border-gray-200 group-hover:border-forest-green-200 group-hover:bg-forest-green-50 group-hover:text-forest-green-700 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};