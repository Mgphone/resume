import { useEffect, useState } from "react";
import { Project } from "./types";
import data from "./data/data.json";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Mail, Phone, Linkedin, ArrowUp, FileText } from "lucide-react";
import "./index.css";

// Language color mapping
const getLanguageColor = (language: string): string => {
  const colorMap: { [key: string]: string } = {
    'JavaScript': 'bg-yellow-500 text-black',
    'TypeScript': 'bg-blue-600 text-white',
    'React': 'bg-cyan-500 text-black',
    'Node.js': 'bg-green-600 text-white',
    'HTML': 'bg-orange-500 text-white',
    'CSS': 'bg-blue-500 text-white',
    'MongoDB': 'bg-green-500 text-white',
    'Express': 'bg-gray-700 text-white',
    'JWT': 'bg-purple-600 text-white',
    'Stripe': 'bg-indigo-600 text-white',
    'Docker': 'bg-blue-700 text-white',
    'Tailwind CSS': 'bg-teal-500 text-white',
    'Vite': 'bg-purple-500 text-white',
    'API': 'bg-red-500 text-white',
    'DOM': 'bg-yellow-600 text-white',
    'Google Maps API': 'bg-red-600 text-white',
    'Cloudinary': 'bg-orange-600 text-white',
    'EJS': 'bg-green-700 text-white',
    'Axios': 'bg-purple-700 text-white',
    'Recharts': 'bg-pink-500 text-white',
    'Formik': 'bg-blue-800 text-white',
    'Mapbox': 'bg-black text-white',
    'React Hook Form': 'bg-rose-500 text-white',
    'Shadcn/UI': 'bg-slate-800 text-white'
  };
  return colorMap[language] || 'bg-gray-500 text-white';
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const projects: Project[] = data as Project[];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Show scroll to top button after scrolling 300px
      setShowScrollTop(scrollPosition > 300);
      
      // Update active section
      const sections = document.querySelectorAll("section, header");
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="welcome-section" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col justify-center items-center text-center relative">
        <div className="max-w-4xl px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Phone Myint Naing</h1>
          <h2 className="text-xl md:text-2xl mb-8 text-purple-200">"Passionate Self-Taught Web Developer"</h2>
          <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white/20 border-white text-white hover:bg-white hover:text-slate-900">
              <a
                href="https://drive.google.com/file/d/1QX5CYh1e4nAbWEJYUTTNDM6HILXhEDUu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                VIEW CV
              </a>
            </Button>
            <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
              <a href="#about">
                About Me!
              </a>
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="fixed top-6 right-6 z-50">
          <div className="hidden md:flex space-x-2 bg-black/20 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
            {[{id: 'welcome-section', label: 'Home'}, {id: 'about', label: 'About'}, {id: 'projects', label: 'Projects'}, {id: 'contact', label: 'Contact'}].map(nav => (
              <Button key={nav.id} asChild variant="ghost" size="sm" className={`text-white hover:bg-white/20 hover:text-white transition-all duration-200 ${activeSection === nav.id ? 'bg-white/30 text-white' : ''}`}>
                <a href={`#${nav.id}`}>
                  {nav.label}
                </a>
              </Button>
            ))}
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex flex-col space-y-1 bg-black/30 backdrop-blur-lg rounded-lg px-3 py-2 border border-white/20">
            {[{id: 'welcome-section', label: 'Home'}, {id: 'about', label: 'About'}, {id: 'projects', label: 'Projects'}, {id: 'contact', label: 'Contact'}].map(nav => (
              <Button key={nav.id} asChild variant="ghost" size="sm" className={`text-white hover:bg-white/20 hover:text-white transition-all duration-200 ${activeSection === nav.id ? 'bg-white/30 text-white' : ''} px-2 py-1`}>
                <a href={`#${nav.id}`} className="text-xs font-medium">
                  {nav.label}
                </a>
              </Button>
            ))}
          </div>
        </nav>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">About Me</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Hi there! I'm a self-taught programmer and a proud graduate of
              Northumbria University with a degree in Applied Computing.
            </p>
            <p>
              My passion lies in creating dynamic web experiences. I'm skilled in
              JavaScript, TypeScript, React, MongoDB, and Git, with additional
              expertise in Node.js, Docker, and Tailwind CSS.
            </p>
            <p>
              Let's bring your ideas to life and build exceptional web solutions
              together!
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .sort((a, b) => b.id - a.id)
              .map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
                      {project.language.map((lang, index) => (
                        <div key={index} className={`px-2 py-1 rounded-md text-xs font-medium text-center ${getLanguageColor(lang)}`}>
                          {lang}
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {project.project_details?.[0]?.description && (
                      <CardDescription className="mb-4">
                        {project.project_details[0].description.slice(0, 100)}...
                      </CardDescription>
                    )}
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <div className="flex gap-2 w-full">
                      <Button asChild size="sm" className="flex-1">
                        <a
                          href={project.weblink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                      {project.sourcecode && (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <a
                            href={project.sourcecode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          {project.project_details.map((detail, index) => (
                            <div key={index}>
                              <h4 className="font-semibold text-gray-900 mb-2">{detail.title}</h4>
                              <DialogDescription className="text-gray-600 leading-relaxed">
                                {detail.description}
                              </DialogDescription>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-xl mb-12 text-gray-300">Let's Work Together on Something Awesome!</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Button asChild variant="outline" size="lg" className="bg-blue-600 border-blue-600 text-white hover:bg-blue-700">
              <a
                href="https://www.linkedin.com/in/phonenaing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <a
                href="https://github.com/mgphone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-red-600 border-red-600 text-white hover:bg-red-700">
              <a
                href="mailto:pmn.blazer@gmail.com"
                className="flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-green-600 border-green-600 text-white hover:bg-green-700">
              <a
                href="tel:07738518821"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Me
              </a>
            </Button>
          </div>
          
        </div>
      </section>
      
      {/* Floating CV Button for Mobile */}
      <div className="sm:hidden fixed bottom-6 left-6 z-50">
        <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 shadow-lg rounded-full">
          <a
            href="https://drive.google.com/file/d/1QX5CYh1e4nAbWEJYUTTNDM6HILXhEDUu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            CV
          </a>
        </Button>
      </div>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={scrollToTop}
            size="lg"
            className="bg-slate-900 text-white hover:bg-slate-800 shadow-lg rounded-full p-3"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}