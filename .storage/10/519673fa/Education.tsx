import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: "Vellore Institute of Technology",
      degree: "B.Tech Computer Science Engineering",
      duration: "2022 - 2026",
      grade: "CGPA: 8.97/10",
      description: "Specializing in Data Science, Machine Learning, and Software Engineering. Active in research projects and technical communities.",
      highlights: ["Data Structures & Algorithms", "Machine Learning", "Database Management", "Software Engineering"]
    },
    {
      institution: "LAKSHYA Institution",
      degree: "Secondary High School - CBSE Board",
      duration: "2020 - 2022",
      grade: "84.6%",
      description: "Achieved 98 percentile in JEE MAINS, demonstrating strong analytical and problem-solving skills.",
      highlights: ["JEE MAINS - 98 Percentile", "Mathematics", "Physics", "Chemistry"]
    },
    {
      institution: "Aditya High School",
      degree: "High School Education",
      duration: "2020",
      grade: "87%",
      description: "Strong foundation in science and mathematics with consistent academic performance.",
      highlights: ["Science Stream", "Mathematics", "Academic Excellence"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey has been focused on building a strong foundation in computer science, 
            mathematics, and data science principles.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{edu.institution}</h3>
                        <p className="text-lg text-blue-600 font-medium">{edu.degree}</p>
                      </div>
                      <div className="flex flex-col lg:items-end gap-1">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                          <Award size={16} />
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">8.97</div>
            <p className="text-gray-600">Current CGPA</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">98th</div>
            <p className="text-gray-600">JEE MAINS Percentile</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4+</div>
            <p className="text-gray-600">Years of Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}