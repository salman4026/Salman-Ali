import type { Achievement, Volunteering } from '../types/portfolio';

interface AchievementsProps {
  achievements: Achievement[];
  volunteering: Volunteering[];
}

export const Achievements = ({ achievements, volunteering }: AchievementsProps) => {
  return (
    <section id="achievements" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-4">
            Achievements & Volunteering
          </h2>
          <div className="w-24 h-1 bg-forest-green mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Recognition and community contributions
          </p>
        </div>

        {/* Two-Column Grid: Achievements (Left) | Volunteering (Right) */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column: Achievements & Awards */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              Achievements & Awards
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-base font-bold text-gray-900 flex-1 group-hover:text-forest-green transition-colors">
                      {achievement.title}
                    </h4>
                    {achievement.year && (
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold border border-amber-200 whitespace-nowrap">
                        {achievement.year}
                      </span>
                    )}
                  </div>
                  {achievement.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Volunteering & Leadership */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              Volunteering & Leadership
            </h3>
            <div className="space-y-6">
              {volunteering.map((vol, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {vol.role}
                      </h4>
                      <p className="text-forest-green-600 font-semibold text-sm flex items-center gap-2">
                        <span className="text-green-600">•</span>
                        {vol.organization}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-forest-green-50 text-forest-green-700 rounded-full text-xs font-bold border border-forest-green-200 whitespace-nowrap">
                      {vol.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {vol.description}
                  </p>

                  {vol.stats && vol.stats.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                      {vol.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="bg-forest-green-50 rounded-lg p-2.5 text-center border border-forest-green-100"
                        >
                          <p className="text-forest-green-700 font-bold text-xs leading-tight">
                            {stat}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
