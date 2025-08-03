import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Taha Shahid
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('hero')} className="hover:text-blue-400 transition-colors duration-300">Home</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-blue-400 transition-colors duration-300">Education</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors duration-300">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors duration-300">Skills</button>
              <button onClick={() => scrollToSection('certifications')} className="hover:text-blue-400 transition-colors duration-300">Certifications</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors duration-300">Contact</button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 hover:text-blue-400 transition-colors duration-300 w-full text-left">Home</button>
              <button onClick={() => scrollToSection('education')} className="block px-3 py-2 hover:text-blue-400 transition-colors duration-300 w-full text-left">Education</button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 hover:text-blue-400 transition-colors duration-300 w-full text-left">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 hover:text-blue-400 transition-colors duration-300 w-full text-left">Skills</button>
              <button onClick={() => scrollToSection('certifications')} className="block px-3 py-2 hover:text-blue-400 transition-colors duration-300 w-full text-left">Certifications</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 hover:text-blue-400 transition-colors duration-300 w-full text-left">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
