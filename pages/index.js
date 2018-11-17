import React, { Component } from 'react';

import Head from '../components/head';

import './styles.css';


class Home extends Component {
  componentDidMount = () => {
    document.getElementById('site').addEventListener('scroll', this.handleScroll);
    // document.onscroll = this.handleScroll;
    // window.onScroll = this.handleScroll;
  }

  handleScroll = () => {
    const innerHeight = window.innerHeight;
    console.log('scrolling', innerHeight);
  }

  render() {
    return (
      <div className="site" id="site">
        <Head title="Home" />
        <div className="content">

          <div className="header-container">
            <div className="header" id="header">

              <img className="logo" src="/static/logo.png" alt=" " />
              <div className="buttons">

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
          </div>

          <div className="main-container">


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
