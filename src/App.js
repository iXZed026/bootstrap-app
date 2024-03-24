import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { AboutUs } from './AboutUs/AboutUs';
import { Services } from './Services/Services';

const App = () => {


  return (
    <>
      <div className="header-background">
        <div className='container' id='container'>
          <Header />
          <Home />
        </div>
      </div>
      <AboutUs />
      <Services />
    </>
  )
}

export default App