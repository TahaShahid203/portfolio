import { useEffect, useRef, useState } from "react";

export default function Leadership() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Leadership & Activities
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Community involvement and leadership roles</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-8 card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-6">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Co-Lead</h3>
                <p className="text-blue-400 text-lg">Google Developer Society, UET Lahore</p>
                <p className="text-gray-400">2024 – Present</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Lead AI/ML initiatives and provide technical guidance for university developer community. 
              Responsible for organizing workshops, mentoring students, and promoting AI/ML adoption 
              among computer science students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
