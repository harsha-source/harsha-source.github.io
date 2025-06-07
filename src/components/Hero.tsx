
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
            Hello, I'm <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Harsha</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-300">
            Software Engineer & AI/ML Researcher
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-500">
            MS in Information Systems at Carnegie Mellon University. Passionate about scalable distributed systems, 
            AI-powered solutions, and building innovative data-intensive applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in delay-700">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-16 animate-fade-in delay-1000">
          <a href="https://github.com/harsha-source" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/harsha-durvasula-1353971a4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Linkedin size={28} />
          </a>
          <a href="mailto:hdurvasu@andrew.cmu.edu" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Mail size={28} />
          </a>
        </div>

        <button 
          onClick={scrollToNext}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
