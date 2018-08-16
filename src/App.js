import React, {Component} from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav/>
        <Header/>
        <div className="w3-white w3-large">
          <About/>
          <Menu/>
          <Location />
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
