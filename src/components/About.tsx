
import { Code, Database, Cloud, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Programming Languages",
      description: "Java, Python, C/C++, JavaScript, SQL, HTML, CSS, MATLAB",
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Databases & Tools", 
      description: "MySQL, PostgreSQL, MongoDB, Redis, SQLite",
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: "Cloud & Frameworks",
      description: "AWS (RDS, S3, VPC, EC2, EKS, Lambda), Azure, SpringBoot, React, NodeJS, Kafka, Docker, Kubernetes",
    },
    {
      icon: <Brain className="w-8 h-8 text-yellow-400" />,
      title: "AI/ML Technologies",
      description: "PyTorch, TensorFlow, NumPy, Pandas, BERT, LLMs, Graph Neural Networks",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate software engineer pursuing my MS in Information Systems at Carnegie Mellon University. 
            With experience in distributed systems, AI/ML, and scalable data pipelines, I love solving complex technical challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently pursuing my MS at Carnegie Mellon University (GPA: 3.54/4.0) after completing my BTech in Computer Science 
                from PES University (GPA: 3.89/4.0). I work as a Research Assistant at CMU, building AI-powered autograder frameworks 
                and previously worked as a Software Engineer at Hevodata, architecting scalable ETL pipelines and data ingestion systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">3+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Research Published at ACM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">MRD Academic Excellence Scholarship</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl md:text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
