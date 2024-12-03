import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-6 text-center text-purple-200">
        <p>© {new Date().getFullYear()} - Shopify Developer Portfolio</p>
      </footer>
    </div>
  );
}

export default App;