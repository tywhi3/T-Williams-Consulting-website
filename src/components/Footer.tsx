
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-cormorant text-xl font-semibold mb-4">T. Williams Consulting</h3>
            <p className="font-montserrat text-sm text-brand-soft-gray mb-6 max-w-xs">
              Elevating small business operations with expert guidance, process optimization, and technical documentation solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-soft-gray hover:text-brand-blush transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brand-soft-gray hover:text-brand-blush transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-brand-soft-gray hover:text-brand-blush transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-brand-soft-gray hover:text-brand-blush transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-cormorant text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li><a href="#about" className="text-brand-soft-gray hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-brand-soft-gray hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-brand-soft-gray hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-brand-soft-gray hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-brand-soft-gray hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-brand-soft-gray hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-cormorant text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li><a href="#" className="text-brand-soft-gray hover:text-white transition-colors">Strategic Planning & Goal Setting</a></li>
              <li><a href="#" className="text-brand-soft-gray hover:text-white transition-colors">Process Optimization</a></li>
              <li><a href="#" className="text-brand-soft-gray hover:text-white transition-colors">Requirements Analysis</a></li>
              <li><a href="#" className="text-brand-soft-gray hover:text-white transition-colors">Technical Documentation</a></li>
              <li><a href="#" className="text-brand-soft-gray hover:text-white transition-colors">Process Automation Support</a></li>
              <li><a href="#" className="text-brand-soft-gray hover:text-white transition-colors">PMO and Template Support</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-cormorant text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="font-montserrat text-sm text-brand-soft-gray mb-4">
              Subscribe to our newsletter for small business tips, insights, and special offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-brand-slate/20 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-brand-blush placeholder-brand-soft-gray/50 font-montserrat text-sm"
                />
                <button
                  type="submit"
                  className="bg-brand-blush text-brand-navy px-4 py-2 rounded-r-md font-montserrat text-sm font-medium hover:bg-brand-blush/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="font-montserrat text-xs text-brand-soft-gray/70">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-brand-navy/80 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-montserrat text-sm text-brand-soft-gray text-center md:text-left">
              &copy; {currentYear} T. Williams Consulting. All rights reserved.
            </p>
            <p className="font-montserrat text-xs text-brand-soft-gray/70 mt-2 md:mt-0 text-center md:text-right">
              Process Analysis & Technical Documentation | Small Business Operations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
