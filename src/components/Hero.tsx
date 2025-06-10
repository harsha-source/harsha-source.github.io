
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500/10 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-purple-500/10 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-500/10 rounded-lg -rotate-45"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-blue-400 font-medium">
              <div className="w-12 h-px bg-blue-400"></div>
              <span className="text-sm uppercase tracking-wider">Backend Engineer</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
                Harsha
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-lg">
              Building scalable distributed systems and AI-powered solutions at Carnegie Mellon University
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800/50 px-8 py-3 rounded-xl font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/harsha-source" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800/50 rounded-lg">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/harsha-durvasula-1353971a4/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800/50 rounded-lg">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hdurvasu@andrew.cmu.edu" 
               className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800/50 rounded-lg">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Column - Visual Elements */}
        <div className="relative">
          {/* Profile Image with Modern Frame */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-700/50">
              <img 
                src="/lovable-uploads/9f2b8407-054b-4d02-99ed-c6d8bdab5edd.png" 
                alt="Harsha Durvasula"
                className="w-full h-auto rounded-2xl object-cover"
              />
              
              {/* Tech Stack Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-gray-800 border border-gray-700 rounded-xl p-3 shadow-xl">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <div className="absolute -top-4 -right-4 bg-gray-800 border border-gray-700 rounded-xl p-3 shadow-xl">
                <Database className="w-6 h-6 text-green-400" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 border border-gray-700 rounded-xl p-3 shadow-xl">
                <Server className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="absolute top-8 -left-8 bg-gray-900/90 backdrop-blur border border-gray-700/50 rounded-xl p-4 shadow-xl">
            <div className="text-2xl font-bold text-white">3+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          
          <div className="absolute bottom-8 -right-8 bg-gray-900/90 backdrop-blur border border-gray-700/50 rounded-xl p-4 shadow-xl">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-sm text-gray-400">Events/Min</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
