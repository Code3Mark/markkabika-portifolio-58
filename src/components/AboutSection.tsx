
import { User, Code, Briefcase, Palette } from 'lucide-react';
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
            Passionate about creating digital solutions and stunning visual designs that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-full"></div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Software Developer, Web Designer & Graphic Artist
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Mark Kabika, a dedicated Software Engineering student at Information and Communication University, 
              graduating in August 2025. Based in Lusaka, Zambia, I combine technical excellence with creative design 
              expertise to deliver comprehensive digital solutions.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My passion spans full-stack development, cybersecurity, and graphic design. I create not just functional 
              applications, but visually stunning experiences that engage users and represent brands professionally. 
              From custom software to eye-catching marketing materials, I bring ideas to life.
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
                  <h4 className="text-xl font-semibold text-white">Development</h4>
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
                  <Palette className="w-8 h-8 text-pink-400 mr-3" />
                  <h4 className="text-xl font-semibold text-white">Design & Creative</h4>
                </div>
                <p className="text-gray-300">
                  Graphic Design & Brand Identity<br />
                  Adobe Photoshop & Creative Suite<br />
                  <span className="text-pink-400">UI/UX & Digital Marketing</span>
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
                  <span className="text-purple-400">Professional Design & Development</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Professional Photos Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Professional <span className="gradient-text">Portfolio</span>
            </h3>
            <p className="text-gray-400">
              A glimpse into my professional work and creative projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/8ef8592c-454d-4cdc-b002-fe0c35120306.png" 
                alt="Mark Kabika - Professional Portrait" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold">Professional Portrait</h4>
                <p className="text-sm text-gray-300">Corporate & Business Photography</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/df67bee6-af6f-41c3-b0a4-232ee22e0c16.png" 
                alt="Mark Kabika - Creative Design" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold">Creative Expression</h4>
                <p className="text-sm text-gray-300">Fashion & Design Photography</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/4537dfd0-295a-45e6-b633-c7c816c77c60.png" 
                alt="Mark Kabika - Artistic Vision" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold">Artistic Vision</h4>
                <p className="text-sm text-gray-300">Creative Direction & Styling</p>
              </div>
            </div>
          </div>

          {/* Marketing Materials Showcase */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/2dbaf212-aea0-422f-9213-d28a077dea79.png" 
                alt="Professional Insurance Marketing Design" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold">Marketing Design</h4>
                <p className="text-sm text-gray-300">Professional Insurance Branding</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/d3c0cce4-f431-4649-aed7-0004d0a754a7.png" 
                alt="Services Marketing Material" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold">Service Promotion</h4>
                <p className="text-sm text-gray-300">Client Engagement Materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
