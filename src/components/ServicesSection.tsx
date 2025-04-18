import { Building, Users, GraduationCap, CheckCircle, TrendingUp, Briefcase, Cog, FileText, Monitor, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const businessServices = [
    {
      title: "Strategic Planning",
      description: "Develop actionable strategies for your small business success.",
      features: ["Goal setting", "Mission, Vision & Values", "Implementation roadmap", "Priority alignment", "Success metrics"],
      icon: <TrendingUp size={24} />
    },
    {
      title: "Process Optimization",
      description: "Streamline operations and improve efficiency across your organization.",
      features: ["Workflow assessment", "Bottleneck identification", "Process redesign", "Implementation support", "Performance metrics"],
      icon: <Cog size={24} />
    },
    {
      title: "Requirements Analysis",
      description: "Define and document your system and business requirements.",
      features: ["User story development", "Functional requirements", "Technical specifications", "Stakeholder interviews", "Requirements validation"],
      icon: <ClipboardList size={24} />
    },
    {
      title: "Technical Documentation",
      description: "Create comprehensive documentation for your systems and processes.",
      features: ["System documentation", "User guides", "Process documentation", "Training materials", "Knowledge transfer"],
      icon: <FileText size={24} />
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-brand-blush mx-auto mb-6"></div>
          <p className="font-montserrat text-brand-slate max-w-2xl mx-auto">
            We offer a comprehensive range of services designed to help your small business thrive 
            through strategic planning, process optimization, and technical documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-brand-soft-gray/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center mr-3">
                    <div className="text-brand-navy">{service.icon}</div>
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold text-brand-navy">{service.title}</h3>
                </div>
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

        <div className="mt-16 text-center">
          <p className="font-montserrat text-brand-slate mb-8">
            Our services extend beyond these core offerings. Contact us to discover how we can help with your specific small business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { icon: <Monitor size={24} />, label: "Process Automation Support" },
              { icon: <Users size={24} />, label: "PMO and Template Support" },
              { icon: <Building size={24} />, label: "System Documentation" }
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
