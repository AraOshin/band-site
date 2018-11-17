import React, { Component } from 'react';

import Head from '../components/head';

import './styles.css';


class Home extends Component {
  state = {
    scrolled: false,
  }

  handleScroll = () => {
    const mainElement = document.getElementById('main-container');
    const innerHeight = window.innerHeight;
    console.log('scrolling', mainElement.scrollTop);

    if (mainElement.scrollTop > 300) this.setState({ scrolled: true });
    else this.setState({ scrolled: false });
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
              <div className="box" />
              <div className="box photos">
                <div className="photo-row">
                  <div className="photo">
                    <img src="http://placekitten.com/250/200" alt=" " />
                  </div>
                  <div className="photo">
                    <img src="http://placekitten.com/250/200" alt=" " />
                  </div>
                </div>
                <div className="photo-row">
                  <div className="photo">
                    <img src="http://placekitten.com/250/200" alt=" " />
                  </div>
                  <div className="photo">
                    <img src="http://placekitten.com/250/200" alt=" " />
                  </div>
                </div>
                <div className="photo-row">
                  <div className="photo">
                    <img src="http://placekitten.com/250/200" alt=" " />
                  </div>
                  <div className="photo">
                    <img src="http://placekitten.com/250/200" alt=" " />
                  </div>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="box">
                <div className="album">
                  <img src="http://placekitten.com/400/350" />
                </div>
              </div>
              <div className="box">
                <div className="album">
                  <img src="http://placekitten.com/400/350" />
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
