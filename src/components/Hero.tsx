import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Shopify Developer
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl">
            Transforming e-commerce visions into reality with custom Shopify solutions.
            Specialized in creating seamless shopping experiences and scalable online stores.
          </p>
          
          <div className="flex space-x-6 mb-12">
            <a href="https://github.com" className="text-purple-300 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" className="text-purple-300 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:contact@example.com" className="text-purple-300 hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <a
            href="#projects"
            className="animate-bounce text-white flex items-center gap-2"
          >
            View My Work <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;