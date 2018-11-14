import React from 'react';

import Head from '../components/head';


import './styles.css';

const Home = () => (
  <div className="site">
    <Head title="Home" />
    <div className="content">
      <div className="header" />
      <div className="row">
        <div className="box">
          <span>one</span>
        </div>
        <div className="box photos">
          <div className="photo-row">
            <div className="photo">
              <img src="http://placekitten.com/g/200/200" />
            </div>
            <div className="photo">
              <img src="http://placekitten.com/g/200/200" />
            </div>
          </div>
          <div className="photo-row">
            <div className="photo">
              <img src="http://placekitten.com/g/200/200" />
            </div>
            <div className="photo">
              <img src="http://placekitten.com/g/200/200" />
            </div>
          </div>
          <div className="photo-row">
            <div className="photo">
              <img src="http://placekitten.com/g/200/200" />
            </div>
            <div className="photo">
              <img src="http://placekitten.com/g/200/200" />
            </div>
          </div>

        </div>
      </div>
      <div className="row">
        <div className="box">
          <span>one</span>
        </div>
        <div className="box">
          <span>two</span>
        </div>
      </div>
      <div className="footer" />
    </div>
  </div>

);

export default Home;
