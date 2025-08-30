import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "SMARTBRIDGE",
      duration: "2025",
      type: "Virtual Internship",
      location: "Remote",
      description: "Completed a comprehensive virtual internship focusing on real-time machine learning applications. Gained extensive knowledge about practical ML implementations and industry best practices.",
      achievements: [
        "Implemented Online Fault Payment Prediction system using Machine Learning",
        "Worked with real-time data processing and model deployment",
        "Gained hands-on experience with ML model lifecycle management",
        "Collaborated with industry professionals on practical ML solutions"
      ],
      technologies: ["Python", "Machine Learning", "Data Analysis", "Model Deployment"],
      certificateLink: "https://drive.google.com/file/d/1KKmAiAYaXMTT3MWrWB75bihcAagG9Ns0/view?usp=drivesdk"
    },
    {
      title: "Data Science Intern",
      company: "SKILLDZIRE",
      duration: "2024", 
      type: "Virtual Internship",
      location: "Remote",
      description: "Completed an intensive virtual internship in Machine Learning and Data Science, focusing on real-time applications and practical implementation of data science methodologies.",
      achievements: [
        "Developed expertise in data preprocessing and feature engineering",
        "Built and evaluated multiple machine learning models",
        "Mastered Python ML libraries including NumPy, Pandas, Scikit-learn",
        "Applied statistical analysis and data visualization techniques",
        "Worked on end-to-end data science project pipeline"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Visualization", "Statistical Analysis"],
      certificateLink: "https://drive.google.com/file/d/1Dbvp_Gp6iTlmZ84X-Z9ppPtLIAbMqgMb/view?usp=drivesdk"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My internship experiences have provided me with practical exposure to real-world data science 
            and machine learning applications across different industries.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                            {exp.type}
                          </Badge>
                          <a 
                            href={exp.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer">
                              <ExternalLink size={12} className="mr-1" />
                              View Certificate
                            </Badge>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg">{exp.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-900">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-blue-400/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">2</div>
            <p className="text-gray-600">Internships Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
            <p className="text-gray-600">ML Projects Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}