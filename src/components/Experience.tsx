
import { Briefcase, Calendar, MapPin, Users, TrendingUp } from "lucide-react";
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
      icon: <Briefcase className="w-6 h-6 text-purple-400" />
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
      icon: <TrendingUp className="w-6 h-6 text-indigo-400" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey in software engineering, from startup environments to academic research
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-black border-l-4 border-l-purple-400 border-gray-700/50 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500 backdrop-blur-sm group">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-300 mb-2">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-purple-400" />
                          <span className="font-semibold text-purple-400">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{exp.duration}</span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-sm rounded-full border border-indigo-500/30">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-colors duration-300"
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
