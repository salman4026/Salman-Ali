import { useState, useEffect } from 'react';

// Simplified navigation - only essential sections
const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Education & Skills', target: 'education' },
  { label: 'Research', target: 'research' },
  { label: 'Projects', target: 'projects' },
  { label: 'Blog', target: 'blog' },
  { label: 'Contact', target: 'contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.target);
      const scrollPosition = window.scrollY + 100; // Account for navbar height + offset
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the bottom of the page (within 100px)
      const isNearBottom = window.scrollY + windowHeight >= documentHeight - 100;

      if (isNearBottom) {
        // If near bottom, set the last section (Contact) as active
        setActiveSection('contact');
        return;
      }

      // Otherwise, find the active section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Check if scroll position is within this section's bounds
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (target: string) => {
    // Immediately update active section when clicking
    setActiveSection(target);
    
    const element = document.getElementById(target);
    if (element) {
      const offset = 80; // Account for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg'
          : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl md:text-2xl font-bold text-forest-green hover:text-forest-green-700 transition-colors focus:outline-none"
            >
              Salman Ali
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                  activeSection === item.target
                    ? 'text-forest-green'
                    : 'text-gray-700 hover:text-forest-green-700'
                }`}
              >
                {item.label}
                {activeSection === item.target && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest-green rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-forest-green-50 hover:text-forest-green-700 focus:outline-none focus:ring-2 focus:ring-forest-green transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-1 pt-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors text-left ${
                  activeSection === item.target
                    ? 'bg-forest-green text-white'
                    : 'text-gray-700 hover:bg-forest-green-50 hover:text-forest-green-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
