import React from 'react';
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-6 py-3">
          <h5 className='mb-4'>BootStrap Theme</h5>
          <h1 className='fw-bold mb-4'>Danyal Theme</h1>
          <h6 className="fw-bold mb-4">Danyal Lotfi</h6>
          <p className="text-secoundry lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores in unde eos! Consectetur, aperiam eaque id alias porro dignissimos doloremque tenetur natus molestiae eum ut, doloribus minima, quisquam voluptatum sed! Nam quidem aperiam architecto nisi quis.</p>

        </div>
        <div className="col-6">
          <img className='mx-auto d-block' style={{ width: "80%" }} src="../../images/header-2.png" alt="" />
        </div>
      </div>
    </div >
  )
}
