import type { EducationItem, Skill } from '../types/portfolio';

interface EducationSkillsProps {
  education: EducationItem[];
  skills: Skill[];
}

export const EducationSkills = ({ education, skills }: EducationSkillsProps) => {
  return (
    <section id="education" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-4">
            Education & Skills
          </h2>
          <div className="w-24 h-1 bg-forest-green mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Academic qualifications and technical expertise
          </p>
        </div>

        {/* Two-Column Grid: Education (Left) | Skills (Right) */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column: Education */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 relative"
                >
                  {/* Top Section: Title and GPA/Honors */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 pr-4">
                      <h4 className="text-base font-bold text-gray-900 mb-2">
                        {item.degree}
                      </h4>
                      <p className="text-forest-green-600 font-semibold text-sm flex items-center gap-2">
                        <span className="text-green-600">•</span>
                        {item.institution}
                      </p>
                    </div>

                    {/* GPA/Honors Badge in Top Right */}
                    {(item.gpa || item.honors) && (
                      <div className="flex flex-col items-end gap-1 min-w-fit">
                        {item.gpa && (
                          <div className="px-3 py-1 bg-forest-green-50 rounded-full border border-forest-green-200">
                            <p className="text-xs font-bold text-forest-green-700 whitespace-nowrap">
                              GPA: {item.gpa}
                            </p>
                          </div>
                        )}
                        {item.honors && (
                          <div className="px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                            <p className="text-xs font-bold text-amber-700 whitespace-nowrap">
                              {item.honors}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Location and Period */}
                  <div className="space-y-1 mb-3">
                    {item.location && (
                      <p className="text-gray-600 text-xs flex items-center gap-1.5">
                        <span>📍</span>
                        {item.location}
                      </p>
                    )}
                    <p className="text-gray-700 font-medium text-xs">
                      {item.period}
                    </p>
                  </div>

                  {/* Scholarship */}
                  {item.scholarship && (
                    <div className="mt-3 p-2.5 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-xs font-semibold text-green-700 flex items-center gap-2">
                        <span>🏆</span>
                        {item.scholarship}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills / Software Proficiency */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-2xl">💻</span>
              Software Proficiency
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Logo Box */}
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center mb-3 overflow-hidden p-4">
                    {skill.imageUrl ? (
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-4xl text-forest-green">
                        💻
                      </span>
                    )}
                  </div>
                  {/* Text Below */}
                  <span className="text-base font-bold text-gray-900 mb-1 group-hover:text-forest-green transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
