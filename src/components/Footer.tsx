export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-green text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4">© 2025 Salman Ali. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="text-forest-green-200 hover:text-white transition-colors underline"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

