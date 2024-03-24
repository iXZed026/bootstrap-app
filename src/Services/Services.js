import React, { useState } from 'react';
import "./Services.css";
import { ServicesBox } from './ServicesBox';
import { MdOutlineMedicalServices } from "react-icons/md";

export const Services = () => {

    const [servicesItem, setServicesItem] = useState([
        { id: Math.round(Math.random() * 100000), img: <MdOutlineMedicalServices style={{width:"40px",height:"40px",color:"#6C55A3"}}/>, title: "نرم‌افزار موبایل", caption: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: Math.round(Math.random() * 100000), img: <MdOutlineMedicalServices style={{width:"40px",height:"40px",color:"#6C55A3"}}/>, title: "توسعه نرم‌افزار", caption: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: Math.round(Math.random() * 100000), img: <MdOutlineMedicalServices style={{width:"40px",height:"40px",color:"#6C55A3"}}/>, title: "طراحی سایت", caption: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    ]);


    return (
        <div id="services" className="container py-5">
            <div id="services-header" className='py-5 text-center py-5'>
                <h3 className='mb-3'>خدمات</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
            </div>
            <div className="row">
                {
                    servicesItem.map((service, key) => (
                        <ServicesBox {...service} key={service.id} />
                    ))
                }
            </div>

        </div>
    )
}
