import type { About as AboutType } from '../types/portfolio';

interface AboutProps {
  data: AboutType;
}

export const About = ({ data }: AboutProps) => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            {data.imageUrl ? (
              <div className="relative">
                <div className="absolute inset-0 bg-forest-green-200 rounded-2xl transform -rotate-3 opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={data.imageUrl}
                    alt="About Salman Ali"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute inset-0 bg-forest-green-200 rounded-2xl transform -rotate-3 opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-forest-green-100 to-forest-green-200 h-96 flex items-center justify-center">
                  <div className="text-forest-green-600 text-6xl">👷</div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-3">
                {data.title}
              </h2>
              <div className="w-24 h-1 bg-forest-green mb-4 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-600 font-medium mb-6">
                {data.subtitle}
              </p>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {data.content}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
