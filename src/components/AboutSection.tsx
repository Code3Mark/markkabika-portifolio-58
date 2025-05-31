
import { User, Code, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-full"></div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Software Engineering Student & Professional Developer
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Mark Kabika, a dedicated Software Engineering student at Information and Communication University, 
              graduating in August 2025. Based in Lusaka, Zambia, I combine academic excellence with real-world 
              development experience to create innovative digital solutions.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My passion lies in full-stack development, cybersecurity, and creating secure, scalable applications. 
              I believe in writing clean, efficient code and staying current with the latest technologies to deliver 
              exceptional results for my clients.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-gray-800/50">
                <div className="text-2xl font-bold text-portfolio-primary">2025</div>
                <div className="text-gray-400">Graduation Year</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50">
                <div className="text-2xl font-bold text-portfolio-accent">Zambia</div>
                <div className="text-gray-400">Based in Lusaka</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="card-gradient border-portfolio-primary/20 hover:glow-effect transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-8 h-8 text-portfolio-primary mr-3" />
                  <h4 className="text-xl font-semibold text-white">Education</h4>
                </div>
                <p className="text-gray-300">
                  Bachelor's in ICT Software Engineering<br />
                  Information and Communication University<br />
                  <span className="text-portfolio-accent">2020 - 2025</span>
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-portfolio-primary/20 hover:glow-effect transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-portfolio-accent mr-3" />
                  <h4 className="text-xl font-semibold text-white">Specialization</h4>
                </div>
                <p className="text-gray-300">
                  Full-stack Web Development<br />
                  Cybersecurity & Network Security<br />
                  <span className="text-portfolio-primary">Custom Software Solutions</span>
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-portfolio-primary/20 hover:glow-effect transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
                  <h4 className="text-xl font-semibold text-white">Experience</h4>
                </div>
                <p className="text-gray-300">
                  IT Support & Data Systems Management<br />
                  ZRDC Innovation Projects<br />
                  <span className="text-purple-400">Freelance Development</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
