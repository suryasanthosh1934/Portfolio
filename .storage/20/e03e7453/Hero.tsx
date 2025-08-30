import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Vuta_Surya_Naga_Siva_Santhosh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Profile Image */}
          <div className="lg:order-2 flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                <img 
                  src="/assets/suryasanthosh1934.jpg" 
                  alt="Vuta Surya Naga Siva Santhosh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-blue-600 font-medium text-lg animate-fade-in">Hello, I'm</p>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 animate-fade-in delay-200">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Vuta Surya Naga Siva Santhosh
                  </span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-700 font-light animate-fade-in delay-400">
                  Data Scientist & ML Engineer
                </h2>
              </div>

              <p className="text-lg text-gray-600 max-w-2xl animate-fade-in delay-600">
                Passionate about transforming data into insights. Specialized in Machine Learning, 
                Data Science, and building intelligent solutions that drive real-world impact.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in delay-800">
                <a href="tel:+917993562356" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <Phone size={18} className="text-blue-600" />
                  <span>+91 7993562356</span>
                </a>
                <a href="mailto:vutasuryanagasivasanthosh@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <Mail size={18} className="text-blue-600" />
                  <span>vutasuryanagasivasanthosh@gmail.com</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in delay-1000">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  onClick={downloadResume}
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                >
                  <Download size={18} className="mr-2" />
                  Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start animate-fade-in delay-1200">
                <a 
                  href="http://www.linkedin.com/in/vutasuryanagasivasanthosh19" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-gray-200"
                >
                  <Linkedin size={24} className="text-blue-600 hover:text-white" />
                </a>
                <a 
                  href="https://github.com/suryasanthosh1934" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-gray-200"
                >
                  <Github size={24} className="text-gray-800 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}