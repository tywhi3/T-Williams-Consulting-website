
import { Heart, Compass, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-brand-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-brand-navy mb-4">About TGC Consulting</h2>
          <div className="w-24 h-1 bg-brand-blush mx-auto mb-6"></div>
          <p className="font-montserrat text-brand-slate max-w-2xl mx-auto">
            We combine expertise with empathy to guide you through life's significant moments and business challenges. 
            Our approach is centered on understanding your unique needs and crafting personalized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Heart className="w-10 h-10 text-brand-blush" />,
              title: "Personalized Approach",
              description: "We tailor our services to your unique preferences and requirements."
            },
            {
              icon: <Compass className="w-10 h-10 text-brand-navy" />,
              title: "Expert Guidance",
              description: "Navigate complex decisions with our experienced consultants by your side."
            },
            {
              icon: <Award className="w-10 h-10 text-brand-blush" />,
              title: "Attention to Detail",
              description: "We meticulously manage every aspect to ensure flawless execution."
            },
            {
              icon: <Clock className="w-10 h-10 text-brand-navy" />,
              title: "Timely Delivery",
              description: "Count on us to meet deadlines and keep your projects on schedule."
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
