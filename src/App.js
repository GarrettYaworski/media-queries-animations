import logo from './logo.svg';
import NavBar from './components/NavBar';
import Animation from './components/Animation'
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      navLinks: ['bikes', 'rentals', 'accessories', 'contact us'],
      isMenuOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen})
  }

  render(){
    const { isMenuOpen, navLinks } = this.state;
    return (
      <div className="App">
      <NavBar 
        isMenuOpen={isMenuOpen}
        toggleMenu={this.toggleMenu}
        links={navLinks}
      />
      {/* <Animation /> */}
    </div>
  );
}
}

export default App;
