
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-portfolio-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-portfolio-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Mark Kabika</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Software Developer, Web Designer & Graphic Artist
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Based in Lusaka, Zambia, I create innovative web solutions, custom software applications, and stunning visual designs. 
            Specializing in full-stack development, cybersecurity, and professional graphic design services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-gradient-to-r from-portfolio-primary to-portfolio-accent hover:from-portfolio-accent hover:to-portfolio-primary transition-all duration-300 glow-effect text-lg px-8 py-3"
            >
              Hire Me Now
            </Button>
            
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              size="lg"
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-300 text-lg px-8 py-3"
            >
              View My Work
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm">Designs Created</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-portfolio-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
