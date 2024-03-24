import React from 'react';
import "./ServicesBox.css";

export const ServicesBox = (props) => {

        const {img,title,caption} = props;

  return (
        
        <div className="col-md-4  py-1">
                <div id="box-img" className='mb-4 text-end'>
                    {img}
                </div>
                <h5 className='text-dark text-end mb-4'>{title}</h5>
                <div className='text-end'>
                <p className='text-muted lh-lg w-75 ms-auto'>{caption}</p>
                </div>
            </div>
        
  )
}
