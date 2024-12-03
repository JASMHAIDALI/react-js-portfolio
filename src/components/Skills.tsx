import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Shopify Development',
    skills: ['Theme Development', 'App Development', 'Liquid Templates', 'Store Setup & Migration', 'Custom Functionality', 'API Integration']
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'TypeScript', 'TailwindCSS', 'Next.js', 'Redux', 'GraphQL']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Shopify CLI', 'Git', 'VS Code', 'Webpack', 'Figma', 'REST APIs']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-200">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;