import { useEffect, useRef, useState } from "react";

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My educational journey and achievements</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* University Education */}
          <div className={`relative pl-8 pb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="absolute left-2 top-4 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 h-full"></div>
            
            <div className="bg-gray-800 rounded-xl p-6 ml-8 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">BS Computer Science</h3>
                <span className="text-blue-400 font-semibold">2022-2026</span>
              </div>
              <p className="text-lg text-gray-300 mb-3">University of Engineering And Technology Lahore</p>
              <p className="text-gray-400 mb-4">
                Coursework: OOP, Data Structures, AI, Software Engineering, Database Management
              </p>
            </div>
          </div>
          
          {/* College Education */}
          <div className={`relative pl-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{transitionDelay: '0.2s'}}>
            <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="bg-gray-800 rounded-xl p-6 ml-8 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">FSc</h3>
                <span className="text-purple-400 font-semibold">2020-2022</span>
              </div>
              <p className="text-lg text-gray-300 mb-3">Government College University Lahore</p>
              <p className="text-gray-400">
                Extracurricular Activities: President for Dr. Abdul Salam Society for Mathematics, 
                responsible for managing trips and teaching Maths to juniors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
