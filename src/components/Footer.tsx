
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-secondary py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold gradient-text mb-4">Mark Kabika</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Software Developer & Web Designer based in Lusaka, Zambia. 
              Creating innovative digital solutions for businesses worldwide.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300">
              <a 
                href="tel:+260978818293" 
                className="hover:text-portfolio-primary transition-colors duration-300"
              >
                +260 978 818 293
              </a>
              <a 
                href="mailto:markkabika88@gmail.com" 
                className="hover:text-portfolio-accent transition-colors duration-300"
              >
                markkabika88@gmail.com
              </a>
              <span className="text-gray-500">Lusaka, Zambia</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-portfolio-primary transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-portfolio-primary transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-portfolio-primary transition-colors duration-300"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-portfolio-primary transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-portfolio-primary transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {currentYear} Mark Kabika. All rights reserved. | 
              <span className="text-portfolio-primary"> Available for freelance projects</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
