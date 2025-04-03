
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      text: "Working with T. Williams Consulting for my business strategy was a game-changer. Their insights helped us increase revenue by 40% in just six months.",
      author: "David Chen",
      role: "CEO, Horizon Tech"
    },
    {
      text: "The strategic planning workshop facilitated by TWC gave our leadership team clarity and direction. Highly recommended for any growing business.",
      author: "Rebecca Taylor",
      role: "COO, Adaptive Solutions"
    },
    {
      text: "TWC helped us navigate a challenging business transition with expert guidance and practical solutions. Their support was invaluable.",
      author: "Mark Johnson",
      role: "Founder, Elevate Marketing"
    },
    {
      text: "The process optimization services from T. Williams transformed our operations and increased productivity by 30%. Their methodical approach was exactly what we needed.",
      author: "Jennifer Lopez",
      role: "Operations Director, Nexus Group"
    },
    {
      text: "Our team's performance improved dramatically after TWC's leadership development program. They understand how to bring out the best in people.",
      author: "Michael Smith",
      role: "HR Director, Pinnacle Industries"
    },
    {
      text: "TWC's business analysis identified inefficiencies we hadn't noticed and provided actionable solutions that made an immediate impact.",
      author: "Sarah Williams",
      role: "Founder, Bloom Startups"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = testimonials.length - 1;
  
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
  }, [activeIndex]);
  
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

  return (
    <section id="testimonials" className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-brand-blush mx-auto mb-6"></div>
          <p className="font-montserrat text-brand-soft-gray max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our business clients have to say about their experience working with T. Williams Consulting.
          </p>
        </div>
        
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
                "{testimonials[activeIndex].text}"
              </p>
            </blockquote>
            <div className="flex flex-col items-center">
              <p className="font-montserrat font-semibold text-white">
                {testimonials[activeIndex].author}
              </p>
              <p className="font-montserrat text-sm text-brand-soft-gray">
                {testimonials[activeIndex].role}
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
            {testimonials.map((_, index) => (
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
