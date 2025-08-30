import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Heart, Shield, User, Dumbbell } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Heart Attack Risk Prediction",
      year: "2025",
      description: "Developed a comprehensive Heart Attack Prediction system using Machine Learning to analyze patient health data and predict risk levels with high accuracy.",
      longDescription: "This project focuses on early detection of heart attack risks by analyzing various patient health parameters. The system uses advanced classification algorithms to provide reliable medical risk assessments.",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      features: [
        "Applied classification algorithms for accurate risk prediction",
        "Implemented performance metrics (accuracy, precision, recall, ROC-AUC)",
        "Comprehensive data preprocessing and feature engineering",
        "Interactive visualization of risk factors and predictions",
        "Reliable medical risk assessment system"
      ],
      icon: <Heart className="w-8 h-8 text-red-500" />,
      category: "Healthcare ML",
      status: "Completed",
      githubLink: "https://github.com/suryasanthosh1934"
    },
    {
      title: "Online Payment Fraud Detection",
      year: "2025", 
      description: "Designed an intelligent Machine Learning model to detect fraudulent online transactions by analyzing user behavior patterns and transaction data.",
      longDescription: "A sophisticated fraud detection system that helps financial institutions identify and prevent fraudulent transactions in real-time, reducing financial losses and protecting customers.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Feature Engineering", "Classification"],
      features: [
        "Real-time fraud detection capabilities",
        "Advanced user behavior analysis",
        "Transaction pattern recognition",
        "Minimized false positives through optimized algorithms",
        "Comprehensive data preprocessing pipeline"
      ],
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      category: "FinTech ML",
      status: "Completed",
      githubLink: "https://github.com/suryasanthosh1934"
    },
    {
      title: "Personal Portfolio Website",
      year: "2025",
      description: "Developed a modern, responsive personal portfolio website using React.js to showcase projects in Machine Learning, Data Science, and Web Development.",
      longDescription: "A comprehensive portfolio website featuring interactive UI components, smooth animations, and responsive design to effectively present professional work and achievements.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Design", "UI/UX"],
      features: [
        "Interactive and responsive user interface",
        "Showcase of ML and Data Science projects", 
        "Modern web development practices",
        "Cross-platform compatibility",
        "Professional presentation of work"
      ],
      icon: <User className="w-8 h-8 text-purple-600" />,
      category: "Web Development",
      status: "Live",
      githubLink: "https://github.com/suryasanthosh1934",
      liveLink: "#"
    },
    {
      title: "Dynamic Gym Website",
      year: "2024",
      description: "Created a dynamic, interactive gym website for real-time applications using modern web technologies with focus on user experience and functionality.",
      longDescription: "A comprehensive gym management website featuring member registration, class scheduling, trainer profiles, and interactive features for enhanced user engagement.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "DOM Manipulation"],
      features: [
        "Dynamic content management",
        "Interactive user interface elements",
        "Responsive design for all devices",
        "Real-time application features",
        "Modern web development practices"
      ],
      icon: <Dumbbell className="w-8 h-8 text-green-600" />,
      category: "Web Development",
      status: "Completed",
      githubLink: "https://github.com/suryasanthosh1934"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my work spanning Machine Learning, Data Science, and Web Development. 
            Each project demonstrates practical application of cutting-edge technologies to solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            {project.category}
                          </Badge>
                          <Badge 
                            variant="secondary" 
                            className={`${
                              project.status === 'Live' ? 'bg-green-100 text-green-700' : 
                              'bg-purple-100 text-purple-700'
                            }`}
                          >
                            {project.status}
                          </Badge>
                          <span className="text-gray-600 text-sm">{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.longDescription}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-blue-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </Button>
                    {project.liveLink && (
                      <Button 
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">2</div>
            <p className="text-gray-600">ML Models Deployed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">3</div>
            <p className="text-gray-600">Domains Covered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Interested in collaborating on a project?</p>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
}