
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  category: 'wedding' | 'business';
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      text: "TGC Consulting transformed our wedding planning from stressful to joyful. Their attention to detail and personalized approach made our special day absolutely perfect.",
      author: "Sarah & Michael",
      role: "Newlyweds",
      category: 'wedding'
    },
    {
      text: "Working with TGC for my business strategy was a game-changer. Their insights helped us increase revenue by 40% in just six months.",
      author: "David Chen",
      role: "CEO, Horizon Tech",
      category: 'business'
    },
    {
      text: "I can't imagine planning our wedding without TGC. They handled everything with grace and professionalism, allowing us to enjoy every moment.",
      author: "Emily & James",
      role: "Married October 2024",
      category: 'wedding'
    },
    {
      text: "The strategic planning workshop facilitated by TGC gave our leadership team clarity and direction. Highly recommended for any growing business.",
      author: "Rebecca Taylor",
      role: "COO, Adaptive Solutions",
      category: 'business'
    },
    {
      text: "Our destination wedding was flawlessly executed thanks to TGC's expertise and connections. They thought of details we never would have considered.",
      author: "Thomas & Alexandra",
      role: "Destination Wedding",
      category: 'wedding'
    },
    {
      text: "TGC helped us navigate a challenging business transition with expert guidance and practical solutions. Their support was invaluable.",
      author: "Mark Johnson",
      role: "Founder, Elevate Marketing",
      category: 'business'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'wedding' | 'business'>('all');
  
  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);
  
  const maxIndex = filteredTestimonials.length - 1;
  
  const nextTestimonial = () => {
    setActiveIndex(activeIndex === maxIndex ? 0 : activeIndex + 1);
  };
  
  const prevTestimonial = () => {
    setActiveIndex(activeIndex === 0 ? maxIndex : activeIndex - 1);
  };

  // Auto-advance testimonials
  const intervalRef = useRef<number | null>(null);
  
  const startAutoAdvance = () => {
    intervalRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 8000);
  };
  
  useEffect(() => {
    startAutoAdvance();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, activeCategory]);
  
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoAdvance();
  };
  
  const handlePrev = () => {
    prevTestimonial();
    resetInterval();
  };
  
  const handleNext = () => {
    nextTestimonial();
    resetInterval();
  };

  // Reset active index when changing category
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  return (
    <section id="testimonials" className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-brand-blush mx-auto mb-6"></div>
          <p className="font-montserrat text-brand-soft-gray max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with TGC Consulting.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md overflow-hidden bg-brand-slate/20">
            {(['all', 'wedding', 'business'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-montserrat text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-brand-blush/20 text-white'
                    : 'text-brand-soft-gray hover:bg-brand-slate/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {filteredTestimonials.length > 0 ? (
          <div className="relative max-w-4xl mx-auto">
            {/* Controls for larger screens */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16 hidden md:block">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-brand-slate/20 flex items-center justify-center text-white hover:bg-brand-slate/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="bg-brand-navy/30 backdrop-blur-sm border border-brand-slate/10 rounded-xl p-8 md:p-12">
              <div className="text-brand-blush mb-6">
                <Quote size={48} />
              </div>
              <blockquote className="mb-8">
                <p className="font-cormorant text-xl md:text-2xl italic text-white leading-relaxed">
                  "{filteredTestimonials[activeIndex].text}"
                </p>
              </blockquote>
              <div className="flex flex-col items-center">
                <p className="font-montserrat font-semibold text-white">
                  {filteredTestimonials[activeIndex].author}
                </p>
                <p className="font-montserrat text-sm text-brand-soft-gray">
                  {filteredTestimonials[activeIndex].role}
                </p>
              </div>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-16 hidden md:block">
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-brand-slate/20 flex items-center justify-center text-white hover:bg-brand-slate/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Mobile controls */}
            <div className="flex justify-center mt-8 md:hidden">
              <button
                onClick={handlePrev}
                className="mx-2 w-10 h-10 rounded-full bg-brand-slate/20 flex items-center justify-center text-white hover:bg-brand-slate/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="mx-2 w-10 h-10 rounded-full bg-brand-slate/20 flex items-center justify-center text-white hover:bg-brand-slate/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    resetInterval();
                  }}
                  className={`mx-1 w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? 'bg-brand-blush w-4' : 'bg-brand-soft-gray/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-brand-soft-gray">No testimonials available for this category.</p>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
