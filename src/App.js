import React, { Component } from 'react';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeSection />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
