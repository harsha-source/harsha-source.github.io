import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Autograder Framework",
      description: "Microservices architecture using Docker, Kafka, and Hadoop to evaluate distributed systems projects. Leveraged LLMs for automated test case generation across 400+ submissions.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      tags: ["Docker", "Kafka", "Hadoop", "LLMs", "Microservices"],
      githubUrl: "https://github.com/CMU-Heinz-95702/distributed-systems-project-04-harsha-source/tree/main",
      featured: true,
    },
    {
      title: "Graph ML on Crystal Structures",
      description: "Modeled 1.5M crystal structures as graphs, applying KNN and eigenvector centrality to achieve 95% prediction accuracy. Published at ICMLT 2022 by ACM.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      tags: ["PyTorch", "Graph Neural Networks", "Machine Learning", "Research"],
      githubUrl: "https://github.com/harsha-source/GNN1",
      featured: true,
    },
    {
      title: "Book Recommender Microservice System",
      description: "Containerized 5-service bookstore system using Docker, Kubernetes (EKS), and AWS RDS. Implemented CI/CD pipelines and Kafka integration.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      tags: ["Docker", "Kubernetes", "AWS", "Kafka", "CI/CD"],
      githubUrl: "https://github.com/harsha-source/Book-Recommender-Microservice",
      featured: false,
    },
    {
      title: "Contain-19 Android App",
      description: "Java-based Android app with geofencing using GeoFire and Firebase for COVID-19 social distancing assistance.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["Android", "Java", "Firebase", "GeoFencing"],
      githubUrl: "https://github.com/ishitadatta/Productiva",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-blue-400 font-medium mb-4">
            <div className="w-12 h-px bg-blue-400"></div>
            <span className="text-sm uppercase tracking-wider">Portfolio</span>
            <div className="w-12 h-px bg-blue-400"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Scalable backend systems, AI/ML research, and distributed architecture solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-blue-600/20 hover:border-blue-500 flex items-center space-x-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="bg-gray-900/30 border-gray-700/30 hover:bg-gray-900/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="text-gray-400 hover:text-white p-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={20} />
                  </Button>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
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
