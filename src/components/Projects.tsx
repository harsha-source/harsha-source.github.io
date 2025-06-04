
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Autograder Framework",
      description: "Building an AI-powered autograder using Docker, Kafka, Hadoop and microservices architecture to evaluate distributed systems projects. Leveraged LLMs to automate test case generation for 400+ submissions across 5 projects.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      tags: ["Docker", "Kafka", "Hadoop", "LLMs", "Microservices"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Graph ML on Crystals",
      description: "Collaborated with 4 researchers to represent 1.5M crystal structures as graphs. Applied KNN, eigenvector centrality, and graph compression techniques, achieving 95% accuracy. Published research at ACM ICMLT 2022.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      tags: ["Graph Neural Networks", "PyTorch", "Machine Learning", "Research"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Scalable Data Ingestion Pipeline",
      description: "Designed and implemented a scalable data ingestion pipeline for LinkedIn Ads connector using RabbitMQ and Kafka to handle 40+ data schemas across 400+ customers, improving sync latency and system robustness.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      tags: ["Kafka", "RabbitMQ", "ETL", "Distributed Systems"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Contain-19 Android App",
      description: "Developed a Java-based Android app to detect nearby quarantine zones using geofencing with GeoFire and Firebase DB and P2P technology to assist with social distancing during COVID-19.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["Android", "Java", "Firebase", "GeoFencing", "P2P"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my key projects spanning AI/ML research, distributed systems, 
            and scalable data engineering solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white flex items-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-gray-400 text-gray-300 hover:bg-white/5 flex items-center space-x-2"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-gray-400 text-gray-300 hover:bg-white/5 px-8 py-3 text-lg font-semibold"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
