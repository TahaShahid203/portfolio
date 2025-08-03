import { useEffect, useRef, useState } from "react";

export default function Certifications() {
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

  const certifications = [
    {
      title: "JavaScript Algorithms & Data Structures",
      provider: "freeCodeCamp",
      icon: "fab fa-free-code-camp",
      iconColor: "from-green-400 to-blue-500",
      providerColor: "text-green-400"
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      icon: "fab fa-free-code-camp",
      iconColor: "from-purple-400 to-pink-500",
      providerColor: "text-purple-400"
    },
    {
      title: "JavaScript (Basic)",
      provider: "HackerRank",
      icon: "fab fa-hackerrank",
      iconColor: "from-green-500 to-teal-500",
      providerColor: "text-green-400"
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Professional achievements and credentials</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className={`bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.iconColor} rounded-lg flex items-center justify-center mr-4`}>
                  <i className={`${cert.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <p className={`${cert.providerColor} text-sm`}>{cert.provider}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  <i className="fas fa-certificate mr-2"></i>Certificate
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
