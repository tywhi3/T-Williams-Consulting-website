
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-brand-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-brand-navy mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-brand-blush mx-auto mb-6"></div>
          <p className="font-montserrat text-brand-slate max-w-2xl mx-auto">
            Ready to transform your vision into reality? Reach out to us for a consultation or to learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-cormorant text-2xl font-semibold text-brand-navy mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-montserrat text-sm font-medium text-brand-slate mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-brand-soft-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blush/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-montserrat text-sm font-medium text-brand-slate mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-brand-soft-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blush/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block font-montserrat text-sm font-medium text-brand-slate mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brand-soft-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blush/50 bg-white"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="wedding-full">Full Wedding Planning</option>
                  <option value="wedding-partial">Partial Wedding Planning</option>
                  <option value="wedding-day">Day-of Coordination</option>
                  <option value="business-strategy">Strategic Planning</option>
                  <option value="business-optimization">Process Optimization</option>
                  <option value="business-coaching">Business Coaching</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-montserrat text-sm font-medium text-brand-slate mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-brand-soft-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blush/50 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white font-montserrat py-3 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col">
            <div className="bg-brand-navy rounded-lg shadow-md p-8 text-white mb-8">
              <h3 className="font-cormorant text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-brand-blush/20 p-2 rounded-full">
                    <Mail size={20} className="text-brand-blush" />
                  </div>
                  <div>
                    <p className="font-montserrat text-sm text-brand-soft-gray">Email Us</p>
                    <p className="font-montserrat">hello@tgcconsulting.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-brand-blush/20 p-2 rounded-full">
                    <Phone size={20} className="text-brand-blush" />
                  </div>
                  <div>
                    <p className="font-montserrat text-sm text-brand-soft-gray">Call Us</p>
                    <p className="font-montserrat">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-brand-blush/20 p-2 rounded-full">
                    <MapPin size={20} className="text-brand-blush" />
                  </div>
                  <div>
                    <p className="font-montserrat text-sm text-brand-soft-gray">Visit Us</p>
                    <p className="font-montserrat">123 Consultation Ave, Suite 200<br />Business District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 flex-grow">
              <h3 className="font-cormorant text-2xl font-semibold text-brand-navy mb-6">Business Hours</h3>
              <ul className="space-y-4">
                <li className="flex justify-between font-montserrat">
                  <span className="text-brand-slate">Monday - Friday</span>
                  <span className="font-medium text-brand-navy">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between font-montserrat">
                  <span className="text-brand-slate">Saturday</span>
                  <span className="font-medium text-brand-navy">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between font-montserrat">
                  <span className="text-brand-slate">Sunday</span>
                  <span className="font-medium text-brand-navy">Closed</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-brand-soft-gray/20">
                <p className="font-montserrat text-sm text-brand-slate mb-4">
                  Prefer to schedule a specific time? Book a consultation:
                </p>
                <Button 
                  className="w-full bg-transparent hover:bg-brand-blush/10 text-brand-navy border border-brand-blush"
                  variant="outline"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
