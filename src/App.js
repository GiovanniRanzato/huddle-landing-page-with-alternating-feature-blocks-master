import React from 'react';
// LAYOUT
import Header from './Layout/Header/Header';
import HeroSection from './Layout/HeroSection/HeroSection';
import Contents from './Layout/Contents/Contents';
import Footer from './Layout/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <Contents />
      <Footer />
 
    </React.Fragment>
  );
}

export default App;
