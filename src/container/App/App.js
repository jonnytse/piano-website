import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../components/Home';
import About from '../../components/About';
import Events from '../../components/Events';
import Gallery from '../../components/Gallery';
import Media from '../../components/Media';
import Teaching from '../../components/Teaching';
import Contact from '../../components/Contact';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Header />
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/events' component={Events} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/media' component={Media} />
          <Route path='/teaching' component={Teaching} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
