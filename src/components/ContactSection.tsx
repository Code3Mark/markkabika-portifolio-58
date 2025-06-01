
import { Mail, Phone, User, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "260978818293";
    const message = "Hello Mark! I'm interested in your web development and design services. Can we discuss my project?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your project to life? Let's discuss your ideas and create something extraordinary together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 mb-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Based in Lusaka, Zambia, I'm available for freelance projects, consulting, 
                and full-time opportunities. Whether you need a simple website or a complex 
                software solution, I'm here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-gradient border-portfolio-primary/20 hover:glow-effect transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-portfolio-primary/20 p-3 rounded-full w-fit mx-auto mb-4">
                    <Phone className="w-6 h-6 text-portfolio-primary" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Phone</h4>
                  <p className="text-gray-300">+260 978 818 293</p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-portfolio-accent/20 hover:glow-effect transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-portfolio-accent/20 p-3 rounded-full w-fit mx-auto mb-4">
                    <Mail className="w-6 h-6 text-portfolio-accent" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Email</h4>
                  <p className="text-gray-300">markkabika88@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-purple-500/20 hover:glow-effect transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                    <User className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Location</h4>
                  <p className="text-gray-300">Lusaka, Zambia</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* WhatsApp CTA Section */}
          <div className="text-center space-y-8">
            <div className="bg-gradient-to-r from-green-500/10 to-green-400/10 p-8 rounded-lg border border-green-500/20">
              <MessageCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-300 text-lg mb-6">
                Get in touch via WhatsApp for instant communication and quick project discussions.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 glow-effect"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            <div className="bg-gradient-to-r from-portfolio-primary/10 to-portfolio-accent/10 p-6 rounded-lg border border-portfolio-primary/20">
              <h4 className="text-white font-semibold mb-4">Available for:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <ul className="space-y-2">
                  <li>• Freelance Projects</li>
                  <li>• Website Development</li>
                  <li>• Software Consulting</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Graphic Design</li>
                  <li>• Digital Marketing</li>
                  <li>• Long-term Partnerships</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('tel:+260978818293')}
                className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('mailto:markkabika88@gmail.com')}
                className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
