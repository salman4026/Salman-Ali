import { useState } from 'react';
import type { Project } from '../types/portfolio';
import { Modal } from './Modal';

interface ProjectsProps {
  data: Project[];
}

export const Projects = ({ data }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-3">
              Projects
            </h2>
            <div className="w-24 h-1 bg-forest-green mx-auto mt-2 rounded-full"></div>
            <p className="text-lg text-gray-600 mt-4">Engineering Portfolio</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {data.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-forest-green">{project.title}</h3>
                  <span className="text-forest-green-700 font-semibold bg-forest-green-50 px-3 py-1 rounded-full text-sm flex-shrink-0 ml-2">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-forest-green-50 text-forest-green-700 rounded-full text-xs font-medium border border-forest-green-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openModal(project)}
                  className="px-6 py-2 bg-forest-green text-white rounded-lg font-semibold hover:bg-forest-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2"
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedProject.title}>
          <div className="space-y-6">
            {/* Header Info */}
            <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-gray-200">
              {selectedProject.year && (
                <span className="px-3 py-1 bg-forest-green-50 text-forest-green-700 rounded-full text-sm font-semibold">
                  {selectedProject.year}
                </span>
              )}
              {selectedProject.role && (
                <span className="text-gray-600 text-sm font-medium">{selectedProject.role}</span>
              )}
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">{selectedProject.description}</p>
              {selectedProject.details && (
                <p className="text-gray-700 leading-relaxed">{selectedProject.details}</p>
              )}
            </div>

            {/* Images Gallery */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-forest-green mb-3">Project Images</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.images.map((imageUrl, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg overflow-hidden border border-gray-200"
                    >
                      <img
                        src={imageUrl}
                        alt={`${selectedProject.title} - Image ${idx + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {selectedProject.technologies && selectedProject.technologies.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-forest-green mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-forest-green mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-forest-green-50 text-forest-green-700 rounded-full text-sm font-medium border border-forest-green-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links */}
            {(selectedProject.externalLink || selectedProject.caseStudyUrl) && (
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                {selectedProject.externalLink && (
                  <a
                    href={selectedProject.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-forest-green text-white rounded-lg font-semibold hover:bg-forest-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2"
                  >
                    View External Link →
                  </a>
                )}
                {selectedProject.caseStudyUrl && selectedProject.caseStudyUrl !== '#' && (
                  <a
                    href={selectedProject.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-forest-green border-2 border-forest-green rounded-lg font-semibold hover:bg-forest-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2"
                  >
                    View Case Study →
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
