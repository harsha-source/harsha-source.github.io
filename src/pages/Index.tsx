
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Modern geometric background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-500/3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-500/3 rounded-full blur-2xl"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
