import { Code, Database, Cloud, Brain, Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Programming Languages",
      description: "Java, Python, C/C++, JavaScript, SQL, HTML, CSS, MATLAB",
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      title: "Databases & Tools", 
      description: "MySQL, PostgreSQL, MongoDB, Redis, SQLite",
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: "Cloud & Frameworks",
      description: "AWS (RDS, S3, VPC, EC2, EKS, Lambda), Azure, SpringBoot, React, NodeJS, Kafka, Docker, Kubernetes",
    },
    {
      icon: <Brain className="w-8 h-8 text-indigo-400" />,
      title: "AI/ML Technologies",
      description: "PyTorch, TensorFlow, NumPy, Pandas, BERT, LLMs, Graph Neural Networks",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate software engineer pursuing my MS in Information Systems at Carnegie Mellon University. 
            With experience in distributed systems, AI/ML, and scalable data pipelines, I love solving complex technical challenges.
          </p>
        </div>

        {/* Skills Grid - New Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <Card key={index} className={`bg-black border-gray-700/30 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 group backdrop-blur-sm ${index === 0 ? 'md:col-span-2' : ''} ${index === 3 ? 'lg:col-span-2' : ''}`}>
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="mb-6 flex justify-center group-hover:scale-125 transition-transform duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education & Achievements Section - New Side-by-Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-black border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Carnegie Mellon University
                  </h4>
                  <p className="text-purple-400 font-medium mb-2">MS in Information Systems</p>
                  <p className="text-gray-400 mb-2">August 2024 - December 2025</p>
                  <p className="text-gray-300 mb-3">GPA: 3.54/4.0</p>
                  <p className="text-sm text-gray-400">
                    Advanced NLP, Engineering Data Intensive Scalable Systems, Distributed Systems
                  </p>
                </div>
                
                <div className="border-l-4 border-indigo-400 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    PES University
                  </h4>
                  <p className="text-indigo-400 font-medium mb-2">BTech in Computer Science</p>
                  <p className="text-gray-400 mb-2">August 2018 - May 2022</p>
                  <p className="text-gray-300 mb-3">GPA: 3.89/4.0</p>
                  <p className="text-sm text-gray-400">
                    Database Management, Advanced Algorithms, Cloud Computing, Machine Learning, AI
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements & Highlights */}
          <Card className="bg-black border-indigo-400/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg">
                  <Award className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">MRD Academic Excellence Scholarship</h4>
                    <p className="text-gray-300 text-sm">Awarded to top 10% of the cohort at Carnegie Mellon University</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Research Publication</h4>
                    <p className="text-gray-300 text-sm">Published paper at 7th ICMLT 2022 in Rome, accepted by ACM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Industry Impact</h4>
                    <p className="text-gray-300 text-sm">Improved system performance by 60%+ and processed 400+ customer integrations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Leadership</h4>
                    <p className="text-gray-300 text-sm">Led research team of 4 and mentored junior developers</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
