
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-blue-900/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
      
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
