import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollVideoSection from './components/ScrollVideoSection';
import WhatIDo from './components/WhatIDo';
import About from './components/About';
import WorkWithMe from './components/WorkWithMe';
import MardShow from './components/MardShow';
import Transformations from './components/Transformations';
import BrandCollab from './components/BrandCollab';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollVideoSection />
        <WhatIDo />
        <About />
        <WorkWithMe />
        <MardShow />
        <Transformations />
        <BrandCollab />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
