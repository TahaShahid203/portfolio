import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "MiniMumin",
      category: "Educational Platform",
      description: "Islamic Learning App with ASR/TTS implementation using Whisper models for voice-based chatbot interactions and Ayat recitation assessment.",
      technologies: ["Next.js", "HuggingFace", "Whisper ASR", "Python"],
      icon: "fas fa-mosque",
      iconColor: "from-green-400 to-blue-500",
      categoryColor: "text-green-400",
      link: "https://mini-mumin.vercel.app/",
      linkType: "demo"
    },
    {
      title: "Instagram DM Automation",
      category: "Social Media SaaS",
      description: "Automation platform for Instagram with keyword-triggered replies and AI chatbot integration for e-commerce sellers with Stripe subscription model.",
      technologies: ["Next.js", "TypeScript", "Instagram API", "MongoDB", "Stripe"],
      icon: "fab fa-instagram",
      iconColor: "from-pink-400 to-purple-500",
      categoryColor: "text-pink-400",
      link: "https://github.com/TahaShahid203/Instagram-DM-Automations",
      linkType: "github"
    },
    {
      title: "Stack Overflow Clone",
      category: "Q&A Platform",
      description: "Comprehensive Q&A platform with user authentication, code syntax highlighting, and reputation system with secure API and data validation.",
      technologies: ["Next.js", "MongoDB", "TypeScript", "Zod", "Tailwind"],
      icon: "fab fa-stack-overflow",
      iconColor: "from-orange-400 to-red-500",
      categoryColor: "text-orange-400",
      link: "https://github.com/TahaShahid203/stackoverflow-clone-with-nextjs",
      linkType: "github"
    },
    {
      title: "Notion Clone",
      category: "Real-time Platform",
      description: "Real-time collaborative document editor with multi-user cursor tracking, workspace management with document versioning and access control.",
      technologies: ["Next.js", "Firebase", "TypeScript", "Liveblocks", "Slate.js"],
      icon: "fas fa-sticky-note",
      iconColor: "from-gray-400 to-gray-600",
      categoryColor: "text-gray-400",
      link: "https://github.com/TahaShahid203/SEProject",
      linkType: "github"
    },
    {
      title: "Threads App Clone",
      category: "Social Media Platform",
      description: "Social networking app with infinite nested comment threading, user profiles, following system, and optimized database queries with image upload.",
      technologies: ["Next.js", "MongoDB", "TypeScript", "React Hook Form", "Cloudinary"],
      icon: "fas fa-comments",
      iconColor: "from-blue-400 to-cyan-500",
      categoryColor: "text-blue-400",
      link: "https://github.com/TahaShahid203/Threads-App-Clone",
      linkType: "github"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      "Next.js": "bg-blue-500/20 text-blue-400",
      "HuggingFace": "bg-purple-500/20 text-purple-400",
      "Whisper ASR": "bg-pink-500/20 text-pink-400",
      "Python": "bg-yellow-500/20 text-yellow-400",
      "TypeScript": "bg-green-500/20 text-green-400",
      "Instagram API": "bg-purple-500/20 text-purple-400",
      "MongoDB": "bg-yellow-500/20 text-yellow-400",
      "Stripe": "bg-red-500/20 text-red-400",
      "Zod": "bg-pink-500/20 text-pink-400",
      "Tailwind": "bg-cyan-500/20 text-cyan-400",
      "Firebase": "bg-orange-500/20 text-orange-400",
      "Liveblocks": "bg-purple-500/20 text-purple-400",
      "Slate.js": "bg-indigo-500/20 text-indigo-400",
      "React Hook Form": "bg-red-500/20 text-red-400",
      "Cloudinary": "bg-yellow-500/20 text-yellow-400"
    };
    return colors[tech] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">A showcase of my recent development work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${project.iconColor} rounded-lg flex items-center justify-center mr-4`}>
                  <i className={`${project.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className={`${project.categoryColor} text-sm`}>{project.category}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`px-3 py-1 ${getTechColor(tech)} rounded-full text-xs`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <i className={`${project.linkType === 'demo' ? 'fas fa-external-link-alt' : 'fab fa-github'} mr-2`}></i>
                  {project.linkType === 'demo' ? 'Live Demo' : 'GitHub'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
