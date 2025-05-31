
import { Code, Briefcase, Palette, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites, e-commerce solutions, and responsive web applications built with modern technologies.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'API Integration'],
      color: 'portfolio-primary'
    },
    {
      icon: Briefcase,
      title: 'Software Development',
      description: 'Custom desktop and web applications, system integration, and database management solutions.',
      features: ['Custom Applications', 'System Integration', 'Database Design', 'Performance Optimization'],
      color: 'portfolio-accent'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Professional graphic design services including branding, marketing materials, and visual identity creation.',
      features: ['Brand Identity Design', 'Marketing Materials', 'Adobe Photoshop Expertise', 'Visual Content Creation'],
      color: 'pink-500'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Cybersecurity assessments, network security, vulnerability testing, and IT infrastructure consulting.',
      features: ['Security Assessments', 'Network Monitoring', 'Risk Analysis', 'Compliance Auditing'],
      color: 'purple-500'
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-portfolio-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions and creative design services to help your business thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`card-gradient border-${service.color}/20 hover:glow-effect transition-all duration-500 group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gray-800/50 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-portfolio-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <div className={`w-2 h-2 rounded-full bg-${service.color} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={scrollToContact}
                    variant="outline"
                    className={`w-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white transition-all duration-300 mt-4`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-portfolio-primary/10 to-portfolio-accent/10 p-12 rounded-2xl border border-portfolio-primary/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need a stunning website, custom software, or eye-catching designs, 
            I'm here to bring your vision to life with professional quality and creative excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-portfolio-primary to-portfolio-accent hover:from-portfolio-accent hover:to-portfolio-primary transition-all duration-300 glow-effect"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-portfolio-dark transition-all duration-300"
              onClick={() => window.open('tel:+260978818293')}
            >
              Call Now: +260 978 818 293
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
