import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

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

  const inquiryTypes = [
    "Salesforce Architect Opportunities",
    "Principal Engineer Roles",
    "Solution/Technical Architect Positions",
    "Enterprise Transformation Programs",
    "Architecture Leadership Opportunities"
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error("Failed to send message");
      } else {
        const mailtoUrl = `mailto:ghoshsubhojeet21@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
        window.location.href = mailtoUrl;
      }
      toast.success("Message sent successfully");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block px-6 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase section-kicker">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot mr-2" />
            Let's Connect
          </div>
          <h2 className="section-title mb-6 text-center">
            Architecture Advisory & Executive Partnerships
          </h2>
          <p className="section-subtitle">
            Open to Principal Architect, Solution/Technical Architect and enterprise transformation consulting engagements. Let's discuss how architecture can drive your business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 fade-in-section">
            <h3 className="text-3xl font-bold text-white mb-4">
              Start a Conversation
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Whether you're scaling your Salesforce platform, designing AI governance, or launching a digital transformation program — I'm available for Salesforce Architect, Principal Engineer, and Solution/Technical Architect roles, as well as enterprise transformation and architecture leadership engagements.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card p-5 rounded-2xl hover-lift border border-slate-700/50 flex items-start gap-4">
                  <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-3 rounded-xl shrink-0">
                    <info.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-sky-400 text-sm hover:text-white transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xs font-bold tracking-tighter uppercase text-slate-500 mb-4">Positioning For</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {inquiryTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500/60" />
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card-strong rounded-2xl p-8 md:p-12 border border-slate-700/50 fade-in-section">
            <h4 className="text-2xl font-bold text-white mb-6">Send a Message</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name")}
                    className="w-full bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-sky-500/30 rounded-lg"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    {...register("email")}
                    className="w-full bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-sky-500/30 rounded-lg"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Architecture Advisory Inquiry"
                  {...register("subject")}
                  className="w-full bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-sky-500/30 rounded-lg"
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your transformation goals..."
                  {...register("message")}
                  className="w-full bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-sky-500/30 rounded-lg"
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-lg font-semibold py-4 rounded-lg hover-lift animate-glow shadow-[0_8px_24px_rgba(56,189,248,0.25)]"
              >
                <Send size={20} />
                <span className="ml-2">{isSubmitting ? "Sending..." : "Send Message"}</span>
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-20 text-center fade-in-section">
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest">Let's Connect</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/subhojeet-ghosh-salesforce-professional/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Subhojeet21", label: "GitHub" },
              { icon: Mail, href: "mailto:ghoshsubhojeet21@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all duration-300 hover-lift border border-slate-700/50 hover:border-sky-500/30"
                aria-label={social.label}
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
