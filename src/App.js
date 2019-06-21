import React, { Component } from 'react';
import './App.css';
import About from "./components/About"
import Linkage from "./components/Linkage"
import Mavbar from "./components/Mavbar"
import Footer from "./components/Footer"
import ImageQuoteBlock from "./components/ImageQuoteBlock"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Mavbar />
        </header>
        <About />
        <ImageQuoteBlock />
        <Linkage />
        <Footer />
      </div>
    );
  }
}

export default App;
