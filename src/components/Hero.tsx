import type { Hero as HeroType } from '../types/portfolio';

interface HeroProps {
  data: HeroType;
}

export const Hero = ({ data }: HeroProps) => {
  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      const offset = 80; // Account for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 via-white to-forest-green-50/30 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-green leading-tight">
                {data.name}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                {data.role}
              </h2>
              <p className="text-lg md:text-xl text-forest-green-700 font-medium">
                {data.subTagline}
              </p>
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {data.ctaButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(button.target)}
                  className={`px-6 py-3 rounded-lg font-semibold text-base transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2 ${
                    index === 0
                      ? 'bg-forest-green text-white hover:bg-forest-green-700 shadow-lg hover:shadow-xl'
                      : 'bg-white text-forest-green border-2 border-forest-green hover:bg-forest-green-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-forest-green-200 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {data.imageUrl ? (
                  <img
                    src={data.imageUrl}
                    alt="Structural Engineering"
                    className="w-full h-auto object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-forest-green-100 to-forest-green-200 flex items-center justify-center">
                    <div className="text-forest-green-600 text-6xl">🏗️</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
