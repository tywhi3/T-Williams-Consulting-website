import { Heart, Compass, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-brand-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-brand-navy mb-4">About TWC Consulting</h2>
          <div className="w-24 h-1 bg-brand-blush mx-auto mb-6"></div>
          <p className="font-montserrat text-brand-slate max-w-2xl mx-auto">
            We specialize in helping small businesses optimize their operations through process analysis, 
            strategic planning, and comprehensive technical documentation. Our approach is centered on understanding 
            your unique small business needs and crafting personalized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Heart className="w-10 h-10 text-brand-blush" />,
              title: "Small Business Focus",
              description: "We exclusively work with small businesses to provide solutions that fit your scale and needs."
            },
            {
              icon: <Compass className="w-10 h-10 text-brand-navy" />,
              title: "Expert Guidance",
              description: "Navigate complex operational decisions with our experienced consultants by your side."
            },
            {
              icon: <Award className="w-10 h-10 text-brand-blush" />,
              title: "Attention to Detail",
              description: "We meticulously document and analyze every aspect to ensure optimal outcomes."
            },
            {
              icon: <Clock className="w-10 h-10 text-brand-navy" />,
              title: "Timely Delivery",
              description: "Count on us to meet deadlines and keep your business operations on schedule."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-cormorant text-xl font-semibold text-brand-navy mb-2">{item.title}</h3>
              <p className="font-montserrat text-sm text-brand-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
