import React from 'react';
import "./AboutUs.css";
import { GrLinkNext } from "react-icons/gr";


export const AboutUs = () => {
    return (
        <div id='about' className="bg-light py-5">
            <div className="container">
                <div id="about-header" className='py-5 text-center'>
                    <h3 className='mx-auto fw-bold mb-3'>درباره ما</h3>
                    <p className="text-muted mx-auto">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img className='mx-auto d-block' src="../../images/header-about.png" alt="" />
                    </div>
                    <div className="col-md-6 mb-4 py-4">
                        <h3 className='mb-4'>A perfect bootstrap theme for all types of business.</h3>
                        <p className='text-muted mb-4 lh-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                        <p className="text-muted mb-4 lh-lg">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <button className='btn fw-bold'> بیشتر بدانید <GrLinkNext /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
