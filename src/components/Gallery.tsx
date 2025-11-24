import type { GalleryItem } from '../types/portfolio';

interface GalleryProps {
  data: GalleryItem[];
}

export const Gallery = ({ data }: GalleryProps) => {
  return (
    <section id="gallery" className="py-16 md:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-3">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-forest-green mx-auto mt-2 rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">Visual showcase of work and projects</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=' + encodeURIComponent(item.title);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
