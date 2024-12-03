import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Luxury Fashion Store',
    description: 'Custom Shopify theme with advanced filtering and AR try-on feature',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'AR'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Artisan Marketplace',
    description: 'Multi-vendor Shopify platform with custom dashboard',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600',
    tags: ['Shopify Plus', 'React', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Beauty Products Store',
    description: 'Subscription-based Shopify store with product quiz',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600',
    tags: ['Shopify', 'ReCharge', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-bl from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-purple-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-800/50 text-purple-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveUrl}
                    className="text-purple-300 hover:text-white flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-purple-300 hover:text-white flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;