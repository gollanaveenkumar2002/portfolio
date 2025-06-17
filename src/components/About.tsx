
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  const skills = [
    'Adaptability', 'Critical Thinking', 'Interpersonal Skills', 
    'Problem Solving', 'Team Collaboration', 'Communication'
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  Welcome to my digital space! I'm a passionate AI Explorer and Tech Enthusiast with a deep fascination for solving real-world problems through innovative technology and code.
                </p>
                
                <p className="text-muted-foreground">
                  Currently pursuing my BTech in Artificial Intelligence and Machine Learning at Sphoorthy Engineering College, I'm constantly exploring the endless possibilities that AI and ML offer to transform industries and improve lives.
                </p>

                <p className="text-muted-foreground">
                  My journey in technology is driven by curiosity and a desire to create meaningful solutions. From developing predictive models to building intelligent applications, I love turning complex problems into elegant, working solutions.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">BTech in AI & Machine Learning</h4>
                  <p className="text-primary font-medium">Sphoorthy Engineering College</p>
                  <p className="text-muted-foreground mt-2">Specializing in cutting-edge AI technologies and practical applications</p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold mb-8 text-primary">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className={`skill-badge transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-6">
                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 text-accent">Mission</h4>
                  <p className="text-muted-foreground">
                    To leverage AI and machine learning technologies to create innovative solutions that make a positive impact on society and drive technological advancement.
                  </p>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 text-accent">Vision</h4>
                  <p className="text-muted-foreground">
                    To become a leading AI researcher and developer, contributing to breakthrough technologies that shape the future of human-computer interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
