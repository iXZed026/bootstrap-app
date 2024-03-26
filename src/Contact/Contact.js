import React from 'react';
import "./Contact.css";

export const Contact = () => {
    return (
        <div id="contact-bg" className='bg-light d-flex align-items-center'>
            <div id="contact" className="carousel slide py-2" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button data-bs-target="#contact" data-bs-slide-to="0" className='active' style={{backgroundColor:"#6C55A3",width:"20px",height:"18px"}}></button>
                    <button data-bs-target="#contact" data-bs-slide-to="1" style={{backgroundColor:"purple",width:"20px",height:"18px"}}></button>
                    <button data-bs-target="#contact" data-bs-slide-to="2" style={{backgroundColor:"purple",width:"20px",height:"18px"}}></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../../images/danyal.png" alt="" className="d-block mx-auto rounded-circle" style={{ width: "130px", height: "130px" ,marginBottom:"26%",backgroundColor:"#6C55A3"}} />
                        <div class="carousel-caption">
                            <p className='text-muted'>برنامه نویس فرانت اند با یک سال سابقه و دارای روحیه کار تیمی و انواع پروژه در گیت هاب. به مدت 3 ماه کاراموز شرکت کارگزاری نو اندیشان بوده ام</p>
                            <h4 className='text-muted'><span style={{color:"#6C55A3"}}>Danyal Lotfi</span> Frontend Developer</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../../images/client2.jpg" alt="" className="d-block mx-auto rounded-circle" style={{ width: "130px", height: "130px" ,marginBottom:"26%",backgroundColor:"#6C55A3"}} />
                        <div class="carousel-caption">
                            <p className='text-muted'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet."</p>
                            <h4 className='text-muted'>KIT JOHNSON, Account Analyst</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../../images/client3.jpg" alt="" className="d-block mx-auto rounded-circle" style={{ width: "130px", height: "130px" ,marginBottom:"26%",backgroundColor:"#6C55A3"}} />
                        <div class="carousel-caption">
                            <p className='text-muted'>"Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum."</p>
                            <h4 className='text-muted'>CHRIS SMITH, CEO, ProTools</h4>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#contact" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-secondary p-4 rounded-circle"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#contact" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-secondary p-4 rounded-circle"></span>
                </button>
            </div>
        </div>
    )
}
