import React, { createContext, useContext, useState } from 'react';
import { MdOutlineMedicalServices } from "react-icons/md";
import { SiFormstack } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { BsEmojiGrin } from "react-icons/bs";



let ItemsProvider = createContext();
let SetItemsProvider = createContext();


const CounterProvider = ({children}) => {

    const [items, setItems] = useState([
        { id: 1, img: <MdOutlineMedicalServices style={{width:"50px",height:"50px",color:"white"}} />, view: 80, title: "وبسات ها" },
        { id: 2, img: <SiFormstack style={{width:"50px",height:"50px",color:"white"}} />, view: 32, title: "برنامه‌ها" },
        { id: 3, img: <FaMobileAlt style={{width:"50px",height:"50px",color:"white"}} />, view: 16, title: "اپ‌ های موبایل" },
        { id: 4, img: <BsEmojiGrin style={{width:"50px",height:"50px",color:"white"}} />, view: 123, title: "مشتری ها" },
    ]);

    return (
        <ItemsProvider.Provider value={items}>
            <SetItemsProvider.Provider value={setItems}>
            {children}
            </SetItemsProvider.Provider>
        </ItemsProvider.Provider>
    )
}


function useItemsContex(){
    return useContext(ItemsProvider);
}

function useSetItemsContex(){
    return useContext(ItemsProvider);
}

export {useItemsContex,useSetItemsContex}
export default CounterProvider;
