
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ghoshsubhojeet21@gmail.com",
      href: "mailto:ghoshsubhojeet21@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8668509262",
      href: "tel:+918668509262"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, India",
      href: "https://maps.app.goo.gl/fKJ8b2C9Nt7xxrGPA"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium tracking-wide mb-6">
            Let's Talk
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to discuss your next project? I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-in-section">
            <h3 className="text-2xl font-semibold text-white mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 glass-card p-4 rounded-xl hover-lift group">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <a 
                      href={info.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-semibold text-white mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>13+ years of proven experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Strong communication and collaboration skills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Commitment to quality and best practices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Flexible and adaptable to project needs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Available for both short-term and long-term projects</span>
                </li>
              </ul>
            </div>
          </div>

          {/*<div className="glass-card p-8 rounded-2xl fade-in-section">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    placeholder="John"
                    className="w-full bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <Input 
                    id="lastName" 
                    type="text" 
                    placeholder="Doe"
                    className="w-full bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john.doe@example.com"
                  className="w-full bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center space-x-2 hover-lift animate-glow">
                <Send size={16} />
                <span>Send Message</span>
              </Button>
            </form>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Contact;
