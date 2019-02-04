import React, { Component } from 'react';
import Head from '../components/head';
import './styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import {
  CinemagraphBox,
  PictureBox,
  AlbumFrontBox,
  AlbumBackBox,
} from '../components/Boxes';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
    // this.throttledHandleScroll = throttle(this.handleScroll, 0);
  }


  handleScroll = () => {
    const mainElement = document.getElementById('main-container');
    console.log('scroll called');


    const scrollThreshold = window.innerWidth < 450 ? (window.innerHeight * 2.5) : 300;
    console.log(scrollThreshold);

    if (mainElement.scrollTop > scrollThreshold && !this.state.scrolled) this.setState({ scrolled: true });
    else if (mainElement.scrollTop < scrollThreshold && this.state.scrolled) this.setState({ scrolled: false });
  }

  render() {
    return (
      <div className="site">
        <Head title="Home" />
        <div className={`content ${this.state.scrolled && 'scrolled-content'}`}>

          <Header scrolled={this.state.scrolled} />

          <div className="main-container" onScroll={this.handleScroll} id="main-container">


            <div className="row">
              <CinemagraphBox />
              <PictureBox />
            </div>

            <div className="row">
              <AlbumFrontBox />
              <AlbumBackBox />
            </div>

            <Footer />
          </div>


        </div>
      </div>
    );
  }
}


export default Home;
