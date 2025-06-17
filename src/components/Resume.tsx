
import { useEffect, useRef, useState } from 'react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    // In a real implementation, this would trigger a PDF download
    console.log('Resume download initiated');
    // You would typically have a PDF file in your public folder or generate one dynamically
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be the actual path to your PDF
    link.download = 'Golla_Naveen_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" ref={sectionRef} className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resume
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className={`glass-effect rounded-xl p-8 text-center transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-3xl shadow-lg">
                  📄
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Professional Resume</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                  Download my comprehensive resume to learn more about my educational background, 
                  technical skills, project experiences, and professional achievements in AI and Machine Learning.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎓</div>
                  <h4 className="font-semibold text-primary mb-1">Education</h4>
                  <p className="text-sm text-muted-foreground">BTech AI/ML Details</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💼</div>
                  <h4 className="font-semibold text-primary mb-1">Experience</h4>
                  <p className="text-sm text-muted-foreground">Projects & Internships</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <h4 className="font-semibold text-primary mb-1">Achievements</h4>
                  <p className="text-sm text-muted-foreground">Certifications & Awards</p>
                </div>
              </div>

              <button 
                onClick={handleDownload}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (PDF)
              </button>

              <p className="text-sm text-muted-foreground mt-4">
                Last updated: January 2025
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className={`glass-effect rounded-lg p-6 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <h4 className="text-lg font-semibold mb-4 text-accent">Quick Overview</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    AI/ML Engineering Student
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Python & Java Developer
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Machine Learning Enthusiast
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Multiple Certifications
                  </li>
                </ul>
              </div>

              <div className={`glass-effect rounded-lg p-6 transition-all duration-1000 delay-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <h4 className="text-lg font-semibold mb-4 text-accent">Contact Info</h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    gollanaveen2020@gmail.com
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                    </svg>
                    LinkedIn Profile
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
