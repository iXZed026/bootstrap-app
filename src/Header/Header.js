import React, { useState , useEffect} from 'react';
import "./Header.css";
import { IoRocketOutline } from "react-icons/io5";

export const Header = () => {

  const [scroll,setScroll] = useState(false);

  useEffect(()=>{

    const $ = window ;

    const scrollCounter = $.addEventListener("scroll",(e)=>{
      const roundedScrollCount = Math.round($.scrollY);
      if(roundedScrollCount >= 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }

    });

  },[])

  return (
    <nav className={scroll ? "navbar navbar-expand-md py-3 fixed-top bg-white shadow" : "navbar navbar-expand-md py-2"}>
      <div className="container" style={{width:scroll ? "75%" : ""}}>
        <a className='navbar-brand'><IoRocketOutline />Danyal</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-header">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav-header">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2"><a href="#home" className="nav-link" style={{color:scroll?"#6C55A3" : ""}}>خانه</a></li>
            <li className="nav-item px-2"><a href="#about" className="nav-link" style={{color:scroll?"#6C55A3" : ""}}>درباره</a></li>
            <li className="nav-item px-2"><a href="" className="nav-link" style={{color:scroll?"#6C55A3" : ""}}>خدمات</a></li>
            <li className="nav-item px-2"><a href="" className="nav-link" style={{color:scroll?"#6C55A3" : ""}}>رضایت نامه ها</a></li>
            <li className="nav-item px-2"><a href="#contact" className="nav-link" style={{color:scroll?"#6C55A3" : ""}}>تماس</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
