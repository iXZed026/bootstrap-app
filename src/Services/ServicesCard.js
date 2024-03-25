import React from 'react';
import "./ServicesCard.css";
import { ServicesCardBox } from './ServicesCardBox';
import { useItemsContex } from '../Provider/counterProvider';
import { useSetItemsContex } from '../Provider/counterProvider';

export const ServicesCard = () => {

    let items = useItemsContex();
    let setItems = useSetItemsContex();

  return (
    <div className='d-flex justify-content-center align-items-center gap-4' id="services-card">
        {
            items.map((item,key)=> <ServicesCardBox {...item} setItems={setItems} key={item.id}/> )
        }
    </div>
  )
}
