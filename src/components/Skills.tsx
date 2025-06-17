
import { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const techSkills = [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'C', level: 85, icon: '⚡' },
    { name: 'Java', level: 80, icon: '☕' },
    { name: 'HTML', level: 90, icon: '🌐' },
    { name: 'CSS', level: 85, icon: '🎨' },
    { name: 'MySQL', level: 80, icon: '🗄️' },
    { name: 'React', level: 75, icon: '⚛️' },
    { name: 'CCNA', level: 70, icon: '🌐' }
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'IDLE', icon: '🐍' },
    { name: 'Dev++', icon: '⚙️' },
    { name: 'Git', icon: '📂' },
    { name: 'Jupyter', icon: '📊' },
    { name: 'TensorFlow', icon: '🧠' }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding gradient-bg tech-pattern">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Programming Languages & Technologies */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Languages & Technologies</h3>
              <div className="space-y-6">
                {techSkills.map((skill, index) => (
                  <div key={skill.name} className="glass-effect rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Tools & Platforms</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {tools.map((tool, index) => (
                  <div 
                    key={tool.name}
                    className={`glass-effect rounded-lg p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl mb-3">{tool.icon}</div>
                    <div className="font-semibold">{tool.name}</div>
                  </div>
                ))}
              </div>

              {/* Additional Expertise */}
              <div className="glass-effect rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-accent">Areas of Expertise</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Machine Learning & Deep Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Natural Language Processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Data Analysis & Visualization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Web Development</span>
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

export default Skills;
