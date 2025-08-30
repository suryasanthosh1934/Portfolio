import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, Code, Database, Brain, BarChart } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: "Oracle Certified Foundations Associate - Database",
      issuer: "Oracle",
      year: "2024",
      description: "Comprehensive certification covering database fundamentals, SQL, and Oracle database management systems.",
      icon: <Database className="w-8 h-8 text-orange-500" />,
      category: "Database",
      skills: ["SQL", "Database Design", "Oracle DB", "Data Management"],
      certificateLink: "https://drive.google.com/file/d/1DlYx-xkvl2eOZ-jx3J4ox3UYuTkQ7NZm/view?usp=drivesdk"
    },
    {
      title: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
      issuer: "Oracle",
      year: "2024", 
      description: "Advanced certification in AI and cloud infrastructure, covering machine learning services and cloud deployment.",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      category: "AI & Cloud",
      skills: ["Cloud Computing", "AI Services", "OCI", "Machine Learning"],
      certificateLink: "https://drive.google.com/file/d/1DiLZUlppxsD_6iIwHlpKeTZcyTxHY8hs/view?usp=drivesdk"
    },
    {
      title: "Young Python Professional",
      issuer: "Infosys Springboard",
      year: "2024",
      description: "Professional-level Python certification covering advanced programming concepts and real-world applications.",
      icon: <Code className="w-8 h-8 text-green-600" />,
      category: "Programming",
      skills: ["Python", "OOP", "Data Structures", "Algorithms"],
      certificateLink: "https://drive.google.com/file/d/1DqVUcXypEjSush3nkNgdcl2Iqp0E1mm2/view?usp=drivesdk"
    },
    {
      title: "Bootcamp Data Structures and Algorithms using C++",
      issuer: "Udemy",
      year: "2024",
      description: "Intensive bootcamp covering advanced data structures and algorithms implementation in C++.",
      icon: <Code className="w-8 h-8 text-purple-600" />,
      category: "Programming",
      skills: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      certificateLink: "https://drive.google.com/file/d/1JrpxoesXAy2sWN2uOrtcEIeekSRnWROl/view?usp=drivesdk"
    },
    {
      title: "Machine Learning Bootcamp",
      issuer: "MATLAB",
      year: "2024",
      description: "Comprehensive machine learning certification using MATLAB for data analysis and model development.",
      icon: <BarChart className="w-8 h-8 text-red-500" />,
      category: "Machine Learning",
      skills: ["MATLAB", "ML Algorithms", "Data Analysis", "Statistical Modeling"],
      certificateLink: "https://drive.google.com/file/d/1DhpKJVNAGOcd7aIp_6gXY6shqwplL1FM/view?usp=drivesdk"
    },
    {
      title: "Machine Learning Course Completion",
      issuer: "SMARTBRIDGE (Google Collaboration)",
      year: "2025",
      description: "Advanced machine learning course in collaboration with Google, focusing on practical ML implementations.",
      icon: <Brain className="w-8 h-8 text-yellow-500" />,
      category: "Machine Learning",
      skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Google AI"],
      certificateLink: "https://drive.google.com/file/d/1JhYHZ_KmrgcuveBKplI5ElIA6B0HgsLu/view?usp=drivesdk"
    }
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "Java", "C"],
      color: "blue"
    },
    {
      category: "Machine Learning",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      color: "purple"
    },
    {
      category: "Web Development", 
      skills: ["HTML", "CSS", "JavaScript", "NodeJS", "React"],
      color: "green"
    },
    {
      category: "Database Management",
      skills: ["SQL", "MongoDB", "Oracle DB"],
      color: "orange"
    },
    {
      category: "Tools & Visualization",
      skills: ["Power BI", "Git", "GitHub", "MATLAB"],
      color: "pink"
    },
    {
      category: "Core Concepts",
      skills: ["Operating Systems", "Data Structures", "Algorithms"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200", 
      green: "bg-green-100 text-green-700 border-green-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
      pink: "bg-pink-100 text-pink-700 border-pink-200",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Certificates & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional certifications and technical skills demonstrate continuous learning 
            and expertise across various domains in technology and data science.
          </p>
        </div>

        {/* Certificates Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-gray-50 border-gray-200 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-lg group-hover:bg-gray-100 transition-colors shadow-sm">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                            {cert.title}
                          </h4>
                          <Badge variant="secondary" className="bg-green-100 text-green-700 flex-shrink-0">
                            <Award size={12} className="mr-1" />
                            Verified
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{cert.year}</span>
                          <Badge variant="outline" className="border-gray-300 text-gray-600">
                            {cert.category}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed">{cert.description}</p>

                    {/* Skills */}
                    <div className="space-y-2">
                      <p className="text-gray-900 font-medium text-sm">Key Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <a 
                        href={cert.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={14} />
                        View Certificate
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gray-50 border-gray-200 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certification Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
            <p className="text-gray-600">Certifications</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
            <p className="text-gray-600">Technical Skills</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">5</div>
            <p className="text-gray-600">Skill Categories</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <p className="text-gray-600">Verified</p>
          </div>
        </div>
      </div>
    </section>
  );
}