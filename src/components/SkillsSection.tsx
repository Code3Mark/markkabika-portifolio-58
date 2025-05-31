
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'PHP', level: 90, category: 'Backend' },
    { name: 'Java', level: 85, category: 'Backend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'MySQL', level: 85, category: 'Database' },
    { name: 'Cybersecurity', level: 75, category: 'Security' },
    { name: 'Linux/Bash', level: 80, category: 'Systems' },
    { name: 'Adobe Photoshop', level: 70, category: 'Design' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Security', 'Systems', 'Design'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-portfolio-primary to-portfolio-accent text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-portfolio-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-portfolio-accent font-bold">{skill.level}%</span>
              </div>
              
              <div className="skill-bar h-3">
                <div 
                  className={`skill-progress h-full ${isVisible ? 'animate-pulse' : ''}`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transition: 'width 1.5s ease-out'
                  }}
                ></div>
              </div>
              
              <div className="mt-2">
                <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'NIST Framework', 'ISO 27001', 'Network Security', 'Vulnerability Assessment',
              'Microsoft Office 365', 'Digital Marketing', 'UI/UX Design', 'System Integration',
              'API Development', 'E-commerce Solutions', 'Responsive Design', 'Git/GitHub'
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-gradient-to-r from-portfolio-primary/20 to-portfolio-accent/20 px-4 py-2 rounded-full border border-portfolio-primary/30 text-white hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
