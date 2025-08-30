import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, TrendingUp, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Machine Learning",
      description: "Expertise in building predictive models and AI solutions"
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Data Science",
      description: "Advanced data analysis and visualization techniques"
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: "Programming",
      description: "Proficient in Python, C++, Java, and web technologies"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Analytics",
      description: "Business intelligence and data-driven insights"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Data Scientist and Machine Learning enthusiast currently pursuing B.Tech in Computer Science 
            Engineering at VIT with a CGPA of 8.97/10. I specialize in transforming complex data into actionable insights 
            and building intelligent systems that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-gray-50 border-gray-200 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">My Journey</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                My journey in data science began during my undergraduate studies at Vellore Institute of Technology, 
                where I discovered the power of machine learning and data analytics. With a strong foundation in 
                computer science and a passion for solving complex problems, I've dedicated myself to mastering 
                the art and science of data.
              </p>
              <p>
                Through various internships and projects, I've gained hands-on experience in building end-to-end 
                machine learning solutions, from data preprocessing and feature engineering to model deployment 
                and monitoring. My work spans across different domains including healthcare, finance, and web development.
              </p>
              <p>
                I believe in the transformative power of data and am committed to using my skills to create 
                meaningful impact through innovative solutions and continuous learning.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Academic Excellence</h4>
                  <p className="text-gray-600">Maintaining 8.97/10 CGPA at VIT, 98 percentile in JEE MAINS</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Professional Certifications</h4>
                  <p className="text-gray-600">Oracle, MATLAB, and Google-certified in ML and AI</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Practical Experience</h4>
                  <p className="text-gray-600">Multiple internships and real-world ML project implementations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Problem Solving Skills</h4>
                  <p className="text-gray-600">Strong algorithmic thinking demonstrated on HackerRank platform</p>
                </div>
              </div>
            </div>

            {/* HackerRank Highlight */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">HackerRank Profile</h4>
                    <p className="text-gray-600 mb-2">Showcasing problem-solving skills and algorithmic expertise</p>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      View Profile →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}