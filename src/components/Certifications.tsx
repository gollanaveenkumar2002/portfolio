
import { useEffect, useRef, useState } from 'react';

const Certifications = () => {
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

  const certifications = [
    {
      title: "Advanced AI Model Building",
      issuer: "IIIT Hyderabad (Swecha)",
      year: "2024",
      icon: "🧠",
      gradient: "from-purple-500 to-blue-600",
      description: "Advanced techniques in AI model development and optimization"
    },
    {
      title: "Cybersecurity",
      issuer: "Cisco",
      year: "2024",
      icon: "🔒",
      gradient: "from-red-500 to-orange-600",
      description: "Comprehensive cybersecurity principles and best practices"
    },
    {
      title: "Java Tools (Basic)",
      issuer: "AICTE",
      year: "2023",
      icon: "☕",
      gradient: "from-orange-500 to-yellow-600",
      description: "Fundamentals of Java programming and development tools"
    },
    {
      title: "OS Basics",
      issuer: "Cisco",
      year: "2023",
      icon: "💻",
      gradient: "from-green-500 to-teal-600",
      description: "Operating system fundamentals and system administration"
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="section-padding gradient-bg tech-pattern">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className={`glass-effect rounded-xl p-6 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                  {cert.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-primary">{cert.title}</h3>
                
                <p className="text-accent font-medium mb-1">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-3">{cert.year}</p>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${cert.gradient} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 150 + 500}ms`
                      }}
                    />
                  </div>
                  <p className="text-xs text-accent mt-2 font-medium">Certified</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="glass-effect rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-primary">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of continuous learning and staying updated with the latest technologies. 
                These certifications represent my commitment to professional growth and expertise development in 
                cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
