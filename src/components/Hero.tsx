
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-emerald-400 font-medium">
              <div className="w-12 h-px bg-emerald-400"></div>
              <span className="text-sm uppercase tracking-wider">Backend Engineer</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Harsha
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-lg">
              Building scalable distributed systems and AI-powered solutions at Carnegie Mellon University
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-black hover:bg-slate-800/50 hover:text-black px-8 py-3 rounded-xl font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/harsha-source" target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/harsha-durvasula-1353971a4/" target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hdurvasu@andrew.cmu.edu" 
               className="text-slate-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Column - Visual Elements */}
        <div className="relative">
          {/* Profile Image with Modern Frame - Smaller size */}
          <div className="relative max-w-xs mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-slate-900 rounded-3xl p-6 border border-slate-700/50">
              <img 
                src="/lovable-uploads/9f2b8407-054b-4d02-99ed-c6d8bdab5edd.png" 
                alt="Harsha Durvasula"
                className="w-full h-auto rounded-2xl object-cover"
              />
              
              {/* Tech Stack Floating Cards */}
              <div className="absolute -top-3 -left-3 bg-slate-800 border border-slate-700 rounded-xl p-2 shadow-xl">
                <Code className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="absolute -top-3 -right-3 bg-slate-800 border border-slate-700 rounded-xl p-2 shadow-xl">
                <Database className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-slate-800 border border-slate-700 rounded-xl p-2 shadow-xl">
                <Server className="w-5 h-5 text-teal-400" />
              </div>
            </div>
          </div>

          {/* Stats Card - Only years experience */}
          <div className="absolute top-6 -left-6 bg-slate-900/90 backdrop-blur border border-slate-700/50 rounded-xl p-3 shadow-xl">
            <div className="text-xl font-bold text-white">3+</div>
            <div className="text-xs text-slate-400">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
