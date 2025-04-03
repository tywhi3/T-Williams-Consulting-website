
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-brand-navy font-cormorant text-2xl font-semibold tracking-wider"
          >
            TWC
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-brand-navy hover:text-brand-slate font-montserrat text-sm uppercase tracking-wider transition-colors">About</a>
            <a href="#services" className="text-brand-navy hover:text-brand-slate font-montserrat text-sm uppercase tracking-wider transition-colors">Services</a>
            <a href="#testimonials" className="text-brand-navy hover:text-brand-slate font-montserrat text-sm uppercase tracking-wider transition-colors">Testimonials</a>
            <a href="#contact" className="text-brand-navy hover:text-brand-slate font-montserrat text-sm uppercase tracking-wider transition-colors">Contact</a>
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-transparent border-brand-blush text-brand-navy hover:bg-brand-blush/10 hover:text-brand-navy transition-all"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-brand-navy focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-gray-100 py-4 shadow-md animate-fade-in">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a 
                href="#about" 
                onClick={toggleMobileMenu}
                className="text-brand-navy font-montserrat text-sm uppercase tracking-wider py-2"
              >
                About
              </a>
              <a 
                href="#services" 
                onClick={toggleMobileMenu}
                className="text-brand-navy font-montserrat text-sm uppercase tracking-wider py-2"
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                onClick={toggleMobileMenu}
                className="text-brand-navy font-montserrat text-sm uppercase tracking-wider py-2"
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                onClick={toggleMobileMenu}
                className="text-brand-navy font-montserrat text-sm uppercase tracking-wider py-2"
              >
                Contact
              </a>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full bg-transparent border-brand-blush text-brand-navy hover:bg-brand-blush/10 hover:text-brand-navy transition-all"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
