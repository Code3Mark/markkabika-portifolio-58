
import { Mail, Phone, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll just log the data and show an alert
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Based in Lusaka, Zambia, I'm available for freelance projects, consulting, 
                and full-time opportunities. Whether you need a simple website or a complex 
                software solution, I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="card-gradient border-portfolio-primary/20 hover:glow-effect transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-portfolio-primary/20 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-portfolio-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">+260 978 818 293</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-portfolio-accent/20 hover:glow-effect transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-portfolio-accent/20 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-portfolio-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">markkabika88@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-purple-500/20 hover:glow-effect transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-purple-500/20 p-3 rounded-full mr-4">
                      <User className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-300">Lusaka, Zambia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-portfolio-primary/10 to-portfolio-accent/10 p-6 rounded-lg border border-portfolio-primary/20">
              <h4 className="text-white font-semibold mb-2">Available for:</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Freelance Projects</li>
                <li>• Website Development</li>
                <li>• Software Consulting</li>
                <li>• Long-term Partnerships</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="card-gradient border-portfolio-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white text-center">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-portfolio-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-portfolio-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, and requirements..."
                      className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:border-portfolio-primary focus:outline-none resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-portfolio-primary to-portfolio-accent hover:from-portfolio-accent hover:to-portfolio-primary transition-all duration-300 glow-effect"
                  >
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                  <p className="text-gray-400 mb-4">Or reach out directly:</p>
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('tel:+260978818293')}
                      className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white"
                    >
                      Call Now
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('mailto:markkabika88@gmail.com')}
                      className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                    >
                      Send Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
