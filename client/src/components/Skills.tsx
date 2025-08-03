import { useEffect, useRef, useState } from "react";

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      iconColor: "text-blue-400",
      skills: [
        { name: "JavaScript", gradient: "from-yellow-500 to-orange-500" },
        { name: "TypeScript", gradient: "from-blue-500 to-blue-600" },
        { name: "Python", gradient: "from-green-500 to-blue-500" },
        { name: "C++", gradient: "from-blue-600 to-purple-600" },
        { name: "SQL", gradient: "from-orange-500 to-red-500" }
      ]
    },
    {
      title: "Frameworks",
      icon: "fas fa-layer-group",
      iconColor: "text-purple-400",
      skills: [
        { name: "Next.js", gradient: "from-black to-gray-800" },
        { name: "React", gradient: "from-cyan-400 to-blue-500" },
        { name: "Node.js", gradient: "from-green-600 to-green-700" },
        { name: "Express.js", gradient: "from-gray-700 to-gray-800" }
      ]
    },
    {
      title: "AI/ML",
      icon: "fas fa-brain",
      iconColor: "text-pink-400",
      skills: [
        { name: "HuggingFace Transformers", gradient: "from-yellow-400 to-orange-500" },
        { name: "Whisper ASR", gradient: "from-green-400 to-cyan-500" },
        { name: "OpenAI API", gradient: "from-purple-500 to-pink-500" },
        { name: "TTS/Speech Processing", gradient: "from-blue-500 to-purple-500" }
      ]
    },
    {
      title: "APIs & Integrations",
      icon: "fas fa-plug",
      iconColor: "text-green-400",
      skills: [
        { name: "Instagram Graph API", gradient: "from-pink-500 to-purple-600" },
        { name: "Meta Webhooks", gradient: "from-blue-600 to-purple-600" },
        { name: "Stripe", gradient: "from-purple-500 to-indigo-600" },
        { name: "Liveblocks", gradient: "from-red-500 to-pink-500" },
        { name: "Cloudinary", gradient: "from-blue-400 to-cyan-500" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: "fas fa-database",
      iconColor: "text-cyan-400",
      skills: [
        { name: "MongoDB", gradient: "from-green-600 to-green-700" },
        { name: "PostgreSQL", gradient: "from-blue-600 to-indigo-600" },
        { name: "Firebase", gradient: "from-orange-500 to-yellow-500" },
        { name: "AWS", gradient: "from-orange-600 to-yellow-600" },
        { name: "Docker", gradient: "from-blue-500 to-cyan-500" }
      ]
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      iconColor: "text-amber-400",
      skills: [
        { name: "Git/GitHub", gradient: "from-gray-700 to-gray-800" },
        { name: "Zod", gradient: "from-blue-500 to-purple-500" },
        { name: "Tailwind CSS", gradient: "from-cyan-400 to-blue-500" },
        { name: "Socket.io", gradient: "from-green-500 to-blue-500" },
        { name: "Prisma ORM", gradient: "from-indigo-500 to-purple-500" },
        { name: "React Hook Form", gradient: "from-pink-500 to-red-500" }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${categoryIndex % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
              }`}
              style={{transitionDelay: `${categoryIndex * 0.1}s`}}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <i className={`${category.icon} ${category.iconColor} mr-3`}></i>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill.name}
                    className={`skill-badge px-4 py-2 bg-gradient-to-r ${skill.gradient} text-white rounded-full font-semibold`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
