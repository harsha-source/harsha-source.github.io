import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-emerald-400" />,
      title: "Email",
      detail: "hdurvasu@andrew.cmu.edu",
      link: "mailto:hdurvasu@andrew.cmu.edu",
    },
    {
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      title: "Phone",
      detail: "(412) 844-0581",
      link: "tel:+14128440581",
    },
    {
      icon: <MapPin className="w-6 h-6 text-teal-400" />,
      title: "Location",
      detail: "Pittsburgh, PA",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      link: "https://github.com/harsha-source",
      color: "hover:bg-slate-600",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn", 
      link: "https://www.linkedin.com/in/harsha-durvasula-1353971a4/",
      color: "hover:bg-emerald-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      link: "mailto:hdurvasu@andrew.cmu.edu",
      color: "hover:bg-cyan-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-teal-400 font-medium mb-4">
            <div className="w-12 h-px bg-teal-400"></div>
            <span className="text-sm uppercase tracking-wider">Get In Touch</span>
            <div className="w-12 h-px bg-teal-400"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Looking for backend engineering opportunities starting December 2025. 
            Let's discuss how we can build scalable solutions together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-700/50 hover:bg-slate-900/70 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <a href={info.link} className="flex items-center space-x-4 group">
                      <div className="flex-shrink-0 p-3 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-slate-400">{info.detail}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <User className="w-5 h-5 text-emerald-400" />
                  <span>Connect With Me</span>
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Open to backend engineering roles and exciting projects in distributed systems and AI/ML.
                </p>
                
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-lg transition-all duration-300 group ${social.color}`}
                      title={social.title}
                    >
                      <span className="text-slate-400 group-hover:text-white transition-colors duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6 text-emerald-400" />
                  <span>Send Message</span>
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-emerald-400 h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-emerald-400 h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-emerald-400 resize-none rounded-lg"
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 flex items-center justify-center space-x-2 rounded-lg"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Harsha Durvasula. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
