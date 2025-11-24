import { useState } from 'react';
import type { Testimonial } from '../types/portfolio';

interface TestimonialsProps {
  data: Testimonial[];
}

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-3">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-forest-green mx-auto mt-2 rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">What colleagues and clients say</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative bg-forest-green-50 border border-forest-green-100 rounded-xl p-8 md:p-12 shadow-md">
            <div className="text-center">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-forest-green mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                "{data[currentIndex].quote}"
              </p>
              <div>
                <p className="font-bold text-forest-green text-lg">
                  {data[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {data[currentIndex].role}
                  {data[currentIndex].company && (
                    <span>, {data[currentIndex].company}</span>
                  )}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-forest-green text-white rounded-full hover:bg-forest-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex gap-2 items-center">
                {data.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-forest-green w-8'
                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-forest-green text-white rounded-full hover:bg-forest-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
