
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Autograder Framework",
      description: "Building an AI-powered autograder using Docker, Kafka, Hadoop and microservices architecture to evaluate distributed systems projects involving multi-node API deployments. Leveraged LLMs to automate test case generation for 400+ submissions across 5 projects and 11 labs.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      tags: ["Docker", "Kafka", "Hadoop", "LLMs", "Microservices"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Graph ML on Crystals",
      description: "Collaborated with 4 researchers to model 1.5M crystal structures as graphs (atoms as nodes, bonds as edges), applying KNN, eigenvector centrality, and graph compression to achieve 95% prediction accuracy. Authored and presented at 7th ICMLT 2022 in Rome, published by ACM.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      tags: ["Graph Neural Networks", "PyTorch", "Machine Learning", "Research", "ACM"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Book Recommender Microservice System",
      description: "Containerized and deployed a 5-service bookstore recommender system using Docker, Kubernetes (EKS), and AWS RDS. Implemented liveness probes, CI/CD pipelines, and Kafka integration for asynchronous workflows.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      tags: ["Docker", "Kubernetes", "AWS EKS", "Kafka", "Microservices", "CI/CD"],
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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my key projects spanning AI/ML research, distributed systems, 
            and scalable software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black border-purple-700/50 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 group backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white flex items-center space-x-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-purple-700/20 hover:border-purple-500 flex items-center space-x-2 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
