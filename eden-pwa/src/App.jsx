import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Strategy from './components/Strategy';
import Pillars from './components/Pillars';
import Roadmap from './components/Roadmap';
import Governance from './components/Governance';
import Ask from './components/Ask';

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-white overflow-x-hidden">
      <Hero />
      <Intro />
      <Strategy />
      <Pillars />
      <Roadmap />
      <Governance />
      <Ask />

      <footer className="py-8 text-center text-text/60 text-sm">
        <p>© 2026 Eden Regeneration Project. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
