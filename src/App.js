import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { AboutUs } from './AboutUs/AboutUs';

const App = () => {


  return (
    <>
      <div className="header-background">
        <div className='container-md' id='container'>
          <Header />
          <Home />
        </div>
      </div>
      <AboutUs />
    </>
  )
}

export default App