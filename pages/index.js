import React, { Component } from 'react';

import Head from '../components/head';

import './styles.css';
import { throttle } from '../utils';


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


          <div className={`header ${this.state.scrolled && 'scrolled-header'}`}>

            <img className="logo" src="/static/logo.png" alt=" " />
            <div className={`buttons ${this.state.scrolled && 'scrolled-buttons'}`}>


              <a className="button" href="https://facebook.com/">
                <i className="fab fa-facebook-square" href="facebook.com" />
              </a>

              <a className="button" href="https://spotify.com/">
                <i className="fab fa-spotify" />
              </a>


              <a className="button" href="https://instagram.com/">
                <i className="fab fa-instagram" />
              </a>


            </div>
          </div>

          <div className="main-container" onScroll={this.handleScroll} id="main-container">


            <div className="row">
              <div className="box top-left-box">
                <img className="responsive-img" src="https://media.giphy.com/media/uWYjSbkIE2XIMIc7gh/giphy.gif" alt=" " />
              </div>
              <div className="box top-right-box photos ">
                <div className="photo-row">
                  <div className="photo">
                    <img className="responsive-img" src="http://placekitten.com/250/200" alt=" " />
                  </div>
                  <div className="photo">
                    <img className="responsive-img" src="http://placekitten.com/250/200" alt=" " />
                  </div>
                </div>
                <div className="photo-row">
                  <div className="photo">
                    <img className="responsive-img" src="http://placekitten.com/250/200" alt=" " />
                  </div>
                  <div className="photo">
                    <img className="responsive-img" src="http://placekitten.com/250/200" alt=" " />
                  </div>
                </div>
                <div className="photo-row">
                  <div className="photo">
                    <img className="responsive-img" src="http://placekitten.com/250/200" alt=" " />
                  </div>
                  <div className="photo">
                    <img className="responsive-img" src="http://placekitten.com/250/200" alt=" " />
                  </div>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="box bottom-left-box">
                <div className="album">
                  <img className="responsive-img" src="http://placekitten.com/400/350" alt=" " />
                </div>
              </div>
              <div className="box bottom-right-box">
                <div className="album">
                  <img className="responsive-img" src="http://placekitten.com/400/350" alt=" " />
                </div>
              </div>
            </div>

            <div className="footer"> Contact@BadEar.com</div>

          </div>


        </div>
      </div>
    );
  }
}


export default Home;
