import { useState } from 'react';
import type { Contact as ContactType } from '../types/portfolio';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaPaperPlane
} from 'react-icons/fa6';

interface ContactProps {
  data: ContactType;
}

export const Contact = ({ data }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real application, you would send this to a backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', projectType: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const getSocialIcon = (platform: string) => {
    const icons: Record<string, React.ReactNode> = {
      linkedin: <FaLinkedin />,
      github: <FaGithub />,
      twitter: <FaTwitter />,
      instagram: <FaInstagram />,
      facebook: <FaFacebook />,
      youtube: <FaYoutube />,
    };
    return icons[platform.toLowerCase()] || null;
  };

  const getSocialColor = (platform: string) => {
    const colors: Record<string, string> = {
      linkedin: 'text-[#0077b5] bg-[#0077b5]/10 hover:bg-[#0077b5]/20',
      github: 'text-[#333] bg-[#333]/10 hover:bg-[#333]/20',
      twitter: 'text-[#1DA1F2] bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20',
      instagram: 'text-[#E1306C] bg-[#E1306C]/10 hover:bg-[#E1306C]/20',
      facebook: 'text-[#4267B2] bg-[#4267B2]/10 hover:bg-[#4267B2]/20',
      youtube: 'text-[#FF0000] bg-[#FF0000]/10 hover:bg-[#FF0000]/20',
    };
    return colors[platform.toLowerCase()] || 'text-gray-600 bg-gray-100 hover:bg-gray-200';
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-green mb-3">
            Contact
          </h2>
          <div className="w-24 h-1 bg-forest-green mx-auto mt-2 rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">Get in touch for collaborations and inquiries</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Info & Socials */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-forest-green-50 rounded-xl flex items-center justify-center mb-6">
                <FaEnvelope className="text-2xl text-forest-green" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-forest-green">
                    <FaLocationDot />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</p>
                    <p className="font-semibold text-gray-800">{data.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-forest-green">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                    <a href={`mailto:${data.email}`} className="font-semibold text-gray-800 hover:text-forest-green transition-colors">
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-forest-green">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                    <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="font-semibold text-gray-800 hover:text-forest-green transition-colors">
                      {data.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Connect with me</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {data.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${getSocialColor(social.platform)}`}
                  >
                    <span className="text-xl">{getSocialIcon(social.platform)}</span>
                    <span className="font-semibold text-sm capitalize">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 bg-forest-green-50 rounded-xl flex items-center justify-center">
                <FaPaperPlane className="text-2xl text-forest-green" />
              </div>
            </div>

            {submitted ? (
              <div className="p-6 bg-green-50 border border-green-100 text-green-800 rounded-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <FaPaperPlane className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-100'
                        }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-100'
                        }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green transition-all ${errors.projectType ? 'border-red-500 bg-red-50' : 'border-gray-100'
                      }`}
                  >
                    <option value="">Select project type</option>
                    <option value="structural-design">Structural Design</option>
                    <option value="consultation">Consultation</option>
                    <option value="research">Research Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.projectType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Project Summary
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green transition-all resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-100'
                      }`}
                    placeholder="Share your project goals, budget, timelines, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-forest-green text-white rounded-xl font-bold hover:bg-forest-green-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  <span>Submit Brief</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

