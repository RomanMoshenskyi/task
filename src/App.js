import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Education from './components/Education';
import Family from './components/Family';
import Footer from './components/Footer';
import Menu from './components/Menu';

class App extends React.Component {
  render() {
    return (
      <>
      <div><Menu /></div>
        <div><Hero /></div>
        <div><About /></div>
        <div><Family /></div>
        <div><Hobbies /></div>
        <div><Education /></div>
        <div><Footer /></div>
      </>
    );
  }
}

export default App;