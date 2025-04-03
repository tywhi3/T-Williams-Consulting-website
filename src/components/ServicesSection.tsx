
import { Ring, Building, Users, GraduationCap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type ServiceCategory = 'wedding' | 'business';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('wedding');

  const weddingServices = [
    {
      title: "Full Planning",
      description: "End-to-end wedding planning services from venue selection to day-of coordination.",
      features: ["Venue selection", "Vendor coordination", "Budget management", "Timeline planning", "Day-of coordination"]
    },
    {
      title: "Partial Planning",
      description: "Support for specific aspects of your wedding planning journey.",
      features: ["Customized planning assistance", "Vendor recommendations", "Timeline management", "Consultation services"]
    },
    {
      title: "Day-of Coordination",
      description: "Ensuring your special day runs smoothly without any worries.",
      features: ["Vendor communication", "Timeline execution", "Crisis management", "Ceremony coordination", "Reception oversight"]
    }
  ];

  const businessServices = [
    {
      title: "Strategic Planning",
      description: "Develop comprehensive strategies to achieve your business goals.",
      features: ["Market analysis", "Competitive positioning", "Growth strategies", "Goal setting", "Implementation roadmap"]
    },
    {
      title: "Process Optimization",
      description: "Streamline operations and improve efficiency across your organization.",
      features: ["Workflow assessment", "Bottleneck identification", "Process redesign", "Implementation support", "Performance metrics"]
    },
    {
      title: "Business Coaching",
      description: "One-on-one guidance to help you navigate business challenges.",
      features: ["Leadership development", "Decision-making support", "Problem-solving strategies", "Accountability partnership"]
    }
  ];

  const services = activeCategory === 'wedding' ? weddingServices : businessServices;

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-brand-blush mx-auto mb-6"></div>
          <p className="font-montserrat text-brand-slate max-w-2xl mx-auto">
            We offer a comprehensive range of services designed to meet your specific needs,
            whether you're planning a wedding or growing your business.
          </p>
        </div>

        {/* Service Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md border border-brand-soft-gray overflow-hidden">
            <button
              onClick={() => setActiveCategory('wedding')}
              className={`px-6 py-3 font-montserrat text-sm font-medium transition-colors ${
                activeCategory === 'wedding'
                  ? 'bg-brand-navy text-white'
                  : 'bg-white text-brand-navy hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <Ring size={16} className="mr-2" />
                Wedding Consulting
              </div>
            </button>
            <button
              onClick={() => setActiveCategory('business')}
              className={`px-6 py-3 font-montserrat text-sm font-medium transition-colors ${
                activeCategory === 'business'
                  ? 'bg-brand-navy text-white'
                  : 'bg-white text-brand-navy hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <Building size={16} className="mr-2" />
                Business Consulting
              </div>
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-brand-soft-gray/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h3 className="font-cormorant text-xl font-semibold text-brand-navy mb-3">{service.title}</h3>
                <p className="font-montserrat text-sm text-brand-slate mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={16} className="text-brand-blush mt-0.5 mr-2 flex-shrink-0" />
                      <span className="font-montserrat text-sm text-brand-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-transparent hover:bg-brand-blush/10 text-brand-navy border border-brand-blush"
                  variant="outline"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Service Icons */}
        <div className="mt-16 text-center">
          <p className="font-montserrat text-brand-slate mb-8">
            Our services extend beyond these core offerings. Contact us to discover how we can help with your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { icon: <GraduationCap size={24} />, label: "Professional Development" },
              { icon: <Users size={24} />, label: "Team Building" },
              { icon: <Building size={24} />, label: "Event Management" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-beige flex items-center justify-center mb-3">
                  <div className="text-brand-navy">{item.icon}</div>
                </div>
                <span className="font-montserrat text-sm text-brand-slate">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
