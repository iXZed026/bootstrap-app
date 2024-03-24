import React from 'react';
import "./Home.css";
import { GrLinkNext } from "react-icons/gr";

export const Home = () => {
  return (
    <div className="home" id='home'>
      <div className="row">
        <div className="col-md-6 py-3 mb-5">
          <h5 className='mb-4'>BootStrap Theme</h5>
          <h1 className='fw-bold mb-5'>Danyal Theme</h1>
          <h6 className="fw-bold mb-4">Danyal Lotfi</h6>
          <p className="text-muted mb-5 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores in unde eos! Consectetur, aperiam eaque id alias porro dignissimos doloremque tenetur natus molestiae eum ut, doloribus minima, quisquam voluptatum sed! Nam quidem aperiam architecto nisi quis.</p>
          <button className="btn btn-lg fs-6 fw-bold text-white rounded-1"> بیشتر بدانید <GrLinkNext /></button>
        </div>
          <div className="col-md-6 mb-5 overflow-hidden">
            <img className='mx-auto d-block' src="../../images/header-2.png" alt="" />
        </div>
      </div>
    </div >
  )
}
