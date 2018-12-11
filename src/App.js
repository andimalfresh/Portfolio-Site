import React, { Component } from 'react';
// import { Navbar } from 'react-bootstrap';
// import { Modal } from 'react-bootstrap';
import './App.css';
import About from "./components/About"
import Linkage from "./components/Linkage"
import Mavbar from "./components/Mavbar"
import Resume from "./components/Resume"
import Example from "./components/Example"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Mavbar />
        </header>
        <Example />
        <About />
        <Resume />
        <Linkage />
        <Footer />
      </div>
    );
  }
}

export default App;
