import type { ExperienceItem } from '../types/portfolio';

interface ExperienceProps {
  data: ExperienceItem[];
}

export const Experience = ({ data }: ExperienceProps) => {
  return (
    <section id="experience" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-3">
            Experience
          </h2>
          <div className="w-24 h-1 bg-forest-green mx-auto mt-2 rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">Professional journey and expertise</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-forest-green mb-2">
                  {item.title}
                </h3>
                <p className="text-base font-semibold text-gray-800 mb-1">
                  {item.company}
                </p>
                {item.location && (
                  <p className="text-sm text-gray-600 mb-2">
                    📍 {item.location}
                  </p>
                )}
                <p className="text-sm text-forest-green-700 font-medium">
                  {item.startDate} — {item.endDate}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-4 text-sm text-gray-700">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="leading-relaxed">{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-forest-green-50 text-forest-green-700 rounded-full text-xs font-medium border border-forest-green-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
