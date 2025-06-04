
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    // Here you would typically send the form data to your backend
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
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email",
      detail: "hdurvasu@andrew.cmu.edu",
      link: "mailto:hdurvasu@andrew.cmu.edu",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: "Phone",
      detail: "(412) 844-0581",
      link: "tel:+14128440581",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-400" />,
      title: "Location",
      detail: "Pittsburgh, PA",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities in software engineering, 
            AI/ML, or distributed systems? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
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
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out for opportunities in software engineering, AI/ML research, 
                or to discuss innovative projects in distributed systems and data engineering.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <a href={info.link} className="flex items-center space-x-4 group">
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-gray-400">{info.detail}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3">Let's Build Something Great</h4>
              <p className="text-gray-400 text-sm">
                Currently open to full-time opportunities starting December 2025. 
                Let's discuss how we can create innovative solutions together!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Harsha Durvasula. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
