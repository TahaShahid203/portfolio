import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Leadership />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">
              © 2025 Taha Shahid. All rights reserved. Built with passion and React.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
