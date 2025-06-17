
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
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

  const projects = [
    {
      title: "Customer Churn Prediction using ML",
      description: "Built a comprehensive machine learning model to predict customer churn using decision trees and logistic regression. Analyzed telecom customer data to identify patterns and key factors influencing customer retention.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Decision Trees", "Logistic Regression"],
      features: [
        "Advanced data preprocessing and feature engineering",
        "Multiple ML algorithms comparison",
        "ROC curve analysis and model evaluation",
        "Interactive dashboard for predictions"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "AI-Based Resume Screening Bot",
      description: "Developed an intelligent NLP-powered application that automatically extracts skills from resumes, matches them with job profiles, and ranks candidates using cosine similarity algorithms.",
      technologies: ["Python", "NLP", "TensorFlow", "Cosine Similarity", "NLTK"],
      features: [
        "Automated skill extraction from PDF resumes",
        "Job profile matching algorithm",
        "Ranking system based on relevance",
        "Real-time processing capabilities"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Facial Emotion Recognition App",
      description: "Created a real-time facial emotion recognition system using Convolutional Neural Networks (CNN) and OpenCV. The application can detect and classify human emotions with high accuracy.",
      technologies: ["Python", "OpenCV", "CNN", "TensorFlow", "Computer Vision"],
      features: [
        "Real-time emotion detection",
        "Multi-emotion classification",
        "Live camera integration",
        "High accuracy CNN model"
      ],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`project-card transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} rounded-t-xl mb-6`}></div>
                
                <h3 className="text-xl font-bold mb-4 text-primary">{project.title}</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-accent">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-accent">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <button className="w-full py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work? Check out my GitHub for additional projects and contributions.
            </p>
            <a 
              href="https://github.com/gollanaveen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
