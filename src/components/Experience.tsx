
import { Briefcase, Calendar, MapPin, TrendingUp, Code, Database, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern (Research Assistant)",
      company: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      duration: "June 2025 - Present",
      type: "Current Position",
      description: "Building an AI-powered autograder framework using Docker, Kafka, Hadoop and microservices architecture to evaluate distributed systems projects involving multi-node API deployments on cloud, local, and cluster environments.",
      achievements: [
        "Leveraged LLMs to automate test case generation and student output analysis for 400+ submissions",
        "Facilitated scalable, reproducible grading across 5 projects and 11 labs",
        "Implemented comprehensive feedback systems for distributed systems evaluation"
      ],
      technologies: ["Docker", "Kafka", "Hadoop", "LLMs", "Microservices", "Python"],
      icon: <Code className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Software Engineer (Integrations Team)",
      company: "Hevodata Inc",
      location: "Bangalore, India",
      duration: "Nov 2021 - May 2024",
      type: "Full-time",
      description: "Worked at a no-code automated ETL Platform startup that builds and maintains data pipelines for enterprise clients.",
      achievements: [
        "Re-architected Redis strategy, doubling throughput to 10K events/min for Zepto",
        "Designed scalable data ingestion pipeline for LinkedIn Ads connector handling 40+ schemas across 400+ customers",
        "Built secure user management APIs reducing attacks by 60% with enhanced OAuth2.0 logic",
        "Added configurable CSV header injection improving data usability by 30%",
        "Developed nested compressed file ingestion increasing integration test coverage by 40%"
      ],
      technologies: ["Java", "Redis", "RabbitMQ", "Kafka", "OAuth2.0", "AWS", "SpringBoot"],
      icon: <Database className="w-6 h-6 text-green-400" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-green-400 font-medium mb-4">
            <div className="w-12 h-px bg-green-400"></div>
            <span className="text-sm uppercase tracking-wider">Career</span>
            <div className="w-12 h-px bg-green-400"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building scalable backend systems from startup environments to academic research
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-900/30 border border-gray-700/50 hover:bg-gray-900/50 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-6 mb-4 lg:mb-0">
                    <div className="p-4 bg-gray-800/50 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-gray-700/30">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-300 mb-3">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4 text-green-400" />
                          <span className="font-semibold text-green-400">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span>Key Achievements</span>
                  </h4>
                  <div className="grid gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Server className="w-5 h-5 text-blue-400" />
                    <span>Technologies</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm border border-gray-600/30 hover:border-blue-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
