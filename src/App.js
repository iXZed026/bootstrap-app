import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { AboutUs } from './AboutUs/AboutUs';
import { Services } from './Services/Services';
import CounterProvider from './Provider/counterProvider';
import { Contact } from './Contact/Contact';

const App = () => {



  return (
    <>
      <CounterProvider>
        <div className="header-background">
          <div className='container' id='container'>
            <Header />
            <Home />
          </div>
        </div>
        <AboutUs />
        <Services />
        <Contact />
      </CounterProvider>
    </>
  )
}

export default App