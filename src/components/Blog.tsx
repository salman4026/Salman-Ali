import { useState } from 'react';
import type { BlogPost } from '../types/portfolio';
import { Modal } from './Modal';

interface BlogProps {
  data: BlogPost[];
}

export const Blog = ({ data }: BlogProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <>
      <section id="blog" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-3">
              Blog
            </h2>
            <div className="w-24 h-1 bg-forest-green mx-auto mt-2 rounded-full"></div>
            <p className="text-lg text-gray-600 mt-4">Latest insights and articles</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((post, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {post.heroImage && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.heroImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-forest-green-50 text-forest-green-700 rounded-full text-xs font-medium border border-forest-green-100">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-forest-green mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{post.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <button
                  onClick={() => openModal(post)}
                  className="text-forest-green font-semibold hover:text-forest-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2 rounded"
                >
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      {selectedPost && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedPost.title}>
          <div className="space-y-6">
            {/* Header Info */}
            <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-gray-200">
              <span className="px-3 py-1 bg-forest-green-50 text-forest-green-700 rounded-full text-sm font-medium border border-forest-green-100">
                {selectedPost.category}
              </span>
              <span className="text-gray-600 text-sm">{selectedPost.date}</span>
              <span className="text-gray-600 text-sm">{selectedPost.readTime}</span>
            </div>

            {/* Hero Image */}
            {selectedPost.heroImage && (
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={selectedPost.heroImage}
                  alt={selectedPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}

            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg font-medium">
                {selectedPost.description}
              </p>
            </div>

            {/* Full Content */}
            {selectedPost.fullContent && (
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedPost.fullContent}
                </div>
              </div>
            )}

            {/* Tags */}
            {selectedPost.tags && selectedPost.tags.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-forest-green mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-forest-green-50 text-forest-green-700 rounded-full text-sm font-medium border border-forest-green-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* External Links */}
            {(selectedPost.readMoreLink || selectedPost.url) && (
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                {selectedPost.readMoreLink && selectedPost.readMoreLink !== '#' && (
                  <a
                    href={selectedPost.readMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-forest-green text-white rounded-lg font-semibold hover:bg-forest-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2"
                  >
                    Read Full Article →
                  </a>
                )}
                {selectedPost.url && selectedPost.url !== '#' && (
                  <a
                    href={selectedPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-forest-green border-2 border-forest-green rounded-lg font-semibold hover:bg-forest-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2"
                  >
                    View Original →
                  </a>
                )}
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};
