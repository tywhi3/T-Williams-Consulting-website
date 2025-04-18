import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-navy/95 z-0"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Small Business <br className="hidden md:block" />
              Operations Expert
            </h1>
            <p className="font-montserrat text-brand-soft-gray mb-8 max-w-md mx-auto md:mx-0">
              Specialized guidance for small business operations, process optimization, and technical documentation. We provide tailored solutions to streamline your business processes and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="bg-brand-blush hover:bg-brand-blush/90 text-brand-navy font-montserrat"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-brand-soft-gray text-brand-soft-gray hover:bg-brand-soft-gray/10"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              <img 
                src="/lovable-uploads/98644b35-5de8-43ef-9ba7-d3a40b1e03af.png" 
                alt="TWC Consulting Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown size={36} className="text-brand-soft-gray" />
      </div>
    </section>
  );
};

export default HeroSection;
