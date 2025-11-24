import type { Publication } from '../types/portfolio';

interface ResearchProps {
  publications: Publication[];
  workshops: Publication[];
}

export const Research = ({ publications, workshops }: ResearchProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'conference':
        return '📊';
      case 'journal':
        return '📄';
      case 'workshop':
        return '🔧';
      default:
        return '📚';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'journal':
        return 'bg-purple-50 border-purple-200 text-purple-700';
      case 'workshop':
        return 'bg-orange-50 border-orange-200 text-orange-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  return (
    <section id="research" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-4">
            Research & Publications
          </h2>
          <div className="w-24 h-1 bg-forest-green mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Academic contributions and professional development
          </p>
        </div>

        {/* Two-Column Grid: Publications (Left) | Workshops (Right) */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column: Publications & Conference Presentations */}
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-2xl">📚</span>
              Publications & Conferences
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-forest-green-200"></div>

              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 bg-white border-2 border-forest-green rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-sm">{getTypeIcon(pub.type)}</span>
                    </div>

                    {/* Content Card */}
                    <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-base font-bold text-gray-900 flex-1">
                          {pub.title}
                        </h4>
                        {pub.year && (
                          <span className="px-2.5 py-1 bg-forest-green-50 text-forest-green-700 rounded-full text-xs font-bold border border-forest-green-200 whitespace-nowrap">
                            {pub.year}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 font-medium mb-2">
                        {pub.venue}
                      </p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(pub.type)}`}>
                        {pub.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Workshops & Training */}
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-2xl">🔧</span>
              Workshops & Training
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200"></div>

              <div className="space-y-6">
                {workshops.map((workshop, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-sm">{getTypeIcon(workshop.type)}</span>
                    </div>

                    {/* Content Card */}
                    <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-base font-bold text-gray-900 flex-1">
                          {workshop.title}
                        </h4>
                        {workshop.year && (
                          <span className="px-2.5 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-bold border border-orange-200 whitespace-nowrap">
                            {workshop.year}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 font-medium">
                        {workshop.venue}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
