import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollVideoSection from './components/ScrollVideoSection';
import WhatIDo from './components/WhatIDo';
import About from './components/About';
import WorkWithMe from './components/WorkWithMe';
import MardShow from './components/MardShow';
import Ebooks from './components/Ebooks';
import Transformations from './components/Transformations';
import BrandCollab from './components/BrandCollab';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <Ebooks />
        <Transformations />
        <BrandCollab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
